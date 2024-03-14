import { ThemeProvider } from '@emotion/react';
import { Box, createTheme } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

import { CardDiv, Container, LowerText, StyledButton, TextDiv, UpperText } from './index.styles';

const getTheme = (color: string) =>
  createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: color,
            color: color === '#8AB9FF' || color === '#D7E5FA' ? 'black' : 'white',
            boxShadow: 'none !important',
            border: 'none !important',
            fontSize: '1em',
            padding: '0.5rem 0.7rem',
            maxWidth: '208px',
            width: '200px'
          },
          arrow: {
            color: color
          }
        }
      }
    }
  });

export default function Card({ color, tooltipText, buttonText, options, title }: any) {
  const [open, setOpen] = React.useState(true);
  const theme = getTheme(color);

  return (
    <Container>
      <CardDiv>
        <ThemeProvider theme={theme}>
          <Tooltip
            open={open}
            arrow
            title={tooltipText}
            placement="top"
            PopperProps={{
              disablePortal: true // This helps to make the tooltip center properly
            }}
            sx={{
              '& .MuiTooltip-tooltip': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }}
          >
            <span></span>
          </Tooltip>
          <Box style={{ marginTop: '-1px' }}>
            <TextDiv border={color} style={{ minHeight: title !== 'mock' ? '370px' : '317px' }}>
              {options !== undefined && (
                <>
                  {' '}
                  <UpperText>{options.upperText}</UpperText>
                  <LowerText>{options.lowertext}</LowerText>
                  {options?.thirdtext && options?.thirdtext?.length && (
                    <LowerText>{options.thirdtext}</LowerText>
                  )}
                </>
              )}
            </TextDiv>
            <StyledButton
              backgroundColor={color}
              style={{ minHeight: title === 'mock' ? '60px' : 'auto' }}
            >
              {buttonText}
            </StyledButton>
          </Box>
        </ThemeProvider>
      </CardDiv>
    </Container>
  );
}
