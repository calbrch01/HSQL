import { assert } from 'chai';
import { FileType } from '../file/FileType';
import { FileTreeDirNode, FileTreeFileNode, FileTreeNode } from './filetree';

/**
 * ->a->b
 * ->c
 */
describe('Filetree', function () {
    it('dirlookup', async function () {
        const b: FileTreeNode = new FileTreeDirNode();
        const a = new FileTreeDirNode(new Map([['b', { realName: 'b', element: b }]]));
        const c = new FileTreeDirNode();
        const f = new FileTreeDirNode(
            new Map([
                ['a', { realName: 'a', element: a }],
                ['c', { realName: 'c', element: c }],
            ])
        );

        f.lookupAndAdd(['e', 'f'], new FileTreeDirNode());

        f.lookupAndAdd(['e', 'T.ecl'], new FileTreeFileNode(FileType.ECL, 'a'));
        f.lookupAndAdd(['e', 'L.hsql'], new FileTreeFileNode(FileType.HSQL, 'a'));

        assert.isTrue(f.stat(['e', 't.ecl']).found);
        assert.isTrue(f.stat(['e', 'l.hsql']).found);

        assert.isTrue(f.stat(FileTreeNode.splitFileTreeNodeName('a')).found);
        assert.isTrue(f.stat(FileTreeNode.splitFileTreeNodeName('a/B')).found);
        assert.isTrue(f.stat(FileTreeNode.splitFileTreeNodeName('c')).found);

        assert.isFalse(f.stat(FileTreeNode.splitFileTreeNodeName('c/b')).found);
        assert.isFalse(f.stat(FileTreeNode.splitFileTreeNodeName('c/d')).found);
        assert.isTrue(f.stat(FileTreeNode.splitFileTreeNodeName('e')).found);
        assert.isFalse(f.stat(FileTreeNode.splitFileTreeNodeName('e/d')).found);

        //make a parent of all
        const fd = new FileTreeDirNode(new Map([['x', { realName: 'X', element: f }]]));
        assert.isTrue(fd.stat(FileTreeNode.splitFileTreeNodeName('x/e/t.ecl')).found);
        //throw 'pending';
    });
});
