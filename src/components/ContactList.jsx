import { ContactItem } from 'components/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsReducer.contacts.items);
  const filter = useSelector(state => state.contactsReducer.searchStr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {filter
        ? contacts
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(contact => <ContactItem key={contact.id} contact={contact} />)
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </ul>
  );
};
