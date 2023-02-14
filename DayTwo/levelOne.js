/*1*/ let challenge;
challenge = "30 Days Of JavaScript";

/*2*/ console.log(challenge);

/*3*/console.log(challenge.length);

/*4*/console.log(challenge.toUpperCase());

/*5*/console.log(challenge.toLowerCase());

/*6*/console.log(challenge.substr(0, 2));

/*7*/console.log(challenge.substring(3));

/*8*/console.log(challenge.includes("Script"));

/*9*/console.log(challenge.split(""));

/*10*/console.log(challenge.split(" "));

/*11*/ let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

/*12*/console.log(challenge.replace("JavaScript", "Python"));

/*13*/console.log(challenge.charAt(15));

/*14*/console.log(challenge.charCodeAt(12));

/*15*/console.log(challenge.indexOf("a"));

/*16*/console.log(challenge.lastIndexOf("a"));

/*17*/const sentence =
  "You cannot end a sentence with because because because is a conjunction";
  console.log(sentence.indexOf("because"));

/*18*/console.log(sentence.lastIndexOf("because"));

/*19*/console.log(sentence.search("because"));

/*20*/const trim = "    30 days of Javascript               ";
console.log(trim.trim());

/*21*/console.log(challenge.startsWith("30"));

/*22*/console.log(challenge.endsWith("t"));

/*23*/console.log(challenge.match(/a/gi));

/*24*/console.log(challenge.substr(0, 10).concat(" Javascript"));

/*25*/console.log(challenge.repeat(2));
