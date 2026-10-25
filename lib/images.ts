import type { StaticImageData } from 'next/image'

/**
 * A drawn SVG cover. These are served as the static files they are, never
 * through the image optimizer, which is why next.config.ts can leave SVG
 * support switched off.
 */
export const isDrawing = (image: StaticImageData) => image.src.endsWith('.svg')
