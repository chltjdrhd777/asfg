export declare const constants: {
    componentContent: {
        getBaseComponentContent: (pageName: string, alias: string) => string;
    };
    contextStateContent: {
        getBaseContextStateContent: (pageName: string) => string;
        getBaseCreateContext: () => string;
    };
    guideText: {
        help: string;
        aschiiTitle: string;
        introduction: string;
        noFolderName: string;
    };
    pageContent: {
        getBasePageContent: (pageName: string) => string;
    };
    defaultASFGConfig: import("../types").ASFGConfig;
    networkContent: {
        baseConfigContent: string;
        clientIndexContent: string;
    };
};
