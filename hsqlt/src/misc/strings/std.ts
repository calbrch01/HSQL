import { FileType } from '../file/FileType';
/**
 * Default export for standard library
 */
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
    [
        'ML_Core.dhsql',
        {
            content: `
            declare linearregression as train '{0}{1}OLS({2},{3}).getModel' REAL RETURN TABLE(int wi,int id,int number,real value ) WHERE '{0}{1}OLS().predict({2},{3})' RETURN TABLE(int wi,int id,int number,real value ) by LinearRegression;
            declare cf as train '{0}{1}Classificationforest({4}).getModel({2},{3})' int WHERE (numtrees as int,featurespernode as int, maxdepth as int) RETURN ANYTABLE WHERE 'p' RETURN TABLE(int wi,int id,int number,real value ) by learningtrees;

            `,
            type: FileType.DHSQL,
        },
    ],
] as [string, { content: string; type: FileType.DHSQL }][];
