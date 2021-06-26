import { FileType } from '../file/FileType';

export default [
    [
        'Visualizer.dhsql',
        {
            content: `
            declare Bubble as plot on 'TwoD.Bubble(\\'{0}\\',,\\'{0}\\')';
            declare pie as plot on 'TwoD.pie(\\'{0}\\',,\\'{0}\\')';
            declare wordcloud as plot on 'TwoD.wordcloud(\\'{0}\\',,\\'{0}\\')';
            declare Area as plot on 'MultiD.Area(\\'{0}\\',,\\'{0}\\')';
            declare bar as plot on 'MultiD.bar(\\'{0}\\',,\\'{0}\\')';
            declare column as plot on 'MultiD.column(\\'{0}\\',,\\'{0}\\')';
            declare Line as plot on 'MultiD.Line(\\'{0}\\',,\\'{0}\\')';
            declare Scatter as plot on 'MultiD.Scatter(\\'{0}\\',,\\'{0}\\')';
            declare Step as plot on 'MultiD.Step(\\'{0}\\',,\\'{0}\\')';


            `,

            type: FileType.DHSQL,
        },
    ],
] as const;
