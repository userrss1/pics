import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import Dashboard from './component/Dashboard';
import Profile from './component/Profile';
import {Routes, Route} from 'react-router-dom'
import Logout from './component/Logout';
import { useState } from 'react';

const getData=() => 
{
    
      const datas = localStorage.getItem('id');
      if(datas)
      {
          return JSON.parse(datas)
      }
      else{
         return [];
      }
}

function App() {

  const [id, setId] = useState(getData());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="App">
            {/* <Login /> */}
            {/* <Registration /> */}
            {/* <Dashboard /> */}
            {/* <Profile /> */}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registration" element={<Registration id={id} setId={setId} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} phone={phone} setPhone={setPhone} getData={getData} />} />
              <Route path="/dashboard" element={<Dashboard id={id} email={email} password = {password}/>} />
              <Route path="/profile" element={<Profile id={id} setId={setId} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} phone={phone} setPhone={setPhone} getData={getData}/>} />
              <Route path="/logout" element={<Logout id={id} />} />
            </Routes>

           
    </div>
  );
}

export default App;
