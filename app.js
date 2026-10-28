const DIAS = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira"];
const COORD_M = "Coordenação (Pedro / Maurício)";
const COORD_T = "Coordenação";

const MANHA = {
"RAFAELA O":"6ºB 6ºC 6ºA subst 6ºA|6ºC 6ºB subst 6ºC 6ºA|Acepat Acepat Acepat Acepat Acepat|6ºC 6ºA subst 6ºB Acepat|6ºC 6ºB Acepat 6ºB 6ºA",
"HELEN":"7ºB 7ºB 7ºA 7ºC subst|Acepat subst 7ºC 7ºB 7ºA|7ºA 7ºA 7ºB 7ºC subst|7ºC 7ºC 7ºB Acepat 7ºA|Acepat Acepat Acepat Acepat Acepat",
"RAFAELA N":"8ºC 8ºC 8ºA 8ºB Acepat|8ºA 8ºA 8ºB 8ºB 8ºC|Acepat Acepat Acepat Acepat Acepat|8ºB subst Acepat 8ºA 8ºC|8ºC 8ºB subst subst 8ºA",
"MARCIA":"subst 9ºB 9ºA 9ºA 9ºC|9ºB 9ºA Acepat 9ºC subst|9ºA 9ºB 9ºC 9ºB 9ºC|Acepat Acepat Acepat Acepat Acepat|Acepat 9ºA 9ºB 9ºC subst",
"VERÔNICA":"Red 6ºA 6ºC 6ºC 6ºB|Red 6ºA 6ºC 6ºB 6ºB|Acepat Acepat Acepat Acepat Acepat|Red 6ºC 6ºB subst 6ºA|Acepat 6ºC 6ºA 6ºA 6ºB",
"GRAZIELE":"7ºC 7ºC 7ºB Acepat 7ºA|7ºB 7ºB 7ºA 7ºC subst|7ºB subst 7ºA subst 7ºC|Acepat Acepat Acepat Acepat Acepat|7ºB 7ºA 7ºA Acepat 7ºC",
"CARLOS B":"Acepat Acepat Acepat Acepat Acepat|8ºB 8ºC subst Acepat 8ºA|8ºB 8ºA 8ºA 8ºC 8ºC|8ºA 8ºB 8ºB 8ºC 8ºA|subst subst 8ºC Acepat 8ºB",
"ALESSANDRA":"9ºA subst 9ºB 9ºC 9ºA|9ºC subst 9ºB Acepat 9ºA|Acepat Acepat Acepat Acepat Acepat|9ºB 9ºC 9ºB 9ºA 9ºC|9ºB subst 9ºA Acepat 9ºC",
"CLAUDIA (geo)":"7ºA Acepat 6ºB 6ºA 7ºB|Acepat Acepat Acepat Acepat Acepat|6ºA 7ºC 6ºC 6ºB 7ºA|7ºB 6ºB 6ºC 6ºA 7ºC|7ºC 7ºB 6ºC Acepat 7ºA",
"LÍGIA (geo)":"8ºA 8ºB 9ºC Acepat 9ºB|Acepat 8ºB 9ºA 8ºC 9ºB|9ºC 9ºA 8ºC 8ºA 8ºB|Acepat Acepat Acepat Acepat Acepat|9ºA 9ºC 8ºA 8ºC 9ºB",
"CARLOS M":"Acepat Acepat Acepat Acepat Acepat|6ºB 7ºA 6ºA Acepat 7ºB|7ºC 7ºB 6ºA 6ºC 6ºB|6ºB 7ºA 7ºC 7ºB 6ºC|6ºA Acepat 7ºC 7ºA 6ºC",
"MAURÍLIO":"Acepat Acepat Acepat Acepat Acepat|8ºC 9ºB 8ºA 9ºA 9ºC|8ºA 8ºC 8ºB 9ºA 9ºB|9ºA 9ºB 8ºA 9ºC 8ºB|9ºC 8ºC Acepat 8ºB Acepat",
"VITOR":"Acepat Acepat Acepat Acepat Acepat|7ºC Acepat 6ºB 6ºA 6ºC|6ºC 6ºA 6ºB 7ºA 7ºB|6ºA Acepat 7ºA 7ºC 7ºB|7ºA 7ºC 6ºB 6ºC 7ºB",
"JACKIE":"9ºB Acepat 8ºB 8ºC 8ºA|9ºA 9ºC 8ºC 8ºA 8ºB|Acepat Acepat Acepat Acepat Acepat|8ºC 9ºA 9ºC 9ºB Acepat|8ºB 8ºA 9ºC 9ºB 9ºA",
"CIRLENE":"6ºC 6ºB 7ºC 7ºA Acepat|Acepat Acepat Acepat Acepat Acepat|6ºB 6ºC subst 7ºB 6ºA|subst subst Acepat 7ºA subst|subst 6ºA 7ºB 7ºC subst",
"WAGNER":"subst 8ºA 8ºC 9ºB 8ºB|subst Acepat 9ºC 9ºB subst|Acepat Acepat Acepat Acepat Acepat|9ºC 8ºA 8ºC 8ºB 9ºA|Acepat subst subst 9ºA subst",
"JONATHAN":"Acepat subst subst 6ºB 7ºC|6ºA 6ºC 7ºB 7ºA 7ºC|Red Red Red Acepat Acepat|7ºA 7ºB 6ºA 6ºC 6ºB|Acepat Acepat Acepat subst subst",
"GUILHERME":"9ºC 9ºA Acepat subst subst|Acepat Acepat Acepat Acepat Acepat|8ºC 8ºB 9ºB 9ºC 9ºA|Acepat subst subst subst subst|8ºA 9ºB 8ºB 8ºA 8ºC",
"LUCAS":"6ºA 7ºA subst 7ºB 6ºC|7ºA 7ºC subst subst Acepat|subst 6ºB 7ºC 6ºA 6ºC|Acepat Acepat Acepat Acepat Acepat|6ºB subst subst 7ºB Acepat",
"LIGIA (arte)":"8ºB 9ºC Acepat 8ºA 8ºC|subst subst subst subst subst|9ºB 9ºC 9ºA 8ºB 8ºA|subst 8ºC 9ºA Acepat 9ºB|Acepat Acepat Acepat Acepat Acepat"
};

