# cennznet-vue-template

This is a minimal app that shows how to connect to the CENNEZnet API in a VueJS project.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Testing on a local CENNZnet node

Run a local chain by running this command
```
docker run -p 9944:9944 -it --rm  cennznet/cennznet:1.2.2 --dev --ws-external
```

Connect to the local node 
```
  const provider = 'ws://localhost:9944';

  // Create the API and wait until ready
  const api = await Api.create({provider});
```

Connect to the main net at
wss://cennznet.unfrastructure.io/public/ws
