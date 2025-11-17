export function FindBeats(code) {
  // Match lines like: bassline:, main_arp:, drums:, etc.
  // The regex captures the name before the colon.
  // It also captures the match's index.
  const regex = /^\s*([_]*[a-zA-Z_][a-zA-Z0-9_]*)\s*:/gm;
  const matches = [...code.matchAll(regex)];

  return matches.map((match) => {
    const fullMatchStart = match.index;
    const rawName = match[1];
    const nameOffset = match[0].indexOf(rawName);
    const nameStartIndex = fullMatchStart + nameOffset;

    // Strip leading underscores for clean name
    const cleanName = rawName.replace(/^_+/, "");

    return {
      name: cleanName,
      index: nameStartIndex,
    };
  });
}

export function HushBeats(code, targetIndex) {
  const regex = /^\s*([_]*[a-zA-Z_][a-zA-Z0-9_]*)\s*:/gm;
  const matches = [...code.matchAll(regex)];
  let codeArray = [...code];

  for (const match of matches) {
    const fullMatchStart = match.index;
    const rawName = match[1];
    const nameOffset = match[0].indexOf(rawName);
    const nameStartIndex = fullMatchStart + nameOffset;

    if (nameStartIndex === targetIndex) {
      // count how many underscores are already there
      const underscoreMatch = rawName.match(/^_+/);
      const underscoreCount = underscoreMatch ? underscoreMatch[0].length : 0;

      if (underscoreCount > 0) {
        // Remove one underscore
        codeArray.splice(nameStartIndex, 1);
      } else {
        // Add one underscore
        codeArray.splice(nameStartIndex, 0, "_");
      }

      break;
    }
  }

  return codeArray.join("");
}

export function volumeController(strudelCode, blockName, gainValue = 0.75) {
  // Regex to find the block by its name
  const blockRegex = new RegExp(
    `${blockName}:\\s*([\\s\\S]*?)(?=\\n\\w+:|$)`,
    "g"
  );

  return strudelCode.replace(blockRegex, (blockMatch) => {
    // finds gain(...) in the block
    const gainRegex = /\.gain\(([^)]+)\)/;

    if (gainRegex.test(blockMatch)) {
      // Replace existing gain value
      return blockMatch.replace(gainRegex, `.gain(${gainValue})`);
    } else {
      // Inject gain after the last method call (before the final newline)
      const lines = blockMatch.trimEnd().split("\n");
      const lastLine = lines.pop();
      const updatedLastLine = lastLine.trimEnd() + `.gain(${gainValue})`;
      return lines.concat(updatedLastLine).join("\n");
    }
  });
}
