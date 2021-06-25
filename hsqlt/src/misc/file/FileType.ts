/**
 * File type enum
 */
export enum FileType {
    DIR,
    OTHER,
    ECL,
    DHSQL,
    HSQL,
}

/**
 * Common File Type constants
 */
export namespace FileTypeLists {
    export const FileTypeParseable = [FileType.HSQL, FileType.DHSQL] as const;
    export const FileTypeFiles = [...FileTypeParseable, FileType.ECL] as const;
    export const FileTypeQueryableList = [...FileTypeFiles, FileType.DIR] as const;
}
