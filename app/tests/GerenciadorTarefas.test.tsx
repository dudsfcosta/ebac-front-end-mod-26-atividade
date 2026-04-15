import { render, screen, fireEvent } from "@testing-library/react";
import GerenciadorTarefas from "../components/GerenciadorTarefas";

describe("Renderização da Página/Gerenciador de Tarefas", () => {
    const tarefasMock = [
        { id: 1, texto: "Tarefa simulada 1" },
        { id: 2, texto: "Tarefa simulada 2" },
    ];

    it("deve renderizar a lista de tarefas e o contador corretamente", () => {
        render(<GerenciadorTarefas tarefasIniciais={tarefasMock} />);

        expect(screen.getByRole("heading", { name: /lista de tarefas/i })).toBeInTheDocument();
        expect(screen.getByText("Tarefa simulada 1")).toBeInTheDocument();
        expect(screen.getByText("Tarefa simulada 2")).toBeInTheDocument();
        expect(screen.getByText("Total de tarefas: 2")).toBeInTheDocument();
    });

    // NOVO TESTE:
    it("deve remover uma tarefa e atualizar o contador ao clicar em Excluir", () => {
        render(<GerenciadorTarefas tarefasIniciais={tarefasMock} />);

        // Verifica que a tarefa 1 está na tela inicialmente
        expect(screen.getByText("Tarefa simulada 1")).toBeInTheDocument();

        // Pega todos os botões de excluir (terão 2, pois temos 2 tarefas no mock)
        const botoesExcluir = screen.getAllByRole("button", { name: /excluir/i });

        // Clica no botão de excluir da primeira tarefa
        fireEvent.click(botoesExcluir[0]);

        // Verifica se a tarefa sumiu da tela
        expect(screen.queryByText("Tarefa simulada 1")).not.toBeInTheDocument();

        // Verifica se a segunda tarefa continua lá
        expect(screen.getByText("Tarefa simulada 2")).toBeInTheDocument();

        // Verifica se o contador foi atualizado para 1
        expect(screen.getByText("Total de tarefas: 1")).toBeInTheDocument();
    });
});