const TARDE = {
"CARLA":"Acepat Acepat Acepat Acepat|1ºA 1ºA 1ºA 1ºA|1ºA 1ºA Acepat 1ºA|1ºA 1ºA 1ºA 1ºA|1ºA 1ºA 1ºA 1ºA",
"IRAMARA":"1ºB 1ºB 1ºB 1ºB|1ºB 1ºB 1ºB 1ºB|1ºB 1ºB 1ºB 1ºB|1ºB 1ºB Acepat 1ºB|Acepat Acepat Acepat Acepat",
"DANIEL":"1ºA 1ºA 1ºA 1ºA|Acepat Acepat Acepat Acepat|2ºB 2ºB 2ºB 2ºB|Acepat subst subst subst|1ºB 1ºB 1ºB 1ºB",
"MARCELE":"2ºA 2ºA 2ºA 2ºA|Acepat Acepat Acepat Acepat|2ºA 2ºA 2ºA 2ºA|2ºA 2ºA 2ºA 2ºA|2ºA Acepat 2ºA 2ºA",
"CINTHIA":"2ºB 2ºB 2ºB 2ºB|2ºB 2ºB 2ºB Acepat|Acepat Acepat Acepat Acepat|2ºB 2ºB 2ºB 2ºB|2ºB 2ºB 2ºB 2ºB",
"SILVIA":"Acepat Acepat Acepat Acepat|3ºA Acepat 3ºA 3ºA|3ºA 3ºA 3ºA 3ºA|3ºA 3ºA 3ºA 3ºA|3ºA 3ºA 3ºA 3ºA",
"MÁRCIA":"3ºB 3ºB 3ºB 3ºB|3ºB 3ºB 3ºB 3ºB|Acepat Acepat Acepat Acepat|3ºB 3ºB 3ºB 3ºB|Acepat 3ºB 3ºB 3ºB",
"GRAZI":"3ºA 3ºA 3ºA 3ºA|Red 2ºA 2ºA 2ºA|3ºB 3ºB 3ºB Red|Acepat Acepat Acepat Acepat|3ºB 2ºA subst Red",
"TICIANA":"Acepat Acepat Acepat Acepat|4ºB subst 4ºB 4ºA|4ºA 4ºA 4ºB 4ºB|4ºA 4ºA 4ºB Acepat|4ºA 4ºA 4ºB 4ºB",
"VAL":"4ºB 4ºB 4ºA 4ºA|4ºA 4ºA subst 4ºB|4ºB 4ºB 4ºA 4ºA|Acepat 4ºB 4ºA 4ºB|Acepat Acepat Acepat Acepat",
"KELLY P.":"4ºA 4ºA 4ºB 4ºC|Acepat 4ºB 4ºC 4ºC|Acepat Acepat Acepat Acepat|4ºB 4ºC 4ºC 4ºA|4ºB 4ºB 4ºA 4ºA",
"LILIAN":"5ºA Acepat 5ºB 5ºB|5ºB 5ºB 5ºA 5ºA|5ºA 5ºA 5ºB 5ºB|Acepat Acepat Acepat Acepat|5ºB 5ºB 5ºA 5ºA",
"MARGARET":"5ºB 5ºB 5ºA 5ºA|5ºA 5ºA Acepat 5ºB|Acepat Acepat Acepat Acepat|5ºB 5ºA 5ºA 5ºB|5ºA 5ºA 5ºB 5ºB",
"KELLY A.":"5ºC 5ºA 5ºC Red|5ºC 5ºC 5ºB Red|5ºB 5ºC 5ºA 5ºA|5ºA 5ºB 5ºB Red|Acepat Acepat Acepat Acepat",
"CLAUDIA":"Acepat Acepat Acepat Acepat|4ºC 4ºC 5ºC 5ºC|5ºC Acepat 4ºC 4ºC|4ºC subst 5ºC 5ºC|4ºC 4ºC 5ºC 5ºC",
"FÁBIO":"4ºC 4ºC Acepat 5ºC|Acepat Acepat Acepat Acepat|4ºC 4ºC 5ºC 5ºC|5ºC 5ºC subst 4ºC|5ºC 5ºC 4ºC 4ºC",
"LUDMILA":"subst 5ºC 4ºC 4ºB|2ºA 3ºA 4ºA 2ºB|Acepat 5ºB 1ºA 3ºB|subst subst 1ºB 5ºA|Acepat Acepat Acepat Acepat"
};

