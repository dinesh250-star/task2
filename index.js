document
  .querySelector(".button-submit")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const comments = document.getElementById("myTextarea").value;
    const male = document.querySelector('input[name="male"]:checked');
    const female = document.querySelector('input[name="female"]:checked');
    if (name && comments && (male || female)) {
      console.log("hi");
    } else {
      alert("All fields are compulsory");
      if (!name) {
        document.getElementById("name").focus();
      } else if (!comments) {
        document.getElementById("myTextarea").focus();
      } else {
        document.getElementById("r1").focus();
      }
    }
  });
