import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS } from '../utils/statuses';
import { ICoffee } from '../interfaces/ICoffee';

interface ICoffeeSlice {
  coffees: ICoffee[];
  coffeesStatus: string;
}

const initialState: ICoffeeSlice = {
  coffees: [],
  coffeesStatus: STATUS.IDLE,
};

const coffeesSlice = createSlice({
  name: 'coffees',
  initialState,
  reducers: {
    addCoffee: (state: ICoffeeSlice, action: PayloadAction<any>) => {
      const tempCoffees = state.coffees;
      tempCoffees.push(action.payload);

      state.coffees = tempCoffees;
    },
    updateCoffees: (state: ICoffeeSlice, action: PayloadAction<any>) => {
      const tempCoffees = state.coffees;
      const filterCoffees = tempCoffees.filter(
        (coffee) => coffee.id !== action.payload.id
      );
      filterCoffees.push(action.payload);
      state.coffees = filterCoffees;
    },
  },
});

export const { addCoffee, updateCoffees } = coffeesSlice.actions;
export const getAllCoffees = (state: ICoffeeSlice) => state.coffees;
export default coffeesSlice.reducer;
