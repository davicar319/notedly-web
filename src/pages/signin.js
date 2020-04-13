import React, { useEffect } from 'react';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import UserForm from '../components/UserForm';

const SIGNIN_USER = gql`
    mutation signIn($email: String, $password: String!) {
        signIn(email: $email, password: $password)
    }
`;

const SignIn = props => {
  useEffect(() => {
    document.title = 'Sign In -- Notedly';
  });

  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      // store the token in local storage.
      localStorage.setItem('token', data.signIn);
      // update the local cache.
      client.writeData({ data: { isLoggedIn: true } });
      // Redirect back to the homepage.
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <UserForm action={signIn} formType={'signin'}/>
      {/* if the data is loading, display a loading message. */}
      {loading && <p>Loading...</p>}
      {/* if there is an error, display an error message. */}
      {error && <p>Error signing in!</p>}
    </React.Fragment>
  );
};

export default SignIn;