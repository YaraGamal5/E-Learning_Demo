import { Container, Grid, Stack, IconButton, Box } from "@mui/material";
import HomeSection from "../molecules/HomeSection";
import CourseCard from "../organisms/CourseCard";
import SliderLeft from "../../assets/home/slider-left-icon.svg";
import SliderRight from "../../assets/home/slider-right-icon.svg";
import {
  useGetSubjectsQuery,
  useGetSubjectCoursesMutation,
} from "../../store";
import { useCallback, useEffect, useState } from "react";

function MostPopular() {
  const result = useGetSubjectsQuery();
  const [startIndex, setStartIndex] = useState(0);
  const [getSubjectCourses, subCoursesResult] =
    useGetSubjectCoursesMutation();
  const subjectsResult = useGetSubjectsQuery();
  const numberOfShownCourses = 3;

  const handleSelect = useCallback(
    (tabId, tabName) => {
      getSubjectCourses({ subject_id: tabId, pageNum: 1, pageSize: 3 });
    },
    [getSubjectCourses]
  );

  useEffect(() => {
    if (subjectsResult.data) {
      handleSelect(
        subjectsResult.data.data.subjects[0].id,
        subjectsResult.data.data.subjects[0].name
      );
    }
  }, [subjectsResult.data, handleSelect]);

  let mostPopCourses =
    subCoursesResult.data &&
    subCoursesResult.data.data.courses.map((course) => (
      <Grid item key={course.classified_product.course_id} xs={12} sm={6} md={4} >
        <CourseCard
          id={course.classified_product.course_id}
          imageUrl={course.classified_product.image_url}
          title={course.classified_product.title}
          description={course.classified_product.description}
          priceBeforeDiscount={course.original_price}
          priceAfterDiscount={course.price_after_discount}
          currency={course.original_price_currency}
          rate={course.final_rating_from_reviews}
          reviewsNumber={course.reviews_number}
          backgroundColor="white"
          buttonVariant="outlined"
        />
      </Grid>
    ));

  const handleSlideLeft = () => {
    setStartIndex(startIndex - numberOfShownCourses);
  };

  const handleSlideRight = () => {
    setStartIndex(startIndex + numberOfShownCourses);
  };

  let title = "Most Popular";
  let subtitle = (
    <>
      Learn the latest skills to reach your <br />
      professional goals
    </>
  );

  let content = (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="0px 80px"
    >
      <IconButton
        sx={{ height: "40px", width: "40px" }}
        disabled={!result.data || startIndex === 0}
        onClick={handleSlideLeft}
      >
        <img src={SliderLeft} alt="left-slider" />
      </IconButton>
      <Grid container spacing={3}>
        {mostPopCourses}
      </Grid>
      <IconButton
        sx={{ height: "40px", width: "40px" }}
        onClick={handleSlideRight}
        disabled={!result.data || startIndex === 0}
      >
        <img src={SliderRight} alt="right-slider" />
      </IconButton>
    </Stack>
  );

  return (
    <Container maxWidth="xxl" disableGutters>
      <Box>
        <HomeSection title={title} subtitle={subtitle} content={content} />
      </Box>
    </Container>
  );
}

export default MostPopular;
