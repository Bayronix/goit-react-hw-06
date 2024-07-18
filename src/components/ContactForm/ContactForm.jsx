import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useId } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});
const ContactForm = ({ onAddContact }) => {
  const id = useId();

  const handleSubmit = (values, { resetForm }) => {
    const contactWithId = { ...values, id };
    onAddContact(contactWithId);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className={styles.form}>
          <h3>Name</h3>
          <Field className={styles.field} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <h3>Phone Number</h3>
          <Field className={styles.field} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />

          <button className={styles.button} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
