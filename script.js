const display = document.querySelector("input"),
generate_btn = document.querySelector(".generate_btn");

let chars =
"ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+=?/>.<,0123456789";

generate_btn.onclick = () => {
let i,
  randompassword = "";
for (i = 0; i < 10; i++) {
  randompassword =
    randompassword +
    chars.charAt(Math.floor(Math.random() * chars.length));
}
display.value = randompassword;
};

function copy() {
display.select();
document.execCommand("copy");
}
document.getElementById("result").value = "";