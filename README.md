# io.js cartridge for OpenShift

This is a `io.js` cartridge that **automatically updates the `io.js` and `npm` versions** on each build.

The latest  `io.js` version is determined by querying [semver.io/iojs/stable](https://semver.io/iojs/stable).

A previous version of `io.js` can be used by placeing appropriate URL in the application repository in the `.openshift/IOJS_VERSION_URL` file. For instance, to get the **latest 1.x.x** (1.8.4 as of July 11, 2015), put:

    https://semver.io/iojs/resolve/1.x.x
    
 in `.openshift/IOJS_VERSION_URL`

## Why

Because there is no `io.js` cartridge in OpenShift.

## When to use

When you need to run your application in OpenShift using `io.js`.

## How to

Go to [Choose a type of application](https://openshift.redhat.com/app/console/application_types) in your OpenShift Online account, paste the URL below into "Code Anything" textbox at the bottom of the page and click "Next":

    https://raw.githubusercontent.com/kyrylkov/openshift-cartridge-iojs/master/metadata/manifest.yml
    
Alternatively use:

    rhc app create <app_name> https://raw.githubusercontent.com/kyrylkov/openshift-cartridge-iojs/master/metadata/manifest.yml

## Features

- This cartridge **can** be scaled;
- This cartridge **does not** (yet?) have a hot-deploy strategy.

## Notes

- The cartridge is not guaranteed to be production ready
- No additional modules are installed (no [supervisor](https://github.com/isaacs/node-supervisor))
