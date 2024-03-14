'use client';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';

import {
  StyledHeaderText,
  StyledHeaderWrapper,
  StyledBoardingContainer,
  StyledBoardingFluidContainer,
  StyledBox,
  BoardingListWrapper,
  BoardingListBox,
  BoardingStepsContainer,
  BoardingStep,
  BoardingStepsNumber,
  StyledVideoWrapper
} from './index.styles';

interface TaskItemProps {
  number: number;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const BoardingSteps = ({ number, text, isSelected, onClick }: TaskItemProps) => (
  <BoardingStepsContainer isSelect={isSelected} onClick={onClick}>
    <BoardingStep>
      <BoardingStepsNumber isSelect={isSelected}>{number}</BoardingStepsNumber>
      <div>{text}</div>
    </BoardingStep>
    <Checkbox
      sx={{
        '&.Mui-checked': {
          color: '#3a6fb6'
        }
      }}
    />
  </BoardingStepsContainer>
);

export default function OnBoarding() {
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const handleTaskClick = (taskNumber: number) => {
    if (selectedTasks.includes(taskNumber)) {
      setSelectedTasks(selectedTasks.filter((num) => num !== taskNumber));
    } else {
      setSelectedTasks([...selectedTasks, taskNumber]);
    }
  };

  const boardingSteps = [
    { number: 1, text: 'Watch the brief video.' },
    { number: 2, text: 'Download checklist and best practices.' },
    {
      number: 3,
      text: `Upload your policies here. Include the following:
    Policies & Procedures, Code of Ethics, Cybersecurity Policy, ADV 2A, B and 3,Social Media and Cybersecurity Policies.`
    },
    { number: 4, text: 'Upload clients, book and record info here.' },
    { number: 5, text: 'White label the following emails. Add to allowed list in email system.' },
    { number: 6, text: 'Add all firm employees.' }
  ];

  return (
    <StyledBoardingFluidContainer>
      <StyledBoardingContainer>
        <StyledHeaderWrapper>
          <StyledHeaderText>Begin Here. New Client Onboarding</StyledHeaderText>
        </StyledHeaderWrapper>
        <StyledBox>
          <BoardingListWrapper>
            <BoardingListBox>
              {boardingSteps.map((steps) => (
                <BoardingSteps
                  key={steps.number}
                  number={steps.number}
                  text={steps.text}
                  isSelected={selectedTasks.includes(steps.number)}
                  onClick={() => handleTaskClick(steps.number)}
                />
              ))}
            </BoardingListBox>
          </BoardingListWrapper>
          <StyledVideoWrapper>
            <video width="502" height="370" controls style={{ borderRadius: 4 }}>
              <source src="/path/to/your/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </StyledVideoWrapper>
        </StyledBox>
      </StyledBoardingContainer>
    </StyledBoardingFluidContainer>
  );
}
