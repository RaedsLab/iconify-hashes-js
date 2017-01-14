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

    it('should have color & form keys', () => {
      const icons = iconify.iconify('abc');
      icons.forEach(icon => {
        expect(icon).to.have.all.keys('color', 'form');
      });
    });

    it('should be string', () => {
      const icons = iconify.getIcons('abc');
      expect(icons).to.be.a('string');

    });

  });

});
