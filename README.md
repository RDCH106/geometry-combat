# Geometry Combat

:video_game: Multiplayer game with simple and addictive game mechanics.

## Installation

Install from source with:

```
$ git clone https://github.com/threemonkeybits/geometry-combat.git --recursive
```

* Note: If you already did a clone without `recursive` param, clone the submodule with:

```
$ git submodule init
$ git submodule update
```

### Node.js (only if you want to launch it with developer tools)

Install NPM modules with:

```
$ npm install
```
See [Develop section](https://github.com/threemonkeybits/geometry-combat#develop) :wrench:

## Execute

### Python 

#### Windows

* Install [Python 3](https://www.python.org/downloads/) (mandatory to use Launch_game.bat)
* Run [`Launch_game.bat`](https://github.com/threemonkeybits/geometry-combat/blob/master/Launch_game.bat)


#### GNU/Linux

* Install Python3 with `apt-get install python3` (mandatory to use Launch_game.sh)
* Run [`Launch_game.sh`](https://github.com/threemonkeybits/geometry-combat/blob/master/Launch_game.sh)

### Node.js

```
$ npm run build.tasks (only first time)
$ npm run dev
```

## Develop

### Full tasks list :wrench:

|Command|Description|
|--|--|
|`npm run build.tasks`| Compiles tasks definitions|
|`npm run compile`| Compiles game source files to JavaScript|
|`npm run bundle`| Minifies game code after compile it|
|`npm run clean`| Cleans *.js files and preserves *.min.js|
|`npm run dev`|Compiles game sources and starts a server with livereload|
|`npm run watch`|Watches for changes in the source code and compiles them|
