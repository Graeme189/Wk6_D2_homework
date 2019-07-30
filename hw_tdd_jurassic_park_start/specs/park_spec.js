const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;

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

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.collection;
    assert.deepEqual(actual, [{"diet": "carnivore", "guestsAttractedPerDay": 50, "species": "T-Rex"}]);
  })


  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.collection;
    assert.deepStrictEqual(actual, []);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.findDinosaurVisitors(park.mostVisitors())
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.findDinosaursBySpecies('Pterodactyl')
    assert.deepStrictEqual(actual, ['Pterodactyl'])
  });

  it('should calculate the total number of visitors per day', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 100);
  })

  it('should calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 36500);
  })

  it('should calculate total ticket sales for one year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.totalTicketSalesPerYear()
    assert.strictEqual(actual, 730000)
  })


});
