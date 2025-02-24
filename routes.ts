
/**
 * An array of routes that are available to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/settings"
]

/**
 * An array of routes that are used for authentication
 * Theses routes will redirect loggedIn users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/signup",
    "/signin"
]


/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API
 * authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/"