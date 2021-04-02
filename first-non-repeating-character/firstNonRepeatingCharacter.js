/* if the first index of the occurence of the character is equal to
the last occurence of that character, that means that means there is only one occurence of that character
and that there are no duplicates.
*/

function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
      return str.charAt(i);
    }
  }

  return '_';
}

// console.log(firstNonRepeatingCharacter('abacabad'));
//  => c
