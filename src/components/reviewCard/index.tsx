import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import {
  ButtonStyles,
  ImageContainer,
  ImageText,
  ImageWrapper,
  LinkStyle,
  OverDueChip,
  ProgressChip,
  ResourceContainer,
  Resources,
  ReviewContainer,
  ReviewDescription,
  ReviewHeader,
  ReviewHeaderWrapper,
  ReviewTitle,
  ReviewType
} from './index.styles';

interface Review {
  title: string;
  type: string;
  status: string;
  description: string;
  image1: React.ReactNode;
  image2: React.ReactNode;
}

const ReviewCard: React.FC<Review> = ({ title, type, status, description, image1, image2 }) => {
  const router = useRouter();

  return (
    <ReviewContainer>
      <ReviewHeaderWrapper>
        <ReviewHeader>
          <ReviewTitle>{title}</ReviewTitle>
          {status === 'OVERDUE' ? (
            <OverDueChip>OVERDUE</OverDueChip>
          ) : status === 'Upcoming' ? (
            <ProgressChip>Upcoming</ProgressChip>
          ) : (
            ''
          )}
        </ReviewHeader>
        <ReviewType>{type}</ReviewType>
      </ReviewHeaderWrapper>
      <ReviewDescription>{description}</ReviewDescription>
      <ResourceContainer>
        <Resources>RESOURCES</Resources>
        <ImageContainer>
          <ImageWrapper>
            <ImageText>Checklist</ImageText>
            {image1}
          </ImageWrapper>
          <ImageWrapper>
            <ImageText>
              {title === 'Client Billing Review - Quarterly'
                ? 'Billing WorkBook'
                : 'Archive Review'}
            </ImageText>
            {image2}
          </ImageWrapper>
        </ImageContainer>
      </ResourceContainer>
      <LinkStyle
        href={
          title === 'Client Billing Review - Quarterly'
            ? '/home/review_form'
            : '/home/correspondence_form'
        }
      >
        <ButtonStyles>Begin Review</ButtonStyles>
      </LinkStyle>
    </ReviewContainer>
  );
};

export default ReviewCard;
