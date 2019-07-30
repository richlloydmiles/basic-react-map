import { filterPeople } from "./utils";

it("should filter people on a common Surname as expected", () => {
  // given
  // ... we have a list of people
  const people = [
    {
      Firstname: "Homer",
      Surname: "Simpson",
      Lat: -33.955767,
      Long: 18.493579
    },
    {
      Firstname: "Marge",
      Surname: "Simpson",
      Lat: -34.030345,
      Long: 18.35419
    },
    {
      Firstname: "Peter",
      Surname: "Griffon",
      Lat: -34.10957,
      Long: 18.382564
    }
  ];

  // ... we have a string to filter on
  const search = "Simpson";

  // when  ... we run the filterPeople function
  const result = filterPeople(people, search);

  // then ... the result is as expected
  expect(result).toEqual([
    {
      Firstname: "Homer",
      Surname: "Simpson",
      Lat: -33.955767,
      Long: 18.493579
    },
    {
      Firstname: "Marge",
      Surname: "Simpson",
      Lat: -34.030345,
      Long: 18.35419
    }
  ]);
});

it("should filter people by Firstname and Surname as expected", () => {
  // given
  // ... we have a list of people
  const people = [
    {
      Firstname: "Homer",
      Surname: "Simpson",
      Lat: -33.955767,
      Long: 18.493579
    },
    {
      Firstname: "Griffon",
      Surname: "Simpson",
      Lat: -34.030345,
      Long: 18.35419
    },
    {
      Firstname: "Peter",
      Surname: "Griffon",
      Lat: -34.10957,
      Long: 18.382564
    }
  ];

  // ... we have a string to filter on
  const search = "Griffon";

  // when ... we run the filterPeople function
  const result = filterPeople(people, search);

  // then ... the result is as expected
  expect(result).toEqual([
    {
      Firstname: "Griffon",
      Surname: "Simpson",
      Lat: -34.030345,
      Long: 18.35419
    },
    {
      Firstname: "Peter",
      Surname: "Griffon",
      Lat: -34.10957,
      Long: 18.382564
    }
  ]);
});
