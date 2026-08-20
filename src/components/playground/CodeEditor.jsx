"use client";

import Editor from "@monaco-editor/react";

export default function CodeEditor({ value, onChange }) {
  return (
    <Editor
      height="400px"
      defaultLanguage="javascript"
      theme="vs-dark"
      value={value}
      onChange={onChange}
      options={{
        minimap: {
          enabled: false,
        },
        fontSize: 14,
        automaticLayout: true,
        tabSize: 2,
      }}
    />
  );
}
