const isVowel = require('./isVowel');

/*console.log('debería devolver true para letra a');
if (isVowel('a') === true) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería devolver false para letra b');
if (isVowel('b') === false) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
} */

describe('isVowel()', () => {

    it('debería devolver true para letra a', () => {
      if (isVowel('a') !== true) {
        console.error('✗ fail');
      } else {
        console.log('✓ ok');
      }
    });
  
    it('debería devolver false para letra a', () => {
      if (isVowel('b') !== false) {
        console.error('✗ fail');
      } else {
        console.log('✓ ok');
      }
    });
  
});

