export const isLocal = process.env.NEXT_PUBLIC_RELEASE_TAG === 'local';

export const ffShowWipComments = false;
export const ffShowFacebook = false;
export const ffShowResume = false;

// Integrations
export const ffUseDisqus = !isLocal;
export const ffUseCudis = false; // Cudis is still in testing, so we keep it disabled for now
export const ffUseGoogleAnalytics = !isLocal;
export const ffUseHotjar = !isLocal;
export const ffUseAmplitude = !isLocal;
