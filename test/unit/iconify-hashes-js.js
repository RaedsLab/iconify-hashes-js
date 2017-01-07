import iconify from '../../src/iconify-hashes-js';

describe('iconify', () => {

  describe('Hash function', () => {
    beforeEach(() => {
      spy(iconify, 'normalize');
      iconify.getIcons('abc');
    });

    it('should have been run once', () => {
      expect(iconify.normalize).to.have.been.calledOnce;
    });

  });

});
