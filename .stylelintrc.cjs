module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue'],
  rules: {
    'scss/at-import-partial-extension': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global']
      }
    ],
    'selector-class-pattern': null,
    'alpha-value-notation': 'percentage',
    'custom-property-empty-line-before': null,
    'no-invalid-position-declaration': null
  }
}
