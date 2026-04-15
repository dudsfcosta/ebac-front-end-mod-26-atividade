// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    // Indica o diretório do seu aplicativo Next.js para carregar o next.config.js e arquivos .env
    dir: './',
});

// Adicione configurações customizadas do Jest aqui
const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    // Aponta para o arquivo de setup que acabamos de criar
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// Exporta a configuração
export default createJestConfig(config);