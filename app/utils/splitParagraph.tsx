export function splitIntoLines(paragraph: string, maxLineLength: number) {
  const words = paragraph.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach((word: string) => {
    if ((currentLine + word).length <= maxLineLength) {
      currentLine += `${word} `;
    } else {
      lines.push(currentLine.trim());
      currentLine = `${word} `;
    }
  });

  // Add the last line if it has any content left
  if (currentLine.trim().length > 0) {
    lines.push(currentLine.trim());
  }

  return lines;
}
