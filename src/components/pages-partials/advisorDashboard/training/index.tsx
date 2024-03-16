'use client';
import { COLORS } from '@/constants/colors';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import { StyledTopics } from '../task/meeting/index.styles';
import { RadioDiv } from '../task/personal/index.styles';
import {
  ButtonDiv,
  ButtonStyle,
  Desc,
  Detail,
  FlexBox,
  FlexDiv,
  FormMain,
  Head,
  Heading,
  Icon,
  ImageDiv,
  Main,
  ResourceDiv,
  StyledButton,
  StyledImage,
  StyledText,
  Table,
  TextDiv,
  Title
} from './index.styles';
import { useRouter } from 'next/navigation';
import { BackText } from '../message/index.styles';

const Training = () => {
  const [showAdditionalContent, setShowAdditionalContent] = React.useState<number | null>(null);

  const handleBeginClick = (index: number) => {
    setShowAdditionalContent(showAdditionalContent === index ? null : index);
  };

  const buttons = ['Message Center', 'Make a Request', 'Task', 'Training'];
  const texts = [
    'Welcome and Overview of Key Terms.',
    'Phishing vs Malware.',
    'Step-by-Step Cyberattack',
    'Social Engineering Cyberattacks',
    'Tips while Traveling'
  ];

  const router = useRouter();
  const navigation = () => {
    router.push('/advisor_dashboard/messagecenter');
  };

  return (
    <Main>
      <Box sx={{ display: 'flex', cursor: 'pointer' }} onClick={navigation}>
      <Image src="/svgs/goback.svg" height={30} width={25} alt='' />
        <BackText>Back</BackText>
      </Box>
      <Heading>Your Compliance Requests</Heading>
      <FlexDiv>
        {buttons.map((button, index) => (
          <LinkStyle
            key={index}
            href={`/advisor_dashboard/${button.toLowerCase().replace(/\s+/g, '')}`}
            passHref
          >
            <StyledButton
              key={index}
              style={{
                backgroundColor: button === 'Training' ? `${COLORS.BLUE_600}` : 'default-color',
                color: button === 'Training' ? `${COLORS.WHITE_100}` : 'default-color'
              }}
            >
              {button}
            </StyledButton>
          </LinkStyle>
        ))}
      </FlexDiv>
      <FormMain>
        <Title>Training</Title>
        <Desc>Cybersecurity Annual Training | Training 2 | Training 3</Desc>
        <Table>
          {texts.map((text, index) => (
            <>
              <FlexBox>
                <TextDiv>
                  <Icon src="/svgs/dropdown.svg" height={20} width={20} alt="" />
                  <StyledText key={index}>{text}</StyledText>
                </TextDiv>
                <ButtonDiv>
                  <ButtonStyle onClick={() => handleBeginClick(index)}>Begin</ButtonStyle>
                </ButtonDiv>
                <StyledTopics sx={{ textDecoration: 'underline' }}>Take Quiz</StyledTopics>
                <Box sx={{ display: 'flex' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="checkbox"
                        sx={{
                          '&.Mui-checked': {
                            color: `${COLORS.BLUE_200}`,
                            '& .MuiSvgIcon-root': {
                              fill: `${COLORS.BLUE_200}`
                            }
                          }
                        }}
                      />
                    }
                    label="Mark Complete"
                  />
                </Box>
              </FlexBox>
              <div>
                {showAdditionalContent === index && (
                  <FlexBox>
                    <ImageDiv>
                      <StyledImage src="/svgs/video.svg" height={200} width={360} alt="" />
                    </ImageDiv>
                    <ResourceDiv>
                      <Head>Resources</Head>
                      <Detail>2-3 sentence overview of the training.</Detail>
                      <Image src="/svgs/pdf.svg" height={30} width={30} alt="" />
                    </ResourceDiv>
                  </FlexBox>
                )}
              </div>
            </>
          ))}
        </Table>
      </FormMain>
    </Main>
  );
};

export default Training;
