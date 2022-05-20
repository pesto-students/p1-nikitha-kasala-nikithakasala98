
let participant1  = {
    name: 'Nikitha',
    battery: 40,
    chargeBattery : function(a,b){
        this.battery = this.battery + a + b;
    }
}

let participant2 = {
    name: 'Kasala',
    battery: 50
}

//call
participant1.chargeBattery.call(participant2,20,30);
console.log("Call");
console.log(participant1);
console.log(participant2);

//apply
participant1.chargeBattery.apply(participant2,[10,40]);
console.log("Apply");
console.log(participant2);

//bind
let cbofparticipant2 = participant1.chargeBattery.bind(participant2,20,30);
cbofparticipant2();
console.log("Bind");
console.log(participant2);
