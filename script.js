function generateQR() {
  const qrText = document.getElementById("qrText").value;
  const qrContainer = document.getElementById("qrcode");
  const downloadLink = document.getElementById("downloadLink");

  // Clear previous QR
  qrContainer.innerHTML = "";
  downloadLink.style.display = "none";

  if (!qrText) {
    alert("Please enter text or a URL!");
    return;
  }

  // Generate QR code
  const qrCode = new QRCode(qrContainer, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Wait a bit for QR to render, then create download link
  setTimeout(() => {
    const qrCanvas = qrContainer.querySelector("canvas");
    if (qrCanvas) {
      const qrImage = qrCanvas.toDataURL("image/png");
      downloadLink.href = qrImage;
      downloadLink.style.display = "inline-block";
    }
  }, 500);
}
