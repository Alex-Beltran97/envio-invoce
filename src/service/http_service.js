import axios from "axios";

const instance = () =>axios.create({
  baseURL:"http://localhost:3005"
});

const http_service = {
  get:(path)=>instance().get(path),
  post:(path,data)=>instance().post(path,data),
  put:(path,data)=>instance().put(path,data),
  delete:(path)=>instance().delete(path),
};

export default http_service;