/* eslint-disable no-continue */
export type Mods = Record<string, boolean | undefined>;

export type Additional = Array<string | undefined | false>;

export type CnArgType = string | Mods | Additional | undefined;
export type CnArgsType = CnArgType[];
/**
 * Concatenates and returns the provided classNames based on the given arguments.
 *
 * @param {CnArgsType} args - The arguments representing classNames to be concatenated.
 * @return {string} The concatenated classNames.
 */
export const cn = (...args: CnArgsType): string => {
  const classNames = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === 'string') {
      classNames.push(arg);
      continue;
    }

    if (Array.isArray(arg)) {
      arg.forEach((el) => Boolean(el) && classNames.push(el));
      continue;
    }

    if (typeof arg === 'object') {
      Object.entries(arg).forEach(
        ([key, value]) => Boolean(value) && classNames.push(key),
      );
    }
  }

  return classNames.join(' ');

  // arg
  //   // eslint-disable-next-line
  //   .map((el) => {
  //     if (typeof el === 'string') {
  //       return el;
  //     }

  //     if (Array.isArray(el)) {
  //       return el.filter(Boolean).join(' ');
  //     }

  //     if (typeof el === 'object' && el !== null) {
  //       return Object.entries(el)
  //         .map(([key, value]) => Boolean(value) && key)
  //         .filter(Boolean)
  //         .join(' ');
  //     }
  //   })
  //   .join(' ')
  //   .trim();
};
