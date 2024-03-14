'use client';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
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
    question: '1. Review the advisory agreement, disclosures and client contract.',
    description:
      'The first step in the quarterly billing review is to make sure the advisory agreement fee schedule is up to date and matches the bill going out the client. If it doesn’t match speak with the billing department immediately. In addition, verify the billing fee schedule does not exceed what is disclosed in your Form ADV 2A.'
  },
  {
    name: 'question2',
    question: '2. Select 10-15% of the bills from the client pool to examine each quarter.',
    description:
      'Each quarter a different set of clients should be selected. However, if there is a discrepancy in quarter 1, for example, with client ‘A’ then client ‘A’ should be selected for examination in quarter 2 to ensure the issue has been resolved.'
  },
  {
    name: 'question3',
    question: '3. Keep record of all communication',
    description:
      'All emails and notes from conversations regarding the billing and fees for clients should be logged in the billing file. Examine notes each quarter to look for patterns in errors for over billing and other discrepancies.'
  },
  {
    name: 'question4',
    question:
      '4. Insert your fee schedule into the spreadsheet attached to verify billing accuracy.',
    description:
      'Always use excel or some other workbook to calculate billing for future exams or an annual review. Use the attached workbook and edit it according to you firm’s fee schedule and assets under management. Keep the workbook in the client billing folder for future reference.'
  },
  {
    name: 'question5',
    question: '5. Notify the client immediately if they are being overcharged.',
    description:
      'If you find a discrepancy in the bill, notify the client immediately and issue a refund. Document where you found the error and make sure to review prior bills for error patterns. Be sure to include the client in the following quarters billing review, as mentioned in step 2 above.'
  }
];

const OnlineForm = () => {
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
      'https://sria-membership-bucket.s3.us-east-2.amazonaws.com/basic_templates/basic_files/Client+Billing+Review+-+Checklist.pdf'
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
      'https://sria-membership-bucket.s3.us-east-2.amazonaws.com/basic_templates/basic_files/Billing+Workbook.xlsx'

      // Add more file URLs here if needed
    ];

    // Function to download each file with a delay
    const downloadWithDelay = (fileUrl: any, index: any) => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = ''; // Use the file name specified by the server
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Delay each download by 1 second (1000 milliseconds)
    };

    // Loop through file URLs and trigger download with delay
    fileUrls.forEach((fileUrl, index) => {
      downloadWithDelay(fileUrl, index);
    });
  };

  return (
    <Main>
      <Header>
        <Heading>Client Billing Review</Heading>
        <SubHeading>Frequency:Quarterly</SubHeading>
      </Header>
      <FormDiv>
        <Form>
          <TopDiv>
            <CustomSheduleDueDateTypography>
              Scheduled Date: January 8th
            </CustomSheduleDueDateTypography>
            <CustomSheduleDueDateTypography>Due Date: February 29th</CustomSheduleDueDateTypography>
            <OverViewDiv>
              <Paragraph>
                <p id="overview">Overview</p>
                <span id="overviewdetail">
                  {' '}
                  ‘Once a quarter you will need to examine your client’s billing activity. The goal
                  of this review is to ensure your client’s bills are accurate and match the fee
                  schedule set forth in their advisory agreement and Form ADV 2A.’
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
                    />
                  }
                  label={<CustomLabel>{label}</CustomLabel>}
                />
              ))}
            </CheckDiv>
          </TopDiv>
          <hr />
          <BottomDiv>
            <SubHeading2>Client Billing Reviews</SubHeading2>
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
              <DownloadUpload>Download Billing WorkBook</DownloadUpload>
            </DownloadUpload>
            {selectedFileContent && (
              // <iframe
              //   title="XML Preview"
              //   srcDoc={selectedFileContent}
              //   // src="https://sria-membership-bucket.s3.us-east-2.amazonaws.com/basic_templates/basic_files/Billing+Workbook.xlsx"
              //   style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}
              // />
              <Image
                // src={'/images/excelFilee.png'}
                src={'/svgs/ExcelFile.svg'}
                height={600}
                // width={700}
                width={800}
                alt="Excel file"
                style={{
                  boxShadow: ' box-shadow: 10 14px 8px 10 pink, 110 6px 20px 10 red',
                  marginLeft: '-60px'

                  // marginTop: '5px'
                }}
              />
            )}
            <DownloadUpload>
              <DownloadUpload>
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
              </DownloadUpload>
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

export default OnlineForm;
