import { Helmet } from 'react-helmet-async';
// sections
import { JwtNewPasswordView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Forgot Password</title>
      </Helmet>

      <JwtNewPasswordView />
    </>
  );
}
