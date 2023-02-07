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
    street: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105'
  };
  console.log('Address:');
console.log(copiedPerson.address.street);
console.log(copiedPerson.address.city);
console.log(copiedPerson.address.state);
console.log(copiedPerson.address.zip);