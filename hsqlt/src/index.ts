import { ConsoleErrorListener } from 'antlr4ts';
import { HSQLTreeFactory } from './analysis/tree';
import { FileReader } from './misc/readers';
import { BaseVisitor } from './analysis/syntax/BaseVisitor';

// FIXME Remove tests, add error listener
// const HSQLTree = new HSQLTreeFactory(new StringReader('p = selct * from abc;'));

const HSQLTree = new HSQLTreeFactory(new FileReader('./input.hsql'));

(async function () {
    try {
        const { tree } = await HSQLTree.getResults();
        const visitor = new BaseVisitor();
        visitor.visit(tree);
    } catch (e) {
        console.log('E>', e);
    }
})();
