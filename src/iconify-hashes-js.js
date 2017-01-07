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
   * Returns a color when given a number
   * @param {String} number
   * @returns {name, code}
   */
  getColor(number){

    if (number == undefined || number === '') {
      return {
        'name': 'black',
        'code': '#000000'
      };
    }

    const colors = [
      {
        'name': 'grey',
        'code': '#9e9e9e'
      },
      {
        'name': 'blue',
        'code': '#1a237e'
      },
      {
        'name': 'green',
        'code': '#4caf50'
      },
      {
        'name': 'yellow',
        'code': '#ffeb3b'
      },
      {
        'name': 'orange',
        'code': '#ff9800'
      },
      {
        'name': 'red',
        'code': '#f40a02'
      },
      {
        'name': 'purple',
        'code': '#9c27b0'
      },
      {
        'name': 'light-blue',
        'code': '#03a9f4'
      },
      {
        'name': 'pink',
        'code': '#ff206d'
      },
      {
        'name': 'brown',
        'code': '#8B4513'
      }
    ];

    return colors[parseInt(number)];

  },

  /**
   * Returns a shape when given a letter
   * @param {String} letter
   * @returns {String}
   */
  getForm(letter){

    if (letter == null || letter === '') {
      return 'stop';
    }

    const shapes = {
      a: 'camera',
      b: 'cloud',
      c: 'eye',
      d: 'flag',
      e: 'heart',
      f: 'home',
      g: 'leaf',
      h: 'lock',
      i: 'road',
      j: 'key',
      k: 'pencil',
      l: 'flight',
      m: 'star',
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
      z: 'up-big'
    };

    return shapes[letter];
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

      if (next != null) {
        // alphabet | number
        if (current.match(/[a-z]/i) && next.match(/[0-9]/i)) {
          symbol = {
            form: this.getForm(current),
            color: this.getColor(next).name
          };

          i = i + 2;
        }
      }

      // alphabet | alphabet (or last)
      if (current.match(/[a-z]/i) && (next == null || next.match(/[a-z]/i))) {
        symbol = {
          form: this.getForm(current),
          color: this.getColor().name
        };
        i++;
      }


      // number | whatever
      if (current.match(/[0-9]/i)) {
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
