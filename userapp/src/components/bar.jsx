import React from 'react';
import './bar.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const hoo = () => {
  window.location.href = 'http://localhost:3000/HousingNeeds';
  console.log('Admin login');
  // Add your admin login logic here
};
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Features
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <p className="channel ">Information</p>
            <NavLink exact to="/Medical" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="columns">Medical Assistance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sponsor" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Jobs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Employment</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/HousingNeeds" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="chart-line">Housing</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Entities</CDBSidebarMenuItem>
            </NavLink>
             <p className="channel">Channels</p>
            <NavLink exact to="/Alum" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Alum</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Young Adults</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem>15-18yrs</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;