/*
 *  find.js hakee  opiskelijat, joiden opintopistemäärä on alle 100
 */
const Dbmethods = require('./Dbmethods');

Dbmethods.findBelowLimit(100, function (err, students) {
  if (err) {
    throw err;
  }
  console.log(students);
  return students;
});
