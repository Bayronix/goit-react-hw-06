import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log("ContactList", contacts); // Debugging line
  return (
    <div className={styles.contact}>
      <ul className={styles.list}>
        {contacts.map(({ name, number }, index) => (
          <Contact
            key={index}
            name={name}
            number={number}
            onDelete={() => onDeleteContact(index)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
