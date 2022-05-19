import React from "react";
import { Containersidebar, Content } from "./style";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import Sidebaritem from "./Sidebaritem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Containersidebar sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Sidebaritem Icon={FaHome} Text="Home" />
        <Sidebaritem Icon={FaChartBar} Text="Statistics" />
        <Sidebaritem Icon={FaUserAlt} Text="Users" />
        <Sidebaritem Icon={FaEnvelope} Text="Mail" />
        <Sidebaritem Icon={FaRegCalendarAlt} Text="Calendar" />
        <Sidebaritem Icon={FaIdCardAlt} Text="Employees" />
        <Sidebaritem Icon={FaRegFileAlt} Text="Reports" />
        <Sidebaritem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Containersidebar>
  );
};

export default Sidebar;
