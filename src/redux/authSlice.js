import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  registerUserAPI,
  logInUserAPI,
  authWithGoogleAPI,
  anonymousRegisterUserAPI,
} from "./authAPI";
import { getCustomerById } from "../client/customers/clientSlice";

const initialState = {
  status: "idle",
  user: {},
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (register, thunkAPI) => {
    const response = await registerUserAPI(register);
    return response;
  }
);

export const anonymousRegisterUser = createAsyncThunk(
  "auth/anonymousRegisterUser",
  async (register, thunkAPI) => {
    const response = await anonymousRegisterUserAPI(register);
    const idToken = response.idToken;
    return response;
  }
);

export const logInUser = createAsyncThunk("auth/logInUser", async (login) => {
  const response = await logInUserAPI(login);
  return response;
});

export const authWithGoogle = createAsyncThunk(
  "auth/authWithGoogle",
  async () => {
    const response = await authWithGoogleAPI();
    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // No synchronous reducers
  },

  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.notification = "User registered";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "error";
        state.notification = action.payload;
      });

    builder
      // Anonymous register user
      .addCase(anonymousRegisterUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(anonymousRegisterUser.fulfilled, (state, action) => {
        state.status = "idle";
        // state.customer._id = action.payload._id;
        // state.customer.email = action.payload.email;
        state.user = action.payload;
        state.notification = "User registered anonymously";
      })
      .addCase(anonymousRegisterUser.rejected, (state, action) => {
        state.status = "error";
        state.notification = action.payload;
      });

    builder
      // Save file
      .addCase(logInUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.notification = "User logged in";
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.status = "error";
        state.notification = action.payload;
      });

    builder
      // Load file
      .addCase(authWithGoogle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authWithGoogle.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.notification = "Authenticated with google";
      })
      .addCase(authWithGoogle.rejected, (state, action) => {
        state.status = "error";
        state.notification = action.payload;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) =>
  state.auth.user.uid ? true : false;
export const selectIdToken = (state) => state.auth.user.idToken;
export const selectAuthCustomerId = (state) => state.auth.user._id;

export default authSlice.reducer;
