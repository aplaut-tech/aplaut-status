#!/usr/bin/env sh

# install gh-pages
yarn add gh-pages --save-dev # or yarn add gh-pages --dev

# generate
yarn run generate # or yarn run generate

# deploy
yarn run deploy # or yarn run deploy