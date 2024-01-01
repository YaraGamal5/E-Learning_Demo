import { useCallback, useEffect, useState } from "react";
import { useGetSubjectsQuery, useGetSubjectCoursesMutation } from "../../store";
import { Button, Stack } from "@mui/material";
import HomeSection from "./HomeSection";
import CustomTabs from "./CustomTabs";
import CourseCard from "./CourseCard";

function TopCategories() {
  const [selected, setSelected] = useState({ id: 11, name: "" });
  const subjectsResult = useGetSubjectsQuery();
  const [getSubjectCourses, subCoursesResult] = useGetSubjectCoursesMutation();

  const handleSelect = useCallback(
    (tabId, tabName) => {
      setSelected({ id: tabId, name: tabName });
      getSubjectCourses({ subject_id: tabId, pageNum: 1, pageSize: 4 });
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

  let topCategoryCourses =
    subCoursesResult.data &&
    subCoursesResult.data.data.courses.map((course) => {
      return (
        <CourseCard
          key={course.classified_product.course_id}
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
      );
    });

  let title = "Top Categories";
  let subtitle = (
    <>
      Learn the latest skills to reach your <br /> professional goals
    </>
  );
  let content = (
    <Stack spacing="50px" padding="0px 80px">
      <Stack spacing="35px">
        
        {subjectsResult.data && (
          <CustomTabs
            value={selected.id}
            onChange={handleSelect}
            tabs={subjectsResult.data.data.subjects}
            tabWidth="100px"
          />
        )}
        <Stack
          direction="row"
          spacing="30px"
          justifyContent="center"
          alignItems="stretch"
        >
          {topCategoryCourses}
        </Stack>
      </Stack>
      <Stack alignItems="center">
          <Button
            variant="contained"
            sx={{
              width: "314px",
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
