(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{rR19:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=["const read = function(file, fn) {\n  fn(null, 'file: ' + file);\n}\nconst thunkRead = tfy(read)\n\nthunkRead('hello.txt')(function(err, res) {\n  assert(!err)\n  assert('file: hello.txt' === res)\n  done()\n})","const read = function(file, fn) {\nsetTimeout(function() {\n  fn(null, 'file: ' + file)\n}, 2000)\n}\n\nconst thunkRead = tfy(read);\n\nthunkRead('world.txt')(function(err, res) {\n  assert(!err)\n  assert('file: world.txt' === res)\n  done()\n})","const load = function(fn) {\n    fn(null, this.name)\n};\n\nconst user = {name: 'nanfeng', load: tfy(load)}\n\nuser.load()(function(err, name) {\n  if (err) {\n    return done(err)\n  }\n  assert('nanfeng' === name)\n  done()\n})","const load = function(fn) {\n    throw new Error('wow!!!')\n};\n\nconst thunkLoad = tfy(load)\n\nthunkLoad()(function(err) {\n  assert(err)\n  assert('wow!!!' == err.message)\n  done()\n})"];e.default=r}}]);