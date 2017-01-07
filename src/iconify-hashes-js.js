const crypto = require('crypto');

module.exports = {
  /**
   * Takes input string and outputs a hash (md5)
   * @param {String} input
   * @returns {String}
   */
  normalize(input){
    return crypto.createHash('md5').update(input).digest('hex');
  },

  /**
   * Returns a color when given a letter
   * @param {String} hex
   * @returns {name, code}
   */
  getColor(hex){

    if (hex == null) {
      return {
        'name': 'black',
        'code': '#000000'
      }
    }


    const colors = {
      a: {
        'name': 'pink',
        'code': '#ff206d'
      },
      b: {
        'name': 'blue',
        'code': '#1a237e'
      },
      c: {
        'name': 'green',
        'code': '#4caf50'
      },
      d: {
        'name': 'yellow',
        'code': '#ffeb3b'
      },
      e: {
        'name': 'orange',
        'code': '#ff9800'
      },
      f: {
        'name': 'red',
        'code': '#f40a02'
      }
    };

    return colors[hex];

  },

  /**
   * Returns a shape when given a letter
   * @param {String} number
   * @returns {String}
   */
  getForm(number){

    if (number == null || number === '') {
      return 'stop';
    }

    const shapes = {
      0: 'star',
      1: 'cloud',
      2: 'eye',
      3: 'coffee',
      4: 'heart',
      5: 'home',
      6: 'leaf',
      7: 'lock',
      8: 'road',
      9: 'key',
      /*k: 'pencil',
       l: 'flight',
       m: 'camera',
       n: 'truck',
       o: 'coffee',
       p: 'bomb',
       q: 'cab',
       r: 'soccer-ball',
       s: 'birthday',
       t: 'bicycle',
       u: 'bed',
       v: 'male',
       w: 'down-big',
       x: 'left-big',
       y: 'right-big',
       z: 'up-big'*/
    };

    return shapes[number];
  },


  /**
   * HTML list of icons
   * @param input
   * @returns {string}
   */
  getIcons(input){
    const icons = this.iconify(input);
    let html = '';

    icons.forEach(symbol => {
      html += `<i class="iconify icon-${symbol.form} ${symbol.color}"></i>`;
    });

    return html;
  },

  /**
   * Implements the iconification strategy
   * @param input
   * @returns {Array}
   */
  iconify(input){
    const hash = this.normalize(input);
    const hashArray = hash.split('');
    const output = [];

    let i = 0;
    while (i < hashArray.length) {
      const current = hashArray[i];
      const next = hashArray[i + 1];
      let symbol = {};


      // number (form) | hex (color)
      if (next != null) {
        if (current.match(/[0-9]/i) && next.match(/[a-z]/i)) {
          symbol = {
            form: this.getForm(current),
            color: this.getColor(next).name
          };
          i = i + 2;
        }
      }

      // number (form) | number or last
      if (current.match(/[0-9]/i) && (next == null || next.match(/[0-9]/i))) {
        symbol = {
          form: this.getForm(current),
          color: this.getColor().name
        };
        i++;
      }


      // hex (color) | whatever (block)
      if (current.match(/[a-z]/i)) {
        symbol = {
          form: this.getForm(),
          color: this.getColor(current).name
        };
        i++;
      }

      output.push(symbol);
    }

    return output;
  }
};
