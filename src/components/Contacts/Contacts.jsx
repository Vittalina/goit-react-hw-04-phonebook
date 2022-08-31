import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import { ListItem, Button } from 'components/Contacts/Contacts.styled';

const Contacts = ({ contacts, onClickDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={nanoid()}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <Button
            type="button"
            id={contact.number}
            onClick={() => onClickDelete(contact.id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
