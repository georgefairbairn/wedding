import gAndI from '../assets/g_and_i.jpeg';
import hideThePain from '../assets/hide_the_pain.jpeg';
import type { ImageMetadata } from 'astro';

export const IMAGES: Record<string, ImageMetadata> = {
  glastonbury: gAndI,
  harold: hideThePain
} as const;
