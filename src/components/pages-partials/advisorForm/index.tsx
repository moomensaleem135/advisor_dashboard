// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Checkbox, FormControlLabel, InputLabel, Typography } from '@mui/material';
// import CircleIcon from '@mui/icons-material/Circle';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// import {
//   ButtonDiv,
//   FlexDiv,
//   FormDiv,
//   Heading,
//   InputWrap,
//   Main,
//   StyleButton,
//   StyledForm,
//   StyledInputLabel,
//   StyledInputTask,
//   TableContainer,
//   Table,
//   TableHead,
//   TableHeader,
//   TableRow,
//   TableCell,
//   ButtonStyled,
//   ButtonStyle,
//   FormHeading,
//   SubHeading
// } from './index.styles';
// import { RadioDiv } from '../newtask/index.styles';
// import { COLORS } from '@/constants/colors';
// import { useSearchParams } from 'next/navigation';
// import Modal from './modal';
// import { useFormik } from 'formik';

// const initialValues = {
//     title: '',
//     date: '',
//     checkboxes: [],
//     security: '',
//     file: "",
//   };

// const AdvisorForm = () => {
//   const formik = useFormik({
//     initialValues: initialValues,
//     onSubmit: (values) => {
//       console.log(values);
//     }
//   });
//   const searchParams = useSearchParams();
//   let Name = searchParams.get('name');
//   const [selectedCheckbox, setSelectedCheckbox] = useState('');
//   const [selectCheckbox, setSelectCheckbox] = useState('');

//   const handleCheckboxChange = (label: string) => {
//     setSelectedCheckbox(label === selectedCheckbox ? '' : label);
//     formik.handleChange;
//   };
//   const handleCheckbox = (label: string) => {
//     setSelectCheckbox(label === selectCheckbox ? '' : label);
//     formik.handleChange;
//   };

//   const buttonLabels = [
//     'Marketing Request',
//     'Personal Security Reports',
//     'Gift Request',
//     'Attestations',
//     'Outside Business Activities',
//     'Client File Review',
//     'Attestations'
//   ];
//   const checkboxLabels = ['March', 'June', 'September'];
//   const securityCheckbox = ['Yes', 'No'];

//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const [selectedFileName, setSelectedFileName] = useState('');

//   const handleButtonClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileChange = (event:any) => {
//     const selectedFile = event.target.files[0];
//     setSelectedFileName(selectedFile ? selectedFile.name : '');
//     console.log('Selected file:', selectedFile ? selectedFile.name : '');
//     formik.handleChange;
//   };
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleButton = (event:any) => {
//     event.preventDefault();
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };
//   return (
//     <Main>
//       <Heading>Advisor Form</Heading>
//       <ButtonDiv>
//         {buttonLabels.map((label, index) => (
//           <StyleButton
//             style={{
//               backgroundColor: Name === label ? `#003165` : 'initial',
//               color: Name === label ? `${COLORS.WHITE_100}` : 'initial'
//             }}
//             key={index}
//           >
//             {label}
//           </StyleButton>
//         ))}
//       </ButtonDiv>
//       <FormDiv>
//         <StyledForm onSubmit={formik.handleSubmit} >
//           <FormHeading>{Name}</FormHeading>
//           <SubHeading>Description</SubHeading>
//           <FlexDiv>
//             <InputWrap>
//               <StyledInputLabel>Title:</StyledInputLabel>
//               <StyledInputTask
//                 name="title"
//                 value={formik.values.title}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 type="text"
//               />
//             </InputWrap>
//             <InputWrap style={{ width: '50%' }}>
//               <StyledInputLabel>Date:</StyledInputLabel>
//               <StyledInputTask
//                 type="date"
//                 value={formik.values.date}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 name="date"
//               />
//             </InputWrap>
//           </FlexDiv>
//           <RadioDiv>
//             <InputLabel variant="standard">Quarter Ending</InputLabel>
//             <Box sx={{ display: 'flex' }}>
//               {checkboxLabels.map((label, index) => (
//                 <FormControlLabel
//                   key={index}
//                   control={
//                     <Checkbox
//                       key={index}
//                       name="checkbox"
//                       value={label}
//                       onBlur={formik.handleBlur}
//                       icon={<RadioButtonUncheckedIcon />}
//                       checkedIcon={<CircleIcon />}
//                       checked={label === selectedCheckbox}
//                       onChange={() => handleCheckboxChange(label)}
//                       sx={{
//                         '&.Mui-checked': {
//                           color: `${COLORS.BLUE_200}`,
//                           '& .MuiSvgIcon-root': {
//                             fill: `${COLORS.BLUE_200}`
//                           }
//                         }
//                       }}
//                     />
//                   }
//                   label={label}
//                 />
//               ))}
//             </Box>
//           </RadioDiv>
//           <RadioDiv>
//             <InputLabel variant="standard">I have purchased securities</InputLabel>
//             <Box sx={{ display: 'flex' }}>
//               {securityCheckbox.map((label, index) => (
//                 <FormControlLabel
//                   key={index}
//                   control={
//                     <Checkbox
//                       key={index}
//                       name="security"
//                       value={formik.values.security}
//                       onBlur={formik.handleBlur}
//                       icon={<RadioButtonUncheckedIcon />}
//                       checkedIcon={<CircleIcon />}
//                       checked={label === selectCheckbox}
//                       onChange={() => handleCheckbox(label)}
//                       sx={{
//                         '&.Mui-checked': {
//                           color: `${COLORS.BLUE_200}`,
//                           '& .MuiSvgIcon-root': {
//                             fill: `${COLORS.BLUE_200}`
//                           }
//                         }
//                       }}
//                     />
//                   }
//                   label={label}
//                 />
//               ))}
//             </Box>
//           </RadioDiv>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <tr>
//                   <TableHeader>Date</TableHeader>
//                   <TableHeader>Security</TableHeader>
//                   <TableHeader>Buy & Sell</TableHeader>
//                   <TableHeader>Price</TableHeader>
//                   <TableHeader>Broker</TableHeader>
//                 </tr>
//               </TableHead>
//               <tbody>
//                 {[...Array(4)].map((_, index) => (
//                   <TableRow key={index}>
//                     <TableCell></TableCell>
//                     <TableCell></TableCell>
//                     <TableCell></TableCell>
//                     <TableCell></TableCell>
//                     <TableCell></TableCell>
//                   </TableRow>
//                 ))}
//               </tbody>
//             </Table>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//               <Box>
//                 <ButtonStyled onClick={handleButtonClick}>Upload Attachments</ButtonStyled>
//                 {selectedFileName && (
//                   <span style={{ color: 'blue', textDecoration: 'underline' }}>
//                     {selectedFileName}
//                   </span>
//                 )}
//                 <input
//                   type="file"
//                   name="file"
//                   value={formik.values.file}
//                   onBlur={formik.handleBlur}
//                   ref={fileInputRef}
//                   style={{ display: 'none' }}
//                   onChange={handleFileChange}
//                 />
//               </Box>
//               <ButtonStyle onClick={handleButton}  >Sign & Submit to CCO</ButtonStyle>
//               <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
//             </Box>
//           </TableContainer>
//         </StyledForm>
//       </FormDiv>
//     </Main>
//   );
// };

// export default AdvisorForm;
