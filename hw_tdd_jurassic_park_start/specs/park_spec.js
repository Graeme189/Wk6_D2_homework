const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Triassic Bark', 20)
    dinosaur1 = new Dinosaur ('T-Rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur ('Brontosaurus', 'carnivore', 30)
    dinosaur3 = new Dinosaur ('Pterodactyl', 'herbivore', 20)
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Triassic Bark');
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collection;
    assert.deepStrictEqual(actual, []);

  });

  // it('should be able to add a dinosaur to its collection', function () {
  //   park.addDinosaur('Triceratops');
  //   const actual = park.collection.length;
  //   assert.strictEqual(actual, 1);
  // });


  // it('should be able to remove a dinosaur from its collection', function () {
  //   park.removeDinosaur();
  //   const actual = park.collection.length;
  //   assert.strictEqual(actual, 0);
  // });

  //
  // it('should be able to find the dinosaur that attracts the most visitors');
  //
  // it('should be able to find all dinosaurs of a particular species');
  //
  // it('should be able to remove all dinosaurs of a particular species');

});
