let open = document.querySelector(".navbar--icon");
let menu = document.querySelector(".nav--open");
let close = document.querySelector(".nav--open-icon");

open.addEventListener("click", function () {
  menu.classList.toggle("close");
});

close.addEventListener("click", function () {
  menu.classList.toggle("close");
});

var priceForm = document.getElementById("priceForm");
var responseContainer = document.getElementById("responseContainer");

// Add event listener to form submit
priceForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the selected value from the dropdown
  var selectedValue = document.getElementById("priceRange").value;

  // Split the selected value to get min and max price
  var priceRange = selectedValue.split("-");

  // Convert price range values to numbers
  var minPrice = parseInt(priceRange[0]);
  var maxPrice = parseInt(priceRange[1]);

  // Generate the response message based on the price range
  var responseMessage = getResponseMessage(minPrice, maxPrice);

  // Display the response in the container
  responseContainer.textContent = responseMessage;
});

// Function to get response message based on price range
function getResponseMessage(minPrice, maxPrice) {
  if (minPrice >= 10 && maxPrice <= 30) {
    return "This price range offers budget-friendly options.";
  } else if (minPrice >= 20 && maxPrice <= 50) {
    return "This price range offers mid-range options.";
  } else if (minPrice >= 50 && maxPrice <= 60) {
    return "This price range offers premium options.";
  } else if (minPrice >= 60 && maxPrice <= 100) {
    return "This price range offers luxury options.";
  } else {
    return "Invalid price range selected.";
  }
}
