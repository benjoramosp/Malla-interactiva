const ramos = {
  // === CICLO BÁSICO ===
  // Semestre 1
  "Biología Celular": {
    ciclo: "basico", semestre: 1,
    abre: ["Biología Molecular y Genética", "Bioquímica General", "Soporte Básico Vital, Primeros Auxilios y Principios de Enfermería"]
  },
  "Química General y Orgánica": {
    ciclo: "basico", semestre: 1,
    abre: ["Bioquímica General"]
  },
  "Bases Físico - Matemáticas de la Medicina": { ciclo: "basico", semestre: 1 },
  "Bases y Fundamentos de la Medicina": {
    ciclo: "basico", semestre: 1,
    abre: ["Historia de la Medicina Universal y Chilena"]
  },
  "Estrategias para el Aprendizaje": { ciclo: "basico", semestre: 1 },
  "Integración ABP I": {
    ciclo: "basico", semestre: 1,
    abre: ["Morfología Integrada y Orientada a la Práctica Médica I", "Integración ABP II"]
  },

  // Semestre 2
  "Biología Molecular y Genética": {
    ciclo: "basico", semestre: 2,
    requisitos: ["Biología Celular"],
    abre: ["Microbiología Médica", "Fisiología Médica", "Morfología Integrada y Orientada a la Práctica Médica II"]
  },
  "Bioquímica General": {
    ciclo: "basico", semestre: 2,
    requisitos: ["Biología Celular", "Química General y Orgánica"],
    abre: ["Fisiología Médica"]
  },
  "Soporte Básico Vital, Primeros Auxilios y Principios de Enfermería": {
    ciclo: "basico", semestre: 2,
    requisitos: ["Biología Celular"],
    abre: ["Microbiología Médica"]
  },
  "Historia de la Medicina Universal y Chilena": {
    ciclo: "basico", semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina"],
    abre: ["Psicología Aplicada a la Medicina General y al Médico"]
  },
  "Morfología Integrada y Orientada a la Práctica Médica I": {
    ciclo: "basico", semestre: 2,
    requisitos: ["Integración ABP I"],
    abre: ["Fisiología Médica", "Morfología Integrada y Orientada a la Práctica Médica II"]
  },
  "Integración ABP II": {
    ciclo: "basico", semestre: 2,
    requisitos: ["Integración ABP I"]
  },
  "Antropología": {
    ciclo: "basico", semestre: 2,
    abre: ["Ética"]
  },

  // Semestre 3
  "Bioestadística y Principios de Medicina Basada en la Evidencia": {
    ciclo: "basico", semestre: 3,
    abre: ["Salud Poblacional", "Metodología de la Investigación"]
  },
  "Microbiología Médica": {
    ciclo: "basico", semestre: 3,
    requisitos: ["Biología Molecular y Genética", "Soporte Básico Vital, Primeros Auxilios y Principios de Enfermería"],
    abre: ["Patología Médica", "Medicina Interna I", "Cirugía I", "Psiquiatría I"]
  },
  "Fisiología Médica": {
    ciclo: "basico", semestre: 3,
    requisitos: ["Biología Molecular y Genética", "Bioquímica General", "Morfología Integrada y Orientada a la Práctica Médica I"],
    abre: ["Fisiopatología Médica", "Morfología Integrada y Orientada a la Práctica Médica III", "Razonamiento Médico - Clínico I"]
  },
  "Psicología Aplicada a la Medicina General y al Médico": {
    ciclo: "basico", semestre: 3,
    requisitos: ["Historia de la Medicina Universal y Chilena"]
  },
  "Morfología Integrada y Orientada a la Práctica Médica II": {
    ciclo: "basico", semestre: 3,
    requisitos: ["Biología Molecular y Genética", "Morfología Integrada y Orientada a la Práctica Médica I"],
    abre: ["Morfología Integrada y Orientada a la Práctica Médica III", "Razonamiento Médico - Clínico I"]
  },
  "Ética": {
    ciclo: "basico", semestre: 3,
    requisitos: ["Antropología"],
    abre: ["Electivo de Formación Integral I"]
  },

  // Semestre 4
  "Fisiopatología Médica": {
    ciclo: "basico", semestre: 4,
    requisitos: ["Fisiología Médica"],
    abre: ["Semiología I", "Patología Médica"]
  },
  "Salud Poblacional": {
    ciclo: "basico", semestre: 4,
    requisitos: ["Bioestadística y Principios de Medicina Basada en la Evidencia"],
    abre: ["Epidemiología"]
  },
  "Morfología Integrada y Orientada a la Práctica Médica III": {
    ciclo: "basico", semestre: 4,
    requisitos: ["Fisiología Médica", "Morfología Integrada y Orientada a la Práctica Médica II"],
    abre: ["Semiología I", "Patología Médica"]
  },
  "Razonamiento Médico - Clínico I": {
    ciclo: "basico", semestre: 4,
    requisitos: ["Fisiología Médica", "Morfología Integrada y Orientada a la Práctica Médica II"],
    abre: ["Semiología I", "Bioética"]
  },
  "Electivo de Formación Integral I": {
    ciclo: "basico", semestre: 4,
    requisitos: ["Ética"]
  },

  // === CICLO AVANZADO ===

// Semestre 11
"Internado de Medicina Interna": {
  ciclo: "avanzado", semestre: 11,
  requisitos: [
    "Pediatría II",
    "Ginecología y Obstetricia II",
    "Especialidades II",
    "Medicina de Urgencia y Trauma",
    "Razonamiento Médico - Clínico III"
  ],
  abre: [
    "Internado de Salud Mental",
    "Internado de Medicina Familiar",
    "Internado Electivo I",
    "Internado de Especialidades de la Medicina Interna",
    "Internado de Cirugía y Urología"
  ]
},
"Internado de Pediatría": {
  ciclo: "avanzado", semestre: 11,
  requisitos: ["Pediatría II"],
  abre: [
    "Internado de Salud Mental",
    "Internado de Medicina Familiar",
    "Internado Electivo I"
  ]
},

// Semestre 12
"Internado de Salud Mental": {
  ciclo: "avanzado", semestre: 12,
  requisitos: [
    "Internado de Medicina Interna",
    "Internado de Pediatría"
  ],
  abre: ["Internado de Especialidades de la Medicina Interna"]
},
"Internado de Medicina Familiar": {
  ciclo: "avanzado", semestre: 12,
  requisitos: [
    "Internado de Medicina Interna",
    "Internado de Pediatría"
  ],
  abre: ["Internado Electivo II"]
},
"Internado Electivo I": {
  ciclo: "avanzado", semestre: 12,
  requisitos: [
    "Internado de Medicina Interna",
    "Internado de Pediatría"
  ]
},

// Semestre 13
"Internado de Especialidades de la Medicina Interna": {
  ciclo: "avanzado", semestre: 13,
  requisitos: [
    "Internado de Medicina Interna",
    "Internado de Salud Mental"
  ],
  abre: [
    "Internado de Ginecología y Obstetricia",
    "Internado de Medicina de Urgencia y Traumatología",
    "Razonamiento Médico - Clínico IV"
  ]
},
"Internado de Cirugía y Urología": {
  ciclo: "avanzado", semestre: 13,
  requisitos: ["Internado de Medicina Interna"],
  abre: [
    "Internado de Ginecología y Obstetricia",
    "Internado de Medicina de Urgencia y Traumatología",
    "Razonamiento Médico - Clínico IV"
  ]
},
"Internado Electivo II": {
  ciclo: "avanzado", semestre: 13,
  requisitos: ["Internado de Medicina Familiar"],
  abre: [
    "Internado de Ginecología y Obstetricia",
    "Internado de Medicina de Urgencia y Traumatología",
    "Razonamiento Médico - Clínico IV"
  ]
},

// Semestre 14
"Internado de Ginecología y Obstetricia": {
  ciclo: "avanzado", semestre: 14,
  requisitos: [
    "Internado de Especialidades de la Medicina Interna",
    "Internado de Cirugía y Urología",
    "Internado Electivo II"
  ]
},
"Internado de Medicina de Urgencia y Traumatología": {
  ciclo: "avanzado", semestre: 14,
  requisitos: [
    "Internado de Especialidades de la Medicina Interna",
    "Internado de Cirugía y Urología",
    "Internado Electivo II"
  ]
},
"Razonamiento Médico - Clínico IV": {
  ciclo: "avanzado", semestre: 14,
  requisitos: [
    "Internado de Especialidades de la Medicina Interna",
    "Internado de Cirugía y Urología",
    "Internado Electivo II"
  ]
}

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

      if (i >= 1 && i <= 4) columna.classList.add("basico");
      else if (i >= 5 && i <= 10) columna.classList.add("intermedio");
      else columna.classList.add("avanzado");

      contenedor.appendChild(columna);
    }
  }

  // === CREAR UN RAMO ===
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

    ramo.classList.remove("activo");
    ramo.classList.add("aprobado");
    ramo.dataset.estado = "aprobado";

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

      // Solo se asigna el evento una vez
      ramo.addEventListener("click", () => aprobar(nombre));
    }
  }

  // === INICIALIZAR MALLA COMPLETA ===
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
