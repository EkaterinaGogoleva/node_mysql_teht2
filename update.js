const Dbmethods = require('./Dbmethods');
//päivitetään opiskelijan opintopisteet

Dbmethods.update('a1234', 90, function (error, result) {
  if (error) {
    throw error;
  }
  console.log(result);
});
