/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  console.log(letter);

  //   if (letter === letter.toLowerCase()) {
  //     console.log('Эта буква в нижнем регистре!!! - ', letter);

  //     invertedString += letter.toUpperCase();
  //   } else {
  //     console.log('Эта буква в верхнем регистре!!! - ', letter);
  //     invertedString += letter.toLocaleLowerCase();
  //   }
  const isEqual = letter === letter.toLowerCase();
  
  invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log('invertedString : ', invertedString);
