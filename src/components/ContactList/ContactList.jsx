import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const query = useSelector((state) => state.filter.name);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.contact}>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.listItem}>
            <span className={styles.name}>{contact.name}</span>:
            <span className={styles.number}>{contact.number}</span>
            <button
              onClick={() => handleDelete(contact.id)}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
