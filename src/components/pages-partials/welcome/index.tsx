'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '@/components/core/Button';

import {
  Btn,
  DivButton,
  FooterContainer,
  Heading,
  ImageDiv,
  LogoBox,
  MainContainer,
  Nav,
  SubHeading,
  TextDiv
} from './index.styles';

const Welcome = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <Nav>
        <LogoBox>
          <Image src="/svgs/secureRIALogo.svg" width={150} height={50} alt="" />
        </LogoBox>
        <DivButton>
          <Button onClick={() => router.push('/login')}>Login</Button>
        </DivButton>
      </Nav>
      <ImageDiv>
        <TextDiv>
          <Heading>- Modern Compliance Software -</Heading>
          <div style={{ fontSize: 28, color: '#FCFDFF', fontWeight: 500 }}>
            DESIGNED FOR <br /> Investment Advisory Firms <br />
          </div>
          <SubHeading>Eliminate the Guesswork - Protect What You’ve Built</SubHeading>
        </TextDiv>
        <Btn>
          <Button>Schedule Demo</Button>
        </Btn>
      </ImageDiv>
      <FooterContainer />
    </MainContainer>
  );
};

export default Welcome;
