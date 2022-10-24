import http_service from "../service/http_service";

const PATH = "/customers";

export const getCustomers = async ()=>
  await http_service.get(PATH);

export const getCustomersById = async (id)=>
  await http_service.get(`${ PATH }/${ id }`);

export const postCustomers = async (data)=>
  await http_service.post(PATH,data);

export const putCustomer = async (id, data)=>
  await http_service.put(`${ PATH }/${ id }`,data);

export const deleteCustomer = async (id)=>
  await http_service.delete(`${ PATH }/${ id }`);