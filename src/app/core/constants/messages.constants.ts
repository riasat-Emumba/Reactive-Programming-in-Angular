// Messages
export const MESSAGES = {
    WELCOME: 'Welcome',
    PROJECT_NAME: 'Async Architecture',
    INVALID_USERNAME_OR_PASSWORD: 'Invalid username or password',
    USERNAME_IS_REQUIRED: 'Username is required',
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
    NETWORK_ERROR: 'Network error: Please check your internet connection.',
    NO_ERRORS: 'No errors encountered yet.',
    FAKE_API: 'Fake API',
} as const;