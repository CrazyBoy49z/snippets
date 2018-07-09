# Revo installieren

- Server und Datenbank einrichten
- TSL aktivieren
- Upload
- ht.access umbennen in root und /core
- domain.de/setup aufrufen
- "Sende X-Powered-By-Header" bei der Installation deaktivieren
- ?? in /setup/index.php @ini_set('date.timezone', 'Europe/Berlin');
- hochladen
- Dateirechte auf 777 für /assets und /core
- domain.de/install aufrufen
- Prozedur abarbeiten. "Sende X-Powered-By-Header" deaktivieren
- ht.access -> .htaccess in root und core
- Rechte herabsetzen /config/config.inc.php und config.dore.php  
- Anmelden

## Im Manager

### Packages installieren
	
- AutoTemplate: Vorauswahl des Templates anhand des Nachbarn
- filetranslit: transliterates names of files with non-latin characters uploaded via MODX file manager
- getCache
- getResourceField
- If
- pdoTools
- pThumb statt phpThumbOf
- pThumb
- QuickCrumbs
- translit **Ersetzen: components/translit/model/…/german.php**
- Wayfinder
- Inherit Template

### händisch

- Plugin: marksmart Ereignis OnWebPagePrerender

	
### Systemeinstellungen	 

- friendly_alias_translit = german
- automatic_alias = ja
- friendly_alias_lowercase_only = ja
- friendly_alias_strip_element_tags = ja
- friendly_urls = ja
- use_alias_path = ja
- manager_html5_cache = ja ??
- resource_tree_node_name_fallback = pagetitle
- manager_week_start = 1
- site_name = Seitenname
- locale = de_DE
- Use_editor = nein
- manager_language = de
- manager_date_format = d.m.Y
- manager_time_format = H:i
- richtext_default = Nein
- tvs_below_content = Ja
- default_duplicate_publish_option = unpublish
- hidemenu_default = Ja
- cache_db = Ja
- allow_multiple_emails = Nein
- upload_files = pdf,jpg,jpeg,png,svg,svgz,gif
- upload_flash = 
- upload_images = jpg,jpeg,png,svg,gif
- upload_media =
- send_poweredby_header = Nein
- /core/locale.php installieren, aufrufen und locale in Systemeinstellungen korrekt eintragen

 
- pthumb.ptcache_location = nach Belieben z.B. assets/images
- phpthumb_cache_maxage = 100
- pthumb.use_ptcache = Ja


- Inhalt -> Inhalstypen -> .html löschen

### Templates

* Standard

### TVs

* vorschaubild

### Snippets
	
* incCSS
* published

### Chunk

* head
* header
* nav1
* pdoTeaser
* tplTeaser
* pdoNewsTeaserArchiv
* tplNewsTeaserArchiv

### Plugins 

* markSmart - /core/extras hochladen

# ManagerAnapssung

## für Standard

dekativeren:

* uri_override
* link_attributes

* modx-page-settings-left
* modx-page-settings-right-box-left
* modx-page-settings-right-box-right
* modx-panel-resource-tv
* modx-resource-access-permissions


Template-Auswahl beschränken

https://forums.modx.com/thread/?thread=45299&page=2

------

Chunk: scripts

	<script src="/client/scripts/jquery.min.js"></script>
	<script src="/client/scripts/2.dev.js"></script>

Chunk: article

<h2>[[*longtitle]]</h2><markdown>[[!published?]][[!*galerie:isnot=`0`:then=`[[!$galerieAlbum?galerieName=`[[*galerie]]`]]`]][[video]][[*introtext]]</markdown><markdown>[[*content]]</markdown>

Chunk: navi (Seite - Wayfinder)

[[Wayfinder? 
&startId=`0`
&hideSubMenus=`1`
&displayStart=`1` 
&removeNewLines=`1`
&displayStart=`1`
&level=`2` 
&outerTpl=`outerTpl` 
&innerTpl=`innerTpl`
&rowTpl=`rowTpl`
&parentRowTpl=`rowTpl` 
&hereTpl=`hereTpl`
&parentRowHereTpl=`hereTpl` 
&activeParentRowTpl=`activeParentRowTpl`
&innerRowTpl=`innerRowTpl`
&innerHereTpl=`innerHereTpl`
&startItemTpl=`rowTpl`
]]


