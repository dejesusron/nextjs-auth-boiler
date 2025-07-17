/**
 * An array of routes that are accessible to the public
 * These routes do not require auth
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for auth
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API auth routes
 * Routes that starts with this prefix are use for API auth purpose
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default path afetr logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
