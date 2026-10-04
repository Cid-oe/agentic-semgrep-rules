const { exec } = require("child_process");
const OpenAI = require("openai");

const client = new OpenAI();

async function runFromModel(task) {
  const completion = await client.chat.completions.create({
    model: "model-name",
    messages: [{ role: "user", content: task }],
  });
  const cmd = completion.choices[0].message.content ?? "";
  // ruleid: llm-output-to-child-process
  exec(cmd);
}

function okStatic() {
  // ok: llm-output-to-child-process
  exec("git status");
}

module.exports = { runFromModel, okStatic };
