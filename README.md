# Geometry Combat

Geometry wars is a multiplayer game to play.

# Installation

Install from source with:

```
$ git clone https://github.com/threemonkeybits/geometry-combat.git --recursive
```

* Note: If you already did a clone without `recursive` param, clone the submodule with:

```
git submodule init
git submodule update
```

Install NPM modules with:

```
npm install
```

# Execute

```
npm run dev
````

## Full tasks list

|Command|Description|
|--|--|
|`npm run compile`| Compiles game source files to JavaScript|
|`npm run build.tasks`|Compiles tasks definitions|
|`npm run dev`|Compiles game sources and starts a server with livereload|
|`npm run watch`|Watches for changes in the source code and compiles them|
