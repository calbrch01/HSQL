export type DataVisualization = {
    /** the template to use */
    template: string;
    /** where it is from - the module to refer to while making codegen. This is much easier compared to train as here we don't worry about multiple dependencies. */
    source?: string;
    /** Whether exported or not */
    exported: boolean;
};

export function DataVisualization(template: string, exported: boolean = false, source?: string) {
    return { template, exported, source };
}
