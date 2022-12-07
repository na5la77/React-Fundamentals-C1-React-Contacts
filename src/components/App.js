import "../css/App.css";
import ListContacts from "./ListContacts";
import { useState } from "react";
import * as ContactsAPI from "../utils/ContactsAPI";
import { useEffect } from "react";
import CreateContact from "./CreateContact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };
  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };
    getContacts();
  }, []);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />

      <Route exact path="/create" element={<CreateContact />} />
    </Routes>
  );
};

export default App;
