import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import MediaCard from './components/employeeCard.jsx';
import AllEmployees from "./components/allEmployees.jsx";
import Data from './data/data.js';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


function App() {
  const [onLeave, setLeave] = useState(true);
  console.log(onLeave);
  return (
    <Container fixed>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Active</Button>
        <Button variant="outlined">On Leave</Button>
      </Stack>
      <MediaCard data={Data} />
    </Container>
  );
}

export default App
