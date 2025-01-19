"use client";

const loadRemoveBackground = async () => {
  const { removeBackground } = await import("@imgly/background-removal");
  return removeBackground;
};

self.onmessage = async (event) => {
  try {
    const removeBackground = await loadRemoveBackground();
    const src = event.data as string;
    const blob = await removeBackground(src);
    self.postMessage(blob);
  } catch (error) {
    self.postMessage({ error: (error as Error).message });
  }
};
