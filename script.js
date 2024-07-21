function sortearTarefas() {
  const tarefas = [
    "Cozinha 1",
    "Cozinha 2",
    "Cozinha 3",
    "Sala + Corredor",
    "Lavanderia",
  ];
  const participantes = ["Felipe", "Gabriel", "Herbert", "Pedro", "Sara"];

  // Embaralha os participantes
  for (let i = participantes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [participantes[i], participantes[j]] = [participantes[j], participantes[i]];
  }

  // Associa as tarefas aos participantes
  const resultados = tarefas.map((tarefa, index) => {
    return `<div class="box-task" <h4 style="font-size: 12px; font-weight: 400;">${tarefa}<br></h4>  <span>${participantes[index]}</span> </div>`;
  });

  // Exibe os resultados
  document.getElementById("resultados").innerHTML = resultados.join("<br>");
}
