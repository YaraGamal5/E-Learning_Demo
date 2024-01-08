import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import SearchIcon from "../../assets/header/search-icon.svg";

function NavBar({ placeholder }) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [selOption, setSelOption] = useState("");
  const [dispValue, setDispValue] = useState("");

  const handleDispValue = (event, newInputValue) => {
    setDispValue(newInputValue);
  };

  const handleSelectOption = (event, newValue) => {
    console.log(newValue);
    setSelOption(newValue);
  };

  return (
    <Autocomplete
      value={selOption}
      onChange={handleSelectOption}
      inputValue={dispValue}
      onInputChange={handleDispValue}
      freeSolo
      options={[]}
      renderInput={(params) => {
        return (
          <Stack direction={isLargeScreen ? "row" : "column"} width={isLargeScreen ? "550px" : "100%"}>
            <TextField {...params} size="small" placeholder={placeholder} />
            <Button variant="contained">
              <img src={SearchIcon} alt="search-icon" />
            </Button>
          </Stack>
        );
      }}
    />
  );
}

export default NavBar;
