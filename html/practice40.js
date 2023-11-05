function makeElem() {
  divs.forEach((elem) => {
    const btn = document.createElement("button");
    btn.textContent = "Example";
    let a = "a";
    let b = "b";
    btn.addEventListener("click", (e) => callback(a, b, e));
    
    elem.appendChild(btn);
  });
}

function callback(e, a, b) {
  console.log(e, a, b);
}
