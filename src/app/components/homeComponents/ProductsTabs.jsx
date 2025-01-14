"use client";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import HeadPhone from "./HeadPhone";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children} 
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductsTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="product tabs"
          textColor="inherit"
          TabIndicatorProps={{
            style: { display: "none" }, 
          }}
          sx={{
            "& .MuiTab-root": {
              fontSize: "1.1rem", 
              fontWeight: "bold", 
              color:"#0D0D0D",
            },
            "& .Mui-selected": {
              color: "#02A09B", 
            },
          }}
        >
          <Tab label="سماعات رأس" {...a11yProps(0)} />
          <Tab label="ميكروفون" {...a11yProps(1)} />
          <Tab label="كاميرا" {...a11yProps(2)} />
          <Tab label="ماوس & لوحة مفاتيح" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
         <HeadPhone/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>منتجات ميكروفون</h2>
        <ul>
          <li>ميكروفون 1</li>
          <li>ميكروفون 2</li>
          <li>ميكروفون 3</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>منتجات كاميرا</h2>
        <ul>
          <li>كاميرا 1</li>
          <li>كاميرا 2</li>
          <li>كاميرا 3</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2>منتجات ماوس & لوحة مفاتيح</h2>
        <ul>
          <li>ماوس 1</li>
          <li>لوحة مفاتيح 1</li>
        </ul>
      </TabPanel>
    </Box>
  );
}
