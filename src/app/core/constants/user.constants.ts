// User Roles
export enum UserRole {
    USER = 'User',
    SUPER_USER = 'Admin',
    PREMIUM_MEMBERSHIP = 'Premium',
}

// User Credentials
export const USER_CREDENTIALS = {
    USERNAME: 'userName',
    PASSWORD: 'password',
    IS_ADMIN: 'isAdmin',
} as const;

// Login Status Key
export const LOGIN_STATUS_KEY = 'isLoggedIn';

// User Status Messages
export const USER_STATUS_MESSAGES = {
    NO_DATA: 'No Data',
    FETCHING: 'Fetching...',
    DATA_FETCHED: 'Data Fetched',
    RETRYING: 'Retrying attempt #',
    PROBLEM_FETCHING: 'Problem Fetching Data',
    MAX_RETRY: 'Maximum retry attempts reached',
} as const;