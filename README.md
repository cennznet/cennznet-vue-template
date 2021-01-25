# CENNZnet Vue Template

![CENNZnet logo](./src/assets/logo.png)

This is a minimal VueJS project that demonstrates how to use the CENNZnet API.

This project was generated using [Vue CLI](https://cli.vuejs.org/). 
The logic that uses the CENNZnet API is in HelloWorld.vue, which is a [single file component] (https://vuejs.org/v2/guide/single-file-components.html).

## Live demo

A live demo hosted on Github Pages can be found [here](https://cennznet.js.org/cennznet-vue-template/).

There's no CI set up, please manually run the deploy script to keep the live demo up to update.
Github Pages needs to be setup for to show the gh-pages branch. The setting is found in the Github repository's settings.

## Project requirements

[NodeJS](https://nodejs.org/en/)
[Vue 2](https://vuejs.org/v2/guide/installation.html#NPM)
[Yarn](https://classic.yarnpkg.com/en/)

## Running this project for development
```
yarn install
yarn serve
```

## Connecting to a local CENNZnet node

For development purposes, you may want to connect to a local blockchain network where you can play around without affecting the main net.
To start a local chain, 
* Install docker
* Run this command
```
docker run -p 9944:9944 -it --rm  cennznet/cennznet:1.2.2 --dev --ws-external
```

* Connect to the local node in Javascript
```
  const provider = 'ws://localhost:9944';

  // Create the API and wait until ready
  const api = await Api.create({provider});
```

### Customize Vue configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Deployment to Github Pages

Github pages is used for a live demo of this project.

To deploy, run the deploy_github_pages.sh script.
Running this script will create a commit on a branch called gh-pages, which is a subtree of the main branch. It's used as the build output folder.


