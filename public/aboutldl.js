export function initializeldlaboutscript() {
  const cardImages = document.querySelectorAll(".cardimage");

  cardImages.forEach((img) => {
    img.addEventListener("mouseover", (event) => {
      // Find the parent card div and the corresponding p tag
      const cardiv = event.target.closest(".card");
      const ptag = cardiv.querySelector(".paraclass");

      // Check if the element is already active
      const isActive = img.classList.contains("active");

      if (isActive) {
        // Undo styles if active
        img.style.transition = "transform 2s ease, opacity 0.2s ease";
        img.style.transform = "translateX(0)"; // Reset position
        img.style.opacity = "1"; // Reset opacity

        ptag.style.transition = "transform 0.2s ease, opacity 0.2s ease";
        ptag.style.transform = "translateY(0)"; // Reset position
        ptag.style.opacity = "0"; // Hide the p tag
      } else {
        // Apply styles if not active
        img.style.transition = "transform .012s ease, opacity 0.2s ease";
        img.style.transform = "translateX(5px)"; // Move image to the right
        img.style.opacity = "0.2"; // Dim the image

        ptag.style.transition = "transform 1s ease, opacity 0.2s ease";
        ptag.style.transform = "translateY(-15rem)"; // Move p tag upwards
        ptag.style.opacity = "0.8"; // Make the p tag fully visible
      }

      // Toggle the active state
      img.classList.toggle("active");
    });
  });
}
