import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const { Api } = require('@cennznet/api');

async function main () {
  // Initialise the provider to connect to the Azalea node
  // const provider = 'wss://cennznet.unfrastructure.io/public/ws';
  const provider = 'ws://localhost:9944';

  // Create the API and wait until ready
  const api = await Api.create({provider});

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

main().catch(console.error).finally(() => process.exit());
