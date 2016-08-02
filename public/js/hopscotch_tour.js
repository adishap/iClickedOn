  // Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "Start Demo",
          content: "Click on the button to start with iClickedOn",
          target: document.querySelector("button"),
          placement: "right",
          multipage: true,
          onNext: function() {
            window.location = "/iClickedOn"
          }
        },
        {
          title: "Click the box",
          content: "Click in the box to get its cordinates",
          target: document.querySelector(".bigbox"),
          placement: "right"
        },
        {
          title: "Read",
          content: "Read the Cordinates of clicked position.",
          target: document.querySelector("#cordinates"),
          placement: "top",
          xOffset: "center"
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);