import { Typography, Stack, Box } from "@mui/material";
import BannerIcon from "../../assets/home/banner.jpg";

function Banner() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "white" }}
    >
      <Stack spacing="30px" paddingLeft="80px">
        <Box>
          <Typography component="span" variant="h1" color="primary">
            Take The Next Step{" "}
          </Typography>
          <Typography component="span" variant="h1" color="secondary">
            Toward <br /> Your Success
          </Typography>
        </Box>
        <Typography variant="body1" color="#343434">
          Join hundreds of learners from the middle-east alreadylearning on
          E-learning <br /> Platform ! We qualify you to be a highly competent
          programmer through a myriad <br /> of software development courses
          covering a variety of programming languages.
        </Typography>
      </Stack>
      <img width="520px" height="480px" src={BannerIcon} alt="banner-icon" />
    </Stack>
  );
}

export default Banner;
