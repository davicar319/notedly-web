import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';

import Button from '../components/Button';

const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin 0 auto;
`;

const Form = styled.form`
  label, input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }

`;

//Include the props passed to the component for later use.
const SignUp = props => {
  // set the default state of the form.
  const [values, setValues] = useState();

  // update the state when a user types in the form.
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    //Update the document title.
    document.title = 'Sign Up -- Notedly';
  });

  // add the mutation hook
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      // console.log the JSON Web Token when the mutation is complete.
      console.log(data.signUp);
    }
  });

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form onSubmit={event => {
        event.preventDefault();
        signUp({
          variables: {
            ...values
          }
        });
      }}>
        <label htmlFor={'username'}>Username:</label>
        <input required={true} type={'text'} id={'username'} name={'username'}
               placeholder={'username'} onChange={onChange}/>
        <label htmlFor={'email'}>Email: </label>
        <input required={true} type={'email'} id={'email'} name={'email'}
               placeholder={'Email'} onChange={onChange}/>
        <label htmlFor={'password'}>Password:</label>
        <input required={true} type={'password'} id={'password'}
               name={'password'} placeholder={'Password'} onChange={onChange}/>
        <Button type={'submit'}>Submit</Button>
      </Form>
      </Wrapper>
  );
};

export default SignUp;