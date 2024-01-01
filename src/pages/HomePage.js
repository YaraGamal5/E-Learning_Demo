import { Stack } from "@mui/material";
import Banner from "../components/home/Banner";
import LearningProcess from "../components/home/LearningProcess";
import TopCategories from "../components/home/TopCategories";
import BenefitsOfLearning from "../components/home/BenefitsOfLearning";
import MostPopular from "../components/home/MostPopular";
import OurClients from "../components/home/OurClients";
import PopularCertificates from "../components/home/PopularCertificates";
import WhatsappIcon from "../assets/home/green-whatsapp-icon.svg";

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
