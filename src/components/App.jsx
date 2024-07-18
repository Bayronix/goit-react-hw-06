import { useState, useEffect } from "react";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import InitialContacts from "./ContactList/ContactList.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : InitialContacts;
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddContact = (formData) => {
    setContacts([...contacts, formData]);
    console.log(...contacts, formData);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleSearchContact = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchQuery(searchValue);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox
        searchQuery={searchQuery}
        onSearchContact={handleSearchContact}
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
