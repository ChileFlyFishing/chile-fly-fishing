const STORAGE_KEY = "cff_cookie_consent";
const EVENT_NAME = "cff-cookie-consent-change";

export type CookieConsentValue = "accepted" | "declined";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export function setCookieConsent(value: CookieConsentValue) {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent<CookieConsentValue>(EVENT_NAME, { detail: value }));
}

export function onCookieConsentChange(handler: (value: CookieConsentValue) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<CookieConsentValue>).detail);
  window.addEventListener(EVENT_NAME, listener);
  return () => window.removeEventListener(EVENT_NAME, listener);
}
