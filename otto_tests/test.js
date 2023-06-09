// Test to run with Otto vm

import to_localtimezone from './lib/import.js';

function test_case1() { // summer time
  var event = {
    "entity": {
      "metadata": {
        "labels": {
          "local_timezone": "Europe/Copenhagen" // CEST +2
        },
      },
    },
    "timestamp": 990810000 // 25 May 2001 17:00 UTC
  }
  var result = to_localtimezone(event);
  if (result == 990817200  )  {  
      console.log("Test PASSED ✅");
  } else {
      console.log("Test FAILED 🛑");
      panic;
  }
}

function test_case2() { // winter time
  var event = {
    "entity": {
      "metadata": {
        "labels": {
          "local_timezone": "Europe/Copenhagen" // CET +1
        },
      },
    },
    "timestamp": 1703437200 // 24 Dec 2023 17:00 UTC
  }
  var result = to_localtimezone(event);
  if (result == 1703440800  )  { 
      console.log("Test PASSED ✅ ");
  } else {
      console.log("Test FAILED 🛑 ");
      panic;
  }
}

console.log("--- Loading tests ---");

// test_case1();
// test_case2();