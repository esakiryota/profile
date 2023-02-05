import { Switch, Routes, Route } from 'react-router-dom';
import Profile from './components/profile'
import Skill from './components/skill'
import Works from './components/works'
import Box from '@mui/material/Box';
import './main.css'



function Main() {
    const homeUrl = process.env.PUBLIC_URL;
    return (
        <Box>

            <Box
        component="img"
        sx={{
          width: '100%',
          height: 300,
          objectFit:"cover",
        }}
        alt="image"
        src={homeUrl + "/mypic.jpg"}
      />
            <Routes>
            <Route extract path="" element={<Profile />} />
            <Route path="/skill" element={<Skill />} />
            <Route path= "/works" element={<Works />} />
            </Routes>
            </Box>
    )
}

export default Main