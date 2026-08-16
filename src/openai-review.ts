import OpenAI from "openai";

export async function review(input: string): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const client = new OpenAI({ apiKey });
  const response = await client.responses.create({
    model: "gpt-5.6-sol",
    input,
  });
  return response.output_text;
}
