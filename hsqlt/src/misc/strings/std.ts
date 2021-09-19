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
            declare linearregression as train 
                    '{bundleLoc}{ecldot}OLS({indep},{dep}).getModel' REAL RETURN TABLE(int wi,int id,int number,real value ) // this is what train does
                    WHERE
                    '{bundleLoc}{ecldot}OLS().predict({indep},{model})' RETURN TABLE(int wi,int id,int number,real value ) by LinearRegression; // this is what predict does
                    
            declare classificationforest as train 
                    '{bundleLoc}{ecldot}Classificationforest({trainOptions}).getModel({indep},{dep})' int WHERE (numtrees as int,featurespernode as int, maxdepth as int) RETURN ANYTABLE 
                    WHERE 
                    '{bundleLoc}{ecldot}classificationforest().classify({model},{indep})' RETURN TABLE(int wi,int id,int number,real value ) by learningtrees;
            
            declare regressionforest as train '{bundleLoc}{ecldot}regressionforest({trainOptions}).getModel({indep},{dep})' 
                    real WHERE (numtrees as int,featurespernode as int, maxdepth as int) RETURN ANYTABLE
                    WHERE
                    '{bundleLoc}{ecldot}regressionforest().predict({model},{indep})' RETURN TABLE(int wi,int id,int number,real value ) by learningtrees;


            declare logisticregression as train '{bundleLoc}{ecldot}BinomialLogisticRegression({trainOptions}).GetModel({indep},{dep})' int WHERE (max_iter as int,epsilon as real, ridge as real) RETURN ANYTABLE WHERE '{bundleLoc}{ecldot}binomiallogisticregression().classify({model},{indep})' RETURN TABLE(int wi,int id,int number,integer value,real conf) by LogisticRegression;

            // gaussianglm and glm are the same
            declare glm as train '{bundleLoc}{ecldot}GLM(X:={indep},Y:={dep}{comma}{trainOptions}).GetModel' real WHERE (max_iter as int,epsilon as real, ridge as real) RETURN ANYTABLE WHERE '{bundleLoc}{ecldot}GLM().Predict({indep},{model})' RETURN TABLE(int wi,int id,int number,integer value) by GLM;
            declare gaussianglm as train '{bundleLoc}{ecldot}GLM(X:={indep},Y:={dep}{comma}{trainOptions}).GetModel' real WHERE (max_iter as int,epsilon as real, ridge as real) RETURN ANYTABLE WHERE '{bundleLoc}{ecldot}GLM().Predict({indep},{model})' RETURN TABLE(int wi,int id,int number,integer value) by GLM;
            declare poissonglm as train '{bundleLoc}{ecldot}GLM(X:={indep},Y:={dep},fam:={bundleLoc}{ecldot}Family.Poisson{comma}{trainOptions}).GetModel' real WHERE (max_iter as int,epsilon as real, ridge as real) RETURN ANYTABLE WHERE '{bundleLoc}{ecldot}GLM().Predict({indep},{model})' RETURN TABLE(int wi,int id,int number,integer value) by GLM;
            declare gammaglm as train '{bundleLoc}{ecldot}GLM(X:={indep},Y:={dep},fam:={bundleLoc}{ecldot}Family.gamma{comma}{trainOptions}).GetModel' real WHERE (max_iter as int,epsilon as real, ridge as real) RETURN ANYTABLE WHERE '{bundleLoc}{ecldot}GLM().Predict({indep},{model})' RETURN TABLE(int wi,int id,int number,integer value) by GLM;
            declare binomialglm as train '{bundleLoc}{ecldot}GLM(X:={indep},Y:={dep},fam:={bundleLoc}{ecldot}Family.binomial{comma}{trainOptions}).GetModel' real WHERE (max_iter as int,epsilon as real, ridge as real) RETURN ANYTABLE WHERE '{bundleLoc}{ecldot}GLM().Predict({indep},{model})' RETURN TABLE(int wi,int id,int number,integer value) by GLM;
            
            declare dbscan as predict '{bundleLoc}{ecldot}DBSCAN({trainOptions}).fit({indep})' WHERE (eps as real,minpts as int, ridge as real,dist as string) RETURN TABLE(int wi,int id,int number,int label) by DBScan;

            declare kmeans as train 
                    '{bundleLoc}{ecldot}KMeans({trainOptions}).Fit({indep},{dep})' WHERE (max_iter as int,t as real) RETURN ANYTABLE 
                    WHERE
                    '{bundleLoc}{ecldot}KMeans().Predict({model},{indep})' RETURN TABLE(int wi ,int  id ,int label) BY Kmeans;// this is what predict does
                    
            
            // declare <methodName> as train '<train Template>' [WHERE <options>] RETURN TABLE(...)|ANYTABLE
            // WHERE
            // '<predict Template>' return TABLE(...)|ANYTABLE
            `,
            type: FileType.DHSQL,
        },
    ],
] as [string, { content: string; type: FileType.DHSQL }][];
