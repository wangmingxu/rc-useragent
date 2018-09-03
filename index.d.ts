import * as React from 'react';

export class UseragentProvider extends React.Component<ReactUserAgentProps, any> {}
type Diff<T, U> = T extends U ? never : T;
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export declare function withUserAgent<T extends ReactUserAgentProps>(Component: React.ComponentType<T>): React.ComponentType<Omit<T, keyof ReactUserAgentProps>>;

export type ReactUserAgentProps = {
    ua?: ClientDetect
};

export class ClientDetect {
    static instance: any;
    static getInstance(): ClientDetect;
    source: string;
    private rules;
    constructor(ua?: string, extraRules?: {});
    addRule(ruleName: string, regExp: RegExp): void;
    match(ruleName: string): boolean;
    readonly isIOS: boolean;
    readonly isAndroid: boolean;
    readonly isIPhone: boolean;
    readonly isIPad: boolean;
    readonly isWeiBo: boolean;
    readonly isWeiXin: boolean;
    readonly isUC: boolean;
    readonly isQQ: boolean;
    readonly isSafari: boolean;
    readonly isLizhiFM: boolean;
    readonly isIPhoneX: boolean;
    checkDeviceType(): "Android" | "IPhoneX" | "IPhone" | "Desktop";
}

