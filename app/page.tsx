import GerenciadorTarefas from "@/app/components/GerenciadorTarefas";

// Função para simular o fetch de uma API
async function fetchTarefas() {
  return Promise.resolve([
    { id: 1, texto: "Aprender Next.js 15" },
    { id: 2, texto: "Escrever testes unitários com Jest" },
  ]);
}

export default async function Page() {
  // O componente aguarda os dados carregarem no servidor
  const tarefas = await fetchTarefas();

  // Passa os dados para o Client Component renderizar e gerenciar
  return <GerenciadorTarefas tarefasIniciais={tarefas} />;
}