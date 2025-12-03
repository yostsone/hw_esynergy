/**
 * Converts an ISO date string to a human-readable format (DD.MM.YYYY).
 * @param iso
 */
export function isoToReadableDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}.${month}.${year}`;
}

export function parseStringToPositiveInt(value: string): number | null {
  const s = value.trim();
  // Accept optional leading '+' and digits only (no decimals, no signs other than '+')
  if (!/^[+]?(\d+)$/.test(s)) return null;

  const number = Number(s);
  if (!Number.isFinite(number) || !Number.isInteger(number) || number <= 0) return null;

  return number;
}