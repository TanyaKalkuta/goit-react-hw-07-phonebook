import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './Component/Container/Container';
import ContactForm from './Component/ContactForm/ContactForm';
import Filter from './Component/Filter/Filter';
import ContactList from './Component/ContactList/ContactList';
import { fetchContacts } from './redux/phonebook/phonebook-operations';

class App extends React.Component {
  static propTypes = {
    // onFetchContacts: PropTypes.func,
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  componentDidMount() {
    this.props.onfetchContacts();
  }

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

const mapDispatchToProps = dispatch => ({
  onfetchContacts: () => dispatch(fetchContacts()),
});
export default connect(null, mapDispatchToProps)(App);
