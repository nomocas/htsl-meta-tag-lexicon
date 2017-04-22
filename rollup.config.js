import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json'),
	external = Object.keys(pkg.dependencies);

export default {
	entry: 'src/index.js',
	plugins: [babel(babelrc())],
	external,
	targets: [{
		dest: pkg.main,
		format: 'cjs',
		sourceMap: true
	}, {
		dest: pkg.module,
		format: 'es',
		sourceMap: true
	}]
};

