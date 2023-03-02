const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");

btn.addEventListener("click", function () {
  textarea.select(); // to select text
  let textValue = textarea.value; // to get the value of textarea
  navigator.clipboard.writeText(textValue); // to copy text to clipboard

  //   to change btn style
  btn.textContent = "کپی شد";
  btn.style.backgroundColor = "#03a9f4";

  setTimeout(() => {
    btn.textContent = "کپی کن";
    btn.style.backgroundColor = "#b3e5fc";
  }, 1500);
});
