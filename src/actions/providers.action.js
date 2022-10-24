import http_service from "../service/http_service";

const PATH = "/providers";

export const getProviders = async ()=>
  await http_service.get(PATH);

export const getProvidersById = async (id)=>
  await http_service.get(`${ PATH }/${ id }`);

export const postProviders = async (data)=>
  await http_service.post(PATH,data);

export const putProvider = async (id, data)=>
  await http_service.put(`${ PATH }/${ id }`,data);

export const deleteProvider = async (id)=>
  await http_service.delete(`${ PATH }/${ id }`);