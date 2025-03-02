import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache()
});

client.query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
   `
})
    .then((apolloRes) => console.log(apolloRes))
    .catch((error) => console.error(error))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if (!root) throw new Error('Root not exist');
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>
);

performance.now();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
