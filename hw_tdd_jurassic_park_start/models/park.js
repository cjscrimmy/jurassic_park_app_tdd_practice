const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaurToRemove) {
    const indexOfDino = this.collectionOfDinosaurs.indexOf(dinosaurToRemove);
    this.collectionOfDinosaurs.splice(indexOfDino, 1);
}

Park.prototype.findDinosOfASpecies = function(species) {
    let results = [];

    for (const dino of this.collectionOfDinosaurs){
        if(dino.species == species){
            results.push(dino);
        };
    };
    return results;
}

Park.prototype.totalNumOfVisitorsPerDay = function () {
    let totalDailyVisitors = 0;

    for(const dino of this.collectionOfDinosaurs){
        totalDailyVisitors += dino.guestsAttractedPerDay;
    };

    return totalDailyVisitors;
};

module.exports = Park;