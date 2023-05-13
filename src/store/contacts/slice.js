import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operation';

export const createContacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContacts.fulfilled](state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const createFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = createFilter.actions;
