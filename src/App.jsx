import { useState } from "react";
import Header from "./components/Header";
import Examples from "./components/Examples";
import Editor from "./components/Editor";
import Terminal from "./components/Terminal";

export default function App() {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [showExamples, setShowExamples] = useState(true);

  return (
    <>
      <Header />

      <div className="container">
        <Examples
          show={showExamples}
          toggle={() => setShowExamples(!showExamples)}
        />

        <div className={`workspace ${showExamples ? "" : "expanded"}`}>
          <Editor setOutput={setOutput} setError={setError} />
          <Terminal output={output} error={error} />
        </div>
      </div>
    </>
  );
}
