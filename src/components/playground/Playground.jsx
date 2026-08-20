"use client";

import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import { executeCode } from "@/lib/playground/codeExecutor";

export default function Playground({ initialCode }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");

  useEffect(() => {
    setCode(initialCode);
    setOutput("");
  }, [initialCode]);

  function handleRun() {
    setOutput("");

    const result = executeCode(code, (log) => {
      setOutput((previousOutput) => {
        return previousOutput
          ? `${previousOutput}\n${log.message}`
          : log.message;
      });
    });

    if (!result.success) {
      console.error(result.error);
    }
  }

  function handleReset() {
    setCode(initialCode);
    setOutput("");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Code</h2>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border px-4 py-2 text-sm"
            >
              Reset
            </button>

            <button
              type="button"
              onClick={handleRun}
              className="rounded-lg bg-black px-4 py-2 text-sm text-white"
            >
              Run
            </button>
          </div>
        </div>

        <CodeEditor value={code} onChange={setCode} />
      </section>

      <section>
        <h2 className="mb-3 text-lg py-1.5 font-semibold">Console</h2>

        <pre className="h-full max-h-[400px] overflow-auto border p-5 font-mono text-sm">
          {output || "Console output will appear here."}
        </pre>
      </section>
    </div>
  );
}
