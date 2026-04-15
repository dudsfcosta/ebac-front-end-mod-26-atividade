import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

describe("Componente <NovaTarefa />", () => {
    it("deve renderizar o input e o botão corretamente", () => {
        render(<NovaTarefa onAddTarefa={jest.fn()} />);

        expect(screen.getByPlaceholderText("Digite uma nova tarefa")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /adicionar/i })).toBeInTheDocument();
    });

    it("deve chamar a função onAddTarefa e limpar o input ao enviar", () => {
        const mockOnAddTarefa = jest.fn(); // Cria uma função "falsa" para o teste
        render(<NovaTarefa onAddTarefa={mockOnAddTarefa} />);

        const input = screen.getByPlaceholderText("Digite uma nova tarefa") as HTMLInputElement;
        const button = screen.getByRole("button", { name: /adicionar/i });

        // Simula a digitação do usuário
        fireEvent.change(input, { target: { value: "Estudar testes no Next.js" } });

        // Simula o clique no botão
        fireEvent.click(button);

        // Verifica se a função foi chamada com o texto correto
        expect(mockOnAddTarefa).toHaveBeenCalledWith("Estudar testes no Next.js");
        expect(mockOnAddTarefa).toHaveBeenCalledTimes(1);

        // Verifica se o input foi limpo
        expect(input.value).toBe("");
    });

    it("não deve chamar a função onAddTarefa se o input estiver vazio", () => {
        const mockOnAddTarefa = jest.fn();
        render(<NovaTarefa onAddTarefa={mockOnAddTarefa} />);

        const button = screen.getByRole("button", { name: /adicionar/i });

        // Tenta submeter sem digitar nada
        fireEvent.click(button);

        // Verifica que a função não foi chamada
        expect(mockOnAddTarefa).not.toHaveBeenCalled();
    });
});