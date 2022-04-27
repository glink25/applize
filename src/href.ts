const URL_KEY = "url";
export default class HrefManager {
  constructor(el: HTMLInputElement) {
    el.value = this.value ?? "";
  }
  get value() {
    return decodeURIComponent(
      new URLSearchParams(location.search).get(URL_KEY) ?? ""
    );
  }
  set value(v: string | null) {
    const oldValue = this.value;
    if (v === null || oldValue === v) return;
    const up = new URLSearchParams(location.search);
    up.set(URL_KEY, encodeURIComponent(v));
    location.search = `?${up.toString()}`;
  }
}
