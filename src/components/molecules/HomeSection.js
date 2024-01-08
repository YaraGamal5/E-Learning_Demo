import { Stack, Typography, Box } from "@mui/material";

function HomeSection({ title, subtitle, content }) {
  return (
    <Stack spacing="30px">
      <Stack padding="0px 80px" spacing="15px" alignItems="center">
        <Typography variant="h2" color="secondary">
          {title}
        </Typography>
        <Typography textAlign="center" fontSize="13px" fontWeight={500}>
          {subtitle}
        </Typography>
      </Stack>
      <Box>{content}</Box>
    </Stack>
  );
}

export default HomeSection;
