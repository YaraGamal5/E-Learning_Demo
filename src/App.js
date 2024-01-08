import { Container, CssBaseline, ThemeProvider, Box } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import HomePage from "./components/pages/HomePage";
import { mainTheme } from "./themes/main-theme";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Box style={{ overflowX: "hidden" }}>
          <Header />
          <Container maxWidth="xl" disableGutters>
            <HomePage />
          </Container>
          <Footer />
        </Box>
      ),
    },
  ]);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline style={{ margin: 0, padding: 0 }} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
