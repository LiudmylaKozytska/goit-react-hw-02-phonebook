import PropTypes from 'prop-types';

export const FilterContacts = ({ value, handleFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        placeholder=" "
        value={value}
        onChange={handleFilter}
      ></input>
    </label>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
