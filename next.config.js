/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { withContentlayer } = require('next-contentlayer');
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins([withPWA, withContentlayer], {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    ...i18n,
    localeDetection: false
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    skipWaiting: true
  }
});
