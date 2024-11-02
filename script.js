//select element
let btnSubmit = document.getElementById("submit-btn");
let ratingPage = document.getElementById("rating-page");
let thankYouPage = document.getElementById("thank-you-page");
let ratings = document.querySelectorAll(".rating-item");
let actualRating = document.getElementById("actual-rating");

//display thank you page and hide rating page
function displayThankYou() {
  ratingPage.style.display = "none";
  thankYouPage.style.display = "flex";
}

//reset rating styles in case multiple ratings are being selected
function resetRatingStyles() {
  ratings.forEach((rating) => {
    rating.style.backgroundColor = "";
    rating.style.color = "";
  });
}

function selectRating(rating) {
  resetRatingStyles();
  actualRating.innerHTML = rating.innerHTML;
  rating.style.backgroundColor = "white";
  rating.style.color = "hsl(216, 12%, 8%)";
  btnSubmit.disabled = false;
}

ratings.forEach((rating) => {
  rating.addEventListener("click", () => selectRating(rating));
});

btnSubmit.addEventListener("click", displayThankYou);
