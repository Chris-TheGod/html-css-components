// get all accordion headers
const accordionHeaders = document.querySelectorAll(".icon");

// loop over headers and add click event listener
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // toggle the 'active' class on the header to indicate open/closed state
    header.classList.toggle(".open");

    // get the associated content element
    const content = header.nextElementSibling;

    // toggle the 'active' class on the content element to show/hide it
    content.classList.toggle(".open");
  });
});
