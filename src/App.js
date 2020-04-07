import React from "react";
import "./App.css";
import Contacts from "./contacts/contacts.js";
const contacts = [
  {
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male",
  },
  {
    id: 2,
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female",
  },
  {
    id: 3,
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+3806666666",
    gender: "",
  },
  {
    id: 4,
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    id: 5,
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319520",
    gender: "male",
  },
];
function App() {
  return <Contacts contacts={contacts} />;
}

export default App;
