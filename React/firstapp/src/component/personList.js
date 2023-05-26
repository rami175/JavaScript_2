import React from "react";
import Person from "./person";

function PersonList() {
  const persons = [
    { id: 1, name: "Julie", title: "Web Developer" },
    { id: 2, name: "Shannon", title: "Web Developer" },
    { id: 3, name: "Corey", title: "Web Developer" },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default PersonList;
