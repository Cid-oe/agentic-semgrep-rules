import { exec } from "node:child_process";
import OpenAI from "openai";

const client = new OpenAI();

export async function runFromModel(task) {
  const completion = await client.chat.completions.create({
    model: "model-name",
    messages: [{ role: "user", content: task }],
  });
  const cmd = completion.choices[0].message.content ?? "";
  // ruleid: llm-output-to-child-process
  exec(cmd);
}

export function okStatic() {
  // ok: llm-output-to-child-process
  exec("git status");
}
