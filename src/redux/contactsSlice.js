import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import Contacts from "../components/ContactList/ContactList.json";

// Завантаження контактів з localStorage, якщо вони є
const loadContactsFromLocalStorage = () => {
  const storedContacts = localStorage.getItem("contacts");
  return storedContacts ? JSON.parse(storedContacts) : Contacts;
};

const initialState = {
  contacts: loadContactsFromLocalStorage(),
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      const newContact = { id: uuidv4(), ...action.payload };
      state.contacts.push(newContact);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
