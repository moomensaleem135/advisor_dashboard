import { css } from '@emotion/react';
import styled from '@emotion/styled';

const dynamicStyles = ({ bgColor = '#0977EC', color = '#ffffff' }) => css`
  background-color: ${bgColor};
  color: ${color};
`;

export const ChipStyle = styled.div`
  border-radius: 4px;
  padding: 4px;
  ${dynamicStyles};
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  @media (max-width: 1600px) {
    font-size: 10px;
    width: 130px;
  }
`;
