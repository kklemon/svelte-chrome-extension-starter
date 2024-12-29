# svelte-chrome-extension-starter

A project template for a Svelte-based Chrome extension with out-of-the-box support for TypeScript, Tailwind CSS, and the Flowbite Component library.

## Features

- :zap: **[Svelte 5](https://svelte.dev/)**: A lightweight framework for building user interfaces.  
- :zap: **[TypeScript](https://www.typescriptlang.org/)**: Offers static typing and improved tooling.  
- :zap: **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs.  
- :zap: **[Flowbite Svelte](https://flowbite-svelte.com/)**: Svelte-native UI components from the Flowbite UI library.  
- :zap: **[Hot Reloading](https://crxjs.dev/vite-plugin/)**: Instantly preview changes in your extension without having to reload it manually.  
- :zap: **[Encapsulation](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)**: Content script elements are placed under the Shadow DOM, keeping them isolated from the host page.  

## Getting Started

### Development

1. **Clone the repository**:

   ```bash
   git clone git@github.com:kklemon/svelte-chrome-extension-starter.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```
   *(Alternatively, use the [Bun](https://bun.sh/) or [Deno](https://deno.com/) runtime.)*

3. **Start dev mode**:

   ```bash
   npm run dev
   ```

4. **Load the extension in Chrome**:
   - Open [chrome://extensions/](chrome://extensions/) in Chrome.
   - Enable **Developer Mode** in the top-right corner.
   - Click **Load unpacked** and select the `dist/` folder.
   - The unpacked extension should now be installed. Pin it by clicking the puzzle icon in the toolbar and then the pin icon next to your extension. Clicking on the extension icon will open the popup.

#### Hot Reloading

This project uses the [CRXJS Vite plugin](https://crxjs.dev/vite-plugin/) to enable Hot Module Replacement (HMR). Changes you make to the source code are automatically reflected in the installed extension when running in dev mode. However, due to Tailwind CSS’s relatively slow compilation, changes may sometimes take a few seconds (up to a minute) to fully reload.

### Production

To create a production-ready build, run:

```bash
npm run build
```

A fully optimized build of the extension will be generated in the `dist/` folder, which you can then load or package for the Chrome Web Store.
