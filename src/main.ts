import showDialog from "./dialog";
import HrefManager from "./href";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

if (
  navigator.userAgent.indexOf("iPhone") != -1 ||
  navigator.userAgent.indexOf("Mac OS") != -1
) {
  if (!(window.navigator as any).standalone) {
    // console.log("此页面为PWA站点，将其安装到主屏幕来获得最佳体验");

    app.innerHTML = `
    <span class="col"><span class="name">applize url: </span><input id="url-input" /><button id="url-button">set</button></span>
    <span class="col"><span class="name">icon url: </span><input id="icon-input" /><button id="icon-button">set</button></span>
    <span class="col"><span class="name">icon bgColor: </span><input id="icon-bgcolor-input" /><button id="question-button">?</button></span>
    `;
    const urlInput = document.getElementById("url-input") as HTMLInputElement;
    const hrefManager = new HrefManager(urlInput);

    document.getElementById("url-button")!.addEventListener("click", () => {
      hrefManager.value = urlInput.value;
    });
    (document.getElementById("main-frame") as HTMLIFrameElement).src =
      urlInput.value;

    document.getElementById("icon-button")!.addEventListener("click", () => {
      const iconUrl = (
        document.getElementById("icon-input") as HTMLInputElement
      ).value;
      const dialog = showDialog(`<img class="icon-img" src=${iconUrl}></img>`);
      dialog.style.backgroundColor = (
        document.getElementById("icon-bgcolor-input") as HTMLInputElement
      ).value;
    });

    document
      .getElementById("question-button")!
      .addEventListener("click", () => {
        showDialog(`
        <div>
        <ul>
          <li>
            <p>What is this ?</p>
            <p>this is a static website to making other website behaves like PWA<p>
          </li>
          <li>
            <p>How to use ?</p>
            <p>input the url you want to add to you home screen to the "applise url" input field<p>
            <p>input the icon url you want to set to the "icon url" input field<p>
            <p>input the icon background color you want to set to the "icon bgColor" input field<p>
            <p>then click "share" button on the safari bottom bar,choose "add to home screen", then you can use it like other PWAs<p>
          </li>
          <li>
            <p>Why it doesn't work on some website ?</p>
            <p>because some website set the X-Frame-Option to forbbiden other sites to embed them, which can not be showed correctly<p>
          </li>
        <ul>
        </div>`);
      });
  }
}
