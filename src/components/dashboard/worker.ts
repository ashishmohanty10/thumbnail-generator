import { removeBackground } from "@imgly/background-removal";

self.onmessage = async (event) => {
  const src = event.data as string;
  const blob = await removeBackground(src);

  self.postMessage(blob);
};
