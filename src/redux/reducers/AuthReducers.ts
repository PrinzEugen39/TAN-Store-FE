import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  name: "",
  role: "",
};

const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    authCheck: (state, action) => {
      if (action.payload) {
        state.email = action.payload.email;
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.role = action.payload.role;
      }
    },
  },
});

export const { setAuth, authCheck } = AuthReducer.actions;

export default AuthReducer.reducer;
