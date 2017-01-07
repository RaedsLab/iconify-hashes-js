import iconify from '../../src/iconify-hashes-js';

describe('iconify', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(iconify, 'greet');
      iconify.greet();
    });

    it('should have been run once', () => {
      expect(iconify.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(iconify.greet).to.have.always.returned('hello');
    });
  });
});
