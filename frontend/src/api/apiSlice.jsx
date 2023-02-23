import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from './api'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const user = JSON.parse(localStorage.getItem("authTokens") !== "undefined" && localStorage.getItem("authTokens") !== null ? localStorage.getItem("authTokens") : null );

const initialState = {	user: user ? user : null, status: null,	result: null,userprofile: null,properties:[]};


export const getResponse = createAsyncThunk("api/getresponse", api);
export const login = createAsyncThunk("api/login", api);
export const register = createAsyncThunk("api/register", api);
export const profile = createAsyncThunk("api/profile", api);
export const updateaccess = createAsyncThunk("api/updateaccess", api);
export const activate = createAsyncThunk("api/activate", api);
export const sendmail = createAsyncThunk("api/sendmail", api);

export const getproperties = createAsyncThunk("api/getproperties", api);
export const logout = createAsyncThunk("api/logout", async () => {localStorage.removeItem("token");});

export const apiSlice = createSlice({
	name: "api",
	initialState,
	reducers: {	reset: (state) => {	state.status = null;state.result=null;},},
	extraReducers: (builder) => {
		builder
			.addCase(getResponse.pending, (state) => {state.status = "pending";	state.result=null;})
			.addCase(getResponse.fulfilled, (state, action) => {state.status = "success"; state.result = action.payload;})
			.addCase(getResponse.rejected, (state, action) => {	state.status = "error";	state.result = action.payload;})
			.addCase(activate.pending, (state) => {state.status = "pending";	state.result=null;})
			.addCase(activate.fulfilled, (state, action) => {state.status = "success"; state.result = action.payload;toast.success("Your account has been successfully activated.");const navigate = useNavigate();navigate("/login");})
			.addCase(activate.rejected, (state, action) => {	state.status = "error";	state.result = action.payload;})
			.addCase(sendmail.pending, (state) => {state.status = "pending";	state.result=null;})
			.addCase(sendmail.fulfilled, (state, action) => {state.status = "success"; state.result = action.payload;toast.success("Your query has been send successfully.");const navigate = useNavigate();navigate("/login");})
			.addCase(sendmail.rejected, (state, action) => {	state.status = "error";	state.result = action.payload;})


			.addCase(register.pending, (state) => {state.status = "pending";	state.result=null;})
			.addCase(register.fulfilled, (state, action) => {state.status = "success"; state.result = action.payload;toast.success("An activation email has been sent your email address. Please check your email");})
			.addCase(register.rejected, (state, action) => {	state.status = "error";	state.result = action.payload;})
			.addCase(logout.fulfilled, (state) => {state.user.refresh=null;state.user = null;state.userprofile =null;toast.success("Successfully logout." )})
			.addCase(updateaccess.pending, (state) => {state.status = "pending";state.result = null;})
			.addCase(updateaccess.fulfilled, (state, action) => {state.status = "success";	state.result=action.payload; let a=JSON.parse(localStorage.getItem("authTokens"));a.access=action.payload?.access; state.user = a;localStorage.setItem("authTokens",JSON.stringify(a));})
			.addCase(updateaccess.rejected, (state, action) => {state.status = "error";state.result=action.payload;state.user = null;localStorage.removeItem("authTokens");})
			.addCase(login.pending, (state) => {state.status = "pending";state.result = null;})
			.addCase(login.fulfilled, (state, action) => {state.status = "success";	state.result=action.payload;state.user = action.payload;localStorage.setItem("authTokens",JSON.stringify(action.payload));})
			.addCase(login.rejected, (state, action) => {state.status = "error";state.result=action.payload;state.user = null;localStorage.removeItem("authTokens");})
			.addCase(profile.pending, (state) => {state.status = "pending";state.result = null;})
			.addCase(profile.fulfilled, (state, action) => {state.status = "success";	state.result=action.payload;state.userprofile = action.payload;})
			.addCase(profile.rejected, (state, action) => {state.status = "error";state.result=action.payload;state.userprofile = null;state.user = null;localStorage.removeItem("authTokens");})
			.addCase(getproperties.pending, (state) => {state.status = "pending";state.result = null;})
			.addCase(getproperties.fulfilled, (state, action) => {state.status = "success";	state.result=action.payload;state.properties = action.payload;})
			.addCase(getproperties.rejected, (state, action) => {state.status = "error";state.result=action.payload;state.properties = null;});



	},
});

export const { reset } = apiSlice.actions;

export default apiSlice.reducer;