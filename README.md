# Custom io.js cartridge for OpenShift

This is a custom `io.js` cartridge that **takes care of auto-updating the `io.js` and `npm` versions** on each build.

By default, the `io.js` version is determined by querying [semver.io/iojs/stable](https://semver.io/iojs/stable).

A different URL can be specified in your application repository in the `.openshift/IOJS_VERSION_URL` file. For instance, you'd get the **latest 1.x.x** (1.8.4 as of July 11, 2015) by putting:

    https://semver.io/iojs/resolve/1.x.x
    
 in `.openshift/IOJS_VERSION_URL`

## Why

Because there is no standard OpenShift `io.js` cartridge.

## When to use

When you need to run your application in OpenShift using `io.js`.

## How to

Go to [Choose a type of application](https://openshift.redhat.com/app/console/application_types) in your OpenShift Online account, paste the URL below into "Code Anything" textbox at the bottom of the page and click "Next":

    https://raw.githubusercontent.com/kyrylkov/openshift-cartridge-iojs/master/metadata/manifest.yml
    
Alternatively use:

    rhc app create <app_name> https://raw.githubusercontent.com/kyrylkov/openshift-cartridge-iojs/master/metadata/manifest.yml

## Features

- The cartridge [build script](https://github.com/kyrylkov/openshift-cartridge-iojs/blob/master/bin/control#L11) is using [this function](https://github.com/kyrylkov/openshift-cartridge-iojs/blob/master/lib/util#L3) to check for the latest `io.js` and `npm` versions and installs them if necessary;
- This cartridge **can** be scaled;
- This cartridge **does not** (yet?) have a hot-deploy strategy.

## Notes

- The cartridge is not guaranteed to be production-ready
- No additional modules are installed, which means that - unlike the standard Node.js cartridge - it won't install [supervisor](https://github.com/isaacs/node-supervisor) for you. You'll have to implement your own logic to auto-restart on errors. The [provided application template](https://github.com/icflorescu/openshift-cartridge-nodejs/blob/master/usr/template/start.js) is using [cluster](http://nodejs.org/api/cluster.html) for that.
