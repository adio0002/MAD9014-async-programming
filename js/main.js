document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.addEventListener("click", handleClick);
}

function handleClick() {
  const random = Math.random();

  if (random < 0.5) {
    getRandomColor().then((color) => {
      document.body.style.backgroundColor = color;
    });
  } else {
    getMessage().then((message) => {
      const p = document.createElement("p");
      p.textContent = message;
      document.querySelector("main").appendChild(p);
    });
  }
}

function getRandomColor() {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 + 1000;
    setTimeout(() => {
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      resolve(color);
    }, delay);
  });
}

function getMessage() {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 + 1000;
    setTimeout(() => {
      resolve("This is the async message");
    }, delay);
  });
}
