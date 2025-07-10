import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQueryWithReAuth } from './ReAuth';
import { Certification as CertificationType } from '../../types/Certification';

export const Certification = createApi({
  reducerPath: 'Certification',
  baseQuery: BaseQueryWithReAuth,
  tagTypes: ['Certification'],
  endpoints: (builder) => ({
    createCertification: builder.mutation<
      CertificationType,
      Partial<CertificationType>
    >({
      query: (newCertification) => ({
        url: 'certification',
        method: 'POST',
        body: newCertification,
      }),
      invalidatesTags: ['Certification'],
    }),

    getCertifications: builder.query<CertificationType[], void>({
      query: () => 'certification',
      providesTags: ['Certification'],
    }),

    getCertificationById: builder.query<CertificationType, string>({
      query: (id) => `certification/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Certification', id }],
    }),

    updateCertification: builder.mutation<
      CertificationType,
      { id: string; data: Partial<CertificationType> }
    >({
      query: ({ id, data }) => ({
        url: `certification/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: 'Certification', id },
      ],
    }),

    deleteCertification: builder.mutation<void, string>({
      query: (id) => ({
        url: `certification/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Certification', id }],
    }),
  }),
});

export const {
  useCreateCertificationMutation,
  useGetCertificationsQuery,
  useGetCertificationByIdQuery,
  useUpdateCertificationMutation,
  useDeleteCertificationMutation,
} = Certification;
