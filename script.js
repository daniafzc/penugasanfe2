function ds() {
  let morecards = document.getElementById("more-cards");
  let buttonText = document.querySelector("#show-more-btn span");
  let arrow = document.querySelector(".arrow-icon");

  morecards.classList.toggle("show");
  arrow.classList.toggle("rotate");

  if (morecards.classList.contains("show")) {
    buttonText.textContent = "Show Less";
  } else {
    buttonText.textContent = "Show More";
  }
}
