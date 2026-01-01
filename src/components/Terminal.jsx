export default function Terminal({ output, error }) {
  return (
    <div className="terminal">
      <h3>🖥 Output</h3>
      <pre>{output}</pre>

      <h3>❌ Errors</h3>
      <pre>{error}</pre>
    </div>
  );
}
