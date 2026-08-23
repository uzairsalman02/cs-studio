"use client";

import React, { useState, useEffect } from "react";
import { Play, Terminal, Code2, CheckCircle, RefreshCw, Loader2, Sparkles } from "lucide-react";

export interface PythonPlaygroundProps {
  initialCode?: string;
  title?: string;
}

const DEFAULT_PYTHON_CODE = `# CS Studio • Interactive Python Lab
# Simulating SDLC 6-Phase Automation Script

def sdlc_workflow(project_name):
    phases = [
        "1. Planning & Feasibility",
        "2. Requirement Analysis (SRS)",
        "3. System Design (DDS)",
        "4. Implementation (Coding)",
        "5. Testing & Quality Assurance",
        "6. Deployment & Maintenance"
    ]
    
    print(f"=== Starting SDLC Engine for '{project_name}' ===")
    for phase in phases:
        print(f"[EXECUTING] {phase} ... Completed ✓")
        
    return f"SUCCESS: '{project_name}' is Live on Server!"

# Execute Workflow
result = sdlc_workflow("Class 11 CS Portal")
print(result)
`;

export function PythonPlayground({
  initialCode = DEFAULT_PYTHON_CODE,
  title = "Python WASM Code Execution Lab",
}: PythonPlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [pyodideInstance, setPyodideInstance] = useState<any>(null);

  // Initialize Pyodide WASM runtime via script CDN load
  useEffect(() => {
    let isMounted = true;

    async function loadPyodideRuntime() {
      try {
        if ((window as any).loadPyodide) {
          if (!pyodideInstance) {
            const py = await (window as any).loadPyodide();
            if (isMounted) {
              setPyodideInstance(py);
              setPyodideReady(true);
            }
          }
          return;
        }

        // Dynamically load Pyodide script tag
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
        script.async = true;
        script.onload = async () => {
          if ((window as any).loadPyodide) {
            const py = await (window as any).loadPyodide();
            if (isMounted) {
              setPyodideInstance(py);
              setPyodideReady(true);
            }
          }
        };
        document.body.appendChild(script);
      } catch (err) {
        console.error("Pyodide load error:", err);
      }
    }

    loadPyodideRuntime();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput("Executing Python code in Pyodide WASM runtime...\n");

    try {
      if (pyodideInstance) {
        // Redirect stdout
        pyodideInstance.runPython(`
import sys
import io
sys.stdout = io.StringIO()
`);
        await pyodideInstance.runPythonAsync(code);
        const stdout = pyodideInstance.runPython("sys.stdout.getvalue()");
        setOutput(stdout || "Code executed successfully with zero stdout output.");
      } else {
        // Fallback local execution simulation if network/CDN is offline
        setTimeout(() => {
          setOutput(
            `=== Simulated Output ===\n=== Starting SDLC Engine for 'Class 11 CS Portal' ===\n[EXECUTING] 1. Planning & Feasibility ... Completed ✓\n[EXECUTING] 2. Requirement Analysis (SRS) ... Completed ✓\n[EXECUTING] 3. System Design (DDS) ... Completed ✓\n[EXECUTING] 4. Implementation (Coding) ... Completed ✓\n[EXECUTING] 5. Testing & Quality Assurance ... Completed ✓\n[EXECUTING] 6. Deployment & Maintenance ... Completed ✓\nSUCCESS: 'Class 11 CS Portal' is Live on Server!`
          );
        }, 500);
      }
    } catch (err: any) {
      setOutput(`Python Syntax/Runtime Error:\n${err.message || String(err)}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-surface border border-border shadow-xl space-y-4 font-sans">
      {/* Lab Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-tech" />
          <h3 className="text-base font-bold text-foreground">{title}</h3>
        </div>

        <div className="flex items-center gap-2">
          {pyodideReady ? (
            <span className="px-2.5 py-1 rounded-full bg-tech/15 text-tech text-xs font-mono font-semibold border border-tech/30 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Pyodide WASM Active
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full bg-analogy/15 text-analogy text-xs font-mono font-semibold border border-analogy/30 flex items-center gap-1.5 animate-pulse">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> Loading WASM Runtime...
            </span>
          )}
        </div>
      </div>

      {/* Editor & Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Editor Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-muted">
            <span>Python Source Code</span>
            <button
              onClick={() => setCode(DEFAULT_PYTHON_CODE)}
              className="hover:text-foreground flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset Code
            </button>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 rounded-xl bg-[#090D16] border border-border font-mono text-xs text-foreground focus:outline-none focus:border-primary transition-all resize-none leading-relaxed"
            spellCheck={false}
          />
        </div>

        {/* Console Stdout Panel */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-muted">
            <span className="flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-primary" /> Standard Output (stdout)
            </span>
            <span>Console</span>
          </div>

          <div className="w-full h-64 p-4 rounded-xl bg-canvas border border-border font-mono text-xs text-tech overflow-y-auto whitespace-pre-wrap leading-relaxed">
            {isRunning ? (
              <div className="flex items-center gap-2 text-muted">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span>Running Python script...</span>
              </div>
            ) : output ? (
              output
            ) : (
              <span className="text-muted/60">
                Click &ldquo;Run Code&rdquo; to execute the script in Pyodide WebAssembly engine.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border/60">
        <span className="text-xs font-mono text-muted">
          In-Browser Python 3.11 Runtime • Zero Server Overhead
        </span>

        <button
          onClick={handleRunCode}
          disabled={isRunning}
          className="px-5 py-2.5 rounded-xl bg-tech text-white text-xs font-bold hover:bg-tech/90 transition-all flex items-center gap-2 shadow-md active:scale-95 shrink-0"
        >
          {isRunning ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Play className="w-4 h-4 fill-white" />
          )}
          <span>{isRunning ? "Running..." : "Run Code (WASM)"}</span>
        </button>
      </div>
    </div>
  );
}

export default PythonPlayground;
