import { axiosRequest } from "./axios";

const methods = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

export const getJobs = () => {
  return axiosRequest("/job-info", methods.get);
};

export const postJob = (data) => {
  return axiosRequest("/job-info", methods.post, data);
};

export const editJob = (id, data) => {
  return axiosRequest(`/job-info/${id}`, methods.put, data);
};

export const deleteJob = (id, data) => {
  return axiosRequest(`/job-info/${id}`, methods.delete, data);
};
