export function FindBeats(code) {
  // Match lines like: bassline:, main_arp:, drums:, etc.
  // The regex captures the name before the colon.
  // It also captures the match's index.
  const regex = /^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:/gm;
  const matches = [...code.matchAll(regex)];
  const namesWithIndex = matches.map(match => ({
    name: match[1],
    index: match.index
  }));

  return namesWithIndex;
}