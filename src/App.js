import { Box, Container } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";


function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Box>
          <Header />
          <HomePage />
          <Footer />
        </Box>
      ),
    },
    {
      path: "course-details/:course_id",
      element: (
        <Box>
          <Header />
          <Footer />
        </Box>
      ),
    },
  ]);

  return (
    <Container maxWidth="xl" disableGutters>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
