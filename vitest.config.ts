import { defineProject } from 'vitest/config';

export default defineProject({
    test: {
        globals: true,
        environment: 'node',
        setupFiles: ['./vitest.setup.ts'],
    },
});