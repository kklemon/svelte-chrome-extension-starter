import { mount } from "svelte";
import Options from "../components/Options.svelte";
import "../style.css";

// Options
// https://developer.chrome.com/docs/extensions/mv3/options/

function render() {
  mount(Options, { target: document.body });
}

document.addEventListener("DOMContentLoaded", render);
