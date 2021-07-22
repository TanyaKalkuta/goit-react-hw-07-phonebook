import React from 'react';
import Container from './Component/Container/Container';
import ContactForm from './Component/ContactForm/ContactForm';
import Filter from './Component/Filter/Filter';
import ContactList from './Component/ContactList/ContactList';
// import { fetchContacts } from './redux/phonebook/phonebook-operations';

class App extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />

          <ContactList />
        </div>
      </Container>
    );
  }
}

export default App;
