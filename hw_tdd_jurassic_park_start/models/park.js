const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.collection = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.collection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  this.collection.shift(dinosaur);
}

Park.prototype.mostVisitors = function () {
  let findTopVisitors = this.collection.map((dinosaur) => dinosaur.guestsAttractedPerDay);
  let topVisitors = Math.max.apply(null, findTopVisitors)
  return topVisitors
}

Park.prototype.findDinosaurVisitors = function (visitors) {
  for (let dinosaur of this.collection) {
    if (dinosaur.guestsAttractedPerDay === visitors){
      return dinosaur
    }
  }
}

Park.prototype.findDinosaursBySpecies = function (species) {
  const dinosaurSpecies = []
  for (let dinosaur of this.collection){
    if (dinosaur.species === species){
      dinosaurSpecies.push(dinosaur.species)
    }
  }
  return dinosaurSpecies
}

Park.prototype.totalVisitorsPerDay = function () {
  let visitor_numbers = 0;
  for (let dinosaur of this.collection) {
    visitor_numbers += dinosaur.guestsAttractedPerDay;
  };
  return visitor_numbers;
};

Park.prototype.totalVisitorsPerYear = function () {
  let visitor_numbers = 0;
  for (let dinosaur of this.collection) {
  visitor_numbers += dinosaur.guestsAttractedPerDay;
 };
 return visitor_numbers * 365;
};


Park.prototype.totalTicketSalesPerYear = function () {
  let ticket_sales = 0;
  let visitor_numbers = 0;
  for (let dinosaur of this.collection) {
    visitor_numbers += dinosaur.guestsAttractedPerDay;
  };
  return (visitor_numbers * 365) * this.price;
  };
module.exports = Park
