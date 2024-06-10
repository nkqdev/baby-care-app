import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  deviceInfo: '',
  isLoading: false,
};

export const deviceInfoSlice = createSlice({
  name: 'deviceInfo',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDeviceInfo: (state, action) => {
      state.deviceInfo = action.payload
    },
  },
});

export const {
  setIsLoading,
  setDeviceInfo,
} = deviceInfoSlice.actions;
export default deviceInfoSlice.reducer;