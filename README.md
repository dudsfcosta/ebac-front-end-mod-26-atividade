# 📝 Lista de Tarefas - Next.js 15 & Testes Unitários

Este projeto é uma aplicação de gerenciamento de tarefas desenvolvida para praticar a implementação de **testes unitários** em um ambiente **Next.js 15 (App Router)** utilizando **TypeScript**[cite: 3, 13]. O desafio foca em componentes reutilizáveis, Server Components e hooks personalizados[cite: 4].

## 🚀 Tecnologias Utilizadas

* **Framework:** Next.js 15 (App Router)
* **Linguagem:** TypeScript
* **Testes:** Jest & React Testing Library
* **Estilização:** CSS Modules (`.module.css`)

## ✨ Funcionalidades

* **Listagem de Tarefas:** Exibição de uma lista vinda de um arquivo simulado (API mockada).
* **Adição de Tarefas:** Inclusão de novas tarefas via formulário controlado (Client Component).
* **Exclusão de Tarefas:** Remoção dinâmica de itens da lista.
* **Contador em Tempo Real:** Uso de um **hook personalizado** (`useContadorDeTarefas`) para retornar a quantidade atual de tarefas.

## 📁 Estrutura do Projeto

A organização segue a estrutura recomendada para componentes, hooks e testes:

```bash
├── app/
│   └── page.tsx                 # Server Component que carrega a lista inicial
├── components/
│   ├── GerenciadorTarefas.tsx   # Client Component de gerenciamento de estado
│   ├── GerenciadorTarefas.module.css # Estilos isolados (CSS Modules)
│   ├── NovaTarefa.tsx           # Componente para adicionar tarefas
│   └── NovaTarefa.module.css    # Estilos isolados (CSS Modules)
├── hooks/
│   └── useContadorDeTarefas.ts  # Hook para contagem de tarefas
└── tests/
    ├── GerenciadorTarefas.test.tsx  # Teste de renderização e exclusão
    ├── NovaTarefa.test.tsx          # Teste de input, botão e submissão
    └── useContadorDeTarefas.test.ts # Teste isolado do hook com renderHook
```
## 🛠️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd SEU_REPOSITORIO
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra \`http://localhost:3000\` para ver a aplicação rodando.

## 🧪 Como Rodar os Testes

Este projeto possui uma suíte de testes unitários com foco em garantir a qualidade e a renderização correta dos fluxos principais.

Para rodar os testes uma única vez, utilize:
```bash
  npm run test
```

Para rodar os testes em modo de observação (watch mode), utilize:
```bash
  npm run test:watch
```

---
*Projeto desenvolvido para a atividade do Módulo 26.*