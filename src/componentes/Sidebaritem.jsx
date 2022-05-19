import React from "react";
import { ContainerItem } from "./style";

const Sidebaritem = ({ Icon, Text }) => {
  return (
    <ContainerItem>
      <Icon />
      {Text}
    </ContainerItem>
  );
};

export default Sidebaritem;
