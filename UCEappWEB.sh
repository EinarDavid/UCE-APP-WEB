#!/bin/bash

# codigo para clonar automaticamente el repositorio de github

rm UCE-APP-WEB -r
git clone https://github.com/EinarDavid/UCE-APP-WEB.git
cd UCE-APP-WEB
npm i
npm rebuild
npm start
