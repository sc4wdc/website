export default {
  ignoreFiles: ["dist/**", ".astro/**", "node_modules/**"],
  extends: ["stylelint-config-standard"],
  overrides: [
    {
      files: ["**/*.{astro,html}"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "alpha-value-notation": null,
    "color-function-alias-notation": null,
    "color-function-notation": null,
    "color-hex-length": null,
    "declaration-property-value-no-unknown": null,
    "media-feature-range-notation": null,
    "no-descending-specificity": null,
    "property-no-deprecated": null,
    "rule-empty-line-before": null,
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "value-keyword-case": null,
  },
};
