import { defaultMessages } from '@/i18n/messages';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultMessages.Metadata.name,
    short_name: 'Kingdom Chronicle Wiki',
    description: defaultMessages.Metadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#120f0c',
    theme_color: '#d7a742',
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
