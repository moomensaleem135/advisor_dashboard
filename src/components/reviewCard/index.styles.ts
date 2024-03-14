import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Link from 'next/link';

import Button from '@/components/core/Button';

const dynamicStyle = ({ color = 'white' }) => css`
  color: ${color};
`;

export const ReviewContainer = styled.div`
  margin: 0 8px;
  background-color: white;
  border-radius: 4px;
  padding: 13px;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ReviewHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewTitle = styled.div`
  font-weight: 700;
  font-size: 17px;
`;

export const OverDueChip = styled.div`
  border-radius: 4px;
  padding: 4px;
  background-color: red;
  color: white;
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
`;

export const ProgressChip = styled.div`
  border-radius: 4px;
  padding: 4px;
  background-color: #c5dffc;
  color: #0659b1;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  width: 120px;

  @media (max-width: 1600px) {
    font-size: 10px;
    width: 130px;
  }
`;

export const ReviewType = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #5c6670;
`;

export const ReviewDescription = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #151618;
  border-bottom: 1px solid #c3cad2;
  padding-bottom: 10px;
`;

export const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Resources = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-left: -6px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 2;
`;

export const ImageText = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin-left: 6px;
  color: #151618;
`;

export const ButtonStyles = styled(Button)`
  background-color: #3a6fb6;
  border-radius: 9px;
  width: 100%;
  height: 44px;
  font-weight: 500;
  font-size: 17px;
`;
export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 17px;

  padding-right: 10px;

  /* font-weight: 600; */

  ${dynamicStyle}
`;
export const SubmitButtonStyle = styled(Box)`
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  padding-left: 10px;
  padding-right: 10px;
`;
