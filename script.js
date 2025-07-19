
document.addEventListener("DOMContentLoaded", () => {

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

  function crearRamo(n, d) {
    const div = document.createElement("div");
    div.className = `ramo bloqueado ${d.ciclo}`;
    div.textContent = n;
    div.dataset.nombre = n;
    div.dataset.estado = "bloqueado";
    const col = document.querySelector(`.semestre-${d.semestre}`);
    col && col.appendChild(div);
  }

  function desbloquear(n) {
    const div = document.querySelector(`.ramo[data-nombre="${n}"]`);
    if (!div || div.dataset.estado !== "bloqueado") return;
    const reqs = ramos[n].requisitos || [];
    const ok = reqs.every(r => {
      const e = document.querySelector(`.ramo[data-nombre="${r}"]`);
      return e && e.dataset.estado === "aprobado";
    });
    if (ok) {
      div.classList.remove("bloqueado");
      div.classList.add("activo");
      div.dataset.estado = "activo";
      div.addEventListener("click", () => aprobar(n));
    }
  }

  function aprobar(n) {
    const div = document.querySelector(`.ramo[data-nombre="${n}"]`);
    if (!div) return;
    div.classList.remove("activo");
    div.classList.add("aprobado");
    div.dataset.estado = "aprobado";
    const clone = div.cloneNode(true);
    div.parentNode.replaceChild(clone, div);
    (ramos[n].abre || []).forEach(desbloquear);
  }

  function init() {
    crearSemestres();
    Object.entries(ramos).forEach(([n,d]) => crearRamo(n,d));
    Object.entries(ramos).forEach(([n,d]) => {
      const requisitos = d.requisitos ?? []; 
      if (requisitos.length === 0) desbloquear(n);
    });
  }

  init();
});
