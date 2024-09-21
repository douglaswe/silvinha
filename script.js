document.addEventListener("DOMContentLoaded", function () {
  const dataAlvo = new Date("2024-11-09T16:00:00");
  const containerContagemRegressiva = document.getElementById(
    "container-contagem-regressiva"
  );
  const diasElement = document.getElementById("dias");
  const horasElement = document.getElementById("horas");
  const minutosElement = document.getElementById("minutos");
  const segundosElement = document.getElementById("segundos");
  const mensagemElement = document.getElementById("mensagem");

  function atualizarContagemRegressiva() {
    const agora = new Date();
    const diferenca = dataAlvo - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    diasElement.textContent = dias;
    horasElement.textContent = horas;
    minutosElement.textContent = minutos;
    segundosElement.textContent = segundos;

    if (diferenca < 0) {
      clearInterval(contagemInterval);
      containerContagemRegressiva.style.display = "none";
      mensagemElement.textContent = "Ferias!🎉🎊";
      mensagemElement.style.display = "block";
      mensagemElement.style.color = "red";
      mensagemElement.classList.add("animate-bounceIn");
    }
  }

  const contagemInterval = setInterval(atualizarContagemRegressiva, 1000);
});
