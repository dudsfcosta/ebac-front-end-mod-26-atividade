import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';

describe('useContadorDeTarefas', () => {
    it('deve retornar 0 quando a lista de tarefas estiver vazia', () => {
        const { result } = renderHook(() => useContadorDeTarefas([]));

        // Verificando o valor retornado pelo hook
        expect(result.current).toBe(0);
    });

    it('deve retornar a quantidade correta de tarefas', () => {
        const mockTarefas = [{ id: 1, texto: 'Estudar Jest' }, { id: 2, texto: 'Fazer atividade' }];
        const { result } = renderHook(() => useContadorDeTarefas(mockTarefas));

        expect(result.current).toBe(2);
    });
});