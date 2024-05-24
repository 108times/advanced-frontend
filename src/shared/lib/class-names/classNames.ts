type Mods = Record<string, boolean | string>;

type Value = false | undefined | 0 | null | string;

type ClassName = Mods | Value;

export function classNames(...values: ClassName[]): string {
  const result: string[] = [];

  values.forEach((item) => {
    if (typeof item === "object") {
      result.push(...parseMods(item));

      return;
    }

    if (item) result.push(item);
  });

  return result.join(" ");
}

const parseMods = (mods: Mods) => Object.keys(mods).filter((key) => mods[key]);
