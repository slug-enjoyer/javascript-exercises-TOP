const findTheOldest = function(peopleArray) {
 const people = peopleArray;  
    const currentYear = new Date().getFullYear();

    const oldestPerson = people.reduce((oldest, current) => {
      const calculateAge = person => {
        if (person.deathYear === undefined || person.deathYear === 0) {
          return currentYear - person.birthYear;
        }
        return person.deathYear - person.birthYear;
      };
    
      const oldestAge = calculateAge(oldest);
      const currentAge = calculateAge(current);
    
      if (currentAge > oldestAge) {
        return current;
      } 
      else {
        return oldest;
      }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
