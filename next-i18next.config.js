const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ru']
  },
  localePath: path.resolve('./i18n')
};
