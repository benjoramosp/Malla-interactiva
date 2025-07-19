document.addEventListener("DOMContentLoaded", () => {
  // ==== GESTIÓN DE LOCALSTORAGE ====

  function obtenerAprobados() {
    const data = localStorage.getItem('mallaAprobados');
    return data ? JSON.parse(data) : [];
  }

  function guardarAprobados(aprobados) {
    localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
  }

  // ==== CREAR SEMESTRES ====

  function crearSemestres() {
    const cont = document.querySelector(".linea-tiempo");
    for (let i = 1; i <= 14; i++) {
      const c = document.createElement("div");
      c.className = `semestre semestre-${i}`;
      const h = document.createElement("h3");
      h.textContent = `Semestre ${i}`;
      c.appendChild(h);
      cont.appendChild(c);
    }
  }

  // ==== CREAR RAMO ====

  function crearRamo(nombre, datos) {
    const div = document.createElement("div");
    const aprobados = obtenerAprobados();
    const estado = aprobados.includes(nombre) ? "aprobado" : "bloqueado";

    div.className = `ramo ${datos.ciclo} ${estado}`;
    div.textContent = nombre;
    div.dataset.nombre = nombre;
    div.dataset.estado = estado;

    if (estado === "aprobado") {
      div.classList.add("aprobado");
    }

    const col = document.querySelector(`.semestre-${datos.semestre}`);
    if (col) col.appendChild(div);
  }

  // ==== DESBLOQUEAR RAMO ====

  function desbloquear(nombre) {
    const div = document.querySelector(`.ramo[data-nombre="${nombre}"]`);
    if (!div || div.dataset.estado !== "bloqueado") return;

    const reqs = ramos[nombre].requisitos || [];
    const ok = reqs.every(r => {
      const e = document.querySelector(`.ramo[data-nombre="${r}"]`);
      return e && e.dataset.estado === "aprobado";
    });

    if (ok) {
      div.classList.remove("bloqueado");
      div.classList.add("activo");
      div.dataset.estado = "activo";
      div.addEventListener("click", () => aprobar(nombre));
    }
  }

  // ==== APROBAR O DESAPROBAR ====

  function aprobar(nombre) {
    const div = document.querySelector(`.ramo[data-nombre="${nombre}"]`);
    if (!div) return;

    let aprobados = obtenerAprobados();

    if (div.dataset.estado === "aprobado") {
      // DESAPROBAR
      div.classList.remove("aprobado");
      div.classList.add("activo");
      div.dataset.estado = "activo";
      aprobados = aprobados.filter(n => n !== nombre);
    } else {
      // APROBAR
      div.classList.remove("activo", "bloqueado");
      div.classList.add("aprobado");
      div.dataset.estado = "aprobado";
      if (!aprobados.includes(nombre)) aprobados.push(nombre);
    }

    guardarAprobados(aprobados);
    actualizarDesbloqueos();
  }

  // ==== ACTUALIZAR DESBLOQUEOS ====

  function actualizarDesbloqueos() {
    const aprobados = obtenerAprobados();

    for (const [nombre, datos] of Object.entries(ramos)) {
      const div = document.querySelector(`.ramo[data-nombre="${nombre}"]`);
      if (!div) continue;

      const requisitos = datos.requisitos || [];
      const desbloqueado = requisitos.every(req => aprobados.includes(req));

      if (!div.classList.contains("aprobado")) {
        if (desbloqueado) {
          div.classList.remove("bloqueado");
          div.classList.add("activo");
          div.dataset.estado = "activo";
          if (!div.onclick) div.addEventListener("click", () => aprobar(nombre));
        } else {
          div.classList.add("bloqueado");
          div.classList.remove("activo");
          div.dataset.estado = "bloqueado";
        }
      }
    }

    // Desbloquear los que "abre" cada aprobado
    aprobados.forEach(nombre => {
      const abre = ramos[nombre]?.abre || [];
      abre.forEach(desbloquear);
    });
  }

  // ==== INICIALIZAR ====

  function init() {
    crearSemestres();
    Object.entries(ramos).forEach(([n, d]) => crearRamo(n, d));
    Object.entries(ramos).forEach(([n, d]) => {
      const requisitos = d.requisitos ?? [];
      if (requisitos.length === 0) desbloquear(n);
    });
    actualizarDesbloqueos();
  }

  init();
});
