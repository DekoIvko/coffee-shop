import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../utils/statuses";
import { IDelivers } from "../interfaces/IDelivers";
import { createDeliverService, getDeliversService } from "../services/DeliversService";

export interface IDeliversSlice {
  delivers: IDelivers[];
  deliversStatus: string;
  errors: string;
}

const initialState: IDeliversSlice = {
  deliversStatus: STATUS.IDLE,
  delivers: [],
  errors: "",
};

const deliversSlice = createSlice({
  name: "delivers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetDeliversThunk.rejected, (state: IDeliversSlice, action: PayloadAction<any>) => {
        state.deliversStatus = STATUS.FAILED;
        state.errors = action.payload;
      })
      .addCase(GetDeliversThunk.pending, (state: IDeliversSlice, action: PayloadAction<any>) => {
        state.deliversStatus = STATUS.LOADING;
      })
      .addCase(GetDeliversThunk.fulfilled, (state: IDeliversSlice, action: PayloadAction<any>) => {
        state.deliversStatus = STATUS.SUCCEEDED;
        state.delivers = action.payload;
      })
      .addCase(AddDeliverThunk.rejected, (state: IDeliversSlice, action: PayloadAction<any>) => {
        state.deliversStatus = STATUS.FAILED;
        state.errors = action.payload;
      })
      .addCase(AddDeliverThunk.pending, (state: IDeliversSlice, action: PayloadAction<any>) => {
        state.deliversStatus = STATUS.LOADING;
      })
      .addCase(AddDeliverThunk.fulfilled, (state: IDeliversSlice, action: PayloadAction<any>) => {
        state.deliversStatus = STATUS.SUCCEEDED;
      });
  },
});

export const GetDeliversThunk = createAsyncThunk("deliver/get", async () => {
  const response = await getDeliversService();
  return response;
});

export const AddDeliverThunk = createAsyncThunk("deliver/add", async (deliver: IDelivers) => {
  const response = await createDeliverService(deliver);
  return response;
});

export default deliversSlice.reducer;
