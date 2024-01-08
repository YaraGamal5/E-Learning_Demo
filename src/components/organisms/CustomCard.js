import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Stack } from "@mui/material";

function CustomCard({ media, content, actions, backgroundColor }) {
  return (
    <Stack
      sx={{
        width: "272px",
        borderRadius: "15px",
        boxShadow: "1px 2px 15px rgba(0, 0, 0, 0.16)",
        backgroundColor: backgroundColor,
      }}
    >
      {media && <CardMedia>{media}</CardMedia>}
      <Stack
        sx={{
          flexGrow: 1,
          padding: "0px 5px 5px 5px",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>{content}</CardContent>
        <CardActions
          sx={{
            left: "10px",
            width: "92%",
            textAlign: "center",
          }}
        >
          {actions}
        </CardActions>
      </Stack>
    </Stack>
  );
}

export default CustomCard;
