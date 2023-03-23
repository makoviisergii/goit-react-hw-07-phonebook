import { ContactItem } from 'components/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsReducer.contacts);
  const filter = useSelector(state => state.contactsReducer.searchStr);

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
