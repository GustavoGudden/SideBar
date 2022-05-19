import { Container } from "./style";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebar, setsidebar] = useState(false);
  const showside = () => {
    setsidebar(!sidebar);
  };

  return (
    <Container>
      <FaBars onClick={showside} />
      {sidebar && <Sidebar active={setsidebar} />}
    </Container>
  );
};

export default Header;
