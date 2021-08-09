/*
 *  delete.js poistaa opiskelijan kannasta
 */
const Dbmethods = require('./Dbmethods');
/*
Jos opiskelijalla on arvosanoja, niin ne pitää poistaa tässä
ennen kuin itse opiskelija poistetaan

Dbmethods.deleteGrades()...
*/

Dbmethods.deleteStudent('a1234', function (err, result) {
  if (err) {
    throw err;
  }
  console.log(result.affectedRows + ' student deleted');
});
