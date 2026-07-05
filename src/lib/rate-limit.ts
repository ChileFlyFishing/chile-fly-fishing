const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

// Per-process only: resets on cold start and isn't shared across serverless
// instances/regions. Best-effort speed bump against naive scripted abuse,
// not a distributed rate limiter.
const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);

  if (hits.size > 5000) hits.clear();

  return timestamps.length > MAX_REQUESTS;
}
