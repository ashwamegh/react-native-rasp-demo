module.exports = api => {
  // development or production
  const environmentToEnableLogs = 'development';
  const babelEnv = api.env();
  const plugins = [];
  if (babelEnv !== environmentToEnableLogs) {
    plugins.push(['transform-remove-console']);
  }
  plugins.push('react-native-reanimated/plugin');
  plugins.push([
    'module:react-native-dotenv',
    {
      moduleName: '@env',
      path: '.env',
    },
  ]);
  // plugins.push(['module:react-native-dotenv', {moduleName: '@env'}]);
  plugins.push([
    'module-resolver',
    {
      root: ['./'],
      extensions: [
        '.ios.js',
        '.android.js',
        '.js',
        '.jsx',
        '.json',
        '.tsx',
        '.ts',
        '.native.js',
      ],
    },
  ]);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
