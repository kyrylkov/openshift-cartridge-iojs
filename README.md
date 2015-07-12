# io.js cartridge for OpenShift

This is an `io.js` cartridge for OpenShift that checks and **automatically updates** (if necessary) `io.js` and `npm` versions on each build.

The latest `io.js` version is determined by querying [semver.io/iojs/stable](https://semver.io/iojs/stable).

A previous version of `io.js` can be used by inserting appropriate URL into the `.openshift/IOJS_VERSION_URL` file in the application repository. For instance, to get the latest **1.x.x** version (1.8.4 as of July 11, 2015), insert:

    https://semver.io/iojs/resolve/1.x.x
    
 into `.openshift/IOJS_VERSION_URL`

## Why use it

Because there is no `io.js` cartridge in OpenShift.

## When to use

When you need to run your application in OpenShift using `io.js`.

## How to

Go to [Choose a type of application](https://openshift.redhat.com/app/console/application_types) in your OpenShift Online account, paste the URL below into "Code Anything" textbox at the bottom of the page and click "Next":

    https://raw.githubusercontent.com/kyrylkov/openshift-cartridge-iojs/master/metadata/manifest.yml
    
Alternatively use:

    rhc app create <app_name> https://raw.githubusercontent.com/kyrylkov/openshift-cartridge-iojs/master/metadata/manifest.yml

## Features

- The cartridge **can** be scaled
- The cartridge **does not** (yet?) have a hot-deploy strategy

## Notes

- The cartridge is not guaranteed to be production ready
- No additional modules are installed (no [supervisor](https://github.com/isaacs/node-supervisor))
