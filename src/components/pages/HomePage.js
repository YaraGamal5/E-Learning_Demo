import { Stack } from "@mui/material";
import Banner from "../atoms/Banner";
import LearningProcess from "../templates/LearningProcess";
import TopCategories from "../templates/TopCategories";
import BenefitsOfLearning from "../templates/BenefitsOfLearning";
import MostPopular from "../templates/MostPopular";
import OurClients from "../templates/OurClients";
import PopularCertificates from "../templates/PopularCertificates";
import WhatsappIcon from "../../assets/home/green-whatsapp-icon.svg";

function HomePage() {
  return (
  
    <Stack spacing="100px">
      <Banner />
      <Stack>
      <Stack
        direction="row"
        justifyContent="end"
        paddingRight="40px"
        position="fixed"
        bottom="0"
        right="0"
        marginBottom="60px"
>
        <img
          src={WhatsappIcon}
          alt="whatsapp-icon"
          height="56px"
          width="56px"
        />
      </Stack>
      <LearningProcess />
      </Stack>
      <TopCategories />
      <BenefitsOfLearning />
      <MostPopular />
      <OurClients />
      <PopularCertificates />
    </Stack>
   
  );
}

export default HomePage;
