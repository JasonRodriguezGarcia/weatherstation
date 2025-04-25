import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField, Typography } from '@mui/material';

function HomePage() {

    const navigate = useNavigate();

    const goToCars = () => {
        navigate("/");
    }

  return (
    <div>
      <h2>Welcome JOM Peich</h2>

      <Button variant="contained" color="primary" onClick={goToCars}>
        Go to somewhere ...
      </Button>
    </div>
  );
}
export default HomePage;