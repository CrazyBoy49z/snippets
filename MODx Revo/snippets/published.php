<?php
/*
[[!published? &docId=`[[+id]]` &date=`[[+publishedon`]] &isString=`1`]]
*/

if (isset($isString) && $isString == 1) {
$date = strtotime($date);
}
//$docId = (isset($docId)) ? $docId : $modx->resource->get('id');
//$page = $modx->getObject('modResource', $docId);
//$timestamp = strtotime($page->get('publishedon'));
$machinedate = strftime('%Y-%d-%m', $date);
$humandate = strftime('%d.%m.%Y', $date);

    //$placeholders = array();
    //$placeholders['machinedate'] = $machinedate;
    //$placeholders['humandate'] =   $humandate;
    //$modx->setPlaceholders($placeholders);
    //$output .= $modx->getChunk($tpl,$humandate);
    $output .= '<p class="pub">Veröffentlicht am <time itemprop="datePublished" datetime="' . $machinedate . '">' . $humandate .  '</time>';
    return $output;