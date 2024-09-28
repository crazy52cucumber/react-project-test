import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  '보기',
  '수정하기',
  '공유하기'
];

const ITEM_HEIGHT = 48;

export default function ShareMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(`클릭함 ${event.currentTarget.value}`)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    console.log(`클릭함 ${event.currentTarget.tabIndex}`)
    setAnchorEl(null);
  };

  return (
      <div>
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            style={{color: 'white'}}
            onClick={handleClick}
        >
          {/*<ShareIcon/>*/}
          <MoreVertIcon/>
        </IconButton>
        <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              },
            }}
        >
          {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'}
                        onClick={handleClose}>
                {option}
              </MenuItem>
          ))}
        </Menu>
      </div>
  );
}