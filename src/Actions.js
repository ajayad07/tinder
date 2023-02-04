import React from 'react';
import './Actions.css';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material';

function Actions() {

    const swiped = () => {

    }
  return (
    <div className="actions">
        <IconButton onClick={swiped} className="replay">
            <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={swiped} className="close">
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={swiped} className="star">
            <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={swiped} className="favorite">
            <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={swiped} className="flash">
            <FlashOnIcon fontSize="large" />
        </IconButton>
    </div>
  )
}

export default Actions