System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime",
      "es7.decorators"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "aurelia-router/*": "dist/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.0",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.4.0",
    "aurelia-history": "github:aurelia/history@0.4.0",
    "aurelia-path": "github:aurelia/path@0.6.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.4.0",
    "babel": "npm:babel-core@5.2.2",
    "babel-runtime": "npm:babel-runtime@5.2.2",
    "core-js": "npm:core-js@0.9.5",
    "github:aurelia/dependency-injection@0.7.0": {
      "aurelia-logging": "github:aurelia/logging@0.4.0",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0",
      "core-js": "npm:core-js@0.9.5"
    },
    "github:aurelia/metadata@0.5.0": {
      "core-js": "npm:core-js@0.9.5"
    },
    "github:aurelia/route-recognizer@0.4.0": {
      "core-js": "npm:core-js@0.9.5"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.5": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

