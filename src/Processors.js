let globalEditor = null;
export function setGlobalEditor(newGlobalEditor) { globalEditor = newGlobalEditor; }
export function getGlobalEditor() { return globalEditor; }

export function ProcAndPlay() {
  if (getGlobalEditor() != null && getGlobalEditor().repl.state.started == true) {
    console.log(getGlobalEditor());
    Proc();
    getGlobalEditor().evaluate();
  }
}

export function Proc() {
  let proc_text = document.getElementById("proc").value;
  getGlobalEditor().setCode(proc_text);
}

