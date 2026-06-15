/**
 * Resolve a path inside the `public/` directory against Vite's base URL.
 *
 * In dev the base is `/`, in the GitHub Pages build it is `/portfolio/`, so
 * `asset('assets/logo.png')` becomes `/assets/logo.png` or
 * `/portfolio/assets/logo.png` accordingly. Always pass paths WITHOUT a
 * leading slash (or it will be stripped).
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
