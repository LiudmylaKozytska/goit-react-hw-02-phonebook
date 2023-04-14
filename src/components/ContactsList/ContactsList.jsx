// import PropTypes from 'prop-types';

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
