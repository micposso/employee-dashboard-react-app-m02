import { useState } from 'react'
import './App.css'
import Title from './components/title.jsx';
import MediaCard from './components/employeeCard.jsx';
import AllEmployees from "./components/allEmployees.jsx";
import Data from './data/data.js';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";


function App() {
  const [showOnLeave, setShowOnLeave] = useState(false);
  console.log(showOnLeave);

  const filteredData = showOnLeave ? Data.filter((employee) => employee.onLeave) : Data;

  const toggleOnLeave = (event) => {  if(showOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true) };

  return (
    <Container fixed>
      <Box>
        <Typography variant="h4" component="h1">
          Employee Dashboard
        </Typography>
      </Box>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Switch onChange={toggleOnLeave} />
      </Stack>
      <MediaCard data={filteredData} />
    </Container>
  );
}

export default App
