import {
  Box,
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

function App() {
  const [selectedSan, setSelectedSan] = React.useState("");

  const handleSanChange = (event: SelectChangeEvent<string>) => {
    setSelectedSan(event.target.value);
  };

  const handleConnectClick = () => {
    console.log(selectedSan);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 1 }}>
      <Grid2 container>
        <Grid2 size={1}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Select San</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedSan}
                label="Select San"
                onChange={handleSanChange}
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
            onClick={handleConnectClick}
          >
            Connect
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default App;
