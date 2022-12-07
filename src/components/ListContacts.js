import React from "react";
import { PropTypes } from "prop-types";
import { useState } from "react";
export default function ListContacts({ contacts, onDeleteContact,onNavigate }) {
  const [query, setQuery] = useState("");
  const updateQuery = (query) => {
    setQuery(query.trim());
  };
  const clearQuery = () => {
    updateQuery("");
  };
  const showingContacts =
    query === ""
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );
  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
        />
        
        <a className="add-contact" onClick={onNavigate} href="#create">
        Add Contact
        
        </a>
      </div>
      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Now Showing {showingContacts.length} of {contacts.length}
          </span>
          <button onClick={clearQuery}>Show all</button>
        </div>
      )}
      <ol className="contact-list">
        {showingContacts.map((contact) => {
          return (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`,
                }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => onDeleteContact(contact)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
