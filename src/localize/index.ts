import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import vi from './languages/vi.json';
import en from './languages/en.json';

const translations = { en, vi };
const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || { languageTag: 'en' };

i18n.locale = languageTag;
i18n.fallbacks = true;
i18n.translations = translations;

export default function translate(name: string, params = {}) {
  return i18n.t(name, params);
}
