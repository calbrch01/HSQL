import compile from 'string-template/compile';
// type K<T> =

/**
 * Take an object of template literals and compile it down
 * @param x
 * @returns
 */
export function templateCompiler<T extends { [k in keyof T]: string }>(x: T) {
    const res: Partial<{ [x in keyof T]: (...y: any[]) => string }> = {};
    const keys = Object.keys(x) as (keyof T)[];

    for (const key of keys) {
        res[key] = compile(x[key]);
    }
    // we can say that it is done, as soon as we are done with the array
    return res as { [x in keyof T]: (...y: any[]) => string };
}

const y = templateCompiler({ hello: 'hello' });
