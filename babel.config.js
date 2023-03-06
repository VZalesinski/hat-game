module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			['nativewind/babel'],
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: [
						'.js',
						'.jsx',
						'.ts',
						'.tsx',
						'.android.js',
						'.android.tsx',
						'.ios.js',
						'.ios.tsx'
					],
					alias: {
						// This needs to be mirrored in tsconfig.json
						'@components': ['./src/components'],
						'@modules': ['./src/modules'],
						'@screens': ['./src/screens'],
						'@utils': ['./src/utils'],
						'@store': ['./src/store'],
						'@hooks': ['./src/hooks']
					}
				}
			]
		]
	}
}
