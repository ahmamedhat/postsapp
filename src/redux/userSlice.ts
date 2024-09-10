import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state

export interface UserState {
  id: string | null;
}

// Define the initial state using that type
const initialState: UserState | null = {
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
    },
    deleteUser: state => {
      state.id = null;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const user = (state: RootState) => state.user;

export default userSlice.reducer;
