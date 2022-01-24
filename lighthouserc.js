module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: "./build",
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        "categories:performance": ["warn", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 1 }]
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};