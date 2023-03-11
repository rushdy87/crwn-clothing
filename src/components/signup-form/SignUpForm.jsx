import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase';

import { FormInput } from '../';

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
        setFormFields({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setError('');
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('The password not match');
    }
  };

  return (
    <div>
      <h1>Sign up with your Email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        {!!error && <div className="error">{error}</div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
