const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", (event) => {
  validateLogin();
  event.preventDefault();
});

function validateLogin() {
  const confirmPwd = document.querySelector("#confirm-pwd");
  const pwd = document.querySelector("#pwd");
  const username = document.querySelector("#username");
  if (
    confirmPwd.value !== pwd.value ||
    (confirmPwd.value.length <= 7 && pwd.value.length <= 7)
  ) {
    alert("Credenciais inválidas");
  } else {
    alert("Login realizado com sucesso");
  }
}
