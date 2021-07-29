export type DataVisualization = {
    template: string;
    source?: string;
    exported: boolean;
};

export function DataVisualization(template: string, exported: boolean = false, source?: string) {
    return { template, exported, source };
}
