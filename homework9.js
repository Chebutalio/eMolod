function Mechanism() {
  this.enabled = false;

  let self = this;

  this.enable = function() {
    self.enabled = true;
  };
}

function Engine() {
  Mechanism.apply(this, arguments);
  let self = this;

  let fuelAmount = 0;

  this.setFuelAmount = function(amount) {
    fuelAmount = amount;
  };
  let parentEnable = this.enable;
  this.enable = function() {
    parentEnable();
    this.run();
  }
  this.run = function() {
    if (this.fuelAmount > 0) {
      console.log('wroom wroon');
    }
  }
}

function Car() {
  Engine.apply(this);

  let consumption = 10;
  let distance = 0;

  this.calkDistance = function() {
    distance = this.fuelAmount / consumption * 100
    alert ('Автомобіль проїхав ' + distance + ' кілометрів.');
  };
  let parentSetFuelAmount = this.setFuelAmount;
  this.setFuelAmount = function() {
    parentSetFuelAmount();
    this.fuelFill();
  }
  this.fuelFill = function() {
      console.log('заправлено ' + this.fuelAmount + ' лiтрів');
  }
}

let car = new Car(100);

car.calkDistance();
car.setFuelAmount(60);
car.enable();