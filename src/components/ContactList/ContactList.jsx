import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const query = useSelector((state) => state.filter.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.contact}>
      <ul className={styles.list}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))
        ) : (
          <li>No contacts found.</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
