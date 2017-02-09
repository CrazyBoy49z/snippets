# Bots etc.

## landeskirche-anhalts.de

### 12.1.

- 55 	0.06% 	Go-http-client/1.1
- 55 	0.06% 	Go-http-client/2.0
- 45 	0.05% 	Evolution/3.12.9
- 11 	0.01% 	SafeSearch microdata crawler

### 17.1.

- 382 	0.30% 	Mozilla/5.0 (compatible; Sophora; http://www.subshell.com)
- 347 	0.27% 	Mozilla/5.0 (compatible; Kraken/0.1; http://linkfluence.net/; bot@linkfluence.net)
- 290 	0.23% 	Mozilla/5.0 (compatible; seoscanners.net/1; +spider@seoscanners.net)
- 8 	0.01% 	Kaspersky Lab CFR link resolver cfradmins@kaspersky.com
- 4 	0.00% 	Shareaza v1.x.x.xx

### 22.1.

- 13 	0.01% 	Mozilla/5.0 (compatible; Wappalyzer; +https://github.com/AliasIO/Wappalyzer)

### 30.1.

- 64 	55 	0.02% 	DomainStatsBot/1.0 (http://domainstats.io/our-bot) -> User-agent: DomainStatsBot
- 41 	0.02% 	Mozilla/5.0 (compatible; linkdexbot/2.2; +http://www.linkdex.com/bots/) -> ) linkdexbot bad_bot
- 22 	0.01% 	mindUpBot (datenbutler.de) -> User-agent: mindUpBot 
- 19 	0.01% 	GarlikCrawler/1.2 (http://garlik.com/, crawler@garlik.com) -> robots.txt User-agent: GarlikCrawler
- 7 	0.00% 	doczz_com_br download bot, see http://doczz.com.br/public/bot for additional -> robots.txt User-agent: doczz_com_br
- 6 	0.00% 	Mozilla/4.0 (compatible; Vagabondo/4.0/EU; http://www.wise-guys.nl/) -> User-Agent  Vagabondo,  Bilbo
- 6 	0.00% 	Mozilla/5.0 (compatible; http://www.beammachine.de//0.5; URL status checker)


- 48 	0.24% 	Mozilla/5.0 (compatible; Sophora; http://www.subshell.com)
- 42 	0.21% 	Mozilla/5.0 (compatible; Kraken/0.1; http://linkfluence.net/; bot@linkfluence.net)
- 24 	0.12% 	Mail/3124 CFNetwork/760.6.3 Darwin/15.6.0 (x86_64)
- 3 	0.01% 	TestiTest1
- 2 	0.01% 	Xenu Link Sleuth/1.3.8

## junkers-paddelgemeinschaft.de

### 12.1.

- 6 	0.05% 	TestiTest1
- 3 	0.03% 	() { :;};echo; /bin/bash -c %5C echo 2014 | md5sum%5C
- 2 	0.02% 	vebidoobot
- 1 	0.01% 	Screaming Frog SEO Spider/6.2

### Dateiendungen

- gz|gzip|tgz

## aakania-hotel-bernburg.de

### 17.1.

- 2 	0.02% 	OFM search_robot

https://www.experts-exchange.com/questions/21616020/Apache-Question-Can-I-block-HTTP-1-0-requests-using-http-conf-or-htaccess.html

http://www.askapache.com/htaccess/#SPECIFY_CHARACTERS

RewriteCond %{THE_REQUEST} !^[A-Z]{3,9}\ .+\ HTTP/(0\.9|1\.0|1\.1) [NC]
RewriteRule .* - [F,NS,L]

RewriteCond %{REQUEST_URI} !^/(wp-login.php|wp-admin/|wp-content/plugins/|wp-includes/).* [NC]
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ ///.*\ HTTP/ [NC,OR]
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /.*\?\=?(http|ftp|ssl|https):/.*\ HTTP/ [NC,OR]
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /.*\?\?.*\ HTTP/ [NC,OR]
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /.*\.(asp|ini|dll).*\ HTTP/ [NC,OR]
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /.*\.(htpasswd|htaccess|aahtpasswd).*\ HTTP/ [NC]

https://perishablepress.com/how-to-block-proxy-servers-via-htaccess/