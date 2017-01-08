# Iconify your hashes

Turn ugly hashes into icons

[![Build Status](https://travis-ci.org/RaedsLab/iconify-hashes-js.svg?branch=master)](https://travis-ci.org/RaedsLab/iconify-hashes-js)
[![Dependency Status](https://david-dm.org/Raedslab/iconify-hashes-js.svg)](https://david-dm.org/Raedslab/iconify-hashes-js)
[![devDependency Status](https://david-dm.org/Raedslab/iconify-hashes-js/dev-status.svg)](https://david-dm.org/Raedslab/iconify-hashes-js#info=devDependencies)

## Why ?

+ 1 - It is much simpler to compare colorful icons than long hashes.

+ 2- This is mainly used for <em>over the phone</em> transmission of hashes.


## Demo

You can test a working demo here: [https://raedslab.github.io/iconify-hashes-js/](https://raedslab.github.io/iconify-hashes-js/)

![demo](https://raw.githubusercontent.com/RaedsLab/iconify-hashes-js/master/demo/sha_vs_iconify.png)


## How it works ?

You can use 2 functions: 
```js
// returns an array of the colors and icons
iconify.iconify()

// returns the HTML of the icons
iconify.getIcons()
```

## V 1.0

The version 1.0 works like the following:

+ MD5 the input
+ If a number is found, it gets replaced by an icon from font-awesome.
+ If it is followed by [a-f] it is colored.
+ If an [a-f] is not preceded by an icon, it colors a square.


### Proposed spec

I have managed to extract 30 icons from [fontawesome.io](http://fontawesome.io/) using [fontello](http://fontello.com/).

These 30 icons should be simple enough so that they can be transmitted orally in different languages without confusion.

![icons](https://raw.githubusercontent.com/RaedsLab/iconify-hashes-js/master/demo/icons.png)

From these 30, 10 has been selected to represent numbers from 0 to 9, like the following. 

```
0: 'star'
1: 'cloud'
2: 'eye'
3: 'coffee'
4: 'heart'
5: 'home'
6: 'leaf'
7: 'lock'
8: 'road'
9: 'key'
```
The absence of shape is represented by a square `stop`


Colors represent letters from A to F.

```js
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
```

The absence of color is represented by `black #000000`.
