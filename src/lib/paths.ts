/**
 * Prefix a root-relative path ("/images/x.jpg") with the site's base path, so
 * links work both at a domain root and under GitHub Pages
 * (https://angelomig.github.io/brochure-shop/). Full URLs pass through untouched.
 */
export function withBase(path: string): string {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith(`${base}/`) && base ? path : `${base}${path}`;
}
