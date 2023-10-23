const findTheOldest = function(people) {
    
  const currentYear = new Date().getFullYear(); //this creates a var holding the current year

  const oldestPerson = people.reduce((oldest, current) => { //oldest is an iterative carrying oldest age
    const calculateAge = person => { //arrow function taking on parameter, person
      if (person.yearOfDeath === undefined || person.yearOfDeath === 0) { //the pipe || means or, so this means if yearOfDeath doesnt exist as a parameter (undefined) or is 0, do this
       return currentYear - person.yearOfBirth;} //if there is no death year, subtract from the current year to get current age
      return person.yearOfDeath - person.yearOfBirth; //otherwise, do this to get total age
      };

    const oldestAge = calculateAge(oldest); 
    const currentAge = calculateAge(current);

    if (currentAge > oldestAge) {
      return current; //this puts the current age into the iterative oldest if it is bigger than what is currently in oldest
    } 
    else {
      return oldest; //if currentAge isnt bigger, then oldest age stays in the iterative oldest
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
