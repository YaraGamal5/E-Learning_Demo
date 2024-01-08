import { Grid, Stack, Typography, Box } from "@mui/material";
import LearingPhoto from "../../assets/home/learning.jpg";
import TickIcon from "../../assets/home/tick-icon.svg";

function BenefitsOfLearning() {
  let benefits = [
    "Access 16,000+ expert-led courses.",
    "Expert instructors with lifetime access on your courses.",
    "Use project files and quizzes to practice while you learn.",
    "View courses anytime on your computer or phone",
    "Earn a certificate when you complete a course.",
  ];

  return (
    <Grid
      container
      style={{ backgroundColor: "white" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      padding="50px 20px"
    >
      <Grid item xs={12} md={6}>
        <img
          src={LearingPhoto}
          alt="a girl learning on a laptop"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={4}>
          <Box>
            <Typography component="span" variant="h4" color="secondary">
              Benefits Of Learning <br /> from{" "}
            </Typography>
            <Typography component="span" variant="h4" color="primary">
              Edugram
            </Typography>
          </Box>
          <Stack spacing={2}>
            {benefits.map((benefit, index) => (
              <Stack direction="row" spacing={2} key={index}>
                <img src={TickIcon} alt="tick" />
                <Typography fontSize="16px" fontWeight={600}>
                  {benefit}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default BenefitsOfLearning;
