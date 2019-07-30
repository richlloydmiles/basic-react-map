export const filterPeople = (people, search) =>
  people.filter(
    person =>
      person.Firstname.toLowerCase().includes(search.toLowerCase()) ||
      person.Surname.toLowerCase().includes(search.toLowerCase())
  );
