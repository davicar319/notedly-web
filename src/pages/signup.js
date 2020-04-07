import React, { useEffect } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

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
  useEffect(() => {
    //Update the document title.
    document.title = 'Sign Up -- Notedly';
  });

  return (
    <div>
      <Wrapper>
        <Form>
          <label htmlFor={'username'}>Username:</label>
          <input required={'true'} type={'text'} id={'username'} name={'username'}
                 placeholder={'username'}/>
          <label htmlFor={'email'}>Email: </label>
          <input required={'true'} type={'email'} id={'email'} name={'email'}
                 placeholder={'Email'}/>
          <label htmlFor={'password'}>Password:</label>
          <input required={'true'} type={'password'} id={'password'}
                 name={'password'} placeholder={'Password'}/>
          <Button type={'submit'}>Submit</Button>
        </Form>
      </Wrapper>
    </div>
  );
};

export default SignUp;