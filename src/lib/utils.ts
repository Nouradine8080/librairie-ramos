export function safe(v: any): string { return String(v ?? '').trim(); }
export function splitPipe(v: any): string[] {
  return safe(v).split('|').map(s => s.trim()).filter(Boolean);
}
export function formatPrice(price: string): string { return safe(price); }
