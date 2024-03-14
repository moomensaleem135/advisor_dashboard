'use client';
import Image from 'next/image';
import React from 'react';

import {
  CardBox,
  StyledCard,
  StyledCardContainer,
  StyledCardDescription,
  StyledCardInfo,
  StyledCardTitle,
  StyledHeadingContainer,
  StyledImageContainer,
  StyledImageTextBox,
  StyledImageTextDescription,
  StyledImageTextTitle,
  StyledSightsContainer,
  StyledSightsFluidContainer
} from './index.styles';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }: CardProps) => (
  <StyledCard>
    <CardBox />
    <StyledCardInfo>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDescription>{description}</StyledCardDescription>
    </StyledCardInfo>
  </StyledCard>
);

export default function InSight() {
  const cardsData = [
    {
      title: 'Article 1',
      description: 'How to fill out a correspondence, and why.'
    },
    {
      title: 'Article 2',
      description: 'How to fill out a correspondence, and why.'
    },
    {
      title: 'Article 3',
      description: 'How to fill out a correspondence, and why.'
    },
    {
      title: 'Article 4',
      description: 'How to fill out a correspondence, and why.'
    },
    {
      title: 'Article 5',
      description: 'How to fill out a correspondence, and why.'
    },
    {
      title: 'Article 6',
      description: 'How to fill out a correspondence, and why.'
    }
  ];

  return (
    <StyledSightsFluidContainer>
      <StyledSightsContainer>
        <StyledHeadingContainer>Webinars | Latest Compliance Updates</StyledHeadingContainer>
        <StyledImageContainer>
          <Image src={'/svgs/webinar.svg'} width={500} height={300} alt="webinar" />
          <StyledImageTextBox>
            <StyledImageTextTitle>The SEC’s New Private Fund Rule</StyledImageTextTitle>
            <StyledImageTextDescription>
              Why you should pay attention even if you don’t advise private funds.
            </StyledImageTextDescription>
          </StyledImageTextBox>
        </StyledImageContainer>
        <StyledCardContainer>
          {cardsData.map((data, index) => (
            <Card key={index} title={data.title} description={data.description} />
          ))}
        </StyledCardContainer>
      </StyledSightsContainer>
    </StyledSightsFluidContainer>
  );
}
