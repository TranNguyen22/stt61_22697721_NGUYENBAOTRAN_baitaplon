// load global css
function loadJS(filename) {
  const link = document.createElement("script");
  link.src = filename;
  link.crossOrigin = crossOrigin && crossOrigin;
  document.body.appendChild(link);
}
function loadCSS(filename, integrity, crossOrigin) {
  const link = document.createElement("link");
  link.integrity = integrity && integrity;
  link.crossOrigin = crossOrigin && crossOrigin;
  link.rel = "stylesheet";
  link.href = filename;
  document.head.appendChild(link);
}
loadCSS("https://trannguyen22.github.io/stt61_22697721_nguyenbaotran_baitaplon/assets/Fonts/font-awesome-6-pro/css/all.min.css");
loadCSS("https://trannguyen22.github.io/stt61_22697721_nguyenbaotran_baitaplon/assets/css/main.css");
loadCSS("https://trannguyen22.github.io/stt61_22697721_nguyenbaotran_baitaplon/assets/css/tailwind.css");
loadCSS(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
  "anonymous"
);
// MAIN
const headerElm = $("header");
const footerElm = $("footer");
footerElm.load("https://trannguyen22.github.io/stt61_22697721_nguyenbaotran_baitaplon/components/footer.html");
headerElm.load("https://trannguyen22.github.io/stt61_22697721_nguyenbaotran_baitaplon/components/navbar.html");

