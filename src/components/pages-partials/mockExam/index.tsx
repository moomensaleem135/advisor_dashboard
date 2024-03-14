'use client';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React from 'react';

import { StyledVideoWrapper } from '../onboarding/index.styles';
import { StyledHeaderText } from '../tasks/index.styles';
import Card from './card';
import {
  StyledMockContainer,
  StyledMockFluidContainer,
  StyledMockHeader,
  StyledMockText,
  StyledStep
} from './index.styles';

const steps = [
  {
    label: 'Select campaign settings',
    data: {
      color: '#051B48',
      tooltipText: 'Preparation',
      buttonText: 'EXAM PRIORITIES'
    },
    options: {
      upperText: 'Keep on top of the latest SEC Exam priorities.',
      lowertext: 'Stay current with all required tasks.',
      thirdtext: 'Research and know what to expect including the standard timing of exams.'
    }
  },
  {
    label: 'Create an ad group',
    data: {
      color: '#1C53A6',
      tooltipText: 'Audit Request List',
      buttonText: 'Risk Alerts'
    },
    options: {
      upperText: 'Research sample audit request lists from the SEC.',
      lowertext: 'Review the request lists including cybersecurity and limited scope exams.',
      thirdtext: 'Study Risk alerts as they become available.'
    }
  },
  {
    label: 'Create an ad',
    data: {
      color: '#2B75E2',
      tooltipText: 'Procure & Submit',
      buttonText: 'Tracking System'
    },
    options: {
      upperText: 'Submit each document exactly as requested by the SEC.',
      lowertext: 'Keep tracking system up-to-date.',
      thirdtext: 'Make a copy of each piece of correspondence.'
    }
  },
  {
    label: 'Select campaign settings',
    data: {
      color: '#5898F6',
      tooltipText: 'Interview Process',
      buttonText: 'Firm Presentation'
    },
    options: {
      upperText: 'Review interview best practices.',
      lowertext: 'Notify key employees. Have at least one other staff member available.',
      thirdtext: 'Be professional, dont take it personal.'
    }
  },
  {
    label: 'Create an ad group',
    data: {
      color: '#8AB9FF',
      tooltipText: 'Exit and Findings',
      buttonText: 'Over 95%'
    },
    options: {
      upperText: 'SEC findings and recommendation for improvement, sanctions or both.',
      lowertext: 'Deficiency letters are common.',
      thirdtext: 'Take corrective measures seriously.'
    }
  }
];
const MockExam = () => {
  return (
    <StyledMockFluidContainer style={{ padding: '15px 0' }}>
      <StyledMockContainer>
        <StyledMockHeader>
          <StyledHeaderText>Mock SEC Exam Tool</StyledHeaderText>
          <StyledMockText>
            <span>Listed below are the typical stages during an SEC examination.</span>
            <span>
              Click each stage for a video overview along with templates,checklists and pitfalls to
              avoid.
            </span>
          </StyledMockText>
          <StyledVideoWrapper>
            <video width="350" height="170" controls style={{ borderRadius: 4 }}>
              <source src="/path/to/your/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </StyledVideoWrapper>
        </StyledMockHeader>
        <Stepper alternativeLabel style={{ marginTop: '-15px' }}>
          {steps.map((step, index) => (
            <StyledStep key={index} color={step.data.color}>
              <StepLabel>
                <Card
                  color={step.data.color}
                  tooltipText={step.data.tooltipText}
                  buttonText={step.data.buttonText}
                  options={step.options}
                  title="mock"
                />
              </StepLabel>
            </StyledStep>
          ))}
        </Stepper>
      </StyledMockContainer>
    </StyledMockFluidContainer>
  );
};

export default MockExam;
