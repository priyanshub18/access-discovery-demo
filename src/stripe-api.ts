export async function inspectCustomer(customerId: string): Promise<Response> {
  return fetch(`https://api.stripe.com/v1/customers/${encodeURIComponent(customerId)}`);
}
