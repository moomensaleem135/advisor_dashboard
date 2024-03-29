import { COLORS } from '@/constants/colors';
import styled from '@emotion/styled';
import { Box, Button, Divider, FormControl, Grid, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
export const Container = styled(Grid)`
  margin-top: 4rem;
`;
export const FlexRowGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-inline: 2rem;
`;
export const FlexCol = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 0.5rem;
  .theme_color {
    color: ${COLORS.THEME_COLOR};
    margin-bottom: 1rem;
  }
  .emp {
    margin-block: 1.5rem;
  }
  .input_width {
    width: 27rem;
    margin-right: 2rem;
  }
  .input_width_2 {
    width: 25rem;
    /* margin-right: 2rem; */
  }
  .input_width_3 {
    width: 27rem;
  }
  .margin {
    margin-right: 1rem;
  }
  .css-o6wdob {
    padding-bottom: 0;
  }
  .css-zmwrn3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    width: 25rem;
    height: 3rem;
    border: 10px;
  }

  @media (max-width: 960px) {
    .input_width_2 {
      padding-left: 1rem;
      width: 28rem;
    }
    .input_width_3 {
      padding-left: 1rem;
      width: 28rem;
    }
    .css-zmwrn3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
      width: 27rem;
    }
  }

  @media (max-width: 560px) {
    .input_width {
      width: 18rem;
      /* margin-right: 2rem; */
    }
    .input_width_2 {
      width: 19rem;
      /* margin-right: 2rem; */
    }
    .input_width_3 {
      width: 19rem;
      /* margin-right: 2rem; */
    }
    .css-zmwrn3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
      width: 18rem;
    }
  }
`;

export const TypographyStyle = styled(Typography)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const DivButton = styled.div`
  button {
    padding: 15px 35px;
  }

  &:hover {
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

export const ModelBotton = styled.div`
  // .btn-choose {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: 220px;
  //   height: 200px;
  //   border-radius: 10px;
  //   background-color: #e8f3dc;
  //   margin-bottom: 15px;
  // }
  button {
    padding: 15px 35px;
  }
  // .portion {
  //   // padding-left: 23%;
  //   display: flex;
  //   flex-direction: column;
  //   align-item: start;
  // }
  // .product-image {
  //   // flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
  // }

  .row {
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }
  .btn-close {
    background-color: black;
    margin-right: 2rem;
    font-size: 14px;
  }
  .btn-save {
    font-size: 14px;
  }
  padding-right: 1rem;
  padding-bottom: 1rem;
`;

export const ImageModel = styled.div`
  margin-left: 2.5rem;
  .btn-choose {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 200px;
    border-radius: 10px;
    background-color: ${COLORS.LIGHT_GREEN};
    margin-bottom: 15px;
  }

  .portion {
    display: flex;
    flex-direction: column;
    align-item: start;
  }
  .product-image {
    justify-content: center;
    align-items: center;
  }

  .row {
    display: flex;
    align-items: flex-start;
    justify-content: start;
  }
  .image-style {
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }
`;

export const Input = styled(TextField)`
  width: 100%;
  /* margin: 2rem auto; */
  margin-bottom: 2rem !important;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  background: ${COLORS.WHITE_100};
  border-radius: 10px;
  margin-inline: 2rem;
`;

export const HeaderTag = styled.h1`
  color: ${COLORS.BLACK_100};
  font-weight: bolder;
  font-size: 16px;
`;

export const StyleGrid = styled(Grid)`
  display: 'flex';
  background-color: ${COLORS.WHITE_100};
  overflow-x: auto;
  margin: 2rem auto;
  border-radius: 1rem;
`;

export const DataGridStyle = styled(DataGrid)(() => ({
  paddingLeft: '25px',
  '& .MuiDataGrid-cell ': {
    padding: '0 44px'
  },
  '& .css-1al08jm': {
    justifyContent: 'flex-start'
  },

  border: '0px',
  '& .css-ltf0zy-MuiDataGrid-iconButtonContainer ': {
    display: 'none'
  },
  '& .MuiDataGrid-columnHeader:focus-within': {
    outline: 'none !important'
  },
  '& .MuiDataGrid-toolbarContainer': {
    padding: '15px',
    justifyContent: 'flex-end'
  },
  '& .css-x21m3b-MuiButtonBase-root-MuiButton-root ': {
    backgroundColor: '#8bc152',
    color: 'white !important',
    padding: '7px 15px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#73a144'
    }
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignContent: 'space-around',
    paddingLeft: '32px'
  },
  '& .MuiDataGrid-sortIcon': {
    display: 'none'
  },
  '& .css-16s3c0g': {
    height: '50%'
  },
  '& .MuiDataGrid-cell:focus-within': {
    outline: 'none !important'
  },
  '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
    width: '0.4em',
    height: '0.4em'
  },
  '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
    background: `${COLORS.THEME_COLOR}`,
    borderRadius: '7px'
  },
  '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
    backgroundColor: `${COLORS.THEME_COLOR}`,
    borderRadius: '10px'
  },
  '& .MuiCheckbox-root svg': {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    border: '1px solid #d9d9d9',
    borderRadius: 2
  },
  '& .MuiCheckbox-root svg path': {
    display: 'none'
  },
  '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
    backgroundColor: `${COLORS.THEME_COLOR}`,
    borderColor: `${COLORS.THEME_COLOR}`
  }
}));

export const BoxStyle = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  background-color: white;
  border: 1px solid #000;
  box-shadow: 24px;
  border-radius: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 1rem;
  /* padding: 4rem; */
  /* :root{
  *::-webkit-scrollbar {
    width: 0.1em;
    height: 0.1em;
  }
} */
  &::-webkit-scrollbar {
    width: 0.4em;
    height: 0.2em;
  }
  &::-webkit-scrollbar-track {
    background-color: ${COLORS.THEME_COLOR};
    border-radius: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.GREEN_THEME};
    border-radius: 10px;
  }
  @media (max-width: 960px) {
    width: 35rem;
  }
  @media (max-width: 560px) {
    width: 25rem;
  }
`;

export const H1 = styled.h1`
  color: ${COLORS.THEME_COLOR};
  font-weight: 700;
  font-size: 24px;
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 3rem;
  margin-bottom: 0.5rem;
  /* padding-block: 1rem; */
  padding-top: 0.5rem;
  .Poiner {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
export const LebalHeading = styled.div`
  font-weight: 600;
  font-size: 16px;
  font-style: normal;
  padding-bottom: 1rem;
  color: ${COLORS.BLACK_100};
`;

export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-inline: 2.5rem;
  margin-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  padding-right: 2.5rem;

 
  }
  @media (max-width: 1024px) {
    .css-1uqbioq {
      padding-left: 2.5rem;
  }
    
  }
`;

export const StyledDivider = styled(Divider)`
  width: 92%;
  margin-inline: auto;
`;

export const ButtonStyle = styled(Button)`
  background-color: ${COLORS.GREEN_THEME};
  font-size: 12px;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  padding: 10px 15px;
  &:hover {
    background-color: ${COLORS.THEME_COLOR};
  }
`;

export const BoxFormStyle = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
  padding-block: 1rem;

  .Field_Row {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 0.3rem;

    @media (max-width: 960px) {
      flex-direction: column;
    }
    @media (max-width: 460px) {
      padding-inline: 1rem;
    }
  }
  @media (max-width: 460px) {
    .RP {
      width: 18rem;
      /* padding-inline: 1rem; */
      padding-left: 1rem;
    }
  }
`;
export const BoxModel = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1rem;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  .choose_btn {
    display: flex;
    flex-direction: row;
  }

  .field_Column {
    display: flex;
    flex-direction: column;
  }
  .field_Column .margin {
    margin-top: 0.3rem;
  }
  .styled_button {
    background-color: ${COLORS.GREEN_THEME};
    font-size: 12px;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    padding: 10px 15px;
    height: 5vh;
    margin-top: 18vh;
    &:hover {
      background-color: ${COLORS.THEME_COLOR};
    }
    @media (max-width: 960px) {
      margin-top: 1vh;
    }
  }
`;
export const StyledAddMainButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`;
export const StyledButton = styled(Button)`
  background-color: ${COLORS.BUTTON_COLOR};
  width: 220px;
  border-radius: 10px;
  margin-top: 10px;
  height: 50px;
  align-item: center;
  margin-bottom: 10px;
  color: white;
  font-weight: 700;
  text-transform: capitalize;
  &:hover {
    background-color: ${COLORS.BUTTON_COLOR};
  }
`;
export const StyledFormControl = styled(FormControl)(() => ({
  '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '13.4px 14px'
  },
  '& .css-17ttchb-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
    borderRadius: '10px'
  },
  '& .css-yf8vq0-MuiSelect-nativeInput': {
    bottom: '17px',
    left: '10px',
    position: 'absolute',
    opacity: '1',
    width: '100%',
    border: '0'
  },
  '& .css-1ahjwpc': {
    paddingLeft: '130px'
  }
}));
