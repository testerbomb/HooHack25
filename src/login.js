document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "account.html";
        } else {
          document.getElementById("errorMessage").style.display = "block";
        }
      })
      .catch((error) => console.error("Error:", error));
  });
