import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Box, Stack } from "@mui/material";
import CustomCard from "./CustomCard";
import Review from "./Review";
import WhiteShoppingCart from "../../assets/home/white-shopping-cart.svg";
import PrimaryShoppingCart from "../../assets/header/shopping-cart-icon.svg";

function CourseCard({
  id,
  imageUrl,
  title,
  description,
  priceBeforeDiscount,
  priceAfterDiscount,
  currency,
  rate,
  reviewsNumber,
  backgroundColor,
  buttonVariant,
}) {
  let media = imageUrl && (
    <Link
      style={{ textDecoration: "none", color: "#343434" }}
      to={`/course-details/${id}`}
    >
      <img height="170px" width="272px" src={imageUrl} alt="course-media" />
    </Link>
  );
  const longDescription = useRef();
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    longDescription.current.style.height = "auto";
    setShowMore(true);
  };

  let content = (
    <Stack
      spacing="15px"
      style={{ display: "block", width: "272px", padding: "5px 0px 5px 0px" }}
    >
      <Link
        style={{ textDecoration: "none", color: "#343434" }}
        to={`/course-details/${id}`}
      >
        <Typography
          variant="h4"
          textOverflow="ellipsis"
          noWrap
          width="225px"
          overflow="hidden"
          display="block"
        >
          {title}
        </Typography>
      </Link>

      <Stack spacing="10px">
        <Review
          rate={rate}
          votes={reviewsNumber}
          rateColor="#F7B52E"
          rateFontSize="14px"
          votesColor="#938F8C"
          votesFontSize="11px"
        />

        <Typography
          variant="body1"
          textOverflow="ellipsis"
          noWrap
          width="225px"
          overflow="hidden"
          display="block"
        >
          {description}
        </Typography>
      </Stack>

      <Stack>
        <Typography
          variant="body2"
          lineHeight="16px"
          height="32px"
          width="225px"
          overflow="hidden"
          display="block"
          ref={longDescription}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        {showMore || (
          <Typography
            onClick={handleShowMore}
            fontSize="10px"
            fontWeight={600}
            sx={{ cursor: "pointer" }}
          >
            ...See More
          </Typography>
        )}
      </Stack>
      {priceBeforeDiscount && currency && (
        <Stack direction="row" spacing="10px" alignItems="center">
          <Box>
            <Typography
              color="#343434"
              fontSize="16px"
              fontWeight={700}
              component="span"
            >
              {currency + " "}
            </Typography>
            <Typography
              color="#343434"
              fontSize="16px"
              fontWeight={700}
              component="span"
            >
              {priceAfterDiscount}
            </Typography>
          </Box>
          {priceAfterDiscount < priceBeforeDiscount && (
            <Box sx={{ textDecoration: "line-through" }}>
              <Typography
                color="#343434"
                fontSize="16px"
                fontWeight={500}
                component="span"
              >
                {currency + " "}
              </Typography>
              <Typography
                color="#343434"
                fontSize="16px"
                fontWeight={500}
                component="span"
              >
                {priceBeforeDiscount}
              </Typography>
            </Box>
          )}
        </Stack>
      )}
    </Stack>
  );
  let actions = (
    <Stack direction="row" width="100%" spacing="17px">
      <Button
        sx={{ flexGrow: 1, borderRadius: "8px", height: "34px" }}
        variant={buttonVariant}
      >
        Enroll now!
      </Button>
      <Button
        sx={{ borderRadius: "8px", height: "34px" }}
        width="25%"
        variant={buttonVariant}
      >
        <img
          src={
            buttonVariant === "outlined"
              ? PrimaryShoppingCart
              : WhiteShoppingCart
          }
          alt="shopping-cart-icon"
        />
      </Button>
    </Stack>
  );

  return (
    <CustomCard
      media={media}
      content={content}
      actions={actions}
      backgroundColor={backgroundColor}
    />
  );
}

export default CourseCard;
