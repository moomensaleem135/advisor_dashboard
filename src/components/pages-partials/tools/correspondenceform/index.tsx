'use client';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

import { LinkStyle } from '@/components/reviewCard/index.styles';

import {
  BottomDiv,
  ButtonDiv,
  CheckDiv,
  CheckListDiv,
  CheckListMainDiv,
  CheckTextDiv,
  CustomLabel,
  CustomSheduleDueDateTypography,
  Download,
  DownloadUpload,
  Form,
  FormDiv,
  Header,
  Heading,
  LabelParagraph,
  LabelText,
  Main,
  OverViewDiv,
  Paragraph,
  SelectedFile,
  StyledButton,
  StyledCheckBox, // Corrected import
  StyledFormControlLabel,
  StyledSuccess,
  StyledTextArea,
  SubHeading,
  SubHeading2,
  SubPara,
  TopDiv
} from './index.styles';

const Questions = [
  {
    name: 'question1',
    question: 'What to look for',
    description:
      'You are looking specifically for the following in your review: client or participant complaints towards the firm, any outside business activity not reported by advisors, any unethical business practices - such as charging fees not disclosed to the client or guaranteeing a result, confidentiality issues or insider trading. In addition, be on the lookout for any misleading, fraudulent or exaggerated claims made by the advisors.'
  },
  {
    name: 'question2',
    question: 'Types of correspondence',
    description:
      'Verify if your firm allows for texting or social messaging with clients. Unless these methods of communication can be archived and regularly reviewed we recommend you avoid communicating with clients via text or social media messaging services.'
  },
  {
    name: 'question3',
    question: 'Terms to include',
    description:
      'In your email archiving system create a saved list with the terms below. These terms should be searched for each quarter in all inbound and outbound emails. The body and subject messages for each advisor should be flagged in your search.Use these terms: Absolute, alternatives, bulletproof, cover up, dissatisfied, fraud, litigate,misallocate, no risk, overcharge, problem, returns, sure thing, unethical, abuse, arbitration,guarantee, laundering, loans, mislead, performance, prohibitive, speculative, suspend, trial,unprofessional, accuse, bulletin board, complaint, guarantee, lawsuit, losses, money back,predict, promise, scam, suitability, suspicious, troubling, violation, illegal, failed investment,nobody will find out, gray area, they owe it to me, do not volunteer information, off the books.'
  },
  {
    name: 'question4',
    question: 'Internal correspondence procedures',
    description:
      'Confirm that all internal email procedures detailed in your Policies and Procedures manual are being followed by all advisors in the firm.'
  },
  {
    name: 'question5',
    question: 'Use the template to save time',
    description:
      'Using the template below, record your findings and archive them in your SecureRIA archiving system.'
  },
  {
    name: 'question6',
    question: 'Follow up',
    description:
      'Once you’ve recorded your findings follow up with those advisors involved regarding the situation in question. Keep detailed records of their responses and log them in your SecureRIA archiving system.'
  }
];

