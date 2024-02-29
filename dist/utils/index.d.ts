export declare const utils: {
    getCommands: ({ input }: import("./getCommands").GetCommandsParams) => {
        folderName: string;
        flag: import("../types").Flag | undefined;
    };
    consoleIntro: () => void;
    getNaming: (input: string) => string;
    getRootDirectory: () => string;
};
