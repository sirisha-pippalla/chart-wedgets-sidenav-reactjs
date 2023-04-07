import React from 'react';
import "./App.css";
import AppHeader from './components-1/AppHeader/HeadIndex';
import SideMenu from './components-1/SideMenu/SideIndex';
import PageContent from './components-1/PageContent/PageIndex';
import AppFooter from './components-1/AppFooter/FooterInedx';
import BarChart from './components-1/Charts/BarChart';
import Widget from './components-1/Widgets/Widget';


export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="row">
        <div id="left-content">
          <SideMenu></SideMenu>
        </div>
        <div id="right-content">
          <Widget></Widget>
          <div className="row">
            <div classname="col-md-4" style = {{width: '600px'}}>

              <BarChart></BarChart>
            </div>
            <div classname="col-md-4" style = {{width: '600px'}}>
              <BarChart></BarChart>

            </div>


          </div>
        </div>
      </div>
      <AppFooter />

    </div>
  )
}
