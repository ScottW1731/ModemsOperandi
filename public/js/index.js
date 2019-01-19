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

var div = $("#append-here")
  $(document).on("click", "#submit-pc", function(event) {
    // console.log("test")
    event.preventDefault();
    div.append($("#cpu-input").val());
    
    div.append($("#mb-input").val());
    
    div.append($("#gpu-input").val());
    
    div.append($("#cooler-input").val());
    
    div.append($("#memory-input").val());
    
  });
