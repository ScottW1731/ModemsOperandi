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

  $(document).on("click", "#submit-pc", function(event) {
    event.preventDefault();
    $("#append-here").append($("#cpu-input").val());
    $("#cpu-input").val("");

    $("#append-here").append($("#mb-input").val());
    $("#mb-input").val("");

    $("#append-here").append($("#gpu-input").val());
    $("#gpu-input").val("");

    $("#append-here").append($("#cooler-input").val());
    $("#cooler-input").val("");

    $("#append-here").append($("#memory-input").val());
    $("#memory-input").val("");
  });
