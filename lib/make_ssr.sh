#!/bin/zsh

if [ ! -d ./public ]
then
	mkdir ./public

fi
# 0 - remove index.html from public
rm ./public/index.html 2> /dev/null
rm ./public/functions.js 2> /dev/null
rm ./public/cv-yannick-le-tallec.css 2> /dev/null

# 1 - get html tags
# - some tweaks are required to remove quotes added by js console.log
HTML=`node cv-yannick-le-tallec.js`
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
cp index.html ./public/index.html
cp functions.js ./public/
cp data.js ./public/
cp cv-yannick-le-tallec.css ./public/

# 3 - Inject into index.html
sed -i "/<body>/a\ ${HTML}" ./public/index.html

# 4 - crafting functions.js
sed -i '/^module/,$d' public/functions.js
cat ./components/contact.js >> public/functions.js
