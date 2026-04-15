"use client";

import { useState, FormEvent } from "react";
import styles from "./NovaTarefa.module.css";

interface NovaTarefaProps {
    onAddTarefa: (texto: string) => void;
}

export default function NovaTarefa({ onAddTarefa }: NovaTarefaProps) {
    const [tarefa, setTarefa] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Validação simples: não adicionar tarefa vazia
        if (!tarefa.trim()) return;

        onAddTarefa(tarefa);
        setTarefa(""); // Limpa o input após a submissão
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                className={styles.formInput}
                type="text"
                placeholder="Digite uma nova tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button className={styles.formButton} type="submit">Adicionar</button>
        </form>
    );
}