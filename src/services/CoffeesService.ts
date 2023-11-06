import axios from "./axios";
import { appConfig } from "../appConfig";

export const getCoffeesService = async () => {
  try {
    const response = await axios.get(`${appConfig.baseApiURL}/coffee/coffees`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const AddCoffeesService = async (coffee: any) => {
  try {
    const response = await axios.post(`${appConfig.baseApiURL}/coffee/add-coffee`, coffee);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const getMyCoffeesService = async () => {
  try {
    const response = await axios.get(`${appConfig.baseApiURL}/coffee/my-coffees`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const UpdateCoffeesService = async (coffee: any) => {
  try {
    const response = await axios.post(`${appConfig.baseApiURL}/coffee/update-coffee`, coffee);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const RemoveCoffeesService = async (coffee: any) => {
  try {
    const response = await axios.post(`${appConfig.baseApiURL}/coffee/remove-coffee`, coffee);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const RemoveAllMyCoffeesService = async (coffees: any) => {
  try {
    const response = await axios.post(`${appConfig.baseApiURL}/coffee/remove-all-myCoffees`, coffees);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
