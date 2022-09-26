import { useState, useEffect } from 'react';
import { Box } from 'components/Box';
import Phonebook from 'components/Phonebook/Phonebook';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(JSON.parse(window.localStorage.getItem('contacts')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitData = data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => {
      return [
        ...prevState,
        { name: data.name, number: data.number, id: data.id },
      ];
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onClickDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(filteredNames);

  return (
    <Box
      p={100}
      px
      mr="auto"
      ml="auto"
      width="500px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      as="main"
    >
      <h1>Phonebook</h1>
      <Phonebook onSubmit={onSubmitData} />
      <h2>Contacts</h2>

      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={filteredNames} onClickDelete={onClickDelete} />
    </Box>
  );
};

export default App;
