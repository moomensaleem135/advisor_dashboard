import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import * as React from 'react';

import { StyledMenuItems } from './Menu.styles';

interface BasicMenuProps {
  buttonTitle: string;
  menuItems: string[];
  onItemClick: (item: string) => void;
}

const BasicMenu: React.FC<BasicMenuProps> = ({ buttonTitle, menuItems, onItemClick }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item: string) => {
    onItemClick(item);
    handleClose();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (anchorEl && !anchorEl.contains(event.target as Node)) {
      handleClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl]);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={anchorEl ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        endIcon={<ExpandMoreIcon />}
        style={{
          padding: 0,
          color: '#003165',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: 'pointer',
          textTransform: 'capitalize'
        }}
        onClick={handleOpen}
      >
        {buttonTitle}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        sx={{
          '& .MuiPaper-root': {
            width: buttonTitle === 'Tools' ? '470px' : '200px'
          }
        }}
      >
        {buttonTitle === 'Tools' ? (
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              {menuItems.slice(0, 3).map((item, index) => (
                <StyledMenuItems key={index} onClick={() => handleItemClick(item)}>
                  {item}
                </StyledMenuItems>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              {menuItems.slice(3).map((item, index) => (
                <StyledMenuItems key={index + 3} onClick={() => handleItemClick(item)}>
                  {item}
                </StyledMenuItems>
              ))}
            </div>
          </div>
        ) : (
          menuItems.map((item, index) => (
            <StyledMenuItems key={index} onClick={() => handleItemClick(item)}>
              {item}
            </StyledMenuItems>
          ))
        )}
      </Menu>
    </div>
  );
};

export default BasicMenu;
