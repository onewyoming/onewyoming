#!/usr/bin/bash 
. ~/.nvm/nvm.sh
nvm --version;
free -h;
nvm install node;
node --version;
npm --version;
npm install -g yarn
cd /root/wyoming;
docker-compose down --remove-orphans;
git clean -df 
git reset --hard;
git pull origin master;
cd /root/wyoming/public-website;
rm -rf node_modules;
yarn install;
yarn run generate;
free -h;
rsync -av /root/wyoming/public-website/public/ /root/wyoming/built-website/;
cat /root/wyoming/built-website/index.html;
du -sh /root/wyoming/built-website;
ls -a /root/wyoming/built-website;
cd /root/wyoming/;docker-compose up --build -d;
free -h;
w;
last;
uptime;