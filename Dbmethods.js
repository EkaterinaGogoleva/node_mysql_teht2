const conn = require('./dbconnection');

const Dbmethods = {
  /*metodi on esitetty oliosyntaksilla eli se on olion sisältämä avain:arvo -pari.
    callback on anonyymi funktio jolla käsitellään kyselyn tulos. Se luodaan
    tiedostoon jossa tämä metodi suoritetaan (add.js)*/

  add: function (studentcode, name, email, studypoints, callback) {
    return conn.query(
      'insert into Students set studentcode = ?, name = ?, email = ?, studypoints = ?',
      [studentcode, name, email, studypoints],
      callback
    );
  },
  // Tee tähän muut metodit
  //hakee kaikki opiskelijat
  findAll: function (callback) {
    return conn.query('select * from Students', callback);
  },
  //poistaa opiskelijan opiskeljannumeron perustella
  deleteStudent: function (studentcode, callback) {
    return conn.query(
      'delete from Students where studentcode = ?',
      [studentcode],
      callback
    );
  },
  //hakee  opiskelijat, joiden opintopistemäärä on alle 100
  findBelowLimit: function (studypoints, callback) {
    return conn.query(
      'select * from Students where studypoints < ?',
      [studypoints],
      callback
    );
  },
  /*muokkaa opiskelijan opintopisteitä*/
  update: function (studentcode, studypoints, callback) {
    return conn.query(
      'update Students set studypoints = ? where studentcode = ?',
      [studypoints, studentcode],
      callback
    );
  },

  //lisää opiskeljelle arvosanan
  addGrade: function (studentcode, coursecode, grade, callback) {
    return conn.query(
      'insert into Grades set studentcode = ?, coursecode = ?, grade = ?',
      [studentcode, coursecode, grade],
      callback
    );
  },
  // oбновляет оценку и прибавляет opintopisteet

  updateOp: function (studentcode, studypoints, callback) {
    return conn.query(
      'update Students set studypoints = ? where studentcode = ?',
      [studypoints, studentcode],
      callback
    );
  },
  //muokkaa opiskelijan kurssin arvosanaa.
  updateGrade: function (studentcode, coursecode, grade, callback) {
    return conn.query(
      'update Grades set grade = ? where studentcode = ? and coursecode = ?',
      [grade, studentcode, coursecode],
      callback
    );
  },
};
module.exports = Dbmethods;
