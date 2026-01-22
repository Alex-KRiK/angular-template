export interface Environment {
  production: boolean;

  /**
   * Base path for API on the origin.
   * Example: /api or /graphql
   */
  apiPath: string;
}
