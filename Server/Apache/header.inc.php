<?php
require_once(dirname(__FILE__).'/'.MGR_DIR.'/header.inc.php');

header("X-Content-Type-Options: nosniff");
header("X-XSS-Protection: 1; mode=block");
header("X-Frame-Options: SAMEORIGIN");
header("Connection: keep-alive");
header("ETag: ");
header("X-Powered-By: ");
header("Vary:Save-Data");
header("X-UA-Compatible: IE=edge");
header("Server: ");
// adjust to your purpose
header("Content-Security-Policy-Report-Only: default-src https://meine-website.de/; base-uri https://meine-website.de/; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' font-src 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'");
header("Referrer-Policy: same-origin");