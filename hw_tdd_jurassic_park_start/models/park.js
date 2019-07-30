const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.collection = [];
}

Park.prototype.addDinosaur = function(dinosaur, guests) {
  this.collection.push(dinosaur);
}

Park.prototype.removeDinosaur = function () {
  this.collection.pop;
}

Park.prototype.mostVisitors = function () {
  const sorted = this.collection.sort();
  return sorted[0];
}

// Park.prototype.mostVisitors = function () {
//   let findTopVisitors = this.collection.map((dinosaur) => dinosaur.guestsAttractedPerDay);
//   // Above is returning all visitor numbers as an array
//   let topVisitors = Math.max.apply(null, findTopVisitors)
//   // Above is then using math.max.apply to find the highest number in the new array
//   // console.log(topVisitors);
//   return topVisitors
// }

module.exports = Park
