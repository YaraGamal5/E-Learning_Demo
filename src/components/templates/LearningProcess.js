import { Grid, Typography, useMediaQuery, useTheme, Stack} from "@mui/material";
import HomeSection from "../molecules/HomeSection";
import ChooseCourseIcon from "../../assets/home/choose-course.svg";
import StartLearningIcon from "../../assets/home/start-learning.svg";
import GetCertificateIcon from "../../assets/home/get-certificate.svg";

function LearningProcess() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  let learningSteps = [
    { icon: ChooseCourseIcon, caption: "Choose Course" },
    { icon: StartLearningIcon, caption: "Start Learning" },
    { icon: GetCertificateIcon, caption: "Get Certificate" },
  ];

  const title = "Learning Process";
  const subtitle = (
    <>
      Learn the latest skills to reach your <br /> professional goals
    </>
  );

  let content = (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "white", padding: "35px 0" }}
      spacing={isSmallScreen ? 2 : 4}
    >
      {learningSteps.map((step) => (
        <Grid item key={step.caption} xs={12} md={4}>
          <Stack alignItems="center" spacing={2}>
            <img src={step.icon} alt="learning step" />
            <Typography variant="h5" color="#343434" align="center">
              {step.caption}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );

  return <HomeSection title={title} subtitle={subtitle} content={content} />;
}

export default LearningProcess;
