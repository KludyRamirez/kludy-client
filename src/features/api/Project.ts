import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQueryWithReAuth } from './ReAuth';
import { Project as ProjectType } from '../../types/Project';

export const Project = createApi({
  reducerPath: 'Project',
  baseQuery: BaseQueryWithReAuth,
  tagTypes: ['Project'],
  endpoints: (builder) => ({
    createProject: builder.mutation<ProjectType, Partial<ProjectType>>({
      query: (newProject) => ({
        url: 'project',
        method: 'POST',
        body: newProject,
      }),
      invalidatesTags: ['Project'],
    }),

    getProjects: builder.query<ProjectType[], void>({
      query: () => 'project',
      providesTags: ['Project'],
    }),

    getProjectById: builder.query<ProjectType, string>({
      query: (id) => `project/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Project', id }],
    }),

    updateProject: builder.mutation<
      ProjectType,
      { id: string; data: Partial<ProjectType> }
    >({
      query: ({ id, data }) => ({
        url: `project/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Project', id }],
    }),

    deleteProject: builder.mutation<void, string>({
      query: (id) => ({
        url: `project/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Project', id }],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = Project;
