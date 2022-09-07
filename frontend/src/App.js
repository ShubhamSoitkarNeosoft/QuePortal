import Header from './components/Header';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import ErrorScreen from './screens/ErrorScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route element = {<HomeScreen />} path = "/" />
        <Route element = {<RegisterScreen/>} path = "/register" />
        <Route element = {<LoginScreen/>} path = "/login" />
        <Route element = {<ContactUsScreen />} path = "/contactus" />
        <Route element = {<ErrorScreen />} path = "*" />
      </Routes>
    </>
  );
}

export default App;
