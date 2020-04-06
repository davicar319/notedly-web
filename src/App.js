import React from 'react';
import ReactDOM from 'react-dom';
// import Apollo Client Libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import the global styles
import GlobalStyle from './components/GlobalStyle';
// import Routes
import Pages from '/pages';

const uri = process.env.API_URI;
const cache = new InMemoryCache();

// configure the Apollo Client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle/>
      <Pages/>
    </ApolloProvider>
  );
};
ReactDOM.render(<App/>, document.getElementById('root'));