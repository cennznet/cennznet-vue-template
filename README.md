# CENNZnet Quick Start Template

![CENNZnet logo](./src/assets/logo.png)

## About this template
This is a quick start template for you to get started with [CENNZnet](https://cennz.net/) in 5 minutes!

This app simply shows the block number of the latest block on the CENNZnet MainNet(Alzalea) for a given number of updates, and then unsubscribe from the updates. It demonstrates how to connect to the CENNZnet MainNet, using the [CENNZnet API](https://github.com/cennznet/api.js). A live demo can be found [here](https://cennznet.js.org/cennznet-vue-template/).

It is built with [Vue.js](https://vuejs.org/), a popular frontend frameworks that is approachable yet powerful.

The code that uses the [CENNZnet API](https://github.com/cennznet/api.js) is in components/HelloWorld.vue.


## Getting started

### Install prerequisites

[NodeJS](https://nodejs.org/en/)

[Yarn](https://classic.yarnpkg.com/en/)

### Clone this repo
```
git clone https://github.com/cennznet/cennznet-vue-template.git
```
### Run the code
```
yarn install
yarn serve
```

## Where to go from here

### Explore the MainNet
[cennznet.io](https://cennznet.io/#/landing) is the GUI, where you can manage your account and interact with the chain.

### Explore the CENNZnet API
The [CENNZnet API](https://github.com/cennznet/api.js) is a JavaScript API that allows you to view chain states through RPC calls, and call methods of the runtime modules in CENNZnet.

[Getting started with the API](https://github.com/cennznet/api.js/blob/develop/docs/GET_STARTED.md)

[API example code](https://github.com/cennznet/api.js/tree/develop/docs/examples)

### CENNZnet technical documentation
[CENNZnet specific modules](https://github.com/cennznet/api.js/tree/develop/docs/cennznet)

## Development notes

### Connecting to a local CENNZnet node (Optional)

For development purposes, you may want to connect to a local blockchain network instead of the MainNet.

#### Start a local chain
* Install [docker](https://www.docker.com/get-started)
* Run this command
```
docker run -p 9944:9944 -it --rm  cennznet/cennznet:1.2.2 --dev --ws-external
```

#### Connect to the local node in Javascript
```
  const provider = 'ws://localhost:9944';

  // Create the API and wait until ready
  const api = await Api.create({provider});
```

#### Explore the chain through the UI
* Go to [cennznet.io](https://cennznet.io/#/landing) 
* Click on the CENNZnet icon on the top left corner, to open the Select Network window
* Select "Local Node"


### Customize Vue configurations
See [Configuration Reference](https://cli.vuejs.org/config/) from [Vue CLI](https://cli.vuejs.org/).

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Live demo hosted on Github Pages

A live demo is hosted on Github Pages.

To deploy, run the deploy_github_pages.sh script.
Running this script will create a commit on a branch called gh-pages, which is a subtree of the main branch. It's used as the build output folder.

Github Pages needs to be setup for to show the gh-pages branch. The setting is found in the Github repository's settings.
