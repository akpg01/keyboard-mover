import "./styles.css";

let player = {
  speed: 100,
  x: 100,
  y: 100
};

document.addEventListener("keydown", e => {
  let key = e.keyCode;
  if (key === 37) {
    player.x -= player.speed;
  }
  if (key === 39) {
    player.x += player.speed;
  }
  if (key === 40) {
    player.y += player.speed;
  }
  if (key === 38) {
    player.y -= player.speed;
  }
  player.el.style.left = player.x + "px";
  player.el.style.top = player.y + "px";
});

function build() {
  player.el = document.createElement("div");
  player.x = 100;
  player.y = 100;
  player.el.style.position = "absolute";
  player.el.style.width = "100px";
  player.el.style.height = "100px";
  player.el.style.backgroundColor = rgb();
  player.el.style.top = player.x + "px";
  player.el.style.left = player.y + "px";
  document.body.appendChild(player.el);
}

function randomColor(max) {
  return Math.floor(Math.random() * max + 1);
}

function rgb() {
  return `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
}

window.addEventListener("DOMContentLoaded", build());
