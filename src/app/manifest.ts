import { defaultMessages } from '@/i18n/messages';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultMessages.Metadata.name,
    short_name: 'Gurei Wiki',
    description: defaultMessages.Metadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#090a0c',
    theme_color: '#ff6b5e',
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
