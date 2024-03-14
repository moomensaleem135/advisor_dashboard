import styled from '@emotion/styled';
import { TextField, Grid, Typography } from '@mui/material';

import { COLORS } from '../../../constants/colors';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  background-color: ${COLORS.WHITE_100};
`;

export const Container = styled(Grid)`
  width: 75%;
  height: 100vh;
  justify-content: start;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const HeadContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
`;

export const StyledRecordsHeader = styled.h1`
  color: #2e3338;
  font-weight: 800;
  font-size: 34px;
`;

export const StyledGenerateReportButton = styled.button`
  font-weight: 600;
  border: none;
  height: max-content;
  padding: 12px 16px;
  background-color: #3a6fb6;
  border-radius: 9px;
  color: #ffffff;
  height: 46px;
  font-size: 17px;
  cursor: pointer;
`;

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 2rem;

  thead {
    th {
      font-size: 12px;
      font-weight: 500;
    }
  }

  th,
  td {
    padding: 0.5rem 1rem;
    text-align: left;
  }

  tbody {
    tr {
      border: 1px solid #c3cad2;
    }
    tr:first-child {
      border-top-left-radius: 10px;
      td:first-child {
      }
    }
    tr:first-child {
      td:last-child {
        border-top-right-radius: 10px;
      }
    }

    tr:last-child {
      td:first-child {
        border-bottom-left-radius: 10px;
      }
    }
    tr:last-child {
      td:last-child {
        border-bottom-right-radius: 10px;
      }
    }
  }

  th {
  }

  tr:nth-child(even) {
  }

  tr:hover {
  }
`;
