/*function counter() {
  for (let i = 0; i < 9; i++) {
    const btns = document.querySelectorAll(`.buttons`)
    btns.forEach(function (btn) {
      btn.addEventListener("input", function (e) {
        alert(btn.textContent);
      });
    })
  }
}

const btns = document.querySelector("firstRow")
btns.forEach(function (btn) {
  btn.addEventListener("input", function (e) {
    alert(btn.textContent);
  });
})*/

/*const fields = document.querySelectorAll(".buttons")
fields.forEach(function (e) {
  const input = e 
})*/

const input = document.querySelector('input');
const log = document.getElementById('a1');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}



let puzzle = [...Array(9)].map(e => Array(9));


