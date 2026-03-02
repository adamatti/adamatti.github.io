import { sendGTMEvent } from '@next/third-parties/google';
import { hotjar } from 'react-hotjar';
import {
  ffUseAmplitude,
  ffUseGoogleAnalytics,
  ffUseHotjar,
  isLocal,
} from '../feature-flags';
import amplitude from './amplitude';

// push events into GTM dataLayer via the helper from @next/third-parties
const emitGoogleAnalyticsEvent = (
  eventName: string,
  eventData?: Record<string, any>
): Promise<void> => {
  if (
    ffUseGoogleAnalytics &&
    typeof window !== 'undefined' &&
    typeof sendGTMEvent === 'function'
    //(window as any).gtag
  ) {
    // await (window as any).gtag('event', eventName, eventData);
    sendGTMEvent({ event: eventName, ...eventData });
  }
  return Promise.resolve();
};

const emitHotjarEvent = (
  eventName: string,
  _eventData?: Record<string, any>
): Promise<void> => {
  if (ffUseHotjar && typeof window !== 'undefined') {
    hotjar.event(eventName);
  }
  return Promise.resolve();
};

const emitAmplitudeEvent = (
  eventName: string,
  eventData?: Record<string, any>
): Promise<void> => {
  // Amplitude autocapture should handle most events, but this can be used for custom ones if needed
  if (ffUseAmplitude) {
    amplitude.track(eventName, eventData);
  }
  return Promise.resolve();
};

const emitLocalEvent = (
  eventName: string,
  eventData?: Record<string, any>
): Promise<void> => {
  if (isLocal) {
    console.log(`Analytics event emitted: ${eventName}`, eventData);
  }
  return Promise.resolve();
};

export const emitAnalyticsEvent = async (
  eventName: string,
  eventData?: Record<string, any>
): Promise<void> => {
  // fire all emitters concurrently and log any failures
  const tasks = [
    emitGoogleAnalyticsEvent(eventName, eventData),
    emitHotjarEvent(eventName, eventData),
    emitAmplitudeEvent(eventName, eventData),
    emitLocalEvent(eventName, eventData),
  ];

  const results = await Promise.allSettled(tasks);

  for (const r of results) {
    if (r.status === 'rejected') {
      console.error('Analytics emitter failed', r.reason);
    }
  }
};
