import { useCallback, useEffect, useState } from "react";
import { useGetSubjectsQuery, useGetSubjectCoursesMutation } from "../../store";
import { Button, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import HomeSection from "../molecules/HomeSection";
import CustomTabs from "../organisms/CustomTabs";
import CourseCard from "../organisms/CourseCard";

function TopCategories() {
  const [selected, setSelected] = useState({ id: 11, name: "" });
  const subjectsResult = useGetSubjectsQuery();
  const [getSubjectCourses, subCoursesResult] = useGetSubjectCoursesMutation();

  const handleSelect = useCallback(
    (tabId, tabName) => {
      setSelected({ id: tabId, name: tabName });
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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  let topCategoryCourses =
    subCoursesResult.data &&
    subCoursesResult.data.data.courses.map((course) => {
      return (
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
      );
    });

  let title = "Top Categories";
  let subtitle = (
    <>
      Learn the latest skills to reach your <br /> professional goals
    </>
  );

  let content = (
    <Stack spacing={isSmallScreen ? "20px" : "50px"} padding={isSmallScreen ? "0px" : "0px 80px"}>
      <Stack spacing={isSmallScreen ? "20px" : "35px"}>
        {subjectsResult.data && (
          <CustomTabs
            value={selected.id}
            onChange={handleSelect}
            tabs={subjectsResult.data.data.subjects}
            tabWidth={isSmallScreen ? "50px" : "100px"}
          />
        )}
        <Grid container direction="row" justifyContent="center" spacing={isSmallScreen ? "30px" : "50px"} alignItems="stretch" >
            {topCategoryCourses}
        </Grid>
      </Stack>
      <Stack alignItems="center">
        <Button
          variant="contained"
          sx={{
            width: isSmallScreen ? "100%" : "314px",
            height: "52px",
            fontSize: "20px",
          }}
        >
          View More Courses
        </Button>
      </Stack>
    </Stack>
  );

  return <HomeSection title={title} subtitle={subtitle} content={content} />;
}

export default TopCategories;
