import { useState } from 'react';

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase';

import { FormInput, Button } from '../';
import { BUTTON_TYPE_CLASSES } from '../../utils/types';

import { SignInContainer, ButtonsContainer } from './SignInForm.styles';

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);

      setFormFields({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your Email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
