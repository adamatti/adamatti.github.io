/// <reference types="vitest/globals" />
/* c8 ignore start */

// Add global mocks here
import { vi } from 'vitest';

// globally stub analytics emissions so tests don't hit external APIs
vi.mock('./src/analytics/analytics', () => ({
  emitAnalyticsEvent: vi.fn(),
}));

/* c8 ignore stop */
