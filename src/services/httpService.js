import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://servicodados.ibge.gov.br",
  timeout: 60000,
});

export default async function getData(url) {
  const { data } = await axiosInstance.get(url);
  return data;
}
