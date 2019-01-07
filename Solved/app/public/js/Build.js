/* global moment */

// When the page loads, grab and display all of our builds
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("build");

      row.append("<p>" + data[i].author + " builded.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#build-area").prepend(row);

    }

  }

});

// When user builds (clicks addBtn)
$("#build-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newbuild object
  var newbuild = {
    author: $("#author").val().trim(),
    body: $("#build-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newbuild);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newbuild)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("build");

      row.append("<p>" + newbuild.author + " builded: </p>");
      row.append("<p>" + newbuild.body + "</p>");
      row.append("<p>At " + moment(newbuild.created_at).format("h:mma on dddd") + "</p>");

      $("#build-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#build-box").val("");
});
