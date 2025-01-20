import { LinkingOptions } from '@react-navigation/native';
import { RouteNode } from './Route';
import { ResultState, type Options } from './fork/getStateFromPath';
import { type RedirectConfig } from './getRoutesCore';
import { RouterStore } from './global-state/router-store';
import { getInitialURL, getPathFromState } from './link/linking';
import { RequireContext } from './types';
export declare const INTERNAL_SLOT_NAME = "__root";
export declare function getNavigationConfig(routes: RouteNode, metaOnly?: boolean): {
    screens: {
        __root: {
            initialRouteName: undefined;
            screens: Record<string, import("./getReactNavigationConfig").Screen>;
            path: string;
        };
    };
};
export type ExpoLinkingOptions<T extends object = Record<string, unknown>> = LinkingOptions<T> & {
    getPathFromState?: typeof getPathFromState;
    getStateFromPath?: (path: string, config?: Options<object>) => ResultState | undefined;
};
export type LinkingConfigOptions = {
    metaOnly?: boolean;
    serverUrl?: string;
    getInitialURL?: typeof getInitialURL;
    redirects?: RedirectConfig[];
};
export declare function getLinkingConfig(store: RouterStore, routes: RouteNode, context: RequireContext, { metaOnly, serverUrl, redirects }?: LinkingConfigOptions): Promise<ExpoLinkingOptions>;
//# sourceMappingURL=getLinkingConfig.d.ts.map