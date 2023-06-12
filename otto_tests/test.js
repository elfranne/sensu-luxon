// Test to run with Otto vm

// function test_case1() { // summer time
//   var event = {
//     "entity": {
//       "metadata": {
//         "labels": {
//           "local_timezone": "Europe/Copenhagen" // CEST +2
//         },
//       },
//     },
//     "timestamp": 990810000 // 25 May 2001 17:00 UTC
//   }
//   var result = require('/lib/import.js').to_localtimezone(event);
//   if (result == 990817200  )  {  
//       console.log("Test PASSED ✅");
//   } else {
//       console.log("Test FAILED 🛑");
//       panic;
//   }
// }

// function test_case2() { // winter time
//   var event = {
//     "entity": {
//       "metadata": {
//         "labels": {
//           "local_timezone": "Europe/Copenhagen" // CET +1
//         },
//       },
//     },
//     "timestamp": 1703437200 // 24 Dec 2023 17:00 UTC
//   }
//   var result = require('/lib/import.js').to_localtimezone(event);
//   if (result == 1703440800  )  { 
//       console.log("Test PASSED ✅ ");
//   } else {
//       console.log("Test FAILED 🛑 ");
//       panic;
//   }
// }

console.log("--- Loading tests ---");


function lastSunday(year, month) {
  var date = new Date(year,month,1,12);
  let weekday = date.getDay();
  let dayDiff = weekday===0 ? 7 : weekday;
  let lastSunday = date.setDate(date.getDate() - dayDiff);
  return date.toDateString();
}

console.log(lastSunday(2023,3));
console.log(lastSunday(2023,10));


str = new Date().toLocaleString('da-DK', { timeZone: 'Europe/Copenhagen' });
console.log(str);

// test_case1();
// test_case2();