const CorrespondenceOnlineForm = () => {
  const [checkedCount, setCheckedCount] = useState(0);
  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileContent, setSelectedFileContent] = useState(null); // To hold the content of the selected XML file
  const router = useRouter();
  // Event handlers
  const handleChange = (questionName: any, isChecked: any) => {
    if (isChecked) {
      setCheckedCount((prevcount) => prevcount + 1);
    } else {
      setCheckedCount((prevcount) => prevcount - 1);
    }
    console.log({ checkedCount });
  };
  let styledSuccess = '';
  if (checkedCount !== Questions.length || selectedCheckbox === '') {
    styledSuccess = 'Check All the Boxes';
  } else {
    styledSuccess = 'Review is Complete';
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement> | null) => {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFileName(file.name);

      const reader = new FileReader();
      reader.onload = function (event: any) {
        // Define event as any here
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const fileContent = XLSX.utils.sheet_to_html(sheet);
        setSelectedFileContent(fileContent as any);
      };
      reader.readAsBinaryString(file); // Added to read file content
    }
  };

  const checkboxLabels = ['March 31', 'June 30', 'September 30', 'December 31'];
  const handleCheckboxChange = (label: string) => {
    setSelectedCheckbox(label === selectedCheckbox ? '' : label);
  };
  const handlePdfdownload = () => {
    const fileUrls = [
      'https://sria-membership-bucket.s3.us-east-2.amazonaws.com/basic_templates/basic_files/CCOR+Checklist.pdf'
      // Add more file URLs here if needed
    ];

    // Function to download each file with a delay
    const downloadWithDelay = (fileUrl: any, index: any) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = ''; // Use the file name specified by the server
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 1000); // Delay each download by 1 second (1000 milliseconds)
    };

    // Loop through file URLs and trigger download with delay
    fileUrls.forEach((fileUrl, index) => {
      downloadWithDelay(fileUrl, index);
    });
  };
  const handleDownloadClick = () => {
    // List of file URLs to download
    const fileUrls = [
      'https://sria-membership-bucket.s3.us-east-2.amazonaws.com/basic_templates/basic_files/Correspondence+Archive+Review+Template.pdf'
    ];

    // Function to download each file with a delay
    const downloadWithDelay = (fileUrl: any, index: any) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = ''; // Use the file name specified by the server
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 1000); // Delay each download by 1 second (1000 milliseconds)
    };

    // Loop through file URLs and trigger download with delay
    fileUrls.forEach((fileUrl, index) => {
      downloadWithDelay(fileUrl, index);
    });
  };

  return (
    <Main>
      <Header>
        <Heading>Client Correspondence Archive Review </Heading>

        <SubHeading>Frequency:Quarterly</SubHeading>
      </Header>
      <FormDiv>
        <Form>
          <TopDiv>
            <CustomSheduleDueDateTypography>
              Scheduled Date: January 8th
            </CustomSheduleDueDateTypography>
            <CustomSheduleDueDateTypography>Due Date: February 9th</CustomSheduleDueDateTypography>
            <OverViewDiv>
              <Paragraph>
                <p id="overview">Overview</p>
                <span id="overviewdetail">
                  {' '}
                  ‘This is a review of your archived client correspondence including email, texting,
                  website and social messaging. Are your policies & procedures being followed?’
                </span>
              </Paragraph>
            </OverViewDiv>
            <SubPara>Select Quarter Ending</SubPara>
            <CheckDiv>
              {checkboxLabels.map((label) => (
                <StyledFormControlLabel
                  key={label}
                  control={
                    <StyledCheckBox
                      size="small"
                      checked={label === selectedCheckbox}
                      onChange={() => handleCheckboxChange(label)}
                      sx={{ marginTop: '-2px' }}
                    />
                  }
                  label={<CustomLabel>{label}</CustomLabel>}
                />
              ))}
            </CheckDiv>
          </TopDiv>
          <hr />
          <BottomDiv>
            <SubHeading2>Client Correspondence Archive Reviews</SubHeading2>
            <Download onClick={handlePdfdownload}>Download Checklist PDF</Download>
            <CheckListMainDiv>
              {Questions.map((item, i) => (
                <React.Fragment key={item.question + i}>
                  <CheckListDiv>
                    <StyledCheckBox
                      size="small"
                      onChange={(event) => {
                        // handleCheckboxChange(item.name);
                        handleChange(item.name, event.target.checked); // Pass the question name and isChecked value
                      }}
                    />
                    <CheckTextDiv>
                      <LabelText>{item.question}</LabelText>
                      <LabelParagraph>{item.description}</LabelParagraph>
                    </CheckTextDiv>
                  </CheckListDiv>
                </React.Fragment>
              ))}
            </CheckListMainDiv>
            <DownloadUpload onClick={handleDownloadClick}>
              <DownloadUpload>
                Download Client Correspondence Archive Review Template{' '}
              </DownloadUpload>
            </DownloadUpload>
            {selectedFileContent && (
              // <iframe
              //   title="XML Preview"
              //   srcDoc={selectedFileContent}
              //   // src="https://sria-membership-bucket.s3.us-east-2.amazonaws.com/basic_templates/basic_files/Billing+Workbook.xlsx"
              //   style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}
              // />
              <Image
                src={'/svgs/ExcelFile.svg'}
                height={500}
                width={500}
                alt="Excel file"
                style={{ marginLeft: '-20px' }}
              />
            )}
            <DownloadUpload>
              {/* <DownloadUpload>
                {selectedFileName.length ? (
                  <>
                    {selectedFileName}
                    <span
                      onClick={() => {
                        setSelectedFileName(''), setSelectedFileContent(null);
                      }}
                      style={{ cursor: 'pointer', marginLeft: '15px' }}
                    >
                      ❌
                    </span>
                  </>
                ) : (
                  <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                    Upload & Save Billing WorkBook
                  </label>
                )}
              </DownloadUpload> */}
            </DownloadUpload>
            <input
              type="file"
              id="file-input"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              name="upload"
            />
            <StyledTextArea placeholder="Add Notes" rows={4} cols={15}></StyledTextArea>
            <ButtonDiv>
              <StyledSuccess styledSuccess={styledSuccess}>{styledSuccess}</StyledSuccess>
              <StyledButton
                type="button"
                disabled={selectedCheckbox === '' || checkedCount !== Questions.length}
                onClick={() => router.push('/administration/archive')}
              >
                Submit to Archive
              </StyledButton>
              <StyledButton>Save Work For Later</StyledButton>
            </ButtonDiv>
          </BottomDiv>
        </Form>
      </FormDiv>
    </Main>
  );
};

export default CorrespondenceOnlineForm;
