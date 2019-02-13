#!/bin/bash

tar czf stir.tar.gz bin emailer public routes views app.js package.json change.sh
scp stir.tar.gz pega:~
rm stir.tar.gz

ssh pega << 'ENDSSH'
pm2 stop stir
rm -rf stir
mkdir stir
tar xf stir.tar.gz -C stir
rm stir.tar.gz
cd stir
npm install
bash change.sh
pm2 start stir
ENDSSH