import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), name: action.name }];
    case "delete":
      return state.filter(contact => contact.id !== action.id);
    default:
      return state;
  }
}

function ContactsApp() {
  const [contacts, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    const name = prompt("Yangi kontakt nomini kiriting:");
    if (name) {
      dispatch({ type: "add", name });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 text-center">
      <h2 className="text-5xl font-bold mb-5 text-blue-500">useReducer <br /></h2>
      <p className="text-3xl font-bold mb-10 text-black">Contact app</p>

      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ➕ Yangi kontakt
      </button>

      <ul className="mt-6 space-y-3 w-64">
        {contacts.map(contact => (
          <li
            key={contact.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm"
          >
            <span className="font-medium">{contact.name}</span>
            <button
              onClick={() => dispatch({ type: "delete", id: contact.id })}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsApp;
