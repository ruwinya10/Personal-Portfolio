function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export function setFaviconWithBackground(
  logoSrc,
  { size = 64, padding = 10, radius = 14, background = "#ffffff" } = {}
) {
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = background;
    drawRoundedRect(ctx, 0, 0, size, size, radius);
    ctx.fill();

    const innerSize = size - padding * 2;
    const scale = Math.min(innerSize / img.width, innerSize / img.height);
    const width = img.width * scale;
    const height = img.height * scale;
    const x = (size - width) / 2;
    const y = (size - height) / 2;

    ctx.drawImage(img, x, y, width, height);

    const favicon =
      document.querySelector("link[rel='icon']") ??
      document.createElement("link");

    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = canvas.toDataURL("image/png");

    if (!favicon.parentElement) {
      document.head.appendChild(favicon);
    }
  };

  img.src = logoSrc;
}
