module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
        ['react-native-reanimated/plugin', { globals: () => { } }],
        'expo-router/babel',
    ],
};
