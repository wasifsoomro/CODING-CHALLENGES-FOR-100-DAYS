//create enum and store different types of vhicle
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Motorcycle"] = 1] = "Motorcycle";
    Vehicles[Vehicles["Bicyle"] = 2] = "Bicyle";
})(Vehicles || (Vehicles = {}));
//aceesing motorcycle from enum
console.log(Vehicles.Motorcycle);
export {};
//it shows 1 because enum start counting from 0
