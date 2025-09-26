export function shortenAddress(
  addr: string,
  opts: { prefix?: string; startChars?: number; endChars?: number } = {}
): string {
  const { prefix = "", startChars = 5, endChars = 7 } = opts;

  if (!addr || typeof addr !== "string") return "";

  // if address is short, just return it with prefix
  if (addr.length <= startChars + endChars) {
    return prefix + addr;
  }

  const start = addr.slice(0, startChars);
  const end = addr.slice(-endChars);
  return `${prefix}${start}...${end}`;
}


export function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    // modern async clipboard API
    return navigator.clipboard.writeText(text);
  } else {
    // fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // avoid scrolling to bottom
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    return Promise.resolve();
  }
}
