import './App.css';
//import of app components
import NavBar from './components/NavBar';
//import of pages
import HomeIn from './pages/HomeIn';
import HomeOut from './pages/HomeOut';
import MyPets from './pages/MyPets';
import PetProfile from './pages/PetProfile';
import UserProfile from './pages/UserProfile';
import HomeAdmin from './pages/HomeAdmin';
import AdminPanel from './pages/AdminPanel';
import AdminForm from './pages/AdminForm';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {


  return (
   <> 
  <NavBar/>
  <BrowserRouter/>
  <Routes>
    <HomeOut/>
    <HomeIn/>
    <MyPets/>
    <PetProfile/>
    <UserProfile/>
    <HomeAdmin/>
    <AdminPanel/>
    <AdminForm/>
  </Routes>

   </>
  )
}

export default App;
