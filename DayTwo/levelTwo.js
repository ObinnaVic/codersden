/*1*/ const firstStatement = 'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another';
console.log(firstStatement);

/*2*/const secondStatement =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
  console.log(secondStatement)

/*3*/let stringTen = "10";
console.log(stringTen === 10)
stringTen = +stringTen
console.log(stringTen === 10);

/*4*/
let Num = parseFloat("9.8");
console.log((+Num + 0.2) === 10);

/*5*/
let wordOne = "Python";
let wordTwo = "Jargon";
console.log(wordOne.match(/on/gi)? true : false);
console.log(wordTwo.match(/on/gi) ? true : false);

/*6*/
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.search(/jargon/g)? true : false);

/*7*/
console.log(Math.random() * 101);

/*8*/
console.log(Math.random() * 50 + 50);

/*9*/
console.log(Math.random() * 256)

/*10*/
console.log(Math.floor(Math.random() * "Javascript".length));

/*11*/
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

/*12*/
let newSentence =
  "You cannot end a sentence with because because because is a conjunction";
  console.log(newSentence.substr(31, 23));
