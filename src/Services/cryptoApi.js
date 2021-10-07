import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': '30c39dbee3msh4a3c6b0218b7f41p19e90ejsn67450a435ef1'
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

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/stats',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '30c39dbee3msh4a3c6b0218b7f41p19e90ejsn67450a435ef1'
//   }
// };