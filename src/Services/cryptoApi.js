import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'x-rapidapi-host': '',
   'x-rapidapi-key': ''
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/stats'
const createRequest = (url) => ({url,headers: cryptoApiHeaders})


const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: ()=> createRequest('/coins')
        })
    })
})

export default cryptoApi

