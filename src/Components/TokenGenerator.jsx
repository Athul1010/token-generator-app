import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Box } from '@mui/material';

const TokenGenerator = () => {
  const [formData, setFormData] = useState({
    blueTokens: 0,
    bluePrefix: '',
    bluePerRow: 0,
    redTokens: 0,
    redPrefix: '',
    redPerRow: 0,
  });

  const [tokens, setTokens] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateTokens = () => {
    const blueTokens = Array.from(
      { length: Number(formData.blueTokens) },
      (_, i) => `${formData.bluePrefix}${i + 1}`
    );

    const redTokens = Array.from(
      { length: Number(formData.redTokens) },
      (_, i) => `${formData.redPrefix}${i + 1}`
    );

    setTokens([
      { color: 'blue', tokens: blueTokens, perRow: Number(formData.bluePerRow) },
      { color: 'red', tokens: redTokens, perRow: Number(formData.redPerRow) },
    ]);
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
          <Button variant="contained" color="primary" onClick={generateTokens}>
            Generate
          </Button>
          <Button variant="outlined" color="secondary" style={{ marginLeft: 10 }}>
            Clear
          </Button>
        </Grid>
      </Grid>
      <Box mt={4}>
        {tokens.map((tokenGroup, index) => (
          <Grid container spacing={2} key={index}>
            {tokenGroup.tokens.map((token, idx) => (
              <Grid item xs={12 / tokenGroup.perRow} key={idx}>
                <Box bgcolor={tokenGroup.color} color="white" p={2} textAlign="center">
                  {token}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>
    </Container>
  );
};

export default TokenGenerator;
