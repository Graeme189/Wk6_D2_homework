const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.collection = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.collection.push(dinosaur);
}

// Park.prototype.collectionCount = function () {
//   this.collection.length;
// }

Park.prototype.removeDinosaur = function () {
  this.collection.pop;
}

// Park.prototype.mostVisitors = function () {
//   // for dinosaur in this.collection
// }

module.exports = Park
