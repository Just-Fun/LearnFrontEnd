"use strict"

var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = 0;
while (true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( foundPos ); // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
}

/*var isAdmin = prompt("Who are you?", "admin");
if (isAdmin === "admin") {
    alert("!");
} else if (isAdmin == null) {
    alert("canceled...")
} else {
    alert("...")
}

alert( isAdmin );*/

//var free = prompt("Are you free?", "yes");
