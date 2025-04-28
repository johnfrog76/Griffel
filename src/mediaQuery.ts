export const breakpoints = {
  xs: 22.5,
  s: 40,
  md: 62,
  l: 75,
  xl: 99,
};

export const mediaQueryMobileFirst = {
  xs: `@media (min-width: ${breakpoints.xs}rem)`,
  s: `@media (min-width: ${breakpoints.s}rem)`,
  md: `@media (min-width: ${breakpoints.md}rem)`,
  l: `@media (min-width: ${breakpoints.l}rem)`,
  xl: `@media (min-width: ${breakpoints.xl}rem)`,
};

const mediaQueryOrder = [
  mediaQueryMobileFirst.xs,
  mediaQueryMobileFirst.s,
  mediaQueryMobileFirst.md,
  mediaQueryMobileFirst.l,
  mediaQueryMobileFirst.xl,
];

export const compareMediaQueries = (a: string, b: string) => {
  return mediaQueryOrder.indexOf(a) - mediaQueryOrder.indexOf(b);
};

const sorted = mediaQueryOrder.sort(compareMediaQueries);
console.log("sorted: ", sorted);

/// createDOMRenderer(document, { compareMediaQueries });
