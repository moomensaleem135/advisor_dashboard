import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React, { useState } from 'react';

import { DialogueBox } from '../../request/status/index.styles';

interface NewTaskFormProps {
  open: boolean;
  onClose: () => void;
  onFormSubmit?: (formData: FormDataprops) => void;
  title?: string;
}

type FormDataprops = {
  title: string;
  desc: string;
  startDate: string;
  endDate: string;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
  '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
    color: 'black'
  },
  '& .MuiDialogContent-root.MuiDialogContent-dividers.css-6nt8xb-MuiDialogContent-root': {
    border: 'none !important'
  },
  '.MuiDialogContent-root.MuiDialogContent-dividers.css-x88jnw': {
    border: 'none !important'
  }
}));

const NewTaskForm = ({ open, onClose, onFormSubmit, title }: NewTaskFormProps) => {
  const [formData, setFormData] = useState<FormDataprops>({
    title: '',
    desc: '',
    startDate: '',
    endDate: ''
  });

  // const handleChange = (field: any) => (event: any) => {
  //   setFormData({
  //     ...formData,
  //     [field]: event.target.value
  //   });
  // };

  // const handleSave = () => {
  //   if (onFormSubmit) {
  //     onFormSubmit(formData);
  //   }
  //   onClose();
  // };

  const handleClose = () => {
    onClose();
  };

  return (
    <DialogueBox>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'black'
          }}
        >
          <CloseIcon />
        </IconButton>
        {title === 'employee' ? (
          <Box sx={{ marginTop: '10px', marginBottom: '20px' }}>
            <Image src={'/svgs/employee.svg'} alt="" height={1000} width={750} />
          </Box>
        ) : title === 'client' ? (
          <Box
            sx={{
              marginTop: '-10px',
              marginBottom: '-50px',
              paddingLeft: ' 10px',
              paddingRight: '20px !important'
            }}
          >
            <Image src={'/svgs/client_details.svg'} alt="" height={900} width={735} />
          </Box>
        ) : (
          <Box sx={{ marginTop: '10px' }}>
            <Image src={'/svgs/task.svg'} alt="" height={1000} width={690} />
          </Box>
        )}
      </BootstrapDialog>
    </DialogueBox>
  );
};

export default NewTaskForm;
