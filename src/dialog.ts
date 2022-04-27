export default function showDialog(html: string) {
  const dialog = document.createElement("div");
  dialog.className = "dialog";
  dialog.innerHTML = html;
  document.body.appendChild(dialog);
  const close = () => {
    if (dialog.parentElement === document.body) {
      dialog.removeEventListener("click", close);
      document.body.removeChild(dialog);
    }
  };
  dialog.addEventListener("click", close);
  return dialog;
}
