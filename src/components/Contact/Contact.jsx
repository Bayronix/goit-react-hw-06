import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  console.log("Contact", name, number); // Debugging line
  return (
    <li className={styles.list}>
      <span className={styles.name}>{name}</span>:
      <span className={styles.number}>{number}</span>
      <button onClick={onDelete} className={styles.button}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
