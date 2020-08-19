window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn-primary").addEventListener("click", function (e) {
    e.preventDefault()

    const addForms = document.forms[1]
    console.log(JSON.stringify(
      {
        date: addForms[1].value,
        category: addForms[0].value,
        description: addForms[3].value,
        amount: addForms[2].value
      }
    ))
    addForms.reset()



  })
});