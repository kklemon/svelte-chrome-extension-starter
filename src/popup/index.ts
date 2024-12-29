import { mount } from "svelte";
import Popup from "../components/Popup.svelte";
import "../style.css";

// Action popup
// https://developer.chrome.com/docs/extensions/reference/action/

function render() {
  mount(Popup, { target: document.body });
}

document.addEventListener("DOMContentLoaded", render);
