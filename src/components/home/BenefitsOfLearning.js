import { Stack, Typography, Box } from "@mui/material";
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
    <Stack
      direction="row"
      style={{ backgroundColor: "white" }}
      justifyContent="center"
      alignItems="center"
      spacing="100px"
      padding="50px 80px"
    >
      <img
        src={LearingPhoto}
        alt="a girl learning on a laptop"
        width="475px"
        height="360px"
      />
      <Stack spacing="30px">
        <Box>
          <Typography component="span" variant="h2" color="secondary">
            Benefits Of Learning <br /> from{" "}
          </Typography>
          <Typography component="span" variant="h2" color="primary">
            Edugram
          </Typography>
        </Box>
        <Stack spacing="20px">
          {benefits.map((benefit, index) => (
            <Stack direction="row" spacing="20px" key={index}>
              <img src={TickIcon} alt="tick" />
              <Typography fontSize="18px" fontWeight={600}>
                {benefit}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default BenefitsOfLearning;
