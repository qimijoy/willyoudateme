import primaryRules from '@qimijoy/stylelint-config/configs/primary.js';

export default {
	ignoreFiles: ['**/node_modules/**'],

	extends: ['stylelint-config-standard'],

	plugins: [
		'stylelint-prettier',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-order',
		'stylelint-no-unsupported-browser-features',
	],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: true,

	rules: {
		...primaryRules.rules,
	},
};
