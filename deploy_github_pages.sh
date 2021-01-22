#!/usr/bin/env sh

# Followed this guide https://levelup.gitconnected.com/how-to-deploy-your-vue-app-to-github-pages-897136799e19

# abort on errors
set -e

yarn build

git add dist

git commit -m 'Deploy by adding dist subtree'

git subtree push --prefix dist origin gh-pages