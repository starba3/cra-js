import * as Yup from 'yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useRouter, useSearchParams } from 'src/routes/hooks';
// data access
import { sendResetPasswordRequest, sendForgetPasswordRequest } from 'src/data-access/auth';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useCountdownSeconds } from 'src/hooks/use-countdown';
// auth
import { useAuthContext } from 'src/auth/hooks';
// assets
import { SentIcon } from 'src/assets/icons';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField, RHFCode } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function NewNewPasswordView() {
  const { newPassword, forgotPassword } = useAuthContext();

  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Success');
  const [responseSuccess, setResponseSuccess] = useState(true);

  const router = useRouter();

  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  const token = searchParams.get('token');

  const password = useBoolean();

  const { countdown, counting, startCountdown } = useCountdownSeconds(60);

  const VerifySchema = Yup.object().shape({
    code: Yup.string().min(6, 'Code must be at least 6 characters').required('Code is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const defaultValues = {
    code: '',
    email: email || '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifySchema),
    defaultValues,
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const restPassword = async () => {
    try {

      const body = {
        email,
        tokon: token,
        newPassword: values.password
      }

      // Send forgot password request
      const response = await sendResetPasswordRequest(body)
      if (response.success) {
        setOpenAlert(true)
        setAlertMessage("Reset password successfuly, you will be redirected to login page in automatically.")

        setTimeout(() => {
          const href = paths.auth.jwt.login
          router.push(href);
        }, 750);
      }
      else {
        setResponseSuccess(false)
        setAlertMessage(response.errorMessage)
        setOpenAlert(true)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      await newPassword?.(data.email, data.code, data.password);


      const body = {
        email,
        tokon: token,
        newPassword: data.password
      }

      // Send forgot password request
      const response = await sendResetPasswordRequest(body)
      if (response.success) {
        setOpenAlert(true)
        setAlertMessage("Reset password successfuly, you will be redirected to login page in automatically.")

        // setTimeout(() => {
        //   const href = paths.auth.jwt.login
        //   router.push(href);
        // }, 750);
      }
      else {
        setResponseSuccess(false)
        setAlertMessage(response.errorMessage)
        setOpenAlert(true)
      }
    } catch (error) {
      console.error(error);
    }
  });

  const handleResendCode = useCallback(async () => {
    try {
      startCountdown();
      await forgotPassword?.(values.email);

      const body = {
        email: values.email
      }

      // Send forgot password request
      const response = await sendForgetPasswordRequest(body)
      if (response.success) {
        setOpenAlert(true)
        setAlertMessage("Request sent succefuly, Please check you Email for new password link")
      }
      else {
        setAlertMessage(response.errorMessage)
        setOpenAlert(true)
      }

    } catch (error) {
      console.error(error);
    }
  }, [forgotPassword, startCountdown, values.email]);

  const renderForm = (
    <Stack spacing={3} alignItems="center">
      <RHFTextField
        name="email"
        label="Email"
        placeholder="example@gmail.com"
        InputLabelProps={{ shrink: true }}
      />

      {/* <RHFCode name="code" /> */}

      <RHFTextField
        name="password"
        label="Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <RHFTextField
        name="confirmPassword"
        label="Confirm New Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <LoadingButton
        fullWidth
        size="large"
        variant="contained"
        type="submit"
        onClick={() => restPassword()}
        loading={isSubmitting}
      >
        Update Password
      </LoadingButton>

      <Collapse in={openAlert}>
        <Alert
          // severity={alertMessage === Translate('success') ? 'success' : 'error'}
          severity={responseSuccess ? "success" : "error"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <Iconify icon="ic:round-close" /> 
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alertMessage}
        </Alert>
      </Collapse>

      <Typography variant="body2">
        {`Don’t recieve reset email? `}
        <Link
          variant="subtitle2"
          onClick={handleResendCode}
          sx={{
            cursor: 'pointer',
            ...(counting && {
              color: 'text.disabled',
              pointerEvents: 'none',
            }),
          }}
        >
           Resend email {counting && `(${countdown}s)`}
        </Link>
      </Typography>

      <Link
        component={RouterLink}
        href={paths.auth.amplify.login}
        color="inherit"
        variant="subtitle2"
        sx={{
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="eva:arrow-ios-back-fill" width={16} />
        Return to sign in
      </Link>
    </Stack>
  );

  const renderHead = (
    <>
      <SentIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ my: 5 }}>
        {/* <Typography variant="h3">Request sent successfully!</Typography> */}
        <Typography variant="h3">Enter new password</Typography>

        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We&apos;ve sent a 6-digit confirmation email to your email.
          <br />
          Please enter the code in below box to verify your email.
        </Typography> */}
      </Stack>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
