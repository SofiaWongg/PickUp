const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const {
    resolver: { sourceExts, assetExts }
  } = defaultConfig;

  return {
    ...defaultConfig, // Include the default configuration for Expo
    transformer: {
      ...defaultConfig.transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      ...defaultConfig.resolver,
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
