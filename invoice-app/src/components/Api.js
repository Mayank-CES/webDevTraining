import axios from 'axios'
// import {useContext, useState} from 'react'
// import {AppContext} from '../context/AppContext'

// axios.defaults.baseURL="http://localhost:8080/Home";
const API = axios.create({
    baseURL: "http://localhost:8080/Home",
    // timeout:1,
    auth: {
        username: 'mayank',
        password: 'passes'
      },
});


export async function getItemsAPI() {
    const response = await API.get("/items").catch()
    return response.data
  }

export async function postItemsAPI(val) {
    const response = await API.post("/item",val).catch()
    return response.data
  }

export async function getCustomersAPI() {
    const response = await API.get("/customers").catch()
    return response.data
  }

export async function postCustomersAPI(val) {
    const response = await API.post("/customer",val).catch()
    return response.data
}
export async function getCustomerByIdAPI(val) {
  const response = await API.get("/customer/"+parseInt(val)).catch()
  return response.data
}

export async function getInvoicesAPI() {
  const response = await API.get("/invoices").catch()
  return response.data
}

export async function postInvoicesAPI(val) {
  const response = await API.post("/invoice",val).catch()
  return response.data
}
export async function getInvoiceByIdAPI(val) {
  const response = await API.get(`/invoice/edit/${val}`).catch()
  return response.data
}
export async function patchInvoicesAPI(invoice) {
  const response = await API.patch(`/invoice/${invoice.id}`,invoice).catch()
  return response.data
}

// export const MakeGetItemCall = () => {
//     // console.log(itemResponse)
//     const {setLoading} = useContext(AppContext);
//     var itemResponse={}

//     setLoading(true);
//     API.get("/items")
//         .then(function (response) {
//             console.log(response)
//             itemResponse=response.data
//         })
//         .catch((err)=>{
            
//         })
//         .finally(() => {
//             setLoading=false;
//         });
//         // return itemResponse
// };

const Api = () => {

}

export default Api
// export {itemResponse}