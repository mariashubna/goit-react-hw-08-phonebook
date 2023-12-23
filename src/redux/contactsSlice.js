import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async Thunks
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (userId) => {
  try {
    const response = await fetch(`https://657da5c43e3f5b189462e242.mockapi.io/contacts/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw new Error('Error fetching contacts');
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async ({ userId, newContact }) => {
  try {
    const response = await fetch(`https://657da5c43e3f5b189462e242.mockapi.io/contacts/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw new Error('Error adding contact');
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async ({ userId, contactId }) => {
  try {
    await fetch(`https://657da5c43e3f5b189462e242.mockapi.io/contacts/${userId}/${contactId}`, {
      method: 'DELETE',
    });
    return contactId;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw new Error('Error deleting contact');
  }
});

// Initial State
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// Slice
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
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export Reducer
export const contactsReducer = contactsSlice.reducer;