import React from 'react';
import { useQuery } from '@apollo/client';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
// import Layout shared component
import Layout from '../components/Layout';
// import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';
import EditNote from './edit';

import { IS_LOGGED_IN } from '../gql/query';


const Pages = () => {
  return (
    <Router>
      {/* Wrap our routes within the Layout component */};
      <Layout>
        <Route exact path="/" component={Home}/>
        <PrivateRoute path={'/new'} component={NewNote}/>
        <PrivateRoute path={'/edit/:id'} component={EditNote}/>
        <PrivateRoute path={'/mynotes'} component={MyNotes}/>
        <PrivateRoute path={'/favorites'} component={Favorites}/>
        <Route path={'/note/:id'} component={NotePage}/>
        <Route path={'/signup'} component={SignUp}/>
        <Route path={'/signin'} component={SignIn}/>
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  //if the data is loading, display a loading message.
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: 'signin',
            state: { from: props.location }
          }}
          />
        )
      }
    />
  );
};


export default Pages;