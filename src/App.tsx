import {
  Box,
  Button,
  FormControl,
  Grid,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

function App() {
  const [san, setSan] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSan(event.target.value as string);
  };

  const handleClick = () => {
    console.log(san);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, p: 1 }}>
        <Grid2 container>
          <Grid2 size={1}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">San</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={san}
                  label="San"
                  onChange={handleChange}
                >
                  <MenuItem value={"Binance"}>Binance</MenuItem>
                  <MenuItem value={"Gateio"}>Gate IO</MenuItem>
                  <MenuItem value={"OKEX"}>OK</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid2>
          <Grid2 size={1}>
            <Button
              variant="contained"
              color="success"
              size="medium"
              onClick={handleClick}
            >
              Connect
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default App;
