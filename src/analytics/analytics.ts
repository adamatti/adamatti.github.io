import {
  ffUseAmplitude,
  ffUseGoogleAnalytics,
  isLocal,
} from '../feature-flags';
import amplitude from './amplitude';

const emitGoogleAnalyticsEvent = async (
  eventName: string,
  eventData?: Record<string, any>
) => {
  if (
    ffUseGoogleAnalytics &&
    typeof window !== 'undefined' &&
    (window as any).gtag
  ) {
    await (window as any).gtag('event', eventName, eventData);
  }
};

const emitHotjarEvent = async (
  eventName: string,
  _eventData?: Record<string, any>
) => {
  if (!isLocal && typeof window !== 'undefined' && (window as any).hj) {
    await (window as any).hj('event', eventName);
  }
};

const emitAmplitudeEvent = async (
  eventName: string,
  eventData?: Record<string, any>
) => {
  // Amplitude autocapture should handle most events, but this can be used for custom ones if needed
  if (ffUseAmplitude) {
    await amplitude.track(eventName, eventData);
  }
};

const emitLocalEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (isLocal) {
    console.log(`Analytics event emitted: ${eventName}`, eventData);
  }
  return Promise.resolve();
};

export const emitAnalyticsEvent = async (
  eventName: string,
  eventData?: Record<string, any>
) => {
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
