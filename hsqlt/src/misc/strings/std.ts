import { FileType } from '../file/FileType';

export default [
    [
        'Visualizer.dhsql',
        {
            content: `declare Bubble as plot on 'TwoD.Bubble(\\'{0}\\',,\\'{0}\\')';`,
            type: FileType.DHSQL,
        },
    ],
] as const;
