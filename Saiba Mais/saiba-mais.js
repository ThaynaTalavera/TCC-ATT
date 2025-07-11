// ... (seu código Firebase e registro de escola aqui) ...

const html = document.documentElement;
// CORREÇÃO: Altera o ID para 'checkbox' para corresponder ao HTML
const toggleSwitch = document.getElementById('checkbox'); // Assumindo que este é o seu checkbox de alternância de tema

function atualizarBotao(tema) {
    // Atualiza o estado do checkbox (marcado/desmarcado)
    if (toggleSwitch) {
        toggleSwitch.checked = (tema === 'dark');
    }
}


function alternarTema() {
    // Pega o tema atual baseado no estado do checkbox
    const novoTema = toggleSwitch.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', novoTema);
    localStorage.setItem('tema', novoTema); // Salva a preferência no localStorage
    // Não é necessário chamar atualizarBotao aqui, pois o estado do checkbox já reflete o novo tema.
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  }
});
