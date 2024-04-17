document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "demo1";
    const correctPassword = "skills2023d1";

    const correctUsername2 = "demo2";
    const correctPassword2 = "skills2023d2";

    if (username === correctUsername && password === correctPassword) {
      window.location.href = "welcome.html";
    } else if (username === correctUsername2 && password === correctPassword2) {
      window.location.href = "welcome.html";
    } else {
      document.getElementById("error-message").innerText =
        "Invalid username or password";

      // Log unsuccessful login attempt to CSV
      const formData = new FormData();
      formData.append("Username", username);
      formData.append("Password", password);
      logAttempt(formData);
    }
  });

function logAttempt(formData) {
  const csv = Array.from(formData.entries())
    .map(([key, value]) => `${key},${value}`)
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "login_attempts.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
