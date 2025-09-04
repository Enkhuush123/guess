const background = document.createElement("div");
background.classList.add("background");

const backimg = document.createElement("img");
backimg.src = "./banner.jpg";

const guessgamebord = document.createElement("div");
guessgamebord.classList.add("guessbord");

const header = document.createElement("div");
header.classList.add("header");
header.innerText = "Too Taah Togloom";

const guess = document.createElement("div");
guess.innerText = "Toog Taagaarai <3";
guess.style.color = "white";

const input = document.createElement("input");
input.classList.add("input");

let uy = 1;
let etssiintoo = 100;
guess.innerText = `Too g taagaarai 1 - ${etssiintoo}`;
let too = Math.floor(Math.random() * etssiintoo) + 1;

const daraagin = document.createElement("button");
daraagin.innerText = "Daraagin uy";
daraagin.classList.add("button");
daraagin.style.display = "none";
daraagin.onclick = function () {
  uy = 2;
  etssiintoo = 300;
  too = Math.floor(Math.random() * etssiintoo) + 1;
  header.innerText = "Too Taah Togloom 2-r uy";
  guess.innerText = `2-r uy 1 - ${etssiintoo}`;
  input.value = "";
  mdeeleltext.innerText = "Taasan too : 0";
  hint.innerText = "Shine uy ehellee!";
  daraagin.style.display = "none";
};

function tootaah() {
  const ugugdul = +input.value;

  if (ugugdul < 1 || ugugdul > etssiintoo) {
    alert("zuvhun ugugdsn too l biceerei!");
    input.value = "";
    mdeeleltext.innerText = "Taasan too : 0";
    return;
  }
  mdeeleltext.innerText = "Taasan too :" + ugugdul;

  if (ugugdul === too) {
    hint.innerText = "Ta toog zuv taasan bn bayr hurgiy🎉" + "zuv too :" + too;

    if (uy === 1) {
      daraagin.style.display = "inline-block";
    } else {
      hint.innerText = "!Togloom duussan🎉";
      input.disabled = true;
    }
  } else if (ugugdul < too) {
    hint.innerText = "Baga too taasan bn⬇️";
  } else if (ugugdul > too) {
    hint.innerText = "Ih too taasan bn⬆️";
  }
}
console.log(too, uy);

const button = document.createElement("button");
button.classList.add("button");
button.innerText = "Taah";
button.onclick = tootaah;

const mdeelel = document.createElement("div");
const mdeeleltext = document.createElement("span");

mdeeleltext.style.color = "white";
mdeeleltext.innerText = "Taasan too : 0";

mdeelel.classList.add("mdeelel");

const hint = document.createElement("div");
hint.classList.add("hint");

background.appendChild(guessgamebord);
guessgamebord.appendChild(header);
guessgamebord.appendChild(guess);
guessgamebord.appendChild(input);
guessgamebord.appendChild(button);
guessgamebord.appendChild(mdeelel);
guessgamebord.appendChild(hint);
mdeelel.appendChild(mdeeleltext);

background.appendChild(daraagin);
background.appendChild(backimg);

document.body.appendChild(background);
