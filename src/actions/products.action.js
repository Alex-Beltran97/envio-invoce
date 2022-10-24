import http_service from "../service/http_service";

const PATH = "/products";

export const getProducts = async ()=>
  await http_service.get(PATH);

export const getProductsById = async (id)=>
  await http_service.get(`${ PATH }/${ id }`);

export const postProducts = async (data)=>
  await http_service.post(PATH,data);

export const putProduct = async (id, data)=>
  await http_service.put(`${ PATH }/${ id }`,data);

export const deleteProduct = async (id)=>
  await http_service.delete(`${ PATH }/${ id }`);