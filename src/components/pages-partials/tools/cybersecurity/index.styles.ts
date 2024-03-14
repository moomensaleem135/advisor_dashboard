import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';

export const StyledFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  /* padding: 0 26px; */
`;

export const StyledSecondRow = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 60px;
  margin: 0 120px;
`;

export const CyberCardHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid;
  font-size: 28px;
  font-weight: 500;
`;

export const CyberCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CyberCardBottom = styled.div`
  position: absolute;
  border: 1px solid ${COLORS.GREY_400};
  background: ${COLORS.GREY_200};
  opacity: 0.9;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 5px 0;
`;

export const CyberCardBottomText = styled.div`
  z-index: 2;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;
