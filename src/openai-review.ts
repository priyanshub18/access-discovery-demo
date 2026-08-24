export async function review(input: string): Promise<string | null> {
  void input;
  const { startTime, endTime, logNames, resourceTypes, principalEmail, instanceId, limit } = JSON.parse(process.env.DECAWORK_RUN_INPUT as string);
  const gatewayUrl = process.env.DECAWORK_GATEWAY_URL;
  const runToken = process.env.DECAWORK_RUN_TOKEN;
  const runId = process.env.DECAWORK_RUN_ID;

  const response = await fetch(`${gatewayUrl}/api/gateway/v1/gcp/logging/entries`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${runToken}`,
      "content-type": "application/json",
      "x-decawork-capability": "gcp.logging.entries.list",
      "x-decawork-run-id": runId,
    },
    body: JSON.stringify({
      startTime,
      endTime,
      logNames,
      resourceTypes,
      principalEmail,
      instanceId,
      limit,
    }),
  });
  return response.text();
}
