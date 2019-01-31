export default [
  `const app = new DI()

app.register('duck', {
  fly() {
    return 'fuck flying'
  }
});

app.run(['duck', function(duck) {
  assert.equal(duck.fly(), 'fuck flying', 'Injection test failed')
  done()
}])`,

  `const app = new DI();

app.register('woman', function() {
    this.cry = function() {
        return 'crying wawawa!'
    }
})

app.run(['woman', function(woman) {
    assert.equal(woman.cry(), 'crying wawawa!', 'Class injection test failed')
    done()
}])`,

  `const app = new DI();

app.register('people', function() {
  this.yell = function() {
      return 'don\\'t go'
  }
})

app.register('puppy', function() {
  this.bark = function() {
      return 'wow'
  }
})

app.run(['puppy', 'people', function(puppy, people) {
  assert.equal(puppy.bark(), 'wow', 'Multi-instance puppy injection test failed')
  assert.equal(people.yell(), 'don\\'t go', 'Multi-instance people injection test failed')
  done()
}])`,

  `const app = new DI();

app.register('puppy', function() {
  this.bark = function() {
    return 'wow'
  }
})

assert.throws(function() {
  app.run(['man', function(man) {}])
}, Error, 'No instance test failed')`
]
