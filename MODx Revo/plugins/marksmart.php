<?php

// markSmart
// OnWebPagePrerender
// /core/extras hochladen

$event_name = $modx->event->name;
	switch ($event_name) {
	    case "OnWebPagePrerender":
	        include_once($modx->getOption('base_path').'/core/extra/markdown.php');
	        $doc = $modx->resource->_output;
	        // Smartypants einbinden
	        include_once($modx->getOption('base_path').'/core/extra/smartypants_german.php');
	        preg_match_all("|<markdown>(.*)</markdown>|Uis",$doc,$matches);
	        for ($i=0;$i<count($matches[0]);$i++) {
	            $tag = $matches[0][$i];
	            $text = Markdown($matches[1][$i]);
	            // Smartypants auf Blöcke anwenden
	            $text = SmartyPants($text);
	            $doc = str_replace($tag,$text,$doc);
	        }
	        $modx->resource->_output = $doc;
	    break;
	    default:    // stop here
	        return;
	    break;
	}
	return $markdown;