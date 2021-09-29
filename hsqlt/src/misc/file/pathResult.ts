import { FileType } from './FileType';

/**
 * A path result. If found, its actual path (non-case sensitive version)
 */

export type pathResult =
    | {
          type: Exclude<FileType, FileType.OTHER>;
          path: string;
          found: true;
      }
    | {
          type: FileType.OTHER;
          found: false;
      };
/**
 * A path result, where the path result is not known
 */

export type pathResultFragment =
    | {
          type: Exclude<FileType, FileType.OTHER>;
          found: true;
      }
    | {
          type: FileType.OTHER;
          found: false;
      };
/**
 * Methods and constants for helping create pathResult objeects
 */

export namespace pathResult {
    export const notFound: pathResult = {
        found: false,
        type: FileType.OTHER,
    };
    export function fileType<T extends Exclude<FileType, FileType.OTHER>>(x: T, path: string) {
        return { found: true as const, type: x, path };
    }
    export function fileTypeFragment<T extends Exclude<FileType, FileType.OTHER>>(x: T) {
        return { found: true as const, type: x };
    }
}
