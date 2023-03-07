import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const sendEmail = createAsyncThunk(
	'contact/send_email',
	async (data, { rejectWithValue }) => {
		try {
			const res = await axios.post('/email', data);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState({
	loading: false,
	name: '',
	email: '',
	phone: '',
	message: '',
	success: null,
	errors: null,
});

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPhone: (state, action) => {
			state.phone = action.payload;
		},
		setMessage: (state, action) => {
			state.message = action.payload;
		},
		clearForm: (state) => {
			state.name = '';
			state.email = '';
			state.phone = '';
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(sendEmail.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(sendEmail.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload;
				state.name = '';
				state.email = '';
				state.phone = '';
				state.message = '';
			})
			.addCase(sendEmail.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const { setName, setEmail, setPhone, setMessage, clearForm } =
	contactSlice.actions;

export default contactSlice.reducer;
