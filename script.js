const tombolSapa = document.querySelectorAll(".sapaButton");

tombolSapa.forEach((btn) => {
  btn.addEventListener("click", function () {
    const nama = this.parentElement.querySelector("h2").textContent;
    alert(`Halo, terimakasih sudah berkunjung ${nama}! 😄`);
  });
});
