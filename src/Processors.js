let globalEditor = null;

export function ProcAndPlay() {
  if (globalEditor != null && globalEditor.repl.state.started == true) {
    console.log(globalEditor);
    Proc();
    globalEditor.evaluate();
  }
}

export function Proc() {
  let proc_text = document.getElementById("proc").value;
  globalEditor.setCode(proc_text);
}

export { globalEditor };