import axios from './axios';
import { appConfig } from '../appConfig';

export const getCoffeesService = async () => {
  try {
    const response = await axios.get(`${appConfig.baseApiURL}/coffees`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const AddCoffeesService = async (coffee: any) => {
  try {
    const response = await axios.post(
      `${appConfig.baseApiURL}/add-coffee`,
      coffee
    );
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const getMyCoffeesService = async () => {
  try {
    const response = await axios.get(`${appConfig.baseApiURL}/my-coffees`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const UpdateCoffeesService = async (coffee: any) => {
  try {
    const response = await axios.post(
      `${appConfig.baseApiURL}/update-coffee`,
      coffee
    );
    return response.data;
  } catch (error: any) {
    return error;
  }
};
