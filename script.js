const tombolSapa = document.querySelectorAll(".sapaButton");

tombolSapa.forEach((btn) => {
  btn.addEventListener("click", function () {
    const nama = this.parentElement.querySelector("h2").textContent;
    alert(`Halo, kamu baru saja menyapa ${nama}! 😄`);
  });
});
