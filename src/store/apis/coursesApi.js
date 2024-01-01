import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apistaging.inclass.app",
  }),
  endpoints(builder) {
    return {
      getSubjects: builder.query({
        query: () => {
          return {
            url: "api/v1/classes/80/subjects",
            method: "GET",
          };
        },
      }),

      getSubjectCourses: builder.mutation({
        query: ({ subject_id, pageNum, pageSize }) => {
          return {
            url: "api/v1/courses_filtering?",
            method: "GET",
            params: {
              "filter[subject_id]": subject_id,
              "page[number]": pageNum,
              "page[size]": pageSize,
            },
          };
        },
      }),

      getCourses: builder.query({
        query: () => {
          return {
            url: "api/v1/courses",
            method: "GET",
            params: {
              school_class_id: 1,
            },
          };
        },
      }),
    };
  },
});

export { coursesApi };
export const {
  useGetSubjectsQuery,
  useGetSubjectCoursesMutation,
  useGetCoursesQuery,
} = coursesApi;
