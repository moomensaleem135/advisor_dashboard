'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAuthDataSelector, clearError, signIn } from '@/store/auth';
import { loginValidation } from '@/validations/index';
import { Box, CircularProgress } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import FieldInput from '@/components/core/FieldInput';

import {
  StyledGridRight,
  Heading,
  FlexRow,
  DivButton,
  Container,
  DivSpace,
  SubHeading,
  LogoBox,
  SignInButton,
  Footer,
  StyledBackHome
} from './index.styles';

export interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { status, error, isAuthenticated, isNavigated } = useAppSelector(getAuthDataSelector);

  const onFormSubmit = async (values: FormValues) => {
    dispatch(signIn(values));
  };

  useEffect(() => {
    if (error && error.length > 0) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error]);

  if (isAuthenticated === true && !isNavigated) {
    router.push('/advisor_dashboard');
  }

  return (
    <Container>
      <StyledGridRight>
        <LogoBox>
          <Image src="/svgs/secureRIALogo.svg" height={100} width={250} alt="" />
        </LogoBox>
        <SubHeading>Compliance Dashboard</SubHeading>
        <Heading>Secure Login</Heading>
        <DivSpace />
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={() => loginValidation}
          onSubmit={onFormSubmit}
        >
          {({ errors, touched }) => {
            return (
              <Form className="login-form">
                <Field
                  as={FieldInput}
                  id="email"
                  name="email"
                  placeholder="User ID"
                  error={errors.email && touched.email ? true : false}
                  helperText={<ErrorMessage name="email" />}
                />
                <DivSpace />
                <Field
                  as={FieldInput}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  error={errors.password && touched.password ? true : false}
                  helperText={<ErrorMessage name="password" className="color-white" />}
                />
                <FlexRow>
                  <p>Forgot Your Password ?</p>
                </FlexRow>
                <DivButton>
                  <SignInButton type="submit">
                    {status === 'pending' ? (
                      <CircularProgress sx={{ color: 'white' }} size={20} />
                    ) : (
                      'Sign In'
                    )}
                  </SignInButton>
                </DivButton>
              </Form>
            );
          }}
        </Formik>
      </StyledGridRight>
      <div style={{ marginTop: 15 }}>
        <StyledBackHome>Back to Home</StyledBackHome>
      </div>
      <Footer />
    </Container>
  );
}