const TURNOS = {
  manha: { nome: "Manhã", bruto: MANHA, nHor: 5, coord: COORD_M, turma: /^[6-9]º[ABC]$/ },
  tarde: { nome: "Tarde", bruto: TARDE, nHor: 4, coord: COORD_T, turma: /^[1-5]º[ABC]$/ }
};
for (const t of Object.values(TURNOS)) {
  t.H = {};
  for (const [nome, txt] of Object.entries(t.bruto)) t.H[nome] = txt.split("|").map(d => d.trim().split(/\s+/));
  t.profs = Object.keys(t.H);
  t.hor = Array.from({ length: t.nHor }, (_, i) => (i + 1) + "º horário");
}

let turno = "manha";
let dia = (() => { const d = new Date().getDay(); return d >= 1 && d <= 5 ? d - 1 : 0; })();
let ausentes = new Set();
let escolhas = {};
const T = () => TURNOS[turno];

/* ---------- motor das substituições ---------- */
function acepatsNoDia(p, d) { return T().H[p][d].filter(v => v === "Acepat").length; }

function candidatos(d, s, turma) {
  const livres = [];
  for (const p of T().profs) {
    if (ausentes.has(p)) continue;
    const cel = T().H[p][d][s];
    if (cel === "subst") livres.push({ nome: p, tipo: "subst" });
    else if (cel === "Acepat" && acepatsNoDia(p, d) === 1) livres.push({ nome: p, tipo: "remanejar" });
  }
  const daAula = p => T().H[p].some(linha => linha.includes(turma));
  return livres.sort((a, b) =>
    (a.tipo === b.tipo ? 0 : a.tipo === "subst" ? -1 : 1) ||
    (daAula(b.nome) - daAula(a.nome)) ||
    a.nome.localeCompare(b.nome, "pt-BR"));
}

