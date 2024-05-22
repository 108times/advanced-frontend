type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  additional: string[],
  mods?: Mods
): string {
  return [
    cls,
    ...additional,
    ...(mods ? Object.keys(mods).filter((key) => mods[key]) : []),
  ].join(" ");
}
