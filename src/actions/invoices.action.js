import http_service from "../service/http_service";

const PATH = "/invoices";

export const getInvoices = async ()=>
  await http_service.get(PATH);

export const getInvoicesById = async (id)=>
  await http_service.get(`${ PATH }/${ id }`);

export const postInvoices = async (data)=>
  await http_service.post(PATH,data);

export const putInvoice = async (id, data)=>
  await http_service.put(`${ PATH }/${ id }`,data);

export const deleteInvoice = async (id)=>
  await http_service.delete(`${ PATH }/${ id }`);