import PropTypes from 'prop-types';

export const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}: {item.number}
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
