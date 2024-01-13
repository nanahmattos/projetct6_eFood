import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food, Menu } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Food[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: builder.query<Menu, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})
export const { useGetRestaurantQuery, useGetMenuQuery } = api
export default api
