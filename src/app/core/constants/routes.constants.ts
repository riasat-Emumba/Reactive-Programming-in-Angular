export const PATHS = {
    AUTH: {
        LOGIN: '',
        HOME: 'home',
    },
    DASHBOARDS: {
        PROMISE: 'promise-dashboard',
        RXJS: 'rxjs-dashboard',
    },
    WILDCARD: '**',
    EMPTY: '',
    SLASH: '/',
} as const;

export const RXJS_ROUTES = {
    DASHBOARD: '',
    FROM_EVENT: 'fromevent',
    MAP: 'map',
    SWITCH_MAP: 'switchmap',
    INTERVAL: 'interval',
    TIMER: 'timer',
    OF_FROM: 'of-from',
    TO_ARRAY: 'to-array',
    CUSTOM_OBSERVABLE: 'custom-observable',
    PLUCK: 'pluck',
    FILTER: 'filter',
    RETRY: 'retry',
    DEBOUNCE_TIME: 'debounce-time',
    CONCAT: 'concat',
    MERGE: 'merge',
    MERGE_MAP: 'merge-map',
    CONCAT_MAP: 'concat-map',
    COMPARE_MAPS: 'compare-maps',
    MAPS_IN_ACTION: 'maps-in-action',
    EXHAUST_MAP: 'exhaust-map',
    SHARE_REPLY: 'share-reply',
    COMBINE_LATEST: 'combine-latest',
    ZIP: 'zip-fork-join',
    CATCH_ERROR: 'catch-error',
    WILDCARD: '**',
} as const;

export const PROMISE_ROUTES = {
    DASHBOARD: '',
    PROMISE: 'promise',
    ASYNC_AWAIT: 'async-await',
} as const;