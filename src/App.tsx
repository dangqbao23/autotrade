import { Box, Button, Stack } from "@mui/material"

function App() {

  return (
    <>
      <p>Hello world</p>
      <Stack spacing={1}>
        <Button sx={{
          borderBottom:1,
          justifyContent: "center"
        }}>
          Item 1
        </Button>
        <Button sx={{
          borderBottom:1,
        }}>
          Item 2
        </Button>
        <Button sx={{
          borderBottom:1,
        }}>
          Item 3
        </Button>
        
      </Stack>
    </>
  )
}

export default App
