// this is going to be a manual feature for inputing parts
// CPU
// require input from user submit box
// append to page
// repeat for below stuff
// Cpu Cooler
// Motherboard
// Memory
// Storage
// Video Card
// Case
// Power Supply
// Optical drive(s)
// OS
// Software
// Case Fan(s)
// Monitor
// External Storage
// Epansion Cards/ Networking
// Peripherals
// Accessories/ Other
// Custom parts
/* global moment */
// When user builds (clicks addBtn)
// thank you miachel
// global variable div


var div = $("#append-here");
var inputs = [];

$(document).on("click", "#submit-pc", function (event) {
    event.preventDefault();

    //Clear the form:
    inputs.length = 0;
    div.empty();

    //Get all inputs, print and upsert: 
    $('input').each(function () {

        var item = {
            name: this.value.trim(),
            category: "Gaming"
        };

        inputs.push(item);

        //todo: make this a bulk operation on the array of items using sequelize.bulk
        upsert(item);
        div.append(item.name + " ");
    });
});

function upsert(data) {
    $.post("/api/builds/new", data).then(function (result) {
        console.log(result)
    })
}