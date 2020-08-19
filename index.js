window.addEventListener("DOMContentLoaded", function () {
  let pack = []
  document.querySelector(".btn-primary").addEventListener("click", function (e) {
    e.preventDefault()
    const addForms = document.forms[1]
    let bag = {
      date: addForms[1].value,
      category: addForms[0].value,
      description: addForms[3].value,
      amount: addForms[2].value
    }
    pack.push(bag)
    console.log(bag)
    addForms.reset()
    localStorage.setItem('records', JSON.stringify(pack));
    let a = localStorage.getItem('records')
    let b = JSON.parse(a)
    console.log(b)
  });
});