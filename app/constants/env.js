/**
 * Constants
 * Note: Don't import log helper file from utils here
 */

const isDev = process.env.NODE_ENV !== 'production';
const isProd = process.env.NODE_ENV === 'production';
const isDebug = process.env.DEBUG_PROD === 'true';

const config = {
  dev: {
    reportToSenty: false,
    enableGoogleAnalytics: false,
    enableMixpanelAnalytics: false,
    disableReactWarnings: true,
    allowDevelopmentEnvironment: true,
  },
  prod: {
    reportToSenty: true,
    enableGoogleAnalytics: true,
    enableMixpanelAnalytics: true,
    disableReactWarnings: false,
    allowDevelopmentEnvironment: true, //todo fix this to false
  },
  debug: {
    reportToSenty: true,
    enableGoogleAnalytics: true,
    enableMixPanelAnalytics: true,
    disableReactWarnings: false,
    allowDevelopmentEnvironment: true,
  },
};

let _env = 'dev';

if (isProd) {
  _env = 'prod';
} else if (isDebug) {
  _env = 'debug';
}

module.exports.ENV_FLAVOR = config[_env];

module.exports.IS_DEV = isDev;

module.exports.IS_PROD = isProd;

module.exports.DEBUG_PROD = isDebug;

module.exports.IS_RENDERER = process && process.type === 'renderer';
