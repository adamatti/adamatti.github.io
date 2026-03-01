import { defineProject } from 'vitest/config';

import path from 'path';

export default defineProject({
    test: {
        globals: true,
        environment: 'node',
        setupFiles: ['./vitest.setup.ts'],
        alias: {
            // mirror tsconfig paths for tests
            '~': path.resolve(__dirname, 'src'),
        },
    },
});