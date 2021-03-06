import { Dictionary } from './types';

// eslint-disable-next-line
export const toDictionary = <T extends any>(
    array: T[],
    key: string,
): Dictionary<T> =>
    array.reduce((prev, curr) => {
        return { ...prev, [curr[key]]: curr };
    }, {});

// eslint-disable-next-line
export const fromDictionary = <T extends any>(
    dictionary: Dictionary<T>,
): T[] => {
    return Object.values(dictionary);
};
