import { Tabs, Tab, Typography, Stack } from "@mui/material";
import SliderLeftIcon from "../../assets/home/slider-left-icon.svg";
import SliderRightIcon from "../../assets/home/slider-right-icon.svg";

function CustomTabs({ value, onChange, tabs, tabWidth }) {
  const handleSelect = (event, newValue) => {
    const getSelectedName = () => {
      let selectedName;
      tabs.forEach((tab) => {
        if (tab.id === newValue) {
          selectedName = tab.name;
        }
      });
      return selectedName;
    };
    onChange(newValue, getSelectedName());
  };

  const EndScrollButtonIcon = () => (
    <img src={SliderRightIcon} alt="right-slider" />
  );

  const StartScrollButtonIcon = () => (
    <img src={SliderLeftIcon} alt="left-slider" />
  );

  return (
    <Stack>
      <Tabs
        sx={{
          ".Mui-selected": {
            backgroundColor: "white",
          },
          ".MuiTabs-scrollButtons.Mui-disabled": {
            opacity: 0.3,
          },
        }}
        slots={{ EndScrollButtonIcon, StartScrollButtonIcon }}
        variant="scrollable"
        scrollButtons
        TabIndicatorProps={{ style: { display: "none" } }}
        value={value}
        onChange={onChange && handleSelect}
      >
        {tabs.map((tab, index) => {
          return (
            <Tab
              sx={{
                marginLeft: "10px",
                marginRight: "10px",
                padding: "20px",
                borderRadius: "10px",
              }}
              value={tab.id}
              label={
                <Typography
                  overflow="hidden"
                  noWrap
                  width={tabWidth}
                  textOverflow="ellipsis"
                  display="block"
                  fontWeight={600}
                  fontSize="22px"
                  color={value === tab.id ? "primary" : "#343434"}
                >
                  {tab.name}
                </Typography>
              }
              key={tab.id}
            />
          );
        })}
      </Tabs>
    </Stack>
  );
}

export default CustomTabs;
