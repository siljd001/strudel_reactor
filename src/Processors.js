// Global editor variable
// Provides functions to set and get the global editor instance for use in processing and playing music input.
let globalEditor = null;
export function setGlobalEditor(newGlobalEditor) {
  globalEditor = newGlobalEditor;
}
export function getGlobalEditor() {
  return globalEditor;
}

// Function to process and play the given music input using the global editor instance.
export function ProcAndPlay(musicInput) {
  console.log(getGlobalEditor());
  if (getGlobalEditor() != null) {
    console.log(getGlobalEditor());
    Proc(musicInput);
    getGlobalEditor().evaluate();
  }
}

export function Proc(musicInput) {
  getGlobalEditor().setCode(musicInput);
}
