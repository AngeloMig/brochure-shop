/** True for a non-empty absolute https URL. Anything else renders an "unavailable" state. */
export function isUsableUrl(url: string | undefined | null): url is string {
  if (!url) return false;
  try {
    return new URL(url.trim()).protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Extracts the numeric id from a full TikTok video URL
 * (https://www.tiktok.com/@handle/video/1234…). Returns null for short links
 * and anything else that can't be embedded.
 */
export function tiktokVideoId(url: string | undefined | null): string | null {
  if (!isUsableUrl(url)) return null;
  const { hostname, pathname } = new URL(url);
  if (!/(^|\.)tiktok\.com$/.test(hostname)) return null;
  const match = pathname.match(/\/video\/(\d{8,25})(?:\/|$)/);
  return match ? match[1] : null;
}

/** Official TikTok embed player. Loaded only after the visitor taps play. */
export function tiktokEmbedSrc(id: string): string {
  const params = new URLSearchParams({
    autoplay: '1', // only ever requested after a tap
    music_info: '0',
    description: '0',
    rel: '0',
  });
  return `https://www.tiktok.com/player/v1/${id}?${params}`;
}

/** Attributes for every outbound affiliate / TikTok link. */
export const outbound = { target: '_blank', rel: 'noopener sponsored' } as const;
/** Non-affiliate outbound links (videos, profile). */
export const external = { target: '_blank', rel: 'noopener' } as const;

export interface ContactRow {
  label: string;
  value: string;
  /** null while the value is still a placeholder */
  href: string | null;
  newTab: boolean;
}

/** WhatsApp, Viber and email rows; placeholders render as text until real details are filled in. */
export function contactRows(contact: { whatsapp: string; viber: string; email: string }): ContactRow[] {
  const digits = (n: string) => n.replace(/[^\d]/g, '');
  const realNumber = (n: string) => Boolean(n) && !/x/i.test(n) && digits(n).length >= 8;
  const realEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && !/yourdomain|example\./i.test(e);
  return [
    {
      label: 'WhatsApp',
      value: contact.whatsapp,
      href: realNumber(contact.whatsapp) ? `https://wa.me/${digits(contact.whatsapp)}` : null,
      newTab: true,
    },
    {
      label: 'Viber',
      value: contact.viber,
      // Viber only offers an app link for chats; it opens Viber if it's installed.
      href: realNumber(contact.viber) ? `viber://chat?number=%2B${digits(contact.viber)}` : null,
      newTab: false,
    },
    {
      label: 'Email',
      value: contact.email,
      href: realEmail(contact.email) ? `mailto:${contact.email}` : null,
      newTab: false,
    },
  ];
}
