import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS } from '../utils/statuses';
import { ICoffee } from '../interfaces/ICoffee';
import {
  AddCoffeesService,
  getCoffeesService,
  getMyCoffeesService,
  UpdateCoffeesService,
} from '../services/CoffeesService';

export interface ICoffeeSlice {
  coffees: ICoffee[];
  myCoffees: ICoffee[];
  coffeesStatus: string;
  addedCoffee: string;
  errors: string;
}

const initialState: ICoffeeSlice = {
  coffeesStatus: STATUS.IDLE,
  coffees: [],
  myCoffees: [],
  addedCoffee: '',
  errors: '',
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
  extraReducers: (builder) => {
    builder
      .addCase(
        GetCoffeesThunk.rejected,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.FAILED;
          state.errors = action.payload;
        }
      )
      .addCase(
        GetCoffeesThunk.pending,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.LOADING;
        }
      )
      .addCase(
        GetCoffeesThunk.fulfilled,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.SUCCEEDED;
          state.coffees = action.payload;
        }
      )
      .addCase(
        GetMyCoffeesThunk.rejected,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.FAILED;
          state.errors = action.payload;
        }
      )
      .addCase(
        GetMyCoffeesThunk.pending,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.LOADING;
        }
      )
      .addCase(
        GetMyCoffeesThunk.fulfilled,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.SUCCEEDED;
          state.myCoffees = action.payload;
        }
      )
      .addCase(
        AddCoffeeThunk.rejected,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.FAILED;
          state.errors = action.payload;
        }
      )
      .addCase(
        AddCoffeeThunk.pending,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.LOADING;
        }
      )
      .addCase(
        AddCoffeeThunk.fulfilled,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.SUCCEEDED;
          state.addedCoffee = action.payload;
        }
      )
      .addCase(
        UpdateCoffeeThunk.rejected,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.FAILED;
          state.errors = action.payload;
        }
      )
      .addCase(
        UpdateCoffeeThunk.pending,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.LOADING;
        }
      )
      .addCase(
        UpdateCoffeeThunk.fulfilled,
        (state: ICoffeeSlice, action: PayloadAction<any>) => {
          state.coffeesStatus = STATUS.SUCCEEDED;
          state.myCoffees = action.payload;
        }
      );
  },
});

export const GetCoffeesThunk = createAsyncThunk('coffee/get', async () => {
  const response = await getCoffeesService();
  return response;
});

export const AddCoffeeThunk = createAsyncThunk(
  'coffee/add',
  async (coffee: any) => {
    const response = await AddCoffeesService(coffee);
    return response;
  }
);

export const UpdateCoffeeThunk = createAsyncThunk(
  'coffee/update',
  async (coffee: any) => {
    const response = await UpdateCoffeesService(coffee);
    return response;
  }
);

export const GetMyCoffeesThunk = createAsyncThunk('my-coffee/get', async () => {
  const response = await getMyCoffeesService();
  return response;
});

export const { addCoffee, updateCoffees } = coffeesSlice.actions;
export default coffeesSlice.reducer;
