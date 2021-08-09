/*
Täss' näkyy että calbackkien rakenne alkaa olla ongelmallinen
monimutkaisemmassa koodissa kun useampia sisäkkäisiä callbackkeja
Tämän vuoksi näissää tapauksessa käytetään eleensä mielummin promiseja.
Promisen käyttö vaatisi että käyttäisimme mysql2-kirjastoa ja sen promise-wrapper
const mysql2= require ('mysql2/promise')
Transaktio async-awaitin avulla on tehty Sequelize-esimerkissa
*/
const Dbmethods = require('./Dbmethods');
const conn = require('./dbconnection');
const studentcode = 'e1234';
const coursecode = 'HTS1003';
const grade = 4;
const studypoints = 5;
//jos opiskelija saa arvosanaksi 0, niin taransaktiota ei tehdä, koska
//opintopisteita ei lisätä
if (grade > 0) {
  //kaikki koodi on beginTransaction-metodin callbackin sisällä
  conn.beginTransaction(function (err) {
    if (err) {
      throw err;
    }

    //Transaktion ensimäinen osa eli kantatoimenpide
    //Dbmethods.addGrade () добавляет оценку

    Dbmethods.addGrade(
      studentcode,
      coursecode,
      grade,
      function (err, result) {
        if (err) {
          throw err;
        }

        //Transaktion toinen osa
        // Увеличиваем количество opintopisteet
        Dbmethods.updateOp(studentcode, studypoints, function (err, result) {
          if (err) {
            return conn.rollback(function () {
              //rollback peruu koko transaktion
              throw err;
            });
          }

          //commit suorittaa toimenpidesarjan jos molemmat vaiheet ovat onnistuneet
          conn.commit(function (err) {
            if (err) {
              return conn.rollback(function () {
                throw err;
              });
            }
            console.log('success!');
          });
        });
      }
    );
  });
} else {
  Dbmethods.addGrade(studentcode, coursecode, 0, function (err, result) {
    if (err) {
      throw err;
    }
  });
}
