import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase';

import { SignUpForm } from '../../components';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
