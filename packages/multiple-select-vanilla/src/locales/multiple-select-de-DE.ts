/**
 * Multiple Select de-DE translation
 * Author: Bugi Goertz
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const German = {
  formatSelectAll() {
    return '[Alles auswählen]';
  },
  formatAllSelected() {
    return 'Alles ausgewählt';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} von ${total} ausgewählt`;
  },
  formatNoMatchesFound() {
    return 'Keine Ergebnisse';
  },
  formatOkButton() {
    return 'Schließen';
  },
  formatLazyLoading() {
    return 'Jetzt wird geladen...';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['de-DE'] = German;

export default ms.locales;
