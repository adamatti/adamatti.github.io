'use client';

import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
import { ffUseAmplitude } from '~/feature-flags';

function initAmplitude() {
  if (!ffUseAmplitude) {
    return;
  }
  if (typeof window !== 'undefined') {
    amplitude.add(
      sessionReplayPlugin({
        sampleRate: 1, // Record 100% of sessions for now, can adjust later if needed
      })
    );
    amplitude.init('aa5c215800ac8ce553b4d4af6af3e2a7', { autocapture: true });
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;
