let wrapcatalog = document.querySelector(".wrapcatalog");
let catalog = document.querySelector(".catalog");
let but1 = document.querySelector(".but1");

let submit = document.querySelector(".submit");
let p1 = document.querySelector(".p1");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let massage = document.querySelector(".massage");

if (catalog && wrapcatalog) {
  catalog.addEventListener("click", () => {
    if (
      wrapcatalog.style.display === "none" ||
      wrapcatalog.style.display === ""
    ) {
      wrapcatalog.style.display = "block";
    } else {
      wrapcatalog.style.display = "none";
    }
  });
}
if (submit && inp1 && inp2 && massage) {
  submit.addEventListener("click", (e) => {
    if (inp1.value.trim() === "" || inp2.value.trim() === "") {
      massage.textContent = "Enter the fields";
      massage.style.color = "red";
      e.preventDefault();
    }
  });
}
