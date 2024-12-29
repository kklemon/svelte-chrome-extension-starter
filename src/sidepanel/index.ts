import { mount } from "svelte";
import SidePanel from "../components/SidePanel.svelte";
import "../style.css";

// Side panel
// https://developer.chrome.com/docs/extensions/reference/sidePanel/

function render() {
  mount(SidePanel, { target: document.body });
}

document.addEventListener("DOMContentLoaded", render);
