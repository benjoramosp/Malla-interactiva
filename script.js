document.addEventListener("DOMContentLoaded", () => {
  // ==== GESTIÓN DE LOCALSTORAGE ====

  // ==== FUNCIONES DE LOCALSTORAGE ====

function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// ==== CÁLCULO DE CRÉDITOS APROBADOS ====

function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((suma, ramo) => suma + (creditos[ramo] || 0), 0);
}

// ==== CREAR LA MALLA ====

function crearMalla() {
  const lineaTiempo = document.querySelector('.linea-tiempo');
  const aprobados = obtenerAprobados();

  for (let semestre = 1; semestre <= 14; semestre++) {
    const divSemestre = document.createElement('div');
    divSemestre.classList.add('semestre');
    if (semestre <= 4) divSemestre.classList.add('basico');
    else if (semestre <= 10) divSemestre.classList.add('intermedio');
    else divSemestre.classList.add('avanzado');

    const h3 = document.createElement('h3');
    h3.textContent = `Semestre ${semestre}`;
    divSemestre.appendChild(h3);

    for (const [nombre, datos] of Object.entries(ramos)) {
      if (datos.semestre === semestre) {
        const divRamo = document.createElement('div');
        divRamo.classList.add('ramo', datos.ciclo);
        divRamo.id = nombre;
        divRamo.textContent = nombre;

        if (aprobados.includes(nombre)) {
          divRamo.classList.add('aprobado');
        }

        divSemestre.appendChild(divRamo);
      }
    }

    lineaTiempo.appendChild(divSemestre);
  }

  agregarEventosRamos();
  actualizarDesbloqueos();
}

// ==== ACTUALIZAR DESBLOQUEOS ====

function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const totalCreditos = calcularCreditosAprobados();

  for (const [destino, reqs] of Object.entries(prerequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    let puedeDesbloquear = reqs.every(r => aprobados.includes(r));

    // Reglas especiales por créditos
    if (destino === 'modulo1') {
      puedeDesbloquear = totalCreditos >= 90;
    }
    if (destino === 'modulo2') {
      puedeDesbloquear = aprobados.includes('modulo1') && totalCreditos >= 170;
    }
    if (destino === 'internado_electivo' || destino === 'internado_electivo1') {
      puedeDesbloquear = totalCreditos >= 240;
    }

    if (!elem.classList.contains('aprobado')) {
      if (puedeDesbloquear) {
        elem.classList.remove('bloqueado');
      } else {
        elem.classList.add('bloqueado');
      }
    } else {
      elem.classList.remove('bloqueado');
    }
  }
}

// ==== APROBAR / DESAPROBAR ====

function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  const id = ramo.id;

  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(id)) aprobados.push(id);
  } else {
    const idx = aprobados.indexOf(id);
    if (idx > -1) aprobados.splice(idx, 1);
  }

  guardarAprobados(aprobados);
  actualizarDesbloqueos();
}

// ==== ASIGNAR EVENTOS ====

function agregarEventosRamos() {
  const todosRamos = document.querySelectorAll('.ramo');
  todosRamos.forEach(ramo => {
    ramo.addEventListener('click', aprobar);
  });
}

// ==== INICIALIZAR ====

window.addEventListener('DOMContentLoaded', () => {
  crearMalla();
});