function montar() {
  const plano = [];
  const carga = {};
  for (let s = 0; s < T().nHor; s++) {
    const aulas = [];
    for (const p of ausentes) {
      const cel = T().H[p][dia][s];
      if (T().turma.test(cel)) aulas.push({ turma: cel, ausente: p });
    }
    aulas.sort((a, b) => a.turma.localeCompare(b.turma));
    const usados = new Set();
    for (const a of aulas) {
      a.opcoes = candidatos(dia, s, a.turma);
      const chave = turno + "|" + s + "|" + a.turma + "|" + a.ausente;
      const guardada = escolhas[chave];
      if (guardada === T().coord) { a.sub = T().coord; a.tipo = "coord"; }
      else if (guardada && a.opcoes.some(o => o.nome === guardada) && !usados.has(guardada)) {
        a.sub = guardada;
        a.tipo = a.opcoes.find(o => o.nome === guardada).tipo;
        usados.add(guardada);
      } else {
        const livres = a.opcoes.filter(o => !usados.has(o.nome));
        let melhor = null;
        for (const o of livres) {
          if (!melhor) { melhor = o; continue; }
          if (o.tipo === melhor.tipo && (carga[o.nome] || 0) < (carga[melhor.nome] || 0)) melhor = o;
        }
        if (melhor) { a.sub = melhor.nome; a.tipo = melhor.tipo; usados.add(melhor.nome); }
        else { a.sub = T().coord; a.tipo = "coord"; }
      }
      if (a.sub !== T().coord) carga[a.sub] = (carga[a.sub] || 0) + 1;
      a.chave = chave;
    }
    plano.push(aulas);
  }
  return plano;
}

/* ---------- interface ---------- */
const elTurnos = document.getElementById("turnos");
const elDias = document.getElementById("dias");
const elProfs = document.getElementById("profs");
const elSaida = document.getElementById("saida");

Object.entries(TURNOS).forEach(([k, t]) => {
  const b = document.createElement("button");
  b.className = "day"; b.type = "button"; b.textContent = t.nome; b.id = "turno" + k;
  b.onclick = () => { turno = k; ausentes.clear(); escolhas = {}; montarChips(); render(); };
  elTurnos.appendChild(b);
});

DIAS.forEach((d, i) => {
  const b = document.createElement("button");
  b.className = "day"; b.type = "button"; b.textContent = d.replace("-feira", "");
  b.id = "dia" + i;
  b.onclick = () => { dia = i; escolhas = {}; render(); };
  elDias.appendChild(b);
});

const idSeguro = p => "chip" + turno + p.replace(/\W/g, "");

function montarChips() {
  elProfs.innerHTML = "";
  T().profs.forEach(p => {
    const b = document.createElement("button");
    b.className = "chip"; b.type = "button"; b.textContent = p; b.id = idSeguro(p);
    b.onclick = () => {
      ausentes.has(p) ? ausentes.delete(p) : ausentes.add(p);
      escolhas = {}; render();
    };
    elProfs.appendChild(b);
  });
}

