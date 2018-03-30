// scripts.js 

var menu = document.getElementsByClassName('button');

console.log(menu);

for (var x = 0; x < menu.length; x++) {
    alert(menu[x].innerText);
}