document.addEventListener("DOMContentLoaded", () => {
  // === CREAR SEMESTRES (1 al 14) ===
  function crearSemestres() {
    const contenedor = document.querySelector(".linea-tiempo");
    for (let i = 1; i <= 14; i++) {
      const columna = document.createElement("div");
      columna.className = `semestre semestre-${i}`;

      const titulo = document.createElement("h3");
      titulo.textContent = `Semestre ${i}`;
      columna.appendChild(titulo);

      // Detectar ciclo
      if (i >= 1 && i <= 4) columna.classList.add("basico");
      else if (i >= 5 && i <= 10) columna.classList.add("intermedio");
      else columna.classList.add("avanzado");

      contenedor.appendChild(columna);
    }
  }

  // === CREAR RAMO ===
  function crearRamo(nombre, datos) {
    const div = document.createElement("div");
    div.className = `ramo bloqueado ${datos.ciclo}`;
    div.textContent = nombre;
    div.dataset.nombre = nombre;
    div.dataset.estado = "bloqueado";

    const columna = document.querySelector(`.semestre-${datos.semestre}`);
    if (columna) columna.appendChild(div);
  }

  // === APROBAR UN RAMO ===
  function aprobar(nombre) {
    const ramo = document.querySelector(`.ramo[data-nombre="${nombre}"]`);
    if (!ramo) return;

    // Marcar como aprobado
    ramo.classList.remove("activo");
    ramo.classList.add("aprobado");
    ramo.dataset.estado = "aprobado";

    // Remover cualquier evento anterior (clonando el nodo)
    const nuevoRamo = ramo.cloneNode(true);
    ramo.parentNode.replaceChild(nuevoRamo, ramo);

    // Desbloquear los ramos que este abre
    const abre = ramos[nombre].abre || [];
    abre.forEach(desbloquear);
  }

  // === DESBLOQUEAR UN RAMO SI CUMPLE LOS REQUISITOS ===
  function desbloquear(nombre) {
    const ramo = document.querySelector(`.ramo[data-nombre="${nombre}"]`);
    if (!ramo || ramo.dataset.estado !== "bloqueado") return;

    const requisitos = ramos[nombre].requisitos || [];
    const todosListos = requisitos.every(req => {
      const reqRamo = document.querySelector(`.ramo[data-nombre="${req}"]`);
      return reqRamo && reqRamo.dataset.estado === "aprobado";
    });

    if (todosListos) {
      ramo.classList.remove("bloqueado");
      ramo.classList.add("activo");
      ramo.dataset.estado = "activo";
      ramo.addEventListener("click", () => aprobar(nombre));
    }
  }

  // === INICIALIZAR MALLA ===
  function inicializarMalla() {
    crearSemestres();
    for (const [nombre, datos] of Object.entries(ramos)) {
      crearRamo(nombre, datos);
    }

    // Desbloquear todos los ramos sin requisitos
    for (const nombre in ramos) {
      if (!ramos[nombre].requisitos || ramos[nombre].requisitos.length === 0) {
        const div = document.querySelector(`.ramo[data-nombre="${nombre}"]`);
        if (div) {
          div.classList.remove("bloqueado");
          div.classList.add("activo");
          div.dataset.estado = "activo";
          div.addEventListener("click", () => aprobar(nombre));
        }
      }
    }
  }

  inicializarMalla();
});
