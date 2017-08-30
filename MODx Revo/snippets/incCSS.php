<?php
/*

Im head einfügen
[[!incCSS &path=`client/css/` &file_crit=`crit.min.css` &file_comp=`comp.min.css`|]

Das Snippet verwendet Zeitstempel für die CSS-Dateien. In der .htaccess muss deshlab eignefügt werden:

## Zeitstempel einfügen in Dateien nach dem Schema mein-script.min.js oder meine-css.dev.css. Muss mit PHP aufgelöst werden
    RewriteRule (.+)\.(min|dev)\.(\d+)\.(js|css)$ $1.$2.$4 [L]

! Mometnan gibt es noch Probleme, dass der Erstaufruf auch beim Seitenwechsel manchmal erneut aufgerufen wird. Eventeull hat das was mit dem Caching in MODx REvo zu tun?

*/



$base = $modx->config["base_path"];
//$url = $modx->config['site_url'];
$path = $modx->getOption('path', $scriptProperties);

$file_crit = $modx->getOption('file_crit', $scriptProperties);

$path_absolute_crit = $base.''.$path.''.$file_crit;

//$path_parts_crit = pathinfo($path_absolute_crit);
//$path_crit = $path.''.$path_parts_crit['filename'].'.'.filemtime($path_absolute_crit). '.'.$path_parts_crit['extension'];

//$urlpath_crit = $url . $path_crit;

$file_comp = $modx->getOption('file_comp', $scriptProperties);

$path_absolute_comp = $base.''.$path.''.$file_comp;
$path_parts_comp = pathinfo($path_absolute_comp);
// Pfad + Dateiname mit Zeitstempel
$path_comp = $path.''.$path_parts_comp['filename'].'.'.filemtime($path_absolute_comp). '.'.$path_parts_comp['extension'];

//$urlpath_comp = $url . $path_comp;

if (!isset($_COOKIE['css'])) {
$out .= '<style>' . file_get_contents($path_absolute_crit) . '</style><script>!function(e){"use strict";var n=function(n,t,i){function s(e){return o.body?e():void setTimeout(function(){s(e)})}var d,o=e.document,r=o.createElement("link"),a=i||"all";if(t)d=t;else{var f=(o.body||o.getElementsByTagName("head")[0]).childNodes;d=f[f.length-1]}var l=o.styleSheets;r.rel="stylesheet",r.media="only x",r.href=n,s(function(){d.parentNode.insertBefore(r,t?d:d.nextSibling)});var u=function(e){for(var n=r.href,t=l.length;t--;)if(l[t].href===n)return e();setTimeout(function(){u(e)})};return r.addEventListener&&r.addEventListener("load",function(){this.media=a}),r.onloadcssdefined=u,u(function(){r.media!==a&&(r.media=a)}),r};"undefined"!=typeof exports?exports.loadCSS=n:e.loadCSS=n}("undefined"!=typeof global?global:this);loadCSS( "/' . $path_comp . '" );document.cookie="css=1";</script>';
} else {
$out .= '<link href="/' . $path_comp . '" rel="stylesheet" media="screen">';
}
return $out;