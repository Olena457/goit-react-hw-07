import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps.js';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
// import { selectError,select } from 'selectError, ';
const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchTasks());
}, [dispatch]);

function App() {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