[[pdoMenu? &parents=`0` &level=`2` &hideSubMenus=`1` &select=`{"modResource":"id,pagetitle,alias"}` 
&tplOuter=`@INLINE <button id="navtoggle" aria-live="polite"><span>Menü zeigen</span></button><nav id="nav1" aria-label="Hauptnavigation"><ul id="n11">OUTER [[+wrapper]]</ul></nav>` 

&tpl=`@INLINE <li [[+classes]]><a href="[[+link]]" >Tpl [[+menutitle]]</a>[[+wrapper]]</li>`
&tplParentRow=`@INLINE <li [[+classes]]><a href="[[+link]]" >tplParentRow [[+menutitle]]</a>[[+wrapper]]</li>`
&tplParentRowHere=`@INLINE <li [[+classes]]><a href="[[+link]]" >tplParentRowHere [[+menutitle]]</a>[[+wrapper]]</li>`
&tplHere=`@INLINE <li [[+classes]]><a href="[[+link]]" >tplHere [[+menutitle]]</a>[[+wrapper]]</li>`
&tplInner=`@INLINE <li [[+classes]]><a href="[[+link]]" >tplInner [[+menutitle]]</a>[[+wrapper]]</li>`
&tplInnerRow=`@INLINE <li [[+classes]]><a href="[[+link]]" >tplInnerRow [[+menutitle]]</a>[[+wrapper]]</li>`
&tplInnerHere=`@INLINE <li [[+classes]]><a href="[[+link]]" >tplInnerHere [[+menutitle]]</a>[[+wrapper]]</li>`
&tplParentRowActive=`@INLINE <li [[+classes]]><a href="[[+link]]" >tplParentRowActive [[+menutitle]]</a>[[+wrapper]]</li>`

&hereClass=`n1-akt` 
&levelClass=`` 
&firstClass=``
&lastClass=``]]

&outerTpl=`@INLINE <button id="navtoggle" aria-live="polite"><span>Menü zeigen</span></button><nav id="nav1" aria-label="Hauptnavigation"><ul id="n11">OUTER [[+wrapper]]</ul></nav>` 
&innerTpl=`@INLINE <ul id="n12">[[+wrapper]]</ul>`
&tpl=`@INLINE <li [[+classes]]><a href="[[+link]]" >TPL [[+menutitle]]</a>[[+wrapper]]</li>`
&hereTpl=`@INLINE <li [[+classes]] aria-disabled="true"><span>HERETPL [[+menutitle]]</span>[[+wrapper]]</li>` 
&activeParentRowTpl=`@INLINE <li [[classes]]><a href="[[+link]]">ACTIVEPARENTROW[[+menutitle]]</a>[[+wrapper]]</li>`
&parentRowHereTpl=`@INLINE <li [[+classes]]><a href="[[+link]]" >PARENTROWHERE [[+menutitle]]</a>[[+wrapper]]</li>`

Chunk: aktiveParentRow

<li class="n1_li"><a class="n1_a aktiv" href="[[+wf.link]]">[[+wf.linktext]]</a>[[+wf.wrapper]]</li>

Chunk: hereTpl

<li class="n1_li"><span class="n1_span">[[+wf.linktext]]</span>[[+wf.wrapper]]</li>

Chunk: innerHereTpl

<li class="n1_ul_li"><span class="n1_ul_span">[[+wf.linktext]]</span></li>

Chunk: innerRowTpl

<li class="n1_ul_li"><a class="n1_ul_a" href="[[+wf.link]]">[[+wf.linktext]]</a></li>   

Chunk: innerTpl

<ul id="n1_ul">[[+wf.wrapper]]</ul>

Chunk: navi

	[[Wayfinder? 
	&startId=`0`
	&hideSubMenus=`1`
	&displayStart=`1` 
	&removeNewLines=`1`
	&displayStart=`1`
	&level=`2` 
	&outerTpl=`outerTpl` 
	&innerTpl=`innerTpl`
	&rowTpl=`rowTpl`
	&parentRowTpl=`rowTpl` 
	&hereTpl=`hereTpl`
	&parentRowHereTpl=`hereTpl` 
	&activeParentRowTpl=`activeParentRowTpl`
	&innerRowTpl=`innerRowTpl`
	&innerHereTpl=`innerHereTpl`
	&startItemTpl=`rowTpl`
	]]

