const note = document.querySelector(".notes");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function showNote() {
    note.innerHTML = localStorage.getItem("notes");
}
function updateStorage() {
    localStorage.setItem("notes", note.innerHTML);
}
btn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    note.appendChild(inputBox).appendChild(img);
    updateStorage();
});
note.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});
