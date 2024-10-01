// User Roles
export enum UserRole {
  USER = 'User',
  SUPER_USER = 'Admin',
  PREMIUM_MEMBERSHIP = 'premium',

}

export const USER_CREDENTIALS = {
  USER_NAME: 'userName',
  PASSWORD: 'password',
  IS_ADMIN: 'isAdmin'
};
// Routes
export const PATHS = {
  LOGIN: '',
  HOME: 'home',
  PROMISE_DASHBOARD: 'promise-dashboard',
  RXJS_DASHBOARD: 'rxjs-dashboard',
  WILDCARD: '**',
  EMPTY: '',
  SLACH: '/',
};

export const VideoCategory = {
  TECH: 'TechVideo',
  COMEDY: 'ComedyVideo',
  NEWS: 'NewsVideo',
};


export const USER_ROLES = ['User', 'Admin', 'Student', 'Teacher']

// Messages
export const MESSAGES = {
  WELCOME: 'Welcome',
  PROJECT_NAME: 'Async Architecture',
  INVALID_USERNAME_OR_PASSWORD: 'Invalid username or password',
  USERNAME_IS_REQUIRED: 'User Name is required',
  PASSWORD_IS_REQUIRED: 'Password is required',
  SERVER_UNREACHABLE: 'Unable to reach the server. Please check your connection.',
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again later.',
  LOGOUT_SUCCESS: 'You have been logged out successfully',
  BAD_REQUEST: 'Bad Request. The server could not understand your request.',
  UNAUTHORIZED: 'Unauthorized. Please log in again.',
  ACCESS_DENIED: 'Access Denied. You do not have permission to perform this action.',
  RESOURCE_NOT_FOUND: 'Resource not found. The requested resource could not be located.',
  INTERNAL_SERVER_ERROR: 'Internal Server Error. Please try again later.',
  SERVER_ERROR: 'Error Code: {status}. Something unexpected occurred.',
  NO_ERRORS: 'No errors encountered yet.',
  FAKE_API: 'Fake Api'
};

// Rxjs Routes

export const RXJS = {
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
  MAPS_IN_ACTION: 'map-in-action',
  EXHAUST_MAP: 'exhaust-map',
  SHARE_REPLY: 'share-reply',
  COMBINE_LATEST: 'combine-latest',
  ZIP: 'zip-fork-join',
  CATCH_ERROR: 'catch-error',
  WILDCARD: '**'
};

export const PROMISE = {
  DASHBOARD: '',
  PROMISE: 'promise',
  ASYNC_AWAIT: 'asyncawait',
};


// Login Status Key
export const LOGIN_STATUS_KEY = 'isLoggedIn';

export const USER_STATUS_MESSAGES = {
  NO_DATA: 'No Data',
  FETCHING: 'Fetching...',
  DATA_FETCHED: 'Data Fetched',
  RETRYING: 'Retrying attempt #',
  PROBLEM_FETCHING: 'Problem Fetching Data',
  MAX_RETRY: 'Maximum retry attempts reached'
};

export const RETRY_LIMIT = 3;