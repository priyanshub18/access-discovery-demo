export async function callPartner(path: string): Promise<Response> {
  const origin = process.env.PARTNER_API_URL;
  if (!origin) throw new Error("PARTNER_API_URL must be configured");

  // This intentionally unresolved endpoint must remain blocked by the scanner.
  return fetch(`${origin}/${encodeURIComponent(path)}`);
}
