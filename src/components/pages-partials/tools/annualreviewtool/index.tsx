'use client';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React from 'react';

import Card from '../../mockExam/card';
import {
  StyledMockContainer,
  StyledMockFluidContainer,
  StyledMockHeader
} from '../../mockExam/index.styles';
import { StyledHeaderText } from '../../tasks/index.styles';
import { StyledBox, StyledStep, StyledYear } from './index.styles';
import YearDropdown from './yearscroller';

const steps = [
  {
    label: 'Select campaign settings',
    data: {
      color: '#051B48',
      tooltipText: 'Regulatory Review',
      buttonText: 'Outline'
    },
    options: {
      upperText:
        'Research the relevant regulatory updates and rule changes that took place in the last 12 months that affect your firm. Ex: DOL Rollover Rule.  ',
      lowertext: 'If there weren’t any rules changes, note the SEC proposals.'
    }
  },
  {
    label: 'Create an ad group',
    data: {
      color: '#1C53A6',
      tooltipText: 'Risk Inventory',
      buttonText: 'Framework'
    },
    options: {
      upperText:
        'Using the framework below conduct a thorough risk assessment including a books and records review.',
      lowertext: 'Update Policies and Procedures accordingly based on our findings.'
    }
  },
  {
    label: 'Create an ad',
    data: {
      color: '#2B75E2',
      tooltipText: 'Policies & Procedures',
      buttonText: 'Outline'
    },
    options: {
      upperText:
        'Review all firm documents for accuracy and relevancy to current business model. Ex: Your firm has implemented a new marketing campaign. ',
      lowertext:
        'Does the marketing campaign follow the Policies and Procedures and Social Media Policy?'
    }
  },
  {
    label: 'Select campaign settings',
    data: {
      color: '#5898F6',
      tooltipText: 'Procedure Review',
      buttonText: 'Template'
    },
    options: {
      upperText:
        'Review all procedures and tests conducted in the last year including billing, due diligence, cybersecurity, fees, IC minutes, advertising and personal security reports.',
      lowertext: ''
    }
  },
  {
    label: 'Create an ad group',
    data: {
      color: '#8AB9FF',
      tooltipText: 'Compliance Meeting',
      buttonText: 'Agenda'
    },
    options: {
      upperText:
        'Conduct a firm wide compliance meeting to discuss regulatory updates, outstanding questions from risk inventory and books and records. Document or record the meeting.',
      lowertext: 'Have plenty of time at the end for questions.'
    }
  },
  {
    label: 'Create an ad group1',
    data: {
      color: '#8AB9FF',
      tooltipText: 'Annual Report',
      buttonText: 'Report'
    },
    options: {
      upperText:
        'This is a comprehensive summary of your findings from items 1-5. List deficiencies in your compliance programs and how you will correct them.',
      lowertext: 'Include documentation to support your steps taken for improvement.'
    }
  }
];

const AnnualReviewTool = () => {
  return (
    <StyledMockFluidContainer style={{ padding: '10px 0 ' }}>
      <StyledMockContainer>
        <StyledMockHeader>
          <StyledHeaderText>Annual Compliance Review</StyledHeaderText>
          <div style={{ marginTop: '-15px' }}>Click on topic for description and template.</div>
          <StyledBox>
            <StyledYear>Year of Report</StyledYear>
            <YearDropdown />
          </StyledBox>
        </StyledMockHeader>
        <Stepper alternativeLabel style={{ marginTop: '-10px', fontSize: '3px' }}>
          {steps.map((step, index) => (
            <StyledStep key={index} color={step.data.color} style={{}}>
              <StepLabel style={{ fontSize: '3px' }}>
                <Card
                  color={step.data.color}
                  tooltipText={step.data.tooltipText}
                  buttonText={step.data.buttonText}
                  options={step.options}
                  title="review"
                />
              </StepLabel>
            </StyledStep>
          ))}
        </Stepper>
      </StyledMockContainer>
    </StyledMockFluidContainer>
  );
};

export default AnnualReviewTool;
