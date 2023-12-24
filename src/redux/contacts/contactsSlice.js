import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    items: [],
    isLoading: false,
    error: null,
  };


  const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
        .addCase(addContact.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          const newContact = action.payload;
          
          if (!state.items.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
            state.items.push(newContact);
          }
          state.isLoading = false;
        })
        .addCase(addContact.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
  state.items = state.items.filter((contact) => contact.id !== action.payload);
});
    },
  });
  
  export const contactsReducer = contactsSlice.reducer;



  export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


