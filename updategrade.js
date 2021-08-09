const Dbmethods = require('./Dbmethods');
//muokkaa opiskelijan kurssin arvosanaa.

Dbmethods.updateGrade('a1234', 'HTS007', 2, function (error, result) {
  if (error) {
    throw error;
  }
  console.log(result);
});