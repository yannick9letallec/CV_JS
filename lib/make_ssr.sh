#!/bin/zsh

if [ ! -d ./public ]
then
	mkdir ./public

fi

languages=( fr uk )
# 0 - purging public repo
rm -r ./public
mkdir -p ./public

for i in ${languages};
	do mkdir ./public/${i};

	# 1 - get html tags
	# - some tweaks are required to remove quotes added by js console.log
	echo "Generating HTML tags for : ${i}"
	HTML=`node cv-yannick-le-tallec.js ${i}`
	echo '--------------------------------------------------------------'
	HTML_1=${#HTML}
	HTML_L=`echo -n ${HTML} | wc -c`
	echo ${HTML_L}
	echo '--------------------------------------------------------------'
	HTML_L=`expr ${HTML_L} - 2`
	echo ${HTML_L}
	echo '--------------------------------------------------------------'
	HTML=`expr substr $HTML 2 ${HTML_L}`
	echo ${HTML}
	echo '--------------------------------------------------------------'

	# 2 - copy files to public
	p=./public/${i}

	cp robots.txt ${p}/robots.txt
	cp sitemap.xml ${p}/sitemap.xml
	cp index.html ${p}/index.html
	cp functions.js ${p}/
	cp data.js ${p}/
	cp cv-yannick-le-tallec.css ${p}
	cp -r images ${p}
	cp node_modules/mithril/mithril.min.js ${p}
	cp node_modules/uikit/dist/css/uikit.min.css ${p}
	cp node_modules/uikit/dist/js/uikit.min.js ${p}
	cp node_modules/uikit/dist/js/uikit-icons.min.js ${p}

	# 3 - Inject into index.html
	sed -i "/<body>/a\ ${HTML}" ${p}/index.html

	# 4 - crafting functions.js
	# suppression du 'node code'
	sed -i '/^module/,$d' ${p}/functions.js
	# injection des composants
	cat ./components/header.js >> ${p}/functions.js && cat ./components/contact.js >> ${p}/functions.js
	## adapt component's code ## suppression des consoles log/ dir ...
	# delete require line
	sed -i '/require/d; /console/d; /^$/d;' ${p}/functions.js
	# rename 'module.exports' to 'let HEADER'
	sed -i 's/module.exports/let HEADER/' ${p}/functions.js

done;
# 5 - right management
chmod -R 775 ./public/*
