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

// When the page loads, grab and display all of our builds
$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("build");
  
        row.append("<p>" + data[i].part + " builded.. </p>");
        row.append("<p>" + data[i].price + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $(".build-area").prepend(row);
  
      }
  
    }
});

  // When user builds (clicks addBtn)

$(document).ready(function(){
  $("#mb-input").click(function(){
    $("").append($(mb-input).val());
    event.preventDefault();
  });
});

//     // Make a newbuild object
//     var newbuild = {
//       part: $("#part").val().trim(),
//       price: $("#build-box").val().trim(),
//       created_at: moment().format("YYYY-MM-DD HH:mm:ss")
//     };
  
//     console.log(newbuild);
  
//     // Send an AJAX POST-request with jQuery
//     $.post("/api/new", newbuild)
//       // On success, run the following code
//       .then(function() {
  
//         var row = $("<div>");
//         row.addClass("build");
  
//         row.append("<p>" + newbuild.part + " builded: </p>");
//         row.append("<p>" + newbuild.price + "</p>");
//         row.append("<p>At " + moment(newbuild.created_at).format("h:mma on dddd") + "</p>");
  
//         $("#build-area").prepend(row);
  
//       });
  
//     // Empty each input box by replacing the value with an empty string
//     $("#part").val("");
//     $("#build-box").val("");
//   });
  