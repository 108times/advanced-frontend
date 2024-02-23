type ClassName = string | false | null | undefined | Record<string, boolean>;

export const className = (...classNames: ClassName[]) =>
  classNames
    .reduce<string[]>((result, className) => {
      if (!className) return result;

      if (typeof className === "string") {
        result.push(className);
      } else {
        Object.entries(className).forEach(([value, shouldApply]) => {
          if (shouldApply) result.push(value);
        });
      }

      return result;
    }, [])
    .join(" ");
