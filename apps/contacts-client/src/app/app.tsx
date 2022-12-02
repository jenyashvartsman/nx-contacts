import { ContactsList } from './components/ContactsList';
import { ContactsSearch } from './components/ContactsSearch';
import { Header } from './components/Header';

export function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <ContactsSearch />
        <ContactsList />
      </div>
    </>
  );
}

export default App;
