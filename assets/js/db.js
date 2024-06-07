document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (localStorage.getItem(email)) {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "المستخدم موجود بالفعل",
    });
  } else {
    localStorage.setItem(email, JSON.stringify({ username, email, password }));
    Swal.fire({
      icon: "success",
      title: "نجاح",
      text: "تم تسجيل المستخدم بنجاح",
    }).then(() => {
      document.getElementById("signup-form").reset();
      window.location.href = "login.html";
    });
  }
});
