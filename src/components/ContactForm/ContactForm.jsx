import PropTypes from 'prop-types';

export const ContactForm = ({
  valueName,
  valueNumber,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={valueName}
          onChange={onNameChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={valueNumber}
          onChange={onNumberChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  valueName: PropTypes.string.isRequired,
  valueNumber: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
