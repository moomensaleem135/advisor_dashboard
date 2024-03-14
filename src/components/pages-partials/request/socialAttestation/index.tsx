import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import React, { useState } from 'react';

import {
  ReportButtonBox,
  ReportCustomButton,
  RequestInputBox,
  SecondGridMainBox,
  SubjectHeading
} from '../index.styles';
import Editor from '../jodit_editor';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledBox } from '../meetingAttestation/index.styles';
import { HeaderSubTitle, HeaderTitle, HeaderWrapper } from '../newAdvisor/index.styles';
import { IRequestProps } from '../utils/interface';
import {
  SocialRadioContainer,
  SocialRadioWrapper,
  SocialTextBox,
  SocialTextContainer
} from './index.styles';

export default function SocialAttestation({ content, setContent, title, subTitle }: IRequestProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [subject, setSubject] = useState<string>();

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <HeaderWrapper>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubTitle>{subTitle}</HeaderSubTitle>
      </HeaderWrapper>
      <SecondGridMainBox>
        <SubjectHeading>Subject</SubjectHeading>
        <Box>
          <RequestInputBox
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </Box>

        <Editor content={content} setContent={setContent} />
      </SecondGridMainBox>
      <StyledBox>
        {/* radio button section */}
        <SocialRadioWrapper>
          <SocialRadioContainer>
            <div>*For Advisor to Complete</div>
            <div>Quater Ending</div>
            <RadioGroup
              sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
              row
              aria-label="options"
              name="options"
              value={selectedValue}
              onChange={handleChange}
            >
              <FormControlLabel
                value="March "
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#3A6FB6'
                      }
                    }}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: '#C3CAD2'
                        }}
                      />
                    }
                    checkedIcon={<CircleIcon />}
                  />
                }
                label="March "
              />
              <FormControlLabel
                value="June"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#3A6FB6'
                      }
                    }}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: '#C3CAD2'
                        }}
                      />
                    }
                    checkedIcon={<CircleIcon />}
                  />
                }
                label="June"
              />
              <FormControlLabel
                value="September"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#3A6FB6'
                      }
                    }}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: '#C3CAD2'
                        }}
                      />
                    }
                    checkedIcon={<CircleIcon />}
                  />
                }
                label="September"
              />
              <FormControlLabel
                value="December"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#3A6FB6'
                      }
                    }}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: '#C3CAD2'
                        }}
                      />
                    }
                    checkedIcon={<CircleIcon />}
                  />
                }
                label="December"
              />
            </RadioGroup>
          </SocialRadioContainer>
          <SocialTextContainer>
            <SocialTextBox>
              <div>
                I have submitted all marketing and advertising materials ie., website pages,
                brochures, emails, slide decks and presentations etc. to the CCO for review prior to
                public dissemination.
              </div>
              <div>
                During this quarter I have submitted all social media engagements to the CCO for
                review prior to posting.
              </div>
              <ReportButtonBox>
                <ReportCustomButton variant="contained">Send Request</ReportCustomButton>
              </ReportButtonBox>
            </SocialTextBox>
          </SocialTextContainer>
        </SocialRadioWrapper>
      </StyledBox>
    </div>
  );
}
