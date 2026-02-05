declare module "simplelightbox" {
  export interface SimpleLightboxOptions {
    captions?: boolean;
    captionsData?: "alt" | "title" | "data-title";
    captionDelay?: number;
    captionPosition?: "bottom" | "top";
    animationSpeed?: number;
    fadeSpeed?: number;
    overlayOpacity?: number;
    loop?: boolean;
  }

  class SimpleLightbox {
    constructor(selector: string, options?: SimpleLightboxOptions);

    refresh(): void;
    destroy(): void;
  }

  export = SimpleLightbox;
}