Azure VSO Reporter
========================

> A WebdriverIO reporter to log in Azure pipelines log format.

## Installation

The easiest way is to keep `@neovici/wdio-vso-reporter` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "@neovici/wdio-vso-reporter": "^1.0.0"
  }
}
```

You can simple do it by:

```bash
npm install @neovici/wdio-vso-reporter --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here](https://webdriver.io/docs/gettingstarted.html).

## Output

This reporter will log test errors using [Azure logging commands](https://docs.microsoft.com/en-us/azure/devops/pipelines/scripts/logging-commands).

## Configuration

The following code shows the default wdio test runner configuration. Just add `'@neovici/wdio-vso-reporter'` as reporter to the array.

```js
// wdio.conf.js
module.exports = {
    // ...
    reporters: [
        'dot',
        '@neovici/wdio-vso-reporter',
    ],
    // ...
};
```

----

For more information on WebdriverIO see the [homepage](https://webdriver.io).