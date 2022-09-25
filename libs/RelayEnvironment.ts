import 'regenerator-runtime/runtime';
import { RelayNetworkLayer, urlMiddleware,  } from 'react-relay-network-modern';
import {Environment, Network, RecordSource, Store} from 'relay-runtime';



const network = new RelayNetworkLayer([
  urlMiddleware({
    url: (req) => Promise.resolve('https://swapi-graphql.netlify.app/.netlify/functions/index/graphql'),
  }),
]);

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network,
  store: new Store(new RecordSource()),
});
