import { Stack, Typography } from "@mui/material";
import HomeSection from "./HomeSection";
import ChooseCourseIcon from "../../assets/home/choose-course.svg";
import StartLearningIcon from "../../assets/home/start-learning.svg";
import GetCertificateIcon from "../../assets/home/get-certificate.svg";

function LearningProcess() {
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
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="row"
      style={{ backgroundColor: "white" }}
      spacing="150px"
      padding="35px 80px"
    >
      {learningSteps.map((step) => {
        return (
          <Stack key={step.caption}>
            <img src={step.icon} alt="learning step" />
            <Typography variant="h3" color="#343434">
              {step.caption}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
  return <HomeSection title={title} subtitle={subtitle} content={content} />;
}

export default LearningProcess;
