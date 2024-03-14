'use client';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';

import {
  Container,
  Flex,
  HeadContainer,
  StyledGenerateReportButton,
  StyledRecordsHeader,
  TableWrapper
} from './index.styles';
import Table from './Table';
import TableHead, { TableHeadProps } from './tableHead';
export interface IDetail {
  date: string;
  activity: string;
  name?: string;
  email: string;
  documents?: {
    name?: string;
    size: string;
    url: string;
  };
}
interface IDocArchiveData {
  name: string;
  size: string;
  url: string;
}
export interface ArchiveData {
  date: string;
  status?: string;
  activity: string;
  activityTag?: string;
  name?: string;
  email?: string;
  documents?: IDocArchiveData[];
  detail: IDetail[];
}
const columnNames = ['Date', 'ACTIVITY', 'DOCUMENTS'];

const data: ArchiveData[] = [
  {
    date: '9/2/23',
    status: 'overdue',
    activity: 'Client Billing Review - Quarterly',
    activityTag: 'VALUATION & FEES',
    name: 'John Smith',
    email: 'jsmith@company.com',
    documents: [{ name: 'Checklist V2.doc', size: '50KB', url: '' }],
    detail: [
      {
        date: '3/2/23',
        activity: `Kevin uploaded a new file "Checklist V2"`,
        name: 'John Smith',
        email: 'jsmith@company.com',
        documents: { name: 'Checklist V2.doc', size: '50KB', url: '' }
      },
      {
        date: '1/2/23',
        activity: `Kevin deleted the file “Checklist V1” from task`,
        name: 'John Smith',
        email: 'jsmith@company.com'
      },
      {
        date: '30/1/23',
        activity: `Kevin added a new file "Checklist V1"`,
        email: 'jsmith@company.com',
        documents: { name: 'Checklist V1.doc', size: '50KB', url: '' }
      }
    ]
  },
  {
    date: '29/1/23',
    status: 'completed',
    activity: 'Client Billing Review - Quarterly',
    activityTag: 'VALUATION & FEES',
    name: 'John Smith',
    email: 'jsmith@company.com',
    documents: [
      { name: 'Checklist V2.doc', size: '50KB', url: '' },
      { name: 'Billing Review.doc', size: '50KB', url: '' }
    ],
    detail: [
      {
        date: '19/1/23',
        activity: 'Kevin marked task as completed',
        name: 'John Smith',
        email: 'jsmith@company.com'
      },
      {
        date: '15/1/23',
        activity: `Kevin uploaded a new file "Checklist V2"`,
        name: 'John Smith',
        email: 'jsmith@company.com',
        documents: { name: 'Checklist V2.doc', size: '50KB', url: '' }
      },
      {
        date: '9/1/23',
        activity: `Kevin deleted the "Checklist V1" from task`,
        name: 'John Smith',
        email: 'jsmith@company.com'
      },
      {
        date: '3/1/23',
        activity: `Kevin added a new file "Checklist V1"`,
        email: 'jsmith@company.com',
        documents: { name: 'Checklist V1.doc', size: '50KB', url: '' }
      }
    ]
  }
];
console.log({ data });
const ArchivePartial = () => {
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>({});

  const handletoggleHistory = (index: number) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [index]: !prevExpandedRows[index]
    }));
  };

  return (
    <Flex>
      <Container>
        <HeadContainer>
          <StyledRecordsHeader style={{ color: '#2E3338', fontWeight: '800', fontSize: '34px' }}>
            Archive
          </StyledRecordsHeader>
          <StyledGenerateReportButton>Generate Report</StyledGenerateReportButton>
        </HeadContainer>

        <TableWrapper>
          <TableHead columnNames={columnNames} />
          <tbody>
            {data.map((data, index) => (
              <>
                <Table data={data} />
                <HistoryContainer onClick={() => handletoggleHistory(index)}>
                  <HistoryContainertd>
                    <Image
                      src={'/svgs/down.svg'}
                      alt="arrowDown"
                      width={11}
                      height={6}
                      style={{ rotate: expandedRows[index] ? '-90deg' : '0deg' }}
                    />
                    <HistoryText>View History </HistoryText>
                  </HistoryContainertd>
                </HistoryContainer>
                {!expandedRows[index] && <Table data={data.detail} />}
                <br />
              </>
            ))}
          </tbody>
        </TableWrapper>
      </Container>
    </Flex>
  );
};

export default ArchivePartial;

const HistoryContainer = styled.tr`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
  border: none !important;
`;

const HistoryContainertd = styled.td`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 !important;
  border: none !important;
`;

const HistoryText = styled.div`
  color: #4f9ef8;
  font-size: 12px;
  margin-left: 0.5rem;
  font-weight: 700;
`;
