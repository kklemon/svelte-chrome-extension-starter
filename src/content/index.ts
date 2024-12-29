import { mount } from "svelte";
import Content from "../components/Content.svelte";
import style from "../style.css?inline";

const createShadowElement = () => {
  const host = document.body.appendChild(document.createElement("div"));
  host.style.position = "fixed";
  host.style.left = "0";
  host.style.top = "0";
  host.style.zIndex = "9999";

  const shadow = host.attachShadow({ mode: "open" });
  shadow.innerHTML = `<style>${style}</style>`;
  return shadow;
};

mount(Content, { target: createShadowElement(), props: {} });
