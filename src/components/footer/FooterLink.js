import { Link } from "@mui/material";

function FooterLink({ selected, children }) {
  return (
    <Link
      variant="footerItem"
      component="button"
      underline="none"
      color={selected ? "secondary" : "#343434"}
      sx={{ ":hover": { color: selected || "#fafa14" } }}
    >
      {children}
    </Link>
  );
}

export default FooterLink;
