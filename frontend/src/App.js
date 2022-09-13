import Header from './components/Header';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import ErrorScreen from './screens/ErrorScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AdminScreen from './screens/AdminScreen';
import AllUsersScreen from './screens/AllUsersScreen';
import QuestionFormScreen from './screens/question/QuestionFormScreen';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route element = {<HomeScreen />} path = "/" />
        <Route element = {<RegisterScreen/>} path = "/register" />
        <Route element = {<LoginScreen/>} path = "/login" />
        <Route element = {<ContactUsScreen />} path = "/contactus" />
        <Route element = {<AdminScreen />} path = "/admin" />
        <Route element = {<AllUsersScreen />} path = "/admin/allusers" />
        <Route element = {<QuestionFormScreen />} path = "/question-form" />
        <Route element = {<ErrorScreen />} path = "*" />
      </Routes>
    </>
  );
}

export default App;
