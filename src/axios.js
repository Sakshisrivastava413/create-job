import axios from "axios";

const basepath = "https://6534f618e1b6f4c5904713dd.mockapi.io/api";

const axiosWrapper = async (props) => {
  try {
    const apiResp = await axios(props);
    return apiResp;
  } catch (error) {
    throw error;
  }
};

export function axiosRequest(url, method, data) {
  return axiosWrapper({
    url: `${basepath}${url}`,
    data,
    method,
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
    },
  });
}
