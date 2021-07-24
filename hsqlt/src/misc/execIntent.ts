import { OutputManager } from '../managers/OutputManagers';
import { TaskManager } from '../managers/TaskManager';
import { EOL } from 'os';
import rs from './strings/resultStrings';
import { ErrorSeverity, ErrorType, TranslationIssue } from '../managers/ErrorManager';

/**
 * Execution intent
 */
export interface ExecIntent {
    do(taskmanager: TaskManager, outputmanager: OutputManager): Promise<void>;
}

/**
 * Exec tree mode
 */
export class ExecTreeMode implements ExecIntent {
    async do(taskmanager: TaskManager, _outputmanager: OutputManager) {
        const { strTree } = taskmanager.getStringTree();
        console.log(strTree, EOL);
    }
}

/**
 * Exec Syntax check mode
 */
export class ExecCheckMode implements ExecIntent {
    async do(taskmanager: TaskManager, _outputmanager: OutputManager): Promise<void> {
        // generate the ast
        taskmanager.generateAST();

        //print out if required
        // taskmanager.args.g && console.dir(taskmanager.ASTMap, { depth: 4 });
    }
}

export class ExecMakeMode implements ExecIntent {
    async do(taskmanager: TaskManager, outputmanager: OutputManager): Promise<void> {
        // check syntax aka generate the ast
        await new ExecCheckMode().do(taskmanager, outputmanager);

        // getting the error count
        const {
            counts: [ecount, wcount],
            suppressed,
        } = taskmanager.issueStats();
        // print out some stats if in debuf mode
        taskmanager.args.g && console.debug(`Statistics W:${wcount},E:${ecount}`);

        // if pedantic, true if warnings or errors exist, else check if errors exist
        const skipOutput = (taskmanager.pedantic && wcount + ecount > 0) || (!taskmanager.pedantic && ecount > 0);

        // console.debug(`E${skipOutput}`);
        if (skipOutput) {
            taskmanager.errorManager.push(
                TranslationIssue.createIssue(rs.didNotOutput, ErrorType.IO, ErrorSeverity.INFO)
            );
        } else {
            await taskmanager.generateOutputs();
        }
    }
}

export class ExecRunMode implements ExecIntent {
    async do(taskmanager: TaskManager, outputmanager: OutputManager): Promise<void> {
        // check syntax aka generate the ast
        await new ExecCheckMode().do(taskmanager, outputmanager);

        // getting the error count
        const {
            counts: [ecount, wcount],
            suppressed,
        } = taskmanager.issueStats();
        // print out some stats if in debug mode
        taskmanager.args.g && console.debug(`Statistics W:${wcount},E:${ecount}`);

        // if pedantic, true if warnings or errors exist, else check if errors exist
        const skipOutput = (taskmanager.pedantic && wcount + ecount > 0) || (!taskmanager.pedantic && ecount > 0);

        // console.debug(`E${skipOutput}`);
        if (skipOutput) {
            taskmanager.errorManager.push(
                TranslationIssue.createIssue(rs.didNotOutput, ErrorType.IO, ErrorSeverity.INFO)
            );
        } else {
            await taskmanager.generateOutputs();
        }
    }
}

/**
 * Unimplemented Syntax check
 */
export class ExecUnimplemented implements ExecIntent {
    async do(taskmanager: TaskManager, outputmanager: OutputManager): Promise<void> {
        // note that passing undefined implies that default values will be assumed
        taskmanager.errorManager.push(TranslationIssue.generalErrorToken(rs.notImplemented, ErrorType.SETUP));
    }
}
