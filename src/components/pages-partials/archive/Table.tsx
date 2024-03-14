import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

import Chip from '@/components/core/chip';
import { LinkStyle } from '@/components/reviewCard/index.styles';

import { ArchiveData, IDetail } from '.';

interface IData {
  data: ArchiveData | IDetail[];
}
const Table = ({ data }: IData) => {
  console.log({ data });

  if (Array.isArray(data)) {
    // Handle IDetail[] case
    return (
      <>
        {data.map((item: any, index: any) => (
          <TableRow key={index} rowData={item} />
        ))}
      </>
    );
  } else {
    // Handle ArchiveData case
    return <TableRow rowData={data} />;
  }
};
const TableRow = ({ rowData }: any) => {
  return (
    <tr style={{ backgroundColor: rowData.status ? 'white' : '#F4F5F6' }}>
      <td>
        <DocumentContainer>
          {rowData.status && <Chip type={rowData.status}></Chip>}

          <DateSpan
            size={rowData?.status ? '17px' : undefined}
            weight={rowData?.status ? '700' : undefined}
            mt={rowData?.status ? '0.5rem' : undefined}
          >
            {rowData.date}
          </DateSpan>
        </DocumentContainer>
      </td>
      <td style={{ minWidth: '28rem' }}>
        <DocumentContainer>
          {rowData?.status && <Chip type={'disable'} text={'VALUATION & FEES'}></Chip>}
          <ActivitySpan
            size={rowData?.status ? '17px' : undefined}
            weight={rowData?.status ? '700' : undefined}
            underline={rowData?.status ? 'underline' : undefined}
            mt={rowData?.status ? '0.5rem' : undefined}
          >
            <LinkStyle
              onClick={(e) => e.stopPropagation()}
              color="black"
              // href={'/tools/calendar'}
              href={''}
              style={{ fontWeight: rowData.status ? '600' : '400' }}
            >
              {rowData.activity}
            </LinkStyle>
          </ActivitySpan>
        </DocumentContainer>
      </td>
      <td>
        {rowData.documents && (
          <DocumentContainerRow>
            {/* <Image src={'/svgs/doc.svg'} alt="doc" width={32} height={32} /> */}
            <DocCELL onClick={(e) => e.stopPropagation()}>
              {Array.isArray(rowData.documents) ? (
                <span style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                  {rowData.documents.map((ele: any, index: number) => (
                    <span key={index}>
                      <span style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
                        <Image src={'/svgs/doc.svg'} alt="doc" width={32} height={32} />

                        <DocumentName>{ele.name}</DocumentName>
                        <Image
                          src={'/svgs/download.svg'}
                          alt="download"
                          width={32}
                          height={32}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        />
                      </span>
                      {rowData?.status && (
                        <span
                          style={{ marginLeft: '2.5rem', fontWeight: '500', marginTop: '-0.4rem' }}
                        >
                          {ele.size}
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              ) : (
                <span>
                  <span style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
                    <Image src={'/svgs/doc.svg'} alt="doc" width={32} height={32} />

                    <DocumentName>{rowData.documents.name}</DocumentName>
                    <Image
                      src={'/svgs/download.svg'}
                      alt="download"
                      width={32}
                      height={32}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    />
                  </span>
                  <span style={{ marginLeft: '2.5rem', fontWeight: '500', marginTop: '-0.4rem' }}>
                    {rowData.documents.size}
                  </span>
                </span>
              )}
            </DocCELL>
          </DocumentContainerRow>
        )}
      </td>
    </tr>
  );
};

export default Table;

const dynamicStyles = ({ size = '15px', weight = '400', mt = '0' }) => css`
  font-size: ${size};
  font-weight: ${weight};
  margin-top: ${mt};
`;

const alignItem = ({ item = 'start' }) => css`
  align-items: ${item};
`;

const underline = ({ size = '15px', weight = '400', underline = 'none', mt = '0' }) => css`
  text-decoration: ${underline};
  font-size: ${size};
  font-weight: ${weight};
  margin-top: ${mt};
`;

const DocumentName = styled.span`
  color: #0977ec;
  text-decoration: underline;
  cursor: pointer;
`;

const DocumentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${alignItem}
`;

const DocumentContainerRow = styled.div`
  display: flex;
  /* align-items: flex-start; */
  /* width: 100%;
  max-width: 20rem;
  margin-right: auto; */
`;

const DateSpan = styled.span`
  line-height: 22px;
  text-align: center;
  ${dynamicStyles}
`;

const ActivitySpan = styled.span`
  line-height: 22px;
  ${underline}
`;

const DocCELL = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
