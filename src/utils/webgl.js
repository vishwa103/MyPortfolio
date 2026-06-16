/**
 * Check if WebGL is supported by the user's browser.
 * @returns {boolean} true if WebGL is supported, false otherwise.
 */
export const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

