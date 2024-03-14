'use client';
import { ExpandMore } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import {
  StyledButton,
  StyledHeaderText,
  StyledHeaderWrapper,
  StyledImageBox,
  StyledImageSize,
  StyledImageText,
  StyledImageTextContainer,
  StyledImageWrapper,
  StyledListItem,
  StyledPolicyContent,
  StyledPolicyItem,
  StyledPolicyWrapper,
  StyledPreview,
  StyledPreviewContainer,
  StyledTableColumns,
  StyledTableHeader,
  StyledTableWrapper,
  StyledTasksContainer,
  StyledTasksFluidContainer
} from './index.styles';

interface Policy {
  title: string;
  imageSrc: string;
  lastUpdated: string;
  previousVersions: Policy[];
}

const downloadImage = (src: string, alt: string): void => {
  // const link = document.createElement('a');
  // link.href = src;
  // // Derive filename from URL
  // const urlParts = src.split('/');
  // const filename = urlParts[urlParts.length - 1];
  // link.download = filename;
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
};

const dummyData: Policy[] = [
  {
    title: 'ADV 2A&B',
    imageSrc: '/svgs/checklist.doc',
    lastUpdated: '8/29/2018',
    previousVersions: [
      {
        title: 'ADV 2A&B',
        imageSrc: '/svgs/checklist.doc',
        lastUpdated: '8/28/2018',
        previousVersions: []
      },
      {
        title: 'ADV 2A&B',
        imageSrc: '/svgs/checklist.doc',
        lastUpdated: '8/27/2018',
        previousVersions: []
      }
    ]
  },
  {
    title: 'Code of Ethics',
    imageSrc: '/svgs/checklist.pdf',
    lastUpdated: '8/29/2018',
    previousVersions: [
      {
        title: 'Code of Ethics',
        imageSrc: '/svgs/checklist.pdf',
        lastUpdated: '8/28/2018',
        previousVersions: []
      },
      {
        title: 'Code of Ethics',
        imageSrc: '/svgs/checklist.pdf',
        lastUpdated: '8/27/2018',
        previousVersions: []
      }
    ]
  }
];

export default function Policies(): JSX.Element {
  const [open, setOpen] = useState<boolean[]>(Array(dummyData.length).fill(true));

  const handleClick = (index: number): void => {
    const newOpenState = [...open];
    newOpenState[index] = !newOpenState[index];
    setOpen(newOpenState);
  };

  const getFileIcon = (filename: string): JSX.Element | null => {
    const extension = filename.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return <Image src={'/svgs/pdf.svg'} width={30} height={30} alt="pdf icon" />;
      case 'doc':
        return <Image src={'/svgs/doc.svg'} width={30} height={30} alt="doc icon" />;
      default:
        return null;
    }
  };

  return (
    <StyledTasksFluidContainer>
      <StyledTasksContainer>
        <StyledHeaderWrapper>
          <StyledHeaderText>My Policies</StyledHeaderText>
          <StyledButton>Add New Policy</StyledButton>
        </StyledHeaderWrapper>
        <StyledTableWrapper>
          <StyledTableHeader>
            <StyledTableColumns>Title</StyledTableColumns>
            <StyledTableColumns>Documents</StyledTableColumns>
            <StyledTableColumns>Last Updated</StyledTableColumns>
          </StyledTableHeader>
          {dummyData.map((policy, index) => (
            <StyledPolicyWrapper key={index}>
              <StyledPolicyItem>
                <StyledPolicyContent>
                  <StyledTableColumns>{policy.title}</StyledTableColumns>
                  <StyledTableColumns>
                    <StyledImageBox onClick={() => downloadImage(policy.imageSrc, policy.title)}>
                      <StyledImageTextContainer>
                        {getFileIcon(policy.imageSrc)}
                        <StyledImageWrapper>
                          <StyledImageText>
                            {policy.imageSrc.split('/').pop()}{' '}
                            <Image
                              src={'/svgs/download.svg'}
                              width={20}
                              height={20}
                              alt="download"
                            />
                          </StyledImageText>
                          <StyledImageSize>50KB</StyledImageSize>
                        </StyledImageWrapper>
                      </StyledImageTextContainer>
                    </StyledImageBox>
                  </StyledTableColumns>
                  <StyledTableColumns>{policy.lastUpdated}</StyledTableColumns>
                </StyledPolicyContent>
              </StyledPolicyItem>
              <StyledPreviewContainer role="button" onClick={() => handleClick(index)}>
                <StyledPreview>
                  {open[index] ? <ExpandMore /> : <ChevronRightIcon />}
                  Previous Versions
                </StyledPreview>
              </StyledPreviewContainer>
              <Collapse in={open[index]}>
                <List component="div" disablePadding>
                  {policy.previousVersions.map((version, versionIndex) => (
                    <ListItem key={versionIndex}>
                      <ListItemText>
                        <StyledListItem>
                          <StyledTableColumns>{version.title}</StyledTableColumns>
                          <StyledTableColumns>
                            <StyledImageBox
                              onClick={() => downloadImage(version.imageSrc, version.title)}
                            >
                              <StyledImageTextContainer>
                                {getFileIcon(version.imageSrc)}
                                <StyledImageWrapper>
                                  <StyledImageText>
                                    {version.imageSrc.split('/').pop()}{' '}
                                    <Image
                                      src={'/svgs/download.svg'}
                                      width={20}
                                      height={20}
                                      alt="download"
                                    />
                                  </StyledImageText>
                                  <StyledImageSize>50KB</StyledImageSize>
                                </StyledImageWrapper>
                              </StyledImageTextContainer>
                            </StyledImageBox>
                          </StyledTableColumns>
                          <StyledTableColumns>{version.lastUpdated}</StyledTableColumns>
                        </StyledListItem>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </StyledPolicyWrapper>
          ))}
        </StyledTableWrapper>
      </StyledTasksContainer>
    </StyledTasksFluidContainer>
  );
}
