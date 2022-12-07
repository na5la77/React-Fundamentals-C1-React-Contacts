import "../css/App.css";
import ListContacts from "./ListContacts";
import { useState } from "react";
import * as ContactsAPI from "../utils/ContactsAPI";
import { useEffect } from "react";
import CreateContact from "./CreateContact";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };
  const createContact = (contact) => {
    const create = async () => {
      const res = await ContactsAPI.create(contact);
      setContacts(contacts.concat(res));
    };

    create();
    navigate("/");
  };
  // setContacts(...contacts,res)
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

      <Route
        exact
        path="/create"
        element={
          <CreateContact
            onCreateContact={(contact) => {
              createContact(contact);
            }}
          />
        }
      />
    </Routes>
  );
};

export default App;
