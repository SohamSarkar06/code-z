import { useEffect, useRef, useState } from "react";

export default function Editor({ setOutput, setError }) {
  const [code, setCode] = useState(`# code here my G 

vibe a = 5
vibe b = 10

lowkeyIf a < b:
    yap("a smaller fr")
whateverMan:
    yap("nah a big")`);

  const textareaRef = useRef(null);
  const gutterRef = useRef(null);

  // 🔥 Update line numbers
  const updateLineNumbers = () => {
    const lines = code.split("\n").length;
    gutterRef.current.textContent = Array.from(
      { length: lines },
      (_, i) => i + 1
    ).join("\n");
  };

  useEffect(updateLineNumbers, [code]);

  // 🔥 PERFECT scroll sync
  const syncScroll = () => {
    gutterRef.current.scrollTop = textareaRef.current.scrollTop;
  };

  return (
    <div className="editor">
      <div className="editor-wrapper">
        <div className="gutter" ref={gutterRef}></div>

        <textarea
          ref={textareaRef}
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onScroll={syncScroll}
          spellCheck="false"
        />
      </div>

      <button
        onClick={async () => {
          setOutput("");
          setError("");

          try {
            const res = await fetch("https://code-z-backend-production.up.railway.app", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ code }),
            });

            const data = await res.json();
            if (data.output) setOutput(data.output);
            if (data.error) {
              setError(
                `❌ Line ${data.error.line}\n→ ${data.error.gez_code}\n\n${data.error.message}`
              );
            }
          } catch {
            setError("❌ Backend not reachable");
          }
        }}
      >
        🚀 shoot bruv!!
      </button>
    </div>
  );
}
