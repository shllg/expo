import { LinkingOptions } from '@react-navigation/native';
import { RouteNode } from './Route';
import { ResultState, type Options } from './fork/getStateFromPath';
import { RouterStore } from './global-state/router-store';
import { getInitialURL, getPathFromState } from './link/linking';
import { RequireContext } from './types';
export declare function getNavigationConfig(routes: RouteNode, metaOnly?: boolean): {
    initialRouteName: undefined;
    screens: Record<string, import("./getReactNavigationConfig").Screen>;
};
export type ExpoLinkingOptions<T extends object = Record<string, unknown>> = LinkingOptions<T> & {
    getPathFromState?: typeof getPathFromState;
    getStateFromPath?: (path: string, config?: Options<object>) => ResultState | undefined;
};
export type LinkingConfigOptions = {
    metaOnly?: boolean;
    serverUrl?: string;
    getInitialURL?: typeof getInitialURL;
};
export declare function getLinkingConfig(store: RouterStore, routes: RouteNode, context: RequireContext, { metaOnly, serverUrl }?: LinkingConfigOptions): Promise<ExpoLinkingOptions>;
//# sourceMappingURL=getLinkingConfig.d.ts.map