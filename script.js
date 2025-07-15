const ramos = {
  // === CICLO BÁSICO ===
  "Biología Celular": { ciclo: "basico", semestre: 1, abre: ["Biología Molecular y Genética", "Bioquímica General", "Soporte Básico Vital, Primeros Auxilios y Principios de Enfermería"] },
  "Química General y Orgánica": { ciclo: "basico", semestre: 1, abre: ["Bioquímica General"] },
  "Bases Físico - Matemáticas de la Medicina": { ciclo: "basico", semestre: 1 },
  "Bases y Fundamentos de la Medicina": { ciclo: "basico", semestre: 1, abre: ["Historia de la Medicina Universal y Chilena"] },
  "Estrategias para el Aprendizaje": { ciclo: "basico", semestre: 1 },
  "Integración ABP I": { ciclo: "basico", semestre: 1, abre: ["Morfología Integrada y Orientada a la Práctica Médica I", "Integración ABP II"] },

  "Biología Molecular y Genética": { ciclo: "basico", semestre: 2, requisitos: ["Biología Celular"], abre: ["Microbiología Médica", "Fisiología Médica", "Morfología Integrada y Orientada a la Práctica Médica II"] },
  "Bioquímica General": { ciclo: "basico", semestre: 2, requisitos: ["Biología Celular", "Química General y Orgánica"], abre: ["Fisiología Médica"] },
  "Soporte Básico Vital, Primeros Auxilios y Principios de Enfermería": { ciclo: "basico", semestre: 2, requisitos: ["Biología Celular"], abre: ["Microbiología Médica"] },
  "Historia de la Medicina Universal y Chilena": { ciclo: "basico", semestre: 2, requisitos: ["Bases y Fundamentos de la Medicina"], abre: ["Psicología Aplicada a la Medicina General y al Médico"] },
  "Morfología Integrada y Orientada a la Práctica Médica I": { ciclo: "basico", semestre: 2, requisitos: ["Integración ABP I"], abre: ["Fisiología Médica", "Morfología Integrada y Orientada a la Práctica Médica II"] },
  "Integración ABP II": { ciclo: "basico", semestre: 2, requisitos: ["Integración ABP I"] },
  "Antropología": { ciclo: "basico", semestre: 2, abre: ["Ética"] },

  "Bioestadística y Principios de Medicina Basada en la Evidencia": { ciclo: "basico", semestre: 3, abre: ["Salud Poblacional", "Metodología de la Investigación"] },
  "Microbiología Médica": { ciclo: "basico", semestre: 3, requisitos: ["Biología Molecular y Genética", "Soporte Básico Vital, Primeros Auxilios y Principios de Enfermería"], abre: ["Patología Médica", "Medicina Interna I", "Cirugía I", "Psiquiatría I"] },
  "Fisiología Médica": { ciclo: "basico", semestre: 3, requisitos: ["Biología Molecular y Genética", "Bioquímica General", "Morfología Integrada y Orientada a la Práctica Médica I"], abre: ["Fisiopatología Médica", "Morfología Integrada y Orientada a la Práctica Médica III", "Razonamiento Médico - Clínico I"] },
  "Psicología Aplicada a la Medicina General y al Médico": { ciclo: "basico", semestre: 3, requisitos: ["Historia de la Medicina Universal y Chilena"] },
  "Morfología Integrada y Orientada a la Práctica Médica II": { ciclo: "basico", semestre: 3, requisitos: ["Biología Molecular y Genética", "Morfología Integrada y Orientada a la Práctica Médica I"], abre: ["Morfología Integrada y Orientada a la Práctica Médica III", "Razonamiento Médico - Clínico I"] },
  "Ética": { ciclo: "basico", semestre: 3, requisitos: ["Antropología"], abre: ["Electivo de Formación Integral I"] },

  "Fisiopatología Médica": { ciclo: "basico", semestre: 4, requisitos: ["Fisiología Médica"], abre: ["Semiología I", "Patología Médica"] },
  "Salud Poblacional": { ciclo: "basico", semestre: 4, requisitos: ["Bioestadística y Principios de Medicina Basada en la Evidencia"], abre: ["Epidemiología"] },
  "Morfología Integrada y Orientada a la Práctica Médica III": { ciclo: "basico", semestre: 4, requisitos: ["Fisiología Médica", "Morfología Integrada y Orientada a la Práctica Médica II"], abre: ["Semiología I", "Patología Médica"] },
  "Razonamiento Médico - Clínico I": { ciclo: "basico", semestre: 4, requisitos: ["Fisiología Médica", "Morfología Integrada y Orientada a la Práctica Médica II"], abre: ["Semiología I", "Bioética"] },
  "Electivo de Formación Integral I": { ciclo: "basico", semestre: 4, requisitos: ["Ética"] },

  "Semiología I": { ciclo: "intermedio", semestre: 5, requisitos: ["Fisiopatología Médica", "Morfología Integrada y Orientada a la Práctica Médica III", "Razonamiento Médico - Clínico I"], abre: ["Semiología II", "Razonamiento Médico - Clínico II", "Salud Digital"] },
  "Patología Médica": { ciclo: "intermedio", semestre: 5, requisitos: ["Microbiología Médica", "Fisiopatología Médica", "Morfología Integrada y Orientada a la Práctica Médica III"], abre: ["Semiología II", "Razonamiento Médico - Clínico II", "Farmacología General"] },
  "Epidemiología": { ciclo: "intermedio", semestre: 5, requisitos: ["Salud Poblacional"] },
  "Bioética": { ciclo: "intermedio", semestre: 5, requisitos: ["Razonamiento Médico - Clínico I"] },
  "Electivo de Formación Integral II": { ciclo: "intermedio", semestre: 5 },
  "Electivo de Formación Integral III": { ciclo: "intermedio", semestre: 5 },

  "Semiología II": { ciclo: "intermedio", semestre: 6, requisitos: ["Semiología I", "Patología Médica"], abre: ["Medicina Interna I", "Cirugía I", "Psiquiatría I"] },
  "Farmacología General": { ciclo: "intermedio", semestre: 6, requisitos: ["Patología Médica"] },
  "Metodología de la Investigación": { ciclo: "intermedio", semestre: 6, requisitos: ["Bioestadística y Principios de Medicina Basada en la Evidencia"] },
  "Salud Digital": { ciclo: "intermedio", semestre: 6, requisitos: ["Semiología I"] },
  "Razonamiento Médico - Clínico II": { ciclo: "intermedio", semestre: 6, requisitos: ["Semiología I", "Patología Médica", "Razonamiento Médico - Clínico I"], abre: ["Medicina Interna I", "Cirugía I", "Psiquiatría I", "Salud Pueblos Originarios y Migrantes"] },
  "Electivo de Formación Integral IV": { ciclo: "intermedio", semestre: 6 },

  "Medicina Interna I": { ciclo: "intermedio", semestre: 7, requisitos: ["Microbiología Médica", "Semiología II", "Razonamiento Médico - Clínico II"], abre: ["Medicina Interna II"] },
  "Cirugía I": { ciclo: "intermedio", semestre: 7, requisitos: ["Microbiología Médica", "Semiología II", "Razonamiento Médico - Clínico II"], abre: ["Cirugía II"] },
  "Psiquiatría I": { ciclo: "intermedio", semestre: 7, requisitos: ["Microbiología Médica", "Semiología II", "Razonamiento Médico - Clínico II"], abre: ["Psiquiatría II"] },
  "Salud Pueblos Originarios y Migrantes": { ciclo: "intermedio", semestre: 7, requisitos: ["Razonamiento Médico - Clínico II"], abre: ["Medicina Legal, Responsabilidad Médica y Obligaciones Profesionales"] },

  "Medicina Interna II": { ciclo: "intermedio", semestre: 8, requisitos: ["Medicina Interna I"], abre: ["Pediatría I", "Ginecología y Obstetricia I", "Especialidades I", "Medicina Familiar y Comunitaria", "Cuidados Paliativos y del Fin de la Vida"] },
  "Cirugía II": { ciclo: "intermedio", semestre: 8, requisitos: ["Cirugía I"], abre: ["Ginecología y Obstetricia I", "Cuidados Paliativos y del Fin de la Vida"] },
  "Psiquiatría II": { ciclo: "intermedio", semestre: 8, requisitos: ["Psiquiatría I"], abre: ["Pediatría I", "Cuidados Paliativos y del Fin de la Vida"] },
  "Medicina Legal, Responsabilidad Médica y Obligaciones Profesionales": { ciclo: "intermedio", semestre: 8, requisitos: ["Salud Pueblos Originarios y Migrantes"], abre: ["Pediatría I", "Ginecología y Obstetricia I", "Cuidados Paliativos y del Fin de la Vida", "Salud Poblacional Aplicada a la Medicina"] },

  "Pediatría I": { ciclo: "intermedio", semestre: 9, requisitos: ["Medicina Interna II", "Psiquiatría II", "Medicina Legal, Responsabilidad Médica y Obligaciones Profesionales"], abre: ["Pediatría II", "Medicina de Urgencia y Trauma"] },
  "Ginecología y Obstetricia I": { ciclo: "intermedio", semestre: 9, requisitos: ["Medicina Interna II", "Cirugía II", "Medicina Legal, Responsabilidad Médica y Obligaciones Profesionales"], abre: ["Ginecología y Obstetricia II", "Medicina de Urgencia y Trauma"] },
  "Especialidades I": { ciclo: "intermedio", semestre: 9, requisitos: ["Medicina Interna II"] },
  "Medicina Familiar y Comunitaria": { ciclo: "intermedio", semestre: 9, requisitos: ["Medicina Interna II"], abre: ["Especialidades II", "Razonamiento Médico - Clínico III"] },
  "Cuidados Paliativos y del Fin de la Vida": { ciclo: "intermedio", semestre: 9, requisitos: ["Medicina Interna II", "Cirugía II", "Psiquiatría II", "Medicina Legal, Responsabilidad Médica y Obligaciones Profesionales"], abre: ["Especialidades II", "Razonamiento Médico - Clínico III", "Medicina de Urgencia y Trauma"] },
  "Salud Poblacional Aplicada a la Medicina": { ciclo: "intermedio", semestre: 9, requisitos: ["Medicina Legal, Responsabilidad Médica y Obligaciones Profesionales"] },

  "Pediatría II": { ciclo: "intermedio", semestre: 10, requisitos: ["Pediatría I"], abre: ["Internado de Medicina Interna", "Internado de Pediatría"] },
  "Ginecología y Obstetricia II": { ciclo: "intermedio", semestre: 10, requisitos: ["Ginecología y Obstetricia I"], abre: ["Internado de Medicina Interna"] },
  "Especialidades II": { ciclo: "intermedio", semestre: 10, requisitos: ["Medicina Familiar y Comunitaria", "Cuidados Paliativos y del Fin de la Vida"], abre: ["Internado de Medicina Interna"] },
  "Medicina de Urgencia y Trauma": { ciclo: "intermedio", semestre: 10, requisitos: ["Pediatría I", "Ginecología y Obstetricia I", "Cuidados Paliativos y del Fin de la Vida"], abre: ["Internado de Medicina Interna"] },
  "Razonamiento Médico - Clínico III": { ciclo: "intermedio", semestre: 10, requisitos: ["Medicina Familiar y Comunitaria", "Cuidados Paliativos y del Fin de la Vida"], abre: ["Internado de Medicina Interna"] },

  // === CICLO AVANZADO ===
  "Internado de Medicina Interna": { ciclo: "avanzado", semestre: 11, requisitos: ["Pediatría II","Ginecología y Obstetricia II","Especialidades II","Medicina de Urgencia y Trauma","Razonamiento Médico - Clínico III"], abre: ["Internado de Salud Mental","Internado de Medicina Familiar","Internado Electivo I", "Internado de Cirugía y Urología"] },
  "Internado de Pediatría": { ciclo: "avanzado", semestre: 11, requisitos: ["Pediatría II"], abre: ["Internado de Salud Mental","Internado de Medicina Familiar","Internado Electivo I"] },
  "Internado de Salud Mental": { ciclo: "avanzado", semestre: 12, requisitos: ["Internado de Pediatría","Internado de Medicina Interna"], abre: ["Internado de Especialidades de la Medicina Interna"] },
  "Internado de Medicina Familiar": { ciclo: "avanzado", semestre: 12, requisitos: ["Internado de Pediatría","Internado de Medicina Interna"], abre: ["Internado Electivo II"] },
  "Internado Electivo I": { ciclo: "avanzado", semestre: 12, requisitos: ["Internado de Pediatría","Internado de Medicina Interna"] },
  "Internado de Especialidades de la Medicina Interna": { ciclo: "avanzado", semestre: 13, requisitos: ["Internado de Medicina Interna","Internado de Salud Mental"], abre: ["Internado de Ginecología y Obstetricia","Razonamiento Médico - Clínico IV"] },
  "Internado de Cirugía y Urología": { ciclo: "avanzado", semestre: 13, requisitos: ["Internado de Medicina Interna"], abre: ["Internado de Ginecología y Obstetricia","Razonamiento Médico - Clínico IV"] },
  "Internado Electivo II": { ciclo: "avanzado", semestre: 13, requisitos: ["Internado de Medicina Familiar"], abre: ["Internado de Ginecología y Obstetricia","Razonamiento Médico - Clínico IV"] },
  "Internado de Ginecología y Obstetricia": { ciclo: "avanzado", semestre: 14, requisitos: ["Internado de Especialidades de la Medicina Interna","Internado de Cirugía y Urología","Internado Electivo II"] },
  "Internado de Medicina de Urgencia y Traumatología": { ciclo: "avanzado", semestre: 14, requisitos: ["Internado de Especialidades de la Medicina Interna","Internado de Cirugía y Urología","Internado Electivo II"] },
  "Razonamiento Médico - Clínico IV": { ciclo: "avanzado", semestre: 14, requisitos: ["Internado de Especialidades de la Medicina Interna","Internado de Cirugía y Urología","Internado Electivo II"] }
};

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
