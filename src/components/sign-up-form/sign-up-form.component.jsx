import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.compnent";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm Password not match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      }
      console.log("User creation encounted an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          value={displayName}
          type="text"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          name="email"
          value={email}
          type="email"
          required
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          value={password}
          type="password"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          required
          onChange={handleChange}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
