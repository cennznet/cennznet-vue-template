<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Here's a simple Dapp for you to start hacking!
    </p>
    <p>
      This project uses <a href="https://vuejs.org" target="_blank" rel="noopener">Vue.js</a> for the front-end, for simplicity and power. 
    </p>
    <p>
      To be a Dapp, we connect to
      <a href="https://github.com/cennznet/cennznet" target="_blank" rel="noopener">CENNZnet</a> 
      using the 
<a href="https://github.com/cennznet/api.js" target="_blank" rel="noopener">CENNZnet Javascript API</a>. 
    </p>

    <h1> OK, where's the blockchain? Here it comes.. </h1>
    
    <h2> The blockchain is at block: #{{ blockNum }}</h2>


    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://github.com/cennznet/api.js/blob/develop/docs/GET_STARTED.md" target="_blank" rel="noopener">CENNZnet API Docs</a></li>
      <li><a href="https://github.com/cennznet/cennznet" target="_blank" rel="noopener">Running a CENNZnet node</a></li>
      <li><a href="https://cennz.net/" target="_blank" rel="noopener">CENNZnet official site</a></li>
     </ul>
    <ul>
      <li><a href="https://discord.gg/u3ct4CVE3B" target="_blank" rel="noopener">Join our Discord community</a></li>
      <li><a href="https://twitter.com/CENNZnet" target="_blank" rel="noopener">Twitter</a></li>
    </ul>

    <h3>Related Guides</h3>
    <ul>
      <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing" target="_blank" rel="noopener">Async Javascript explained</a></li>
      <li><a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener">Vue.js Official Guides</a></li>
    </ul>
  </div>
</template>

<script>
const { Api } = require('@cennznet/api');

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      blockNum : 0
    }
  },
  methods: {
    async subscribe () {
      // Initialise the provider to connect to the local node
      // To connect to Azalea, set provider to 'wss://cennznet.unfrastructure.io/public/ws';
      const provider = 'ws://localhost:9944';

      // Create the API and wait until ready
      const api = await Api.create({provider});

      // Subscribe to a number of updates, then unsubscribe
      let numUpdates = 256;

      // Subscribe to the new headers on-chain. The callback is fired when new headers
      // are found, the call itself returns a promise with a subscription that can be
      // used to unsubscribe from the newHead subscription
      const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
        console.log(`Chain is at block: #${header.number}`);
        this.blockNum = header.number;

        if (--numUpdates < 0) {
          unsubscribe();
          process.exit(0);
        }
      });
    }
  },
  created() {
    this.subscribe().catch(console.error);
 }
}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
