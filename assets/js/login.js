document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem(email));

  if (user && user.password === password) {
    Swal.fire({
      icon: "success",
      title: "نجاح",
      text: "تم تسجيل الدخول بنجاح",
    }).then(() => {
      document.getElementById("login-form").reset();
      window.location.href = "index.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    });
  }
});
