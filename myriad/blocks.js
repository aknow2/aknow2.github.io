/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SensorObserver.ts":
/*!*******************************!*\
  !*** ./src/SensorObserver.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass SensorObserver {\n    startObserving(address, newState, getState) {\n        this.observingId = setInterval(() => {\n            fetch(`${address}/sensor`)\n                .then((res) => {\n                return res.json();\n            })\n                .then((data) => {\n                newState({\n                    isConnected: true,\n                    sensor: data,\n                });\n            })\n                .catch(() => {\n                console.log('error');\n                newState({ isConnected: false });\n            });\n        }, 50);\n    }\n    stopObserving() {\n        if (this.observingId) {\n            clearInterval(this.observingId);\n        }\n    }\n}\nexports.default = SensorObserver;\n\n\n//# sourceURL=webpack:///./src/SensorObserver.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst store_1 = __importDefault(__webpack_require__(/*! ./store */ \"./src/store.ts\"));\nconst SensorObserver_1 = __importDefault(__webpack_require__(/*! ./SensorObserver */ \"./src/SensorObserver.ts\"));\nvar Axis;\n(function (Axis) {\n    Axis[\"X\"] = \"x\";\n    Axis[\"Y\"] = \"y\";\n    Axis[\"Z\"] = \"z\";\n})(Axis || (Axis = {}));\nvar Proximity;\n(function (Proximity) {\n    Proximity[\"isNear\"] = \"isNear\";\n    Proximity[\"maxRange\"] = \"maxRange\";\n    Proximity[\"distance\"] = \"distance\";\n})(Proximity || (Proximity = {}));\nclass MyriadApiBlocks {\n    constructor(runtime) {\n        this.checkServerConnected = (callback) => {\n            const state = store_1.default.getState();\n            if (state.sensor) {\n                return callback(state.sensor);\n            }\n            return 'error: you should set ip address';\n        };\n        this.checkEnabledSensor = (callback, data, key) => {\n            const param = data[key];\n            if (param.enabled) {\n                return callback(param);\n            }\n            return `error: please enable ${key} in your app`;\n        };\n        this.runtime = runtime;\n        this.sensorObserver = new SensorObserver_1.default();\n    }\n    getGyroscope(args) {\n        return this.checkServerConnected((sensor) => {\n            return this.checkEnabledSensor((param) => {\n                switch (args.AXIS) {\n                    case Axis.X:\n                        return param.x;\n                    case Axis.Y:\n                        return param.y;\n                    case Axis.Z:\n                        return param.z;\n                    default:\n                        return 'error';\n                }\n            }, sensor, 'gyroscope');\n        });\n    }\n    getAccelerometer(args) {\n        return this.checkServerConnected((sensor) => {\n            return this.checkEnabledSensor((param) => {\n                switch (args.AXIS) {\n                    case Axis.X:\n                        return param.x;\n                    case Axis.Y:\n                        return param.y;\n                    case Axis.Z:\n                        return param.z;\n                    default:\n                        return 'error';\n                }\n            }, sensor, 'accelerometer');\n        });\n    }\n    getMagnetometer(args) {\n        return this.checkServerConnected((sensor) => {\n            return this.checkEnabledSensor((param) => {\n                switch (args.AXIS) {\n                    case Axis.X:\n                        return param.x;\n                    case Axis.Y:\n                        return param.y;\n                    case Axis.Z:\n                        return param.z;\n                    default:\n                        return 'error';\n                }\n            }, sensor, 'magnetometer');\n        });\n    }\n    getLight() {\n        return this.checkServerConnected((sensor) => {\n            return this.checkEnabledSensor((param) => {\n                return param.value;\n            }, sensor, 'light');\n        });\n    }\n    getProximity(args) {\n        return this.checkServerConnected((sensor) => {\n            return this.checkEnabledSensor((param) => {\n                switch (args.PROXIMITY) {\n                    case Proximity.isNear:\n                        return param.isNear ? 'near' : 'far';\n                    case Proximity.distance:\n                        return param.value;\n                    case Proximity.maxRange:\n                        return param.maxRange;\n                    default:\n                        return 'error';\n                }\n            }, sensor, 'proximity');\n        });\n    }\n    setIpAddress(args) {\n        const ipaddress = (() => {\n            const ip = args.IP;\n            const http = 'http://';\n            const https = 'https://';\n            if (ip.includes(http) || ip.includes(https)) {\n                return ip;\n            }\n            return http + ip;\n        })();\n        this.sensorObserver.stopObserving();\n        this.sensorObserver.startObserving(ipaddress, store_1.default.newState, store_1.default.getState);\n    }\n    axisMenu() {\n        return [\n            {\n                value: Axis.X,\n                text: 'X',\n            },\n            {\n                value: Axis.Y,\n                text: 'Y',\n            },\n            {\n                value: Axis.Z,\n                text: 'Z',\n            },\n        ];\n    }\n    proximityMenu() {\n        return [\n            {\n                value: Proximity.isNear,\n                text: 'Near/Far',\n            },\n            {\n                value: Proximity.maxRange,\n                text: 'max range',\n            },\n            {\n                value: Proximity.distance,\n                text: 'distance',\n            },\n        ];\n    }\n    getInfo() {\n        return {\n            id: 'myriadApiBlocks',\n            name: 'Myriad api blocks',\n            docsURI: 'https://....',\n            blocks: [\n                {\n                    opcode: 'setIpAddress',\n                    blockType: 'command',\n                    text: 'set ip address [IP]',\n                    arguments: {\n                        IP: {\n                            type: 'string',\n                            defaultValue: 'http://localhost:8080',\n                        },\n                    },\n                    filter: ['sprite', 'stage'],\n                },\n                {\n                    opcode: 'getGyroscope',\n                    blockType: Scratch.BlockType.REPORTER,\n                    branchCount: 0,\n                    isTerminal: true,\n                    blockAllThreads: false,\n                    text: '[AXIS] axis of gyroscope',\n                    arguments: {\n                        AXIS: {\n                            type: 'string',\n                            menu: 'axis',\n                            defaultValue: Axis.X,\n                        },\n                    },\n                    filter: ['sprite', 'stage'],\n                },\n                {\n                    opcode: 'getAccelerometer',\n                    blockType: Scratch.BlockType.REPORTER,\n                    branchCount: 0,\n                    isTerminal: true,\n                    blockAllThreads: false,\n                    text: '[AXIS] axis of accelerometer',\n                    arguments: {\n                        AXIS: {\n                            type: 'string',\n                            menu: 'axis',\n                            defaultValue: Axis.X,\n                        },\n                    },\n                    filter: ['sprite', 'stage'],\n                },\n                {\n                    opcode: 'getMagnetometer',\n                    blockType: Scratch.BlockType.REPORTER,\n                    branchCount: 0,\n                    isTerminal: true,\n                    blockAllThreads: false,\n                    text: '[AXIS] axis of magnetometer',\n                    arguments: {\n                        AXIS: {\n                            type: 'string',\n                            menu: 'axis',\n                            defaultValue: Axis.X,\n                        },\n                    },\n                    filter: ['sprite', 'stage'],\n                },\n                {\n                    opcode: 'getProximity',\n                    blockType: Scratch.BlockType.REPORTER,\n                    branchCount: 0,\n                    isTerminal: true,\n                    blockAllThreads: false,\n                    text: 'Proximity',\n                    arguments: {\n                        PROXIMITY: {\n                            type: 'string',\n                            menu: 'proximity',\n                            defaultValue: Proximity.isNear,\n                        },\n                    },\n                    filter: ['sprite', 'stage'],\n                },\n                {\n                    opcode: 'getLight',\n                    blockType: Scratch.BlockType.REPORTER,\n                    branchCount: 0,\n                    isTerminal: true,\n                    blockAllThreads: false,\n                    text: 'Light sensor',\n                    filter: ['sprite', 'stage'],\n                },\n            ],\n            menus: {\n                axis: this.axisMenu(),\n                proximity: this.proximityMenu(),\n            },\n            translation_map: {\n                ja: {\n                    extensionName: 'Myriad Api Blocks',\n                    getGyroscope: 'ジャイロスコープ [AXIS] 軸の値 ',\n                    'myReporter.TEXT_default': 'Text',\n                    menuA_item1: 'Artikel eins',\n                    menuB_example: 'Beispiel',\n                    'myReporter.result': 'Buchstabe {LETTER_NUM} von {TEXT} ist {LETTER}.',\n                },\n            },\n            targetTypes: [],\n        };\n    }\n}\nScratch.extensions.register(new MyriadApiBlocks());\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst initState = { isConnected: false };\nconst store = ((state) => {\n    let accState = Object.freeze(state);\n    const newState = (ns) => {\n        const merged = Object.assign({}, accState, ns);\n        accState = Object.freeze(merged);\n    };\n    const getState = () => {\n        return accState;\n    };\n    return {\n        newState,\n        getState,\n    };\n})(initState);\nexports.default = store;\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ })

/******/ });