function render() {
  Object.keys(TURNOS).forEach(k =>
    document.getElementById("turno" + k).setAttribute("aria-pressed", k === turno));
  DIAS.forEach((_, i) =>
    document.getElementById("dia" + i).setAttribute("aria-pressed", i === dia));
  T().profs.forEach(p => {
    const el = document.getElementById(idSeguro(p));
    if (el) el.setAttribute("aria-pressed", ausentes.has(p));
  });

  elSaida.innerHTML = "";
  const diaTodoAcepat = [...ausentes].filter(p => acepatsNoDia(p, dia) === T().nHor);

  if (ausentes.size === 0) {
    elSaida.innerHTML = '<div class="aviso">Marque acima quem faltou. O quadro aparece aqui, horário por horário, só com quem está de plantão <b>subst</b> naquele horário exato.</div>';
    document.getElementById("wppBox").hidden = true;
    grade();
    return;
  }

  const plano = montar();
  let total = 0, semSub = 0;

  if (diaTodoAcepat.length) {
    const d = document.createElement("div");
    d.className = "aviso";
    d.textContent = diaTodoAcepat.join(", ") + " está em Acepat o dia inteiro nesta " +
      DIAS[dia].toLowerCase() + ", sem aula para cobrir.";
    elSaida.appendChild(d);
  }

  plano.forEach((aulas, s) => {
    if (!aulas.length) return;
    const bloco = document.createElement("div");
    bloco.className = "slot";
    const h = document.createElement("h3");
    h.textContent = T().hor[s];
    bloco.appendChild(h);

    aulas.forEach(a => {
      total++;
      if (a.sub === T().coord) semSub++;
      const linha = document.createElement("div");
      linha.className = "aula";

      const t = document.createElement("div");
      t.className = "turma"; t.textContent = a.turma;

      const q = document.createElement("div");
      q.className = "quem";
      q.innerHTML = "no lugar de<b></b>";
      q.querySelector("b").textContent = a.ausente;
      const tag = document.createElement("span");
      tag.className = "tag" + (a.tipo === "subst" ? "" : " rem");
      tag.textContent = a.tipo === "remanejar" ? "Acepat remanejado"
        : a.tipo === "coord" ? "sem plantão livre" : "plantão subst";
      q.appendChild(tag);

      const wrap = document.createElement("div");
      wrap.className = "escolha";
      const sel = document.createElement("select");
      sel.id = "sel" + a.chave.replace(/\W/g, "");
      a.opcoes.forEach(o => {
        const op = document.createElement("option");
        op.value = o.nome;
        op.textContent = o.nome + (o.tipo === "remanejar" ? "  (remanejar Acepat)" : "  (subst)");
        sel.appendChild(op);
      });
      const op = document.createElement("option");
      op.value = T().coord; op.textContent = T().coord;
      sel.appendChild(op);
      sel.value = a.sub;
      if (a.sub === T().coord) sel.classList.add("vazio");
      sel.onchange = () => { escolhas[a.chave] = sel.value; render(); };
      wrap.appendChild(sel);

      linha.append(t, q, wrap);
      bloco.appendChild(linha);
    });
    elSaida.appendChild(bloco);
  });

  if (total === 0) {
    elSaida.insertAdjacentHTML("beforeend",
      '<div class="aviso">Nenhuma aula a cobrir nesta ' + DIAS[dia].toLowerCase() + '.</div>');
  } else if (semSub > 0) {
    elSaida.insertAdjacentHTML("beforeend",
      '<div class="aviso">' + semSub + (semSub === 1 ? " aula ficou" : " aulas ficaram") +
      " sem professor de plantão. A coordenação entra em sala nesses horários.</div>");
  }

  document.getElementById("wppBox").hidden = total === 0;
  if (total) document.getElementById("wpp").value = textoWpp(plano);
  grade();
}

function textoWpp(plano) {
  const linhas = ["*SUBSTITUIÇÕES - " + DIAS[dia].toUpperCase() + " - " + T().nome.toUpperCase() + "*",
    "Ausentes: " + [...ausentes].join(", "), ""];
  plano.forEach((aulas, s) => {
    if (!aulas.length) return;
    linhas.push(T().hor[s]);
    aulas.forEach(a => {
      const extra = a.tipo === "remanejar" ? " (remanejar o Acepat no dia)" : "";
      linhas.push("- " + a.turma + ": " + a.sub + extra + "  [no lugar de " + a.ausente + "]");
    });
    linhas.push("");
  });
  linhas.push("Qualquer alteração, avisar a coordenação.");
  return linhas.join("\n");
}

function grade() {
  const t = document.getElementById("grade");
  let html = "<tr><th>Professor</th>" + T().hor.map(h => "<th>" + h.replace(" horário", "º") + "</th>").join("") + "</tr>";
  T().profs.forEach(p => {
    html += '<tr><td class="nome">' + p + "</td>";
    for (let s = 0; s < T().nHor; s++) {
      const v = T().H[p][dia][s];
      const cls = ausentes.has(p) ? "fora" : v === "subst" ? "sub" : (v === "Acepat" || v === "Red") ? "ace" : "";
      html += '<td class="' + cls + '">' + v + "</td>";
    }
    html += "</tr>";
  });
  t.innerHTML = html;
}

document.getElementById("copiar").onclick = async () => {
  const ta = document.getElementById("wpp");
  const btn = document.getElementById("copiar");
  try {
    await navigator.clipboard.writeText(ta.value);
    btn.textContent = "Copiado";
    setTimeout(() => btn.textContent = "Copiar mensagem", 1600);
  } catch (e) {
    ta.focus(); ta.select();
    btn.textContent = "Use Ctrl+C";
    setTimeout(() => btn.textContent = "Copiar mensagem", 2200);
  }
};
document.getElementById("limpar").onclick = () => { ausentes.clear(); escolhas = {}; render(); };

montarChips();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
