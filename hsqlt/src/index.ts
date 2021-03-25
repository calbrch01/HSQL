import { ConsoleErrorListener } from 'antlr4ts';
import { HSQLTreeFactory } from './analysis/tree';
// import { FileReader } from './misc/readers';
import { BaseVisitor } from './analysis/syntax/BaseVisitor';
import { ReadingManager } from './misc/ReadingManager';
import { ErrorManager } from './misc/error/Error';

// FIXME Remove tests, add error listener
// const HSQLTree = new HSQLTreeFactory(new StringReader('p = selct * from abc;'));

(async function () {
    try {
        const readManager = new ReadingManager(ErrorManager.normal);

        const HSQLTree = new HSQLTreeFactory();
        const { tree } = HSQLTree.makeTree(await readManager.read('./input.hsql'));
        const visitor = new BaseVisitor();
        visitor.visit(tree);
    } catch (e) {
        console.log('E>', e);
    }
})();
