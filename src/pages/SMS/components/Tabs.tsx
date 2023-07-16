import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabsContainer from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import tabs from "../../../objects/tabs";
import IconContainer from "../../../components/utilities/IconContainer";

const ACTIVE_BG_COLOR = "#cfe9f0";
const INACTIVE_BG_COLOR = "#e0e4e6";
const ACTIVE_COLOR = "#2298b9";
const INACTIVE_COLOR = "#6e7983";

const Tabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabsContainer value={value} onChange={handleChange}>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.label}
          icon={
            <IconContainer
              icon={tab.icon}
              bgColor={getBgColor(value, index)}
              color={getColor(value, index)}
              IconContainerStyles={{ p: "6px" }}
              iconStyles={{ fontSize: "1rem" }}
            />
          }
          label={<Typography variant="thick">{tab.label}</Typography>}
        />
      ))}
    </TabsContainer>
  );
};

export default Tabs;

const getColor = (state: number, value: number) => {
  let color = INACTIVE_COLOR;
  if (state == value) color = ACTIVE_COLOR;
  return color;
};

const getBgColor = (state: number, value: number) => {
  let bgColor = INACTIVE_BG_COLOR;
  if (state == value) bgColor = ACTIVE_BG_COLOR;
  return bgColor;
};
