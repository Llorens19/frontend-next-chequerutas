import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        ignores: [
            'node_modules/**',
            'build/**',
            'dist/**',
            '.next/**',
        ],
        rules: {
            'semi': ['error', 'always'], // Errores si no hay punto y coma
            'quotes': ['warn', 'single'], // Advertencias si no se usan comillas simples
            'no-unused-vars': 'warn', // Advertencias por variables no utilizadas
            'no-console': 'warn', // Advertencias por uso de console.log
            '@typescript-eslint/no-unused-vars': 'warn', // Advertencias por variables TS no utilizadas
            '@typescript-eslint/no-explicit-any': 'warn', // Advertencias por uso de any
        },
    },
];

export default eslintConfig;
