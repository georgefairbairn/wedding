import arches from '../assets/arches.jpg';
import cave from '../assets/cave.jpg';
import japan from '../assets/japan.jpg';
import olympics from '../assets/olympics.jpg';
import oslo from '../assets/oslo.jpeg';
import panorama from '../assets/panorama.jpg';
import plane from '../assets/plane.jpg';
import surfing from '../assets/surfing.jpg';
import hawaii from '../assets/hawaii.jpg';
import boo from '../assets/boo.jpg';
import type { ImageMetadata } from 'astro';

export const IMAGES: Record<string, ImageMetadata> = {
  arches,
  cave,
  japan,
  olympics,
  oslo,
  panorama,
  plane,
  surfing,
  hawaii,
  boo
} as const;
