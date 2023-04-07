// import React from 'react'
// import SideBar from './components/SideBar/SideBar'
// import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from '../side/DashBoard';
import Users from '../side/Users';
import Messages from '../side/Messages';
import Analytics from '../side/Analytics';
import FileManager from '../side/FileManager';
import Order from '../side/Order';
import Saved from '../side/Saved';
import Settings from '../side/Setting';
import NoPage from '../side/NoPage';
import SideIndex from '../SideMenu/SideIndex';




export default function RouterIndex() {
  return (
    <div>
      {/* <SideBar/> */}
      <Router>
        <SideIndex>
      <Routes>
        <Route path = '/' element = {<Dashboard/>}/>
        <Route path = '/users' element = {<Users/>}/>
        <Route path = '/messages' element = {<Messages/>}/>
        <Route path = '/analytics' element = {<Analytics/>}/>
        <Route path = '/file-manager' element = {<FileManager/>}/>
        <Route path = '/order' element = {<Order/>}/>
        <Route path = '/saved' element = {<Saved/>}/>
        <Route path = '/settings' element = {<Settings/>}/>
        <Route path = '*' element = {<NoPage/>}/>
      </Routes>
      </SideIndex>
      </Router>
    </div>
  )
}
