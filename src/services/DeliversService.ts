import axios from "./axios";
import { appConfig } from "../appConfig";
import { IDelivers } from "../interfaces/IDelivers";

export const getDeliversService = async () => {
  try {
    const response = await axios.get(`${appConfig.baseApiURL}/deliver/delivers`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const createDeliverService = async (deliver: IDelivers) => {
  try {
    const response = await axios.post(`${appConfig.baseApiURL}/deliver/add-deliver`, deliver);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
