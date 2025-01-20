import { State } from '../fork/getPathFromState';
import { getStateFromPath } from '../fork/getStateFromPath';
import { NativeIntent } from '../types';
type Options = Parameters<typeof getStateFromPath>[2];
export declare function reconstructState(nativeIntent: NativeIntent | undefined, state: State | undefined, getState: typeof getStateFromPath, options: Options): import("../fork/getStateFromPath").ResultState | undefined;
export {};
//# sourceMappingURL=routeInfo.d.ts.map