'use client';
import { COLORS } from '@/constants/colors';
import Image from 'next/image';
import React from 'react';

import {
  StyledHeaderText,
  StyledHeaderWrapper,
  StyledTasksContainer,
  StyledTasksFluidContainer
} from '../../tasks/index.styles';
import {
  CyberCardBottom,
  CyberCardBottomText,
  CyberCardHeader,
  CyberCardImageContainer,
  StyledFirstRow,
  StyledSecondRow
} from './index.styles';

interface CardData {
  img: string;
  title: string;
  description: string;
  style: Record<string, any>;
}

const cardsData: CardData[] = [
  {
    img: '/images/advisortraining.jpg',
    title: 'Advisor Training',
    description: 'Set up, track and manage custom cybersecurity training for your advisors',
    style: { flex: '1 0 25%' }
  },
  {
    img: '/images/phishing.jpg',
    title: 'Phishing Simulator',
    description: 'Avoid costly scams by training your advisors what messages to watch out for',
    style: { flex: '1 0 25%' }
  },
  {
    img: '/images/incidentreport.jpg',
    title: 'Incident Reports',
    description: 'Keep track of and  maintain key insight into each cyber related incident',
    style: { flex: '1 0 25%' }
  }
];

const cardData = [
  {
    img: '/images/duedeligence.jpg',
    title: 'Due Diligence',
    description: 'Keep track of vendors, fees,performance, reviews and risk assessments',
    style: { flex: 0.4 }
  },
  {
    img: '/images/cybertraining.jpg',
    title: 'Cyber Policies',
    description: 'Store all cyber policies here for quick and convenient access',
    style: { flex: 0.4 }
  }
];

const renderCards = (data: CardData[]) => {
  return data.map((card, index) => (
    <div
      key={index}
      style={{
        flex: `${card.style}`,
        height: '266px',
        width: '393px',
        // border: `1px solid ${COLORS.GREY_800}`,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CyberCardHeader key={index} style={{ border: `1px solid ${COLORS.GREY_800}` }}>
        {card.title}
      </CyberCardHeader>
      <CyberCardImageContainer>
        <Image src={card.img} alt={card.title} layout="fill" objectFit="cover" />
        <CyberCardBottom>
          <CyberCardBottomText>{card.description}</CyberCardBottomText>
        </CyberCardBottom>
      </CyberCardImageContainer>
    </div>
  ));
};

const CybersecurityHub = () => {
  return (
    <StyledTasksFluidContainer style={{ padding: '20px 0' }}>
      <StyledTasksContainer>
        <StyledHeaderWrapper style={{ justifyContent: 'center' }}>
          <StyledHeaderText>Cybersecurity Hub</StyledHeaderText>
        </StyledHeaderWrapper>
        <StyledFirstRow>{renderCards(cardsData)}</StyledFirstRow>
        <StyledSecondRow>{renderCards(cardData)}</StyledSecondRow>
      </StyledTasksContainer>
    </StyledTasksFluidContainer>
  );
};

export default CybersecurityHub;
