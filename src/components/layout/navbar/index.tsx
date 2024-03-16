import { Logout, Search } from '@mui/icons-material';
import {
  Avatar,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconsDiv, Li, LogoDiv, MainContainer, UlDiv } from './index.styles';

const NavBar = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  return (
    <MainContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '10px'
          // border: '1px solid red'
        }}
      >
        <LogoDiv>
          <Image src={'/svgs/secureRIALogo.svg'} width={110} height={52} alt="" />
        </LogoDiv>
        <IconsDiv>
          <Paper
            component="form"
            sx={{
              p: '2px',
              display: 'flex',
              alignItems: 'center',
              width: 145,
              height: 36,
              background: '#F4F5F6',
              borderRadius: '80px'
            }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <Search />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
          <Image src="/svgs/UI.svg" width={36} height={36} alt="" />
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Image src="/svgs/account.svg" width={36} height={36} alt="" />
          </IconButton>
        </IconsDiv>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </MainContainer>
  );
};

export default NavBar;
