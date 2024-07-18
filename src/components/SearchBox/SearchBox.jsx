import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchQuery, onSearchContact }) => {
  return (
    <div className={styles.form}>
      <h3>Find contacts by name</h3>
      <input
        className={styles.field}
        type="text"
        value={searchQuery}
        onChange={onSearchContact}
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchContact: PropTypes.func.isRequired,
};

export default SearchBox;
