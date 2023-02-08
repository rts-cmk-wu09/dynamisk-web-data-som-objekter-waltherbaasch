const person = {
  firstName: 'Mike',
  lastName: 'Madsen',
  age: 30,
  job: 'Udvikler'
};

console.log(person.firstName); // Udskriver "Mike"
console.log(person['lastName']); // Udskriver "Madsen"
console.log(person.age); // Udskriver 30
console.log(person['job']); // Udskriver "Udvikler"

//opgave 2
copiedPerson.isMarried = true;
copiedPerson.hobbies = ['læse', 'rejse', 'programmering'];
copiedPerson.address = {
  street: '123 crackerstreet',
  city: 'JavaCity',
  state: 'JavaState',
  zip: '42069'
};
console.log('Address:');
console.log(copiedPerson.address.street);
console.log(copiedPerson.address.city);
console.log(copiedPerson.address.state);
console.log(copiedPerson.address.zip);


//opgave 3

let fodboldspillere = [
  {
    navn: "Lionel Messi",
    alder: 34,
    maal: [
      {
        sæson: "2021-2022",
        antalMaal: 50,
        antalAssist: 15
      },
      {
        sæson: "2020-2021",
        antalMaal: 45,
        antalAssist: 20
      }
    ]
  },
  {
    navn: "Karim Benzema",
    alder: 37,
    maal: [
      {
        sæson: "2021-2022",
        antalMaal: 40,
        antalAssist: 10
      },
      {
        sæson: "2020-2021",
        antalMaal: 35,
        antalAssist: 15
      }
    ]
  },
  {
    navn: "Neymar Jr.",
    alder: 30,
    maal: [
      {
        sæson: "2021-2022",
        antalMaal: 30,
        antalAssist: 20
      },
      {
        sæson: "2020-2021",
        antalMaal: 25,
        antalAssist: 15
      }
    ]
  }
  
];

// andet eksempel

//let sportsstjerner = {
 // sportsgrene: [{
   //   fodbold: [{
   //       herre: ["David Beckham", "Simon Kjær", "Karim Benzema", "Pele"],
    //      kvinder: ["Alisha Lehmann", "Lulu Ys Covic"],
    //      andet: {
    //          genderfluid: ["hgjhghj", "gagds", "hjk"],
  //        }
//      },
//   ],
 // },
//],
//};