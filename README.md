# Iconify your hashes

Turn ugly hashes into icons

[![Travis build status](http://img.shields.io/travis/Raedslab/iconify-hashes-js.svg?style=flat)](https://travis-ci.org/Raedslab/iconify-hashes-js)
[![Dependency Status](https://david-dm.org/Raedslab/iconify-hashes-js.svg)](https://david-dm.org/Raedslab/iconify-hashes-js)
[![devDependency Status](https://david-dm.org/Raedslab/iconify-hashes-js/dev-status.svg)](https://david-dm.org/Raedslab/iconify-hashes-js#info=devDependencies)

## Why ?

+ 1 - It is much simpler to compare colorful icons than long hashes.

+ 2- This is mainly used for <em>over the phone</em> transmission of hashes.


## Demo




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
