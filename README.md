# CENNZnet Quick Start Template

![CENNZnet logo](./src/assets/logo.png)

## About this template
This is a quick start template for you to start building with [CENNZnet](https://cennz.net/) in 5 minutes!

This app shows the last finalised block number on the CENNZnet MainNet(Alzalea). It demonstrates how to connect and disconnect to the CENNZnet MainNet using the [CENNZnet API](https://github.com/cennznet/api.js). A live demo can be found [here](https://cennznet.js.org/cennznet-vue-template/).

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

### CENNZnet Wiki
The [CENNZnet wiki](https://wiki.cennz.net/) provides technical documentations and guides. Read the [Technical Overview](http://localhost:3000/#/Getting-started/CENNZnet-technical-overview) if you haven't.

### Explore the MainNet
[cennznet.io](https://cennznet.io/#/landing) is the UI that lets you interact with CENNZnet's networks. This UI provides account management tools for crypto investors and dev tools for DApp Developers. It allows you to read data stored on the chain, and submit transactions to modify the data. It also lets you inspect the recent blocks and events on the chain.
Read the guides [here](https://wiki.cennz.net/#/References/CENNZnet-infrastructures/Exploring-the-CENNZnet-UI) to get familiar with CENNZnet.io.

### Explore the CENNZnet API
The [CENNZnet API](https://github.com/cennznet/api.js) is a JavaScript API that allows you to view chain states through RPC calls, and call methods of the runtime modules in CENNZnet.

Check out the [Getting started with the CENNZnet API guide](https://wiki.cennz.net/#/Dapp-development/Guides/Getting-started-with-the-CENNZnet-API) to learn about it!


## FAQ
### Do I have to use Vue.js?
No. The [CENNZnet API](https://github.com/cennznet/api.js) is a JavaScript API, so you are free to use another framework of your choice. We used Vue.js in this quick start project, because it's easy to learn and use.

### What if I'm a React fan?
We've built a powerful and open source GUI for CENNZnet, [cennznet.io](https://cennznet.io/#/landing), with React. Check out the repo [here](https://github.com/cennznet/ui).

## Development notes

### Connecting to a local CENNZnet node (Optional)

For development purposes, you may want to connect to a local blockchain network instead of the MainNet.

For more information, check out the [CENNZnet repo](https://github.com/cennznet/cennznet).

#### Start a local CENNZnet node
* Install [docker](https://www.docker.com/get-started)
* Run this command
```
docker run -p 9944:9944 cennznet/cennznet:1.4.0 --dev --ws-external
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
