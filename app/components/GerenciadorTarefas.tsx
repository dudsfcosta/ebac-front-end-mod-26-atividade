"use client";

import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import styles from "./GerenciadorTarefas.module.css";

interface Tarefa {
    id: number;
    texto: string;
}

interface GerenciadorProps {
    tarefasIniciais: Tarefa[];
}

export default function GerenciadorTarefas({ tarefasIniciais }: GerenciadorProps) {
    const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
    const totalTarefas = useContadorDeTarefas(tarefas);

    const handleAddTarefa = (texto: string) => {
        const novaTarefa = {
            id: Date.now(),
            texto: texto,
        };
        setTarefas([...tarefas, novaTarefa]);
    };

    // Nova função para excluir a tarefa
    const handleExcluirTarefa = (idParaRemover: number) => {
        const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== idParaRemover);
        setTarefas(novasTarefas);
    };

    return (
        <div className={styles.paragraph}>
            <h1 className={styles.title}>Lista de Tarefas</h1>
            <p className={styles.paragraphCounter}>Total de tarefas: {totalTarefas}</p>

            <NovaTarefa onAddTarefa={handleAddTarefa} />

            <ul className={styles.list}>
                {tarefas.map((tarefa) => (
                    <li
                        className={styles.listItem}
                        key={tarefa.id}
                    >
                        <span>{tarefa.texto}</span>
                        <button
                            className={styles.listButton}
                            onClick={() => handleExcluirTarefa(tarefa.id)}
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}