import { Stack, Typography, Rating } from "@mui/material";

function Review({
  rate,
  votes,
  rateColor,
  rateFontSize,
  votesColor,
  votesFontSize,
}) {
  return (
    <Stack component="span" direction="row" spacing="4px" alignItems="center">
      <Typography color={rateColor} fontSize={rateFontSize} fontWeight={600}>
        {rate}
      </Typography>
      <Rating defaultValue={rate} precision={0.1} readOnly size="small" />
      <Typography fontSize={votesFontSize} fontWeight={400} color={votesColor}>
        {`(${votes})`}
      </Typography>
    </Stack>
  );
}

export default Review;
