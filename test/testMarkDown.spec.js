const getUrlsMd = require('./getUrlsMd.js');

describe('getUrlsMd()', () => {

    it('debería devolver true para letra a', () => {
      if (getUrlsMd('a') !== true) {
        console.error('✗ fail');
      } else {
        console.log('✓ ok');
      }
    });
  
    it('debería devolver false para letra a', () => {
      if (getUrlsMd('b') !== false) {
        console.error('✗ fail');
      } else {
        console.log('✓ ok');
      }
    });
  
});
