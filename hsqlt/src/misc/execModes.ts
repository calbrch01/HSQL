import { OutputManager } from '../managers/OutputManagers';
import { TaskManager } from '../managers/TaskManager';
import { EOL } from 'os';
import { iP } from './strings/formatting';
import rs from './strings/resultStrings.json';
import { ErrorSeverity, ErrorType, TranslationError } from '../managers/ErrorManager';

/**
 * Execution intent.
 * Replaces {@code ExecMode}
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
        taskmanager.args.g && console.dir(taskmanager.ASTMap, { depth: 4 });
    }
}

export class ExecMakeMode implements ExecIntent {
    async do(taskmanager: TaskManager, outputmanager: OutputManager): Promise<void> {
        //check syntax
        await new ExecCheckMode().do(taskmanager, outputmanager);
        // const { issues, suppressed } = taskmanager.getIssues();

        //getting the error count
        const {
            counts: [ecount, wcount],
            suppressed,
        } = taskmanager.issueStats();
        // print out some stats
        taskmanager.args.g && console.debug(`Statistics W:${wcount},E:${ecount}`);

        // if pedantic, true if warnings or errors exist, else check if errors exist
        const skipOutput = (taskmanager.pedantic && wcount + ecount > 0) || (!taskmanager.pedantic && ecount > 0);

        // console.debug(`E${skipOutput}`);
        if (skipOutput) {
            taskmanager.errorManager.push(
                TranslationError.createIssue(rs.didNotOutput, ErrorType.IO, ErrorSeverity.INFO)
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
        taskmanager.errorManager.push(
            new TranslationError(rs.notImplemented, undefined, undefined, undefined, ErrorType.SETUP)
        );
        // the below is another way of doing it, but its not as errors are pushed out at the end
        // console.error(iP(resultStrings.notImplemented, ErrorSeverity.ERROR));
    }
}
