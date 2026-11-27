/**
 * Format Rupiah tanpa konversi ke floating point.
 * Backend mengirim nominal desimal sebagai string sesuai kontrak API.
 */
export function formatCurrency(amount: string | number): string {
  const raw =
    typeof amount === "number"
      ? amount.toFixed(2)
      : amount.trim().replace(/\s/g, "");

  if (!/^-?\d+(\.\d+)?$/.test(raw)) return "—";

  const negative = raw.startsWith("-");
  const [wholePart, fractionPart] = (negative ? raw.slice(1) : raw).split(".");
  const digits = wholePart.replace(/^0+(?=\d)/, "");
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const decimals = fractionPart?.slice(0, 2).padEnd(2, "0");

  return `${negative ? "-" : ""}Rp${grouped}${decimals ? `,${decimals}` : ""}`;
}
