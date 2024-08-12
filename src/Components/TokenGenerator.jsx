import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';

const TokenGenerator = () => {
  const [formData, setFormData] = useState({
    blueTokens: 0,
    bluePrefix: '',
    bluePerRow: 0,
    redTokens: 0,
    redPrefix: '',
    redPerRow: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container>
      <h1>Token Generator Application</h1>
      <Grid container spacing={2}>
        {['blueTokens', 'bluePrefix', 'bluePerRow', 'redTokens', 'redPrefix', 'redPerRow'].map((field, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <TextField
              fullWidth
              label={field.replace(/([A-Z])/g, ' $1').replace('blue', 'Blue').replace('red', 'Red')}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              type={field.includes('Tokens') || field.includes('PerRow') ? 'number' : 'text'}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Generate
          </Button>
          <Button variant="outlined" color="secondary" style={{ marginLeft: 10 }}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TokenGenerator;
