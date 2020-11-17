/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


alert("You can calculate your average MPGs from here... \n\Please enter your maximum gas tank capacity and the amount of miles you can travel on a full tank.\n\ ");

let userTankCap = Number(prompt("The full tank capacity of your vehicle is ______ gallons."));

let userTankDist = Number(prompt("With that full tank I can go about _______ miles."));

function gasMPGcalc(userTankCapacity, userTankDist) {
    
    return  (userTankDist / userTankCap); 
   
}

let theAVG = gasMPGcalc(userTankCap, userTankDist); 




alert("You're average MPG is " + theAVG); 