Chunk: outerTpl

<button id="navtoggle" aria-hidden="true"><span>Menü zeigen</span></button><nav id="nav" role="navigation" aria-hidden="false" aria-label="Hauptnavigation"><ul id="n1">[[+wf.wrapper]]</ul></nav>

Chunk: rowTpl

<li class="n1_li"><a class="n1_a" href="[[+wf.link]]">[[+wf.linktext]]</a>[[+wf.wrapper]]</li>

Chunk: header

<header id="header" role="banner"><h1><a id="header_a" href="/" rel="index" hreflang="de-de"><img id="header_img" src="/client/grafik/logo.png" width="400" height="120" alt=""><span class="vs">Revo-Test</span></a></h1></header>

hochladen

/assets/plugins
  	- smartypants_german.php
	- markdown.php



Plugin: marksmart

	<?php
	$event_name = $modx->event->name;
	switch ($event_name) {
	    case "OnWebPagePrerender":
	        include_once($modx->config["base_path"].'/assets/plugins/markdown.php');
	        $doc = $modx->resource->_output;
	        // Smartypants einbinden
	        include_once($modx->config['base_path'].'/assets/plugins/smartypants_german.php');
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
	?>
	
Snippet published

<?php
	$docId = (isset($docId)) ? $docId : $modx->resource->get('id');
	$page = $modx->getObject('modResource', $docId);
	$timestamp = strtotime($page->get('publishedon'));
	$machinedate = strftime('%Y-%d-%m', $timestamp);
	$humandate = strftime('%d.%m.%Y', $timestamp);
	echo  '<time aria-label="veröffentlicht am" itemprop="datePublished" datetime="' . $machinedate . '">' . $humandate . '</time>';
?>   


getResources installieren

	[[getResources? 
	  &limit=`3`
	  &sortdir=`DESC` 
	  &sortby=`{"menuindex":"DESC"}`
	  &includeTVs=`1`
	  &processTVs=`1`
	  &tvPrefix=``
	  &showHidden=`1`
	  &includeContent=`1` 
	  &depth=`10`
	  &tpl=`teaser`
	]]
	
getPage installieren

[[!getPage? 
  &elementClass=`modSnippet`
  &element=`getResources`
  &parents=`4` 
  &depth=`1`
  &limit=`3`
  &showHidden=`1`
  &sortdir=`DESC`
  &sortby=`{"menuindex":"DESC"}`
  &includeContent=`1` 
  &includeTVs=`1`
  &processTVs=`1`
  &tvPrefix=``
  &tpl=`teaser`
  &pageVarKey=`s`
]]


pThumbs installieren


<img class="vorschaubild" src="
[[+vorschaubild:phpthumbof=`w=100&h=100&q=95`]]" 
srcset="
[[+vorschaubild:phpthumbof=`w=100&h=100&q=95`]], 
[[+vorschaubild:phpthumbof=`w=200&h=200&q=85`]] 2x, 
[[+vorschaubild:phpthumbof=`w=400&h=400&q=70`]] 4x" alt=""  width="100" height="100">`]]   

Snippet Video 
<?php
$docId = $modx->resource->get('id');
// https://rtfm.modx.com/revolution/2.x/making-sites-with-modx/customizing-content/template-variables/accessing-template-variable-values-via-the-api


$page = $modx->getObject('modResource', $docId);
$video = $page->getTVValue('video');
if (!empty($video)) {
echo '<div class="video"><div class="video-wrapper"><iframe id="ytplayer" width="600" height="450" src="https://www.youtube-nocookie.com/embed/' . $video . '?rel=0" frameborder="0" allowfullscreen></iframe></div></div>';
}
?>

Tabelle: modx_gallery_album_items Spalte album Splate item = id in  modx_gallery_items

Tabelle: modx_gallery_items Spalte id (Bild) und Spalte active (0/1) 

Snippet phoneLink

TVVariable  aufrufen https://rtfm.modx.com/revolution/2.x/making-sites-with-modx/customizing-content/template-variables/accessing-template-variable-values-via-the-api 



<?php
// Example: [[phoneLink? &docID=`[+id+]` &intCode=`49` &phoneTV=`telefon` &trunk=`0` &microData=`1` &class=`tel`]]
// [[phoneLink? &docID=`[+id+]` &intCode=`49` &phoneTV=`telefon` &trunk=`0` &microData=`1` &class=`tel`]]

$docID = (isset($docID)) ? $docID : $modx->resource->get('id');

$tvs = $modx->getObject('modResource', $docID);
$phoneNumber = $tvs->getTVValue('telefon');

if (!empty($phoneNumber)) {

// Welche führende Zeichen soll gestrichen werden
$delTrunk = (isset($delTrunk)) ? $delTrunk : '';

// Sollen Microdata nach schema.org verwendet werden. JA = 1
$microData = ($microData == 1) ? 'itemprop="telephone"' : '';

// Welche class soll an den Link geschrieben werden?
$class = (isset($class)) ? 'class="' . $class . '"' : '';

// https://rtfm.modx.com/revolution/2.x/making-sites-with-modx/customizing-content/template-variables/accessing-template-variable-values-via-the-api

$signs = array(' ', '/', '(', ')', '-', '+');
$hreftel = str_replace($signs,'',ltrim($phoneNumber, $delTrunk));
echo '<p>Telefon: <a class="phonelink" href="tel:+' . $intCode . $hreftel .' " ' . $class. ' ' . $microData . ' >' . $phoneNumber . '</a></p>';
};
?>


Datums-TVs

Ausgabeforamt %S

Chunk für Datums TV

[[+tvdatum:strtotime:date=`%A, %d.%m.%Y`]]


Snippet für Datums-Tv

<?php
$docId = (isset($docId)) ? $docId : $modx->resource->get('id');
$page = $modx->getObject('modResource', $docId);
$timeStamp = $page->getTVValue('start');
echo strftime('%d. %b. %Y', $timeStamp);
?>

Cache aktualisieren

http://bobsguides.com/refreshcache-tutorial.html


Alternatives Menü?

http://modx.com/extras/package/mxextendedmenu

http://modx.com/extras/package/supercache

phpthumbsup

ClearCache -> Nein

Alternative? https://github.com/rthrash/pThumb
                                   
"MosQuito" https://gist.github.com/opengeek/3744346

http://stackoverflow.com/questions/12887335/modx-getchunk-alternative

pdoTool 2.23

cache_alias_map -> ja


https://rtfm.modx.com/revolution/2.x/developing-in-modx/advanced-development/custom-manager-pages/custom-manager-pages-in-2.3

https://github.com/opengeek/getCache/wiki/Refresh-Custom-Cache-Partitions

https://rtfm.modx.com/revolution/2.x/developing-in-modx/advanced-development/custom-manager-pages/custom-manager-pages-in-2.3

https://rtfm.modx.com/revolution/2.x/developing-in-modx/advanced-development/custom-manager-pages/modext

https://rtfm.modx.com/revolution/2.x/developing-in-modx/advanced-development/custom-manager-pages/actions-and-menus/action-list

https://rtfm.modx.com/revolution/2.x/developing-in-modx/advanced-development/custom-manager-pages

[[!Gallery? &album=`Startseite` &sort=`rand`  &limit=`1`]]

[[getCache? &elementClass=`modSnippet` &element=`Gallery` 
  &album=`Startseite` &sort=`rand`  &limit=`1`
  &cacheKey=`galerie` &cacheElementKey=`galerieSnippet`&cacheExpires=`60`
]]

<figure><img src="[[pthumb? &input=`[[+image_absolute]]` &options=`w=480&h=320&q=75`]]" srcset="[[pthumb? &input=`[[+image_absolute]]` &options=`w=480&h=320&q=75`]] 480w, [[pthumb? &input=`[[+image_absolute]]` &options=`w=720&h=480&q=73`]] 720w, [[pthumb? &input=`[[+image_absolute]]` &options=`w=960&h=640&q=70`]] 960w" sizes="(max-width: 480px) 100vw, (max-width: 740px) 66vw, 960px" height="320"><figcaption>[[+description]]</figcaption></figure> 

HACK galitem.class.php für random

### Gallery

   [[!Gallery? &album=`Nachricht 1`  &limit=`1` &thumbTpl=`hingucker` &useCss=`0`]]
   [[!Gallery:replace=`, ]}==]}`? &album=`Nachricht 1` &containerTpl=`tplGalerieJSONContainer` &thumbTpl=`tplGalerieJSONthumb`]]