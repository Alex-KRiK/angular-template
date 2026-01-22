/**
 * StaticTextHelper provides a collection of predefined static text constants
 * used across the application for consistency and reuse.
 *
 * ➤ This helper simplifies the use of shared UI text by avoiding the need
 *   for dependency injection in components or services.
 *   Instead, you simply import the helper and expose it as a class property.
 *
 * ➤ Useful for common UI labels, placeholder messages, and reusable text
 *   (both static strings and functions with parameters).
 *
 * ✅ Benefits:
 * - Centralizes UI text in a type-safe and discoverable way
 * - No need for injecting services into templates or components
 * - Easy to access from both `.ts` and `.html` files
 * - Can be extended to support localization (i18n), e.g. with `$localize`
 *
 * 🔧 Usage in components:
 * ```ts
 * import { StaticTextHelper } from 'path-to-helper';
 *
 * @Component({...})
 * export class MyComponent {
 *   protected readonly StaticTextHelper = StaticTextHelper;
 * }
 * ```
 *
 * 💡 Usage in templates:
 * ```HTML
 * <p>{{ StaticTextHelper.common.noResultsFound }}</p>
 * ```
 *
 * 💬 Usage for dynamic text (in .ts):
 * ```ts
 * const msg = StaticTextHelper.products.unableToUpload(file.name, error);
 * ```
 */

export class StaticTextHelper {
  static readonly common = {
    noResultFound: 'No results found',
    remove: 'Remove',
    cancel: 'Cancel',
    save: 'Save',
  } as const;

  static readonly home = {
    homeTitle: 'this is an Angular Template. "Home" feature.',
    exploreDocs: 'Explore the Docs',
  } as const;

  static readonly about = {
    aboutTitle: '"About" feature.',
    goToHomePage: 'Go to "Home" page',
  } as const;
}
