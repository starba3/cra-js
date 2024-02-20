import React, {   } from 'react';
import PropTypes from 'prop-types'
// @mui
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

export default function LoadingAnimation({ loading }) {
    return (
        <Backdrop open={loading} style={{ zIndex: 9999 }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

LoadingAnimation.propTypes = {
    loading: PropTypes.bool
}