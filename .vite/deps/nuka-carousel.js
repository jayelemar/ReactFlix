import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps2 = type.defaultProps;
              for (propName in defaultProps2) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps2[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx8 = jsxWithValidationDynamic;
        var jsxs2 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx8;
        exports.jsxs = jsxs2;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/nuka-carousel/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useSlideIntersectionObserver = (elementRef, rootRef, callback) => {
  const [entry, setEntry] = (0, import_react3.useState)();
  const callbackRef = (0, import_react3.useRef)(callback);
  (0, import_react3.useEffect)(() => {
    callbackRef.current = callback;
  }, [callback]);
  (0, import_react3.useEffect)(() => {
    const node = elementRef == null ? void 0 : elementRef.current;
    const root = rootRef == null ? void 0 : rootRef.current;
    if (!window.IntersectionObserver || !node || !root)
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          setEntry(entry2);
          callbackRef.current(entry2);
        });
      },
      {
        threshold: [0.05, 0.95],
        root
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, rootRef]);
  return entry;
};
var getSlideWidth = (count, wrapAround) => `${wrapAround ? 100 / (3 * count) : 100 / count}%`;
var getSlideStyles = (count, isCurrentSlide, isVisibleSlide, wrapAround, cellSpacing, animation, speed, zoomScale, adaptiveHeight, initializedAdaptiveHeight, slideWidth) => {
  const width = slideWidth != null ? slideWidth : getSlideWidth(count, wrapAround);
  const visibleSlideOpacity = isVisibleSlide ? 1 : 0;
  const animationSpeed = animation === "fade" ? 200 : 500;
  let height = "auto";
  if (adaptiveHeight) {
    if (initializedAdaptiveHeight) {
      height = "100%";
    } else if (isVisibleSlide) {
      height = "auto";
    } else {
      height = "0";
    }
  }
  return {
    width,
    height,
    padding: `0 ${cellSpacing ? cellSpacing / 2 : 0}px`,
    transition: animation ? `${speed || animationSpeed}ms ease 0s` : void 0,
    transform: animation === "zoom" ? `scale(${isCurrentSlide && isVisibleSlide ? 1 : zoomScale || 0.85})` : void 0,
    opacity: animation === "fade" ? visibleSlideOpacity : 1
  };
};
var generateIndex = (index, count, typeOfSlide) => {
  if (typeOfSlide === "prev-cloned") {
    return index - count;
  }
  if (typeOfSlide === "next-cloned") {
    return index + count;
  }
  return index;
};
var Slide = ({
  count,
  children,
  index,
  isCurrentSlide,
  typeOfSlide,
  wrapAround,
  cellSpacing,
  slideWidth,
  animation,
  speed,
  zoomScale,
  onVisibleSlideHeightChange,
  adaptiveHeight,
  initializedAdaptiveHeight,
  updateIOEntry,
  id,
  carouselRef
}) => {
  var _a;
  const customIndex = wrapAround ? generateIndex(index, count, typeOfSlide) : index;
  const slideRef = (0, import_react2.useRef)(null);
  const entry = useSlideIntersectionObserver(slideRef, carouselRef, (entry2) => {
    updateIOEntry(id, (entry2 == null ? void 0 : entry2.intersectionRatio) >= 0.95);
  });
  const isVisible = !!(entry == null ? void 0 : entry.isIntersecting);
  const isFullyVisible = ((_a = entry == null ? void 0 : entry.intersectionRatio) != null ? _a : 1) >= 0.95;
  const prevIsVisibleRef = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    var _a2;
    const node = slideRef.current;
    if (node) {
      const slideHeight = (_a2 = node.getBoundingClientRect()) == null ? void 0 : _a2.height;
      const prevIsVisible = prevIsVisibleRef.current;
      if (isVisible && !prevIsVisible) {
        onVisibleSlideHeightChange(customIndex, slideHeight);
      } else if (!isVisible && prevIsVisible) {
        onVisibleSlideHeightChange(customIndex, null);
      }
      prevIsVisibleRef.current = isVisible;
    }
  }, [customIndex, isVisible, onVisibleSlideHeightChange]);
  const currentSlideClass = isCurrentSlide && isFullyVisible ? " slide-current" : "";
  return (0, import_jsx_runtime.jsx)(
    "div",
    __spreadProps(__spreadValues({
      ref: slideRef
    }, { inert: isFullyVisible ? void 0 : "true" }), {
      className: `slide${currentSlideClass}${typeOfSlide ? ` ${typeOfSlide}` : ""}${isFullyVisible ? " slide-visible" : ""}`,
      style: getSlideStyles(
        count,
        isCurrentSlide,
        isFullyVisible,
        wrapAround,
        cellSpacing,
        animation,
        speed,
        zoomScale,
        adaptiveHeight,
        initializedAdaptiveHeight,
        slideWidth
      ),
      children
    })
  );
};
var slide_default = Slide;
var styles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  padding: 0,
  margin: "-1px",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0
};
var AnnounceSlide = ({
  message,
  ariaLive = "polite"
}) => (0, import_jsx_runtime2.jsx)("div", { "aria-live": ariaLive, "aria-atomic": "true", style: styles, tabIndex: -1, children: message });
var defaultRenderAnnounceSlideMessage = ({
  currentSlide,
  count
}) => `Slide ${currentSlide + 1} of ${count}`;
var announce_slide_default = AnnounceSlide;
var Alignment = ((Alignment2) => {
  Alignment2["Center"] = "center";
  Alignment2["Right"] = "right";
  Alignment2["Left"] = "left";
  return Alignment2;
})(Alignment || {});
var Directions = ((Directions2) => {
  Directions2["Next"] = "next";
  Directions2["Prev"] = "prev";
  Directions2["Up"] = "up";
  Directions2["Down"] = "down";
  return Directions2;
})(Directions || {});
var Positions = ((Positions2) => {
  Positions2["TopLeft"] = "TopLeft";
  Positions2["TopCenter"] = "TopCenter";
  Positions2["TopRight"] = "TopRight";
  Positions2["CenterLeft"] = "CenterLeft";
  Positions2["CenterCenter"] = "CenterCenter";
  Positions2["CenterRight"] = "CenterRight";
  Positions2["BottomLeft"] = "BottomLeft";
  Positions2["BottomCenter"] = "BottomCenter";
  Positions2["BottomRight"] = "BottomRight";
  return Positions2;
})(Positions || {});
var ScrollMode = ((ScrollMode2) => {
  ScrollMode2["page"] = "page";
  ScrollMode2["remainder"] = "remainder";
  return ScrollMode2;
})(ScrollMode || {});
var getNextMoveIndex = (scrollMode, wrapAround, currentSlide, slideCount, slidesToScroll, slidesToShow, cellAlign) => {
  if (wrapAround) {
    return currentSlide + slidesToScroll;
  }
  if (currentSlide >= slideCount - 1 || cellAlign === "left" && currentSlide >= slideCount - slidesToShow) {
    return currentSlide;
  }
  if (scrollMode === "remainder" && cellAlign === "left") {
    return Math.min(currentSlide + slidesToScroll, slideCount - slidesToShow);
  }
  return Math.min(currentSlide + slidesToScroll, slideCount - 1);
};
var getPrevMoveIndex = (scrollMode, wrapAround, currentSlide, slidesToScroll, slidesToShow, cellAlign) => {
  if (wrapAround) {
    return currentSlide - slidesToScroll;
  }
  if (currentSlide <= 0 || cellAlign === "right" && currentSlide <= slidesToShow - 1) {
    return currentSlide;
  }
  if (scrollMode === "remainder" && cellAlign === "right") {
    return Math.max(currentSlide - slidesToScroll, slidesToShow - 1);
  }
  return Math.max(currentSlide - slidesToScroll, 0);
};
var getDefaultSlideIndex = (slideIndex, slideCount, slidesToShow, slidesToScroll, cellAlign, autoplayReverse, scrollMode) => {
  if (slideIndex !== void 0) {
    return slideIndex;
  }
  const dotIndexes = getDotIndexes(
    slideCount,
    slidesToScroll,
    scrollMode,
    slidesToShow,
    false,
    cellAlign
  );
  return autoplayReverse ? dotIndexes[dotIndexes.length - 1] : dotIndexes[0];
};
var getBoundedIndex = (rawIndex, slideCount) => {
  return (rawIndex % slideCount + slideCount) % slideCount;
};
var defaultButtonStyles = (disabled) => ({
  border: 0,
  background: "rgba(0,0,0,0.4)",
  color: "white",
  padding: 10,
  textTransform: "uppercase",
  opacity: disabled ? 0.3 : 1,
  cursor: disabled ? "not-allowed" : "pointer"
});
var prevButtonDisabled = ({
  cellAlign,
  currentSlide,
  slidesToShow,
  wrapAround
}) => {
  if (wrapAround) {
    return false;
  }
  if (currentSlide === 0) {
    return true;
  }
  if (cellAlign === "right" && currentSlide <= slidesToShow - 1) {
    return true;
  }
  return false;
};
var PreviousButton = ({
  previousSlide,
  defaultControlsConfig: {
    prevButtonClassName,
    prevButtonStyle = {},
    prevButtonText,
    prevButtonOnClick
  },
  onUserNavigation,
  previousDisabled: disabled
}) => {
  const handleClick = (event) => {
    prevButtonOnClick == null ? void 0 : prevButtonOnClick(event);
    if (event.defaultPrevented)
      return;
    onUserNavigation(event);
    event.preventDefault();
    previousSlide();
  };
  return (0, import_jsx_runtime3.jsx)(
    "button",
    {
      className: prevButtonClassName,
      style: __spreadValues(__spreadValues({}, defaultButtonStyles(disabled)), prevButtonStyle),
      disabled,
      onClick: handleClick,
      "aria-label": "previous",
      type: "button",
      children: prevButtonText || "Prev"
    }
  );
};
var nextButtonDisabled = ({
  cellAlign,
  currentSlide,
  slideCount,
  slidesToShow,
  wrapAround
}) => {
  if (wrapAround) {
    return false;
  }
  if (currentSlide >= slideCount - 1) {
    return true;
  }
  if (cellAlign === "left" && currentSlide >= slideCount - slidesToShow) {
    return true;
  }
  return false;
};
var NextButton = ({
  nextSlide,
  defaultControlsConfig: {
    nextButtonClassName,
    nextButtonStyle = {},
    nextButtonText,
    nextButtonOnClick
  },
  nextDisabled: disabled,
  onUserNavigation
}) => {
  const handleClick = (event) => {
    nextButtonOnClick == null ? void 0 : nextButtonOnClick(event);
    if (event.defaultPrevented)
      return;
    onUserNavigation(event);
    event.preventDefault();
    nextSlide();
  };
  return (0, import_jsx_runtime3.jsx)(
    "button",
    {
      className: nextButtonClassName,
      style: __spreadValues(__spreadValues({}, defaultButtonStyles(disabled)), nextButtonStyle),
      disabled,
      onClick: handleClick,
      "aria-label": "next",
      type: "button",
      children: nextButtonText || "Next"
    }
  );
};
var getDotIndexes = (slideCount, slidesToScroll, scrollMode, slidesToShow, wrapAround, cellAlign) => {
  const dotIndexes = [];
  const scrollSlides = slidesToScroll <= 0 ? 1 : slidesToScroll;
  if (wrapAround) {
    for (let i = 0; i < slideCount; i += scrollSlides) {
      dotIndexes.push(i);
    }
    return dotIndexes;
  }
  if (cellAlign === "center") {
    for (let i = 0; i < slideCount - 1; i += scrollSlides) {
      dotIndexes.push(i);
    }
    if (slideCount > 0) {
      dotIndexes.push(slideCount - 1);
    }
    return dotIndexes;
  }
  if (cellAlign === "left") {
    if (slidesToShow >= slideCount) {
      return [0];
    }
    const lastPossibleIndexWithoutWhitespace = slideCount - slidesToShow;
    for (let i = 0; i < lastPossibleIndexWithoutWhitespace; i += scrollSlides) {
      dotIndexes.push(i);
    }
    if (scrollMode === "remainder") {
      dotIndexes.push(lastPossibleIndexWithoutWhitespace);
    } else {
      dotIndexes.push(dotIndexes[dotIndexes.length - 1] + scrollSlides);
    }
    return dotIndexes;
  }
  if (cellAlign === "right") {
    if (slidesToShow >= slideCount) {
      return [slideCount - 1];
    }
    const firstPossibleIndexWithoutWhitespace = slidesToShow - 1;
    if (scrollMode === "remainder") {
      for (let i = firstPossibleIndexWithoutWhitespace; i < slideCount - 1; i += scrollSlides) {
        dotIndexes.push(i);
      }
      dotIndexes.push(slideCount - 1);
    } else {
      for (let i = slideCount - 1; i > firstPossibleIndexWithoutWhitespace; i -= scrollSlides) {
        dotIndexes.push(i);
      }
      dotIndexes.push(dotIndexes[dotIndexes.length - 1] - scrollSlides);
      dotIndexes.reverse();
    }
    return dotIndexes;
  }
  return dotIndexes;
};
var PagingDots = ({
  pagingDotsIndices,
  defaultControlsConfig: {
    pagingDotsContainerClassName,
    pagingDotsClassName,
    pagingDotsStyle = {},
    pagingDotsOnClick
  },
  currentSlide,
  onUserNavigation,
  slideCount,
  goToSlide
}) => {
  const listStyles = {
    position: "relative",
    top: -10,
    display: "flex",
    margin: 0,
    padding: 0,
    listStyleType: "none"
  };
  const getButtonStyles = (0, import_react5.useCallback)(
    (active) => ({
      cursor: "pointer",
      opacity: active ? 1 : 0.5,
      background: "transparent",
      border: "none",
      fill: "black"
    }),
    []
  );
  const currentSlideBounded = getBoundedIndex(currentSlide, slideCount);
  return (0, import_jsx_runtime3.jsx)("ul", { className: pagingDotsContainerClassName, style: listStyles, children: pagingDotsIndices.map((slideIndex, i) => {
    const isActive = currentSlideBounded === slideIndex || // sets navigation dots active if the current slide falls in the current index range
    currentSlideBounded < slideIndex && (i === 0 || currentSlideBounded > pagingDotsIndices[i - 1]);
    return (0, import_jsx_runtime3.jsx)(
      "li",
      {
        className: isActive ? "paging-item active" : "paging-item",
        children: (0, import_jsx_runtime3.jsx)(
          "button",
          {
            className: pagingDotsClassName,
            type: "button",
            style: __spreadValues(__spreadValues({}, getButtonStyles(isActive)), pagingDotsStyle),
            onClick: (event) => {
              pagingDotsOnClick == null ? void 0 : pagingDotsOnClick(event);
              if (event.defaultPrevented)
                return;
              onUserNavigation(event);
              goToSlide(slideIndex);
            },
            "aria-label": `slide ${slideIndex + 1} bullet`,
            "aria-selected": isActive,
            children: (0, import_jsx_runtime3.jsx)(
              "svg",
              {
                className: "paging-dot",
                width: "6",
                height: "6",
                "aria-hidden": "true",
                focusable: "false",
                viewBox: "0 0 6 6",
                children: (0, import_jsx_runtime3.jsx)("circle", { cx: "3", cy: "3", r: "3" })
              }
            )
          }
        )
      },
      slideIndex
    );
  }) });
};
var useTween = (durationMs, easingFunction, navigationNum, shouldInterrupt) => {
  const [normalizedTimeRaw, setNormalizedTime] = (0, import_react6.useState)(1);
  const startTime = (0, import_react6.useRef)(Date.now());
  const rAF = (0, import_react6.useRef)();
  const isFirstRender = (0, import_react6.useRef)(true);
  const lastNavigationNum = (0, import_react6.useRef)(null);
  const normalizedTime = lastNavigationNum.current === null || lastNavigationNum.current === navigationNum || shouldInterrupt ? normalizedTimeRaw : 0;
  (0, import_react6.useEffect)(() => {
    lastNavigationNum.current = navigationNum;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (shouldInterrupt) {
      return;
    }
    startTime.current = Date.now();
    setNormalizedTime(0);
    const tick = () => {
      rAF.current = requestAnimationFrame(() => {
        const currentTime = Date.now();
        const normalizedTime2 = Math.min(
          1,
          (currentTime - startTime.current) / durationMs
        );
        setNormalizedTime(normalizedTime2);
        if (normalizedTime2 < 1) {
          tick();
        } else {
          rAF.current = void 0;
        }
      });
    };
    tick();
    return () => {
      if (rAF.current !== void 0) {
        cancelAnimationFrame(rAF.current);
        setNormalizedTime(1);
      }
    };
  }, [navigationNum, durationMs, shouldInterrupt]);
  return {
    isAnimating: normalizedTime !== 1,
    value: easingFunction(normalizedTime)
  };
};
var getPercentOffsetForSlide = (currentSlide, slideCount, slidesToShow, cellAlign, wrapAround) => {
  const renderedSlideCount = wrapAround ? 3 * slideCount : slideCount;
  const singleSlidePercentOfWhole = 100 / renderedSlideCount;
  let slide0Offset = wrapAround ? -100 / 3 : 0;
  if (cellAlign === "right" && slidesToShow > 1) {
    const excessSlides = slidesToShow - 1;
    slide0Offset += singleSlidePercentOfWhole * excessSlides;
  }
  if (cellAlign === "center" && slidesToShow > 1) {
    const excessSlides = slidesToShow - 1;
    const excessLeftSlides = excessSlides / 2;
    slide0Offset += singleSlidePercentOfWhole * excessLeftSlides;
  }
  const currentSlideOffsetFrom0 = 100 / renderedSlideCount * currentSlide;
  return slide0Offset - currentSlideOffsetFrom0;
};
var SliderList = import_react4.default.forwardRef(
  ({
    animation,
    animationDistance,
    cellAlign,
    children,
    currentSlide,
    disableAnimation,
    disableEdgeSwiping,
    draggedOffset,
    easing,
    edgeEasing,
    isDragging,
    scrollMode,
    slideCount,
    slidesToScroll,
    slidesToShow,
    speed,
    wrapAround,
    slideWidth,
    setIsAnimating
  }, forwardedRef) => {
    const renderedSlideCount = wrapAround ? 3 * slideCount : slideCount;
    const listVisibleWidth = slideWidth ? `calc(${slideWidth} * ${renderedSlideCount})` : `${renderedSlideCount * 100 / slidesToShow}%`;
    const percentOffsetForSlideProps = [
      slideCount,
      slidesToShow,
      cellAlign,
      wrapAround
    ];
    const dotIndexes = getDotIndexes(
      slideCount,
      slidesToScroll,
      scrollMode,
      slidesToShow,
      wrapAround,
      cellAlign
    );
    let clampedDraggedOffset = `${draggedOffset}px`;
    if (isDragging && disableEdgeSwiping && !wrapAround) {
      const clampOffsets = [
        dotIndexes[0],
        dotIndexes[dotIndexes.length - 1]
      ].map(
        (index) => getPercentOffsetForSlide(index, ...percentOffsetForSlideProps)
      );
      clampedDraggedOffset = `clamp(${clampOffsets[1]}%, ${draggedOffset}px, ${clampOffsets[0]}%)`;
    }
    const slideBasedOffset = getPercentOffsetForSlide(
      currentSlide,
      ...percentOffsetForSlideProps
    );
    const isEdgeEasing = !disableEdgeSwiping && !wrapAround && (currentSlide === dotIndexes[0] && animationDistance < 0 || currentSlide === dotIndexes[dotIndexes.length - 1] && animationDistance > 0);
    const { value: transition, isAnimating } = useTween(
      speed,
      !isEdgeEasing ? easing : edgeEasing,
      // animationDistance is assumed to be unique enough that it can be used to
      // detect when a new animation should start. This is used in addition to
      // currentSlide because some animations, such as those with edgeEasing, do
      // not occur due to a change in value of currentSlide
      currentSlide + animationDistance,
      isDragging || disableAnimation || animation === "fade"
    );
    let positioning;
    if (isDragging || slideBasedOffset !== 0 || isAnimating) {
      if (isDragging) {
        positioning = `translateX(${clampedDraggedOffset})`;
      } else {
        const transitionOffset = isAnimating ? (1 - transition) * animationDistance : 0;
        positioning = `translateX(calc(${slideBasedOffset}% - ${transitionOffset}px))`;
      }
    }
    (0, import_react4.useEffect)(() => {
      setIsAnimating(isAnimating);
    }, [isAnimating, setIsAnimating]);
    return (0, import_jsx_runtime4.jsx)(
      "div",
      {
        ref: forwardedRef,
        className: "slider-list",
        style: {
          width: listVisibleWidth,
          textAlign: "left",
          userSelect: "auto",
          transform: positioning,
          display: "flex"
        },
        children
      }
    );
  }
);
SliderList.displayName = "SliderList";
var commonStyles = {
  position: "absolute",
  display: "flex",
  zIndex: 1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
var getControlContainerFlexStyles = (pos) => {
  let alignItems;
  switch (pos) {
    case "TopLeft":
    case "TopCenter":
    case "TopRight":
      alignItems = "flex-start";
      break;
    case "CenterLeft":
    case "CenterCenter":
    case "CenterRight":
      alignItems = "center";
      break;
    case "BottomLeft":
    case "BottomCenter":
    case "BottomRight":
      alignItems = "flex-end";
      break;
  }
  let justifyContent;
  switch (pos) {
    case "TopLeft":
    case "CenterLeft":
    case "BottomLeft":
      justifyContent = "flex-start";
      break;
    case "TopCenter":
    case "CenterCenter":
    case "BottomCenter":
      justifyContent = "center";
      break;
    case "TopRight":
    case "CenterRight":
    case "BottomRight":
      justifyContent = "flex-end";
      break;
  }
  return { alignItems, justifyContent };
};
var getControlContainerStyles = (pos) => {
  return __spreadValues(__spreadValues({}, getControlContainerFlexStyles(pos)), commonStyles);
};
var controlsMap = [
  {
    funcName: "renderTopLeftControls",
    key: "TopLeft"
    /* TopLeft */
  },
  {
    funcName: "renderTopCenterControls",
    key: "TopCenter"
    /* TopCenter */
  },
  {
    funcName: "renderTopRightControls",
    key: "TopRight"
    /* TopRight */
  },
  {
    funcName: "renderCenterLeftControls",
    key: "CenterLeft"
    /* CenterLeft */
  },
  {
    funcName: "renderCenterCenterControls",
    key: "CenterCenter"
    /* CenterCenter */
  },
  {
    funcName: "renderCenterRightControls",
    key: "CenterRight"
    /* CenterRight */
  },
  {
    funcName: "renderBottomLeftControls",
    key: "BottomLeft"
    /* BottomLeft */
  },
  {
    funcName: "renderBottomCenterControls",
    key: "BottomCenter"
    /* BottomCenter */
  },
  {
    funcName: "renderBottomRightControls",
    key: "BottomRight"
    /* BottomRight */
  }
];
var renderControls = (props, slideCount, currentSlide, goToSlide, nextSlide, prevSlide, slidesToScroll) => {
  if (props.withoutControls) {
    return null;
  }
  const disableCheckProps = __spreadProps(__spreadValues({}, props), {
    currentSlide,
    slideCount
  });
  const nextDisabled = nextButtonDisabled(disableCheckProps);
  const previousDisabled = prevButtonDisabled(disableCheckProps);
  const pagingDotsIndices = getDotIndexes(
    slideCount,
    slidesToScroll,
    props.scrollMode,
    props.slidesToShow,
    props.wrapAround,
    props.cellAlign
  );
  return controlsMap.map((control) => {
    var _a;
    if (!props[control.funcName] || typeof props[control.funcName] !== "function") {
      return (0, import_jsx_runtime5.jsx)(import_react7.Fragment, {}, control.funcName);
    }
    return (0, import_jsx_runtime5.jsx)(
      "div",
      {
        style: __spreadProps(__spreadValues({}, getControlContainerStyles(control.key)), {
          pointerEvents: "none"
        }),
        children: (0, import_jsx_runtime5.jsx)(
          "div",
          {
            className: [
              `slider-control-${control.key.toLowerCase()}`,
              props.defaultControlsConfig.containerClassName || ""
            ].join(" ").trim(),
            style: { pointerEvents: "auto" },
            children: (_a = props[control.funcName]) == null ? void 0 : _a.call(props, {
              cellAlign: props.cellAlign,
              cellSpacing: props.cellSpacing,
              currentSlide,
              defaultControlsConfig: props.defaultControlsConfig || {},
              pagingDotsIndices,
              goToSlide,
              nextDisabled,
              nextSlide,
              onUserNavigation: props.onUserNavigation,
              previousDisabled,
              previousSlide: prevSlide,
              scrollMode: props.scrollMode,
              slideCount,
              slidesToScroll,
              slidesToShow: props.slidesToShow || 1,
              vertical: props.vertical,
              wrapAround: props.wrapAround
            })
          }
        )
      },
      control.funcName
    );
  });
};
var controls_default = renderControls;
var easeOut = (t) => __pow(t - 1, 3) + 1;
var defaultProps = {
  adaptiveHeight: false,
  adaptiveHeightAnimation: true,
  afterSlide: () => {
  },
  autoplay: false,
  autoplayInterval: 3e3,
  autoplayReverse: false,
  beforeSlide: () => {
  },
  cellAlign: "left",
  cellSpacing: 0,
  defaultControlsConfig: {},
  disableAnimation: false,
  disableEdgeSwiping: false,
  dragging: true,
  dragThreshold: 0.5,
  easing: easeOut,
  edgeEasing: easeOut,
  enableKeyboardControls: false,
  frameAriaLabel: "carousel-slider",
  keyCodeConfig: {
    nextSlide: [39, 68, 38, 87],
    previousSlide: [37, 65, 40, 83],
    firstSlide: [81],
    lastSlide: [69],
    pause: [32]
  },
  onDragStart: () => {
  },
  onDrag: () => {
  },
  onDragEnd: () => {
  },
  onUserNavigation: () => {
  },
  pauseOnHover: true,
  renderAnnounceSlideMessage: defaultRenderAnnounceSlideMessage,
  renderBottomCenterControls: (props) => (0, import_jsx_runtime6.jsx)(PagingDots, __spreadValues({}, props)),
  renderCenterLeftControls: (props) => (0, import_jsx_runtime6.jsx)(PreviousButton, __spreadValues({}, props)),
  renderCenterRightControls: (props) => (0, import_jsx_runtime6.jsx)(NextButton, __spreadValues({}, props)),
  scrollMode: "page",
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  style: {},
  swiping: true,
  vertical: false,
  withoutControls: false,
  wrapAround: false,
  children: (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {})
};
var default_carousel_props_default = defaultProps;
var useStateWithRef = (initialState) => {
  const [value, setValue] = (0, import_react9.useState)(initialState);
  const valueRef = (0, import_react9.useRef)(initialState);
  const setValueAndRef = (0, import_react9.useCallback)((newValue) => {
    valueRef.current = newValue;
    setValue(newValue);
  }, []);
  return [value, setValueAndRef, valueRef];
};
var useFrameHeight = (adaptiveHeight, slidesToShow, slideCount) => {
  const [visibleHeights, setVisibleHeights, visibleHeightsRef] = useStateWithRef([]);
  const [initializedAdaptiveHeight, setInitializedAdaptiveHeight] = (0, import_react8.useState)(false);
  const handleVisibleSlideHeightChange = (0, import_react8.useCallback)(
    (slideIndex, height) => {
      const latestVisibleHeights = visibleHeightsRef.current;
      let newVisibleHeights;
      if (height === null) {
        newVisibleHeights = latestVisibleHeights.filter(
          (slideHeight) => slideHeight.slideIndex !== slideIndex
        );
      } else {
        newVisibleHeights = [...latestVisibleHeights, { slideIndex, height }];
      }
      setVisibleHeights(newVisibleHeights);
      if (newVisibleHeights.length >= Math.min(slideCount, Math.ceil(slidesToShow))) {
        setInitializedAdaptiveHeight(true);
      }
    },
    [slideCount, setVisibleHeights, slidesToShow, visibleHeightsRef]
  );
  const frameHeight = (0, import_react8.useMemo)(() => {
    if (adaptiveHeight) {
      if (!initializedAdaptiveHeight) {
        return "auto";
      }
      const maxHeight = Math.max(
        0,
        ...visibleHeights.map((height) => height.height)
      );
      return `${maxHeight}px`;
    } else {
      return "auto";
    }
  }, [adaptiveHeight, initializedAdaptiveHeight, visibleHeights]);
  return {
    handleVisibleSlideHeightChange,
    frameHeight,
    initializedAdaptiveHeight
  };
};
var useForwardRef = (ref) => {
  const targetRef = (0, import_react10.useRef)(null);
  (0, import_react10.useEffect)(() => {
    if (!ref)
      return;
    if (typeof ref === "function") {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);
  return targetRef;
};
var Carousel = import_react.default.forwardRef(
  (rawProps, ref) => {
    const props = rawProps;
    const {
      adaptiveHeight,
      adaptiveHeightAnimation,
      afterSlide,
      animation,
      autoplay,
      autoplayInterval,
      autoplayReverse,
      beforeSlide,
      cellAlign: propsCellAlign,
      cellSpacing,
      children,
      className,
      disableAnimation,
      dragging: desktopDraggingEnabled,
      dragThreshold: propsDragThreshold,
      enableKeyboardControls,
      frameAriaLabel,
      keyCodeConfig,
      onDrag,
      onDragEnd,
      onDragStart,
      onUserNavigation,
      pauseOnHover,
      renderAnnounceSlideMessage,
      scrollMode: propsScrollMode,
      slideIndex,
      slidesToScroll: propsSlidesToScroll,
      slidesToShow: propsSlidesToShow,
      slideWidth,
      speed,
      style,
      swiping: mobileDraggingEnabled,
      wrapAround,
      zoomScale
    } = props;
    const filteredSlides = import_react.default.Children.toArray(children).filter(Boolean);
    const slideCount = filteredSlides.length;
    const cellAlign = slideWidth || propsSlidesToScroll === "auto" ? "left" : propsCellAlign;
    const scrollMode = propsSlidesToScroll === "auto" ? "remainder" : propsScrollMode;
    const [slideIOEntries, setSlideIOEntries] = (0, import_react.useState)(
      /* @__PURE__ */ new Map()
    );
    const visibleCount = Array.from(slideIOEntries).filter(
      ([, visible]) => visible
    ).length;
    const [constantVisibleCount, setConstantVisibleCount] = (0, import_react.useState)(visibleCount);
    const slidesToShow = slideWidth ? constantVisibleCount : propsSlidesToShow;
    const slidesToScroll = animation === "fade" ? slidesToShow : propsSlidesToScroll === "auto" ? Math.max(constantVisibleCount, 1) : propsSlidesToScroll;
    const [currentSlide, setCurrentSlide] = (0, import_react.useState)(
      () => getDefaultSlideIndex(
        slideIndex,
        slideCount,
        slidesToShow,
        slidesToScroll,
        cellAlign,
        autoplayReverse,
        scrollMode
      )
    );
    const [pause, setPause] = (0, import_react.useState)(false);
    const [isDragging, setIsDragging] = (0, import_react.useState)(false);
    const [dragDistance, setDragDistance] = (0, import_react.useState)(0);
    const [animationDistance, setAnimationDistance] = (0, import_react.useState)(0);
    const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
    const updateSlideIOEntry = (0, import_react.useCallback)(
      (id, isFullyVisible) => {
        if (!!slideIOEntries.get(id) === isFullyVisible)
          return;
        setSlideIOEntries((prev) => {
          const newMap = new Map(prev);
          newMap.set(id, isFullyVisible);
          return newMap;
        });
      },
      [slideIOEntries]
    );
    const prevDragged = (0, import_react.useRef)(false);
    (0, import_react.useEffect)(() => {
      if (isDragging)
        prevDragged.current = true;
      if (!(isDragging || isAnimating)) {
        if (!prevDragged.current)
          setConstantVisibleCount(visibleCount);
        prevDragged.current = false;
      }
    }, [isAnimating, isDragging, visibleCount]);
    const prevXPosition = (0, import_react.useRef)(null);
    const preDragOffset = (0, import_react.useRef)(0);
    const sliderListRef = (0, import_react.useRef)(null);
    const defaultCarouselRef = (0, import_react.useRef)(null);
    const autoplayTimeout = (0, import_react.useRef)();
    const autoplayLastTriggeredRef = (0, import_react.useRef)(null);
    const isMounted = (0, import_react.useRef)(true);
    const setSliderListRef = (0, import_react.useCallback)((node) => {
      if (node) {
        node.querySelectorAll(".slider-list img").forEach((el) => el.setAttribute("draggable", "false"));
      }
      sliderListRef.current = node;
    }, []);
    (0, import_react.useEffect)(() => {
      isMounted.current = true;
      return () => {
        isMounted.current = false;
      };
    }, []);
    const forwardedRef = useForwardRef(ref);
    const carouselRef = forwardedRef || defaultCarouselRef;
    const goToSlide = (0, import_react.useCallback)(
      (targetSlideUnbounded) => {
        if (!sliderListRef.current || !carouselRef.current)
          return;
        const targetSlideBounded = getBoundedIndex(
          targetSlideUnbounded,
          slideCount
        );
        const slideChanged = targetSlideUnbounded !== currentSlide;
        slideChanged && beforeSlide(currentSlide, targetSlideBounded);
        const currentOffset = sliderListRef.current.getBoundingClientRect().left - carouselRef.current.getBoundingClientRect().left;
        const sliderWidth = sliderListRef.current.offsetWidth;
        let targetOffset = getPercentOffsetForSlide(
          targetSlideBounded,
          slideCount,
          slidesToShow,
          cellAlign,
          wrapAround
        ) / 100 * sliderWidth;
        if (wrapAround) {
          const slideSetWidth = sliderWidth / 3;
          if (targetSlideUnbounded < 0) {
            targetOffset += slideSetWidth;
          }
          if (targetSlideUnbounded >= slideCount) {
            targetOffset -= slideSetWidth;
          }
        }
        setAnimationDistance(targetOffset - currentOffset);
        if (slideChanged) {
          setCurrentSlide(targetSlideBounded);
          const msToEndOfAnimation = !disableAnimation ? speed || 500 : 40;
          setTimeout(() => {
            if (!isMounted.current)
              return;
            afterSlide(targetSlideBounded);
          }, msToEndOfAnimation);
        }
      },
      [
        afterSlide,
        beforeSlide,
        carouselRef,
        cellAlign,
        currentSlide,
        disableAnimation,
        speed,
        slideCount,
        slidesToShow,
        wrapAround
      ]
    );
    const nextSlide = (0, import_react.useCallback)(() => {
      const nextSlideIndex = getNextMoveIndex(
        scrollMode,
        wrapAround,
        currentSlide,
        slideCount,
        slidesToScroll,
        slidesToShow,
        cellAlign
      );
      if (currentSlide !== nextSlideIndex) {
        goToSlide(nextSlideIndex);
      }
    }, [
      cellAlign,
      currentSlide,
      goToSlide,
      slidesToScroll,
      scrollMode,
      slideCount,
      slidesToShow,
      wrapAround
    ]);
    const prevSlide = (0, import_react.useCallback)(() => {
      const prevSlideIndex = getPrevMoveIndex(
        scrollMode,
        wrapAround,
        currentSlide,
        slidesToScroll,
        slidesToShow,
        cellAlign
      );
      if (currentSlide !== prevSlideIndex) {
        goToSlide(prevSlideIndex);
      }
    }, [
      cellAlign,
      currentSlide,
      goToSlide,
      slidesToScroll,
      scrollMode,
      slidesToShow,
      wrapAround
    ]);
    const prevMovedToSlideIndex = (0, import_react.useRef)(slideIndex);
    (0, import_react.useEffect)(() => {
      if (slideIndex !== void 0 && slideIndex !== prevMovedToSlideIndex.current && !autoplayReverse) {
        goToSlide(slideIndex);
        prevMovedToSlideIndex.current = slideIndex;
      }
    }, [slideIndex, autoplayReverse, goToSlide]);
    (0, import_react.useEffect)(() => {
      let pauseStarted = null;
      if (pause) {
        pauseStarted = Date.now();
      }
      return () => {
        if (pauseStarted !== null && autoplayLastTriggeredRef.current !== null) {
          autoplayLastTriggeredRef.current += Date.now() - pauseStarted;
        }
      };
    }, [pause]);
    (0, import_react.useEffect)(() => {
      if (autoplay && !pause) {
        const adjustedTimeoutMs = autoplayLastTriggeredRef.current !== null ? autoplayInterval - (Date.now() - autoplayLastTriggeredRef.current) : autoplayInterval;
        autoplayTimeout.current = setTimeout(() => {
          autoplayLastTriggeredRef.current = Date.now();
          if (autoplayReverse) {
            prevSlide();
          } else {
            nextSlide();
          }
        }, adjustedTimeoutMs);
      }
      if (autoplay && pause) {
        clearTimeout(autoplayTimeout.current);
      }
      return () => {
        clearTimeout(autoplayTimeout.current);
      };
    }, [
      pause,
      autoplay,
      autoplayInterval,
      autoplayReverse,
      prevSlide,
      nextSlide
    ]);
    const onKeyDown = (event) => {
      let keyCommand = null;
      Object.keys(keyCodeConfig).forEach(
        (command) => {
          var _a;
          if ((_a = keyCodeConfig[command]) == null ? void 0 : _a.includes(event.keyCode)) {
            keyCommand = command;
          }
        }
      );
      if (keyCommand === null)
        return;
      event.preventDefault();
      event.stopPropagation();
      switch (keyCommand) {
        case "nextSlide":
          onUserNavigation(event);
          nextSlide();
          break;
        case "previousSlide":
          onUserNavigation(event);
          prevSlide();
          break;
        case "firstSlide":
        case "lastSlide": {
          onUserNavigation(event);
          const dotIndices = getDotIndexes(
            slideCount,
            slidesToScroll,
            scrollMode,
            slidesToShow,
            wrapAround,
            cellAlign
          );
          if (keyCommand === "firstSlide") {
            goToSlide(dotIndices[0]);
          } else {
            goToSlide(dotIndices[dotIndices.length - 1]);
          }
          break;
        }
        case "pause":
          setPause((p) => !p);
          break;
      }
    };
    const dragPositions = (0, import_react.useRef)([]);
    const handleDragEnd = (e) => {
      if (!isDragging || !carouselRef.current)
        return;
      setIsDragging(false);
      let distanceFromInertia = 0;
      if (dragPositions.current.length > 1) {
        const startMove = dragPositions.current[0];
        const endMove = dragPositions.current[dragPositions.current.length - 1];
        const timeOffset = endMove.time - startMove.time;
        const goodInertiaFeelConstant = 9;
        const goodFrictionFeelConstant = 0.92;
        const initialVelocity = goodInertiaFeelConstant * Math.abs((endMove.pos - startMove.pos) / timeOffset);
        let velocity = initialVelocity;
        while (Math.abs(velocity) > 1) {
          distanceFromInertia += velocity;
          velocity *= goodFrictionFeelConstant;
        }
      }
      dragPositions.current = [];
      const adjustedDragDistance = Math.abs(dragDistance) + Math.abs(distanceFromInertia);
      onDragEnd(e);
      prevXPosition.current = null;
      setDragDistance(0);
      const oneScrollWidth = carouselRef.current.offsetWidth * Math.min(1, slidesToScroll / slidesToShow);
      const dragThreshold = oneScrollWidth * propsDragThreshold;
      if (adjustedDragDistance < dragThreshold) {
        goToSlide(currentSlide);
        return;
      }
      const canMaintainVisualContinuity = slidesToShow >= 2 * slidesToScroll;
      const timesToMove = canMaintainVisualContinuity ? 1 + Math.floor((adjustedDragDistance - dragThreshold) / oneScrollWidth) : 1;
      let nextSlideIndex = currentSlide;
      for (let index = 0; index < timesToMove; index += 1) {
        if (dragDistance > 0) {
          nextSlideIndex = getNextMoveIndex(
            scrollMode,
            wrapAround,
            nextSlideIndex,
            slideCount,
            slidesToScroll,
            slidesToShow,
            cellAlign
          );
        } else {
          nextSlideIndex = getPrevMoveIndex(
            scrollMode,
            wrapAround,
            nextSlideIndex,
            slidesToScroll,
            slidesToShow,
            cellAlign
          );
        }
      }
      if (nextSlideIndex !== currentSlide) {
        onUserNavigation(e);
      }
      goToSlide(nextSlideIndex);
    };
    const onTouchStart = (0, import_react.useCallback)(
      (e) => {
        if (!mobileDraggingEnabled || !sliderListRef.current || !carouselRef.current) {
          return;
        }
        setIsDragging(true);
        preDragOffset.current = sliderListRef.current.getBoundingClientRect().left - carouselRef.current.getBoundingClientRect().left;
        onDragStart(e);
      },
      [carouselRef, onDragStart, mobileDraggingEnabled]
    );
    const handlePointerMove = (0, import_react.useCallback)(
      (xPosition) => {
        if (!isDragging)
          return;
        const isFirstMove = prevXPosition.current === null;
        const delta = prevXPosition.current !== null ? xPosition - prevXPosition.current : 0;
        const nextDragDistance = dragDistance + delta;
        const now = Date.now();
        while (dragPositions.current.length > 0) {
          if (now - dragPositions.current[0].time <= 100) {
            break;
          }
          dragPositions.current.shift();
        }
        dragPositions.current.push({ pos: nextDragDistance, time: now });
        if (!isFirstMove) {
          setDragDistance(nextDragDistance);
        }
        prevXPosition.current = xPosition;
      },
      [isDragging, dragDistance]
    );
    const onTouchMove = (0, import_react.useCallback)(
      (e) => {
        if (!isDragging || !carouselRef.current)
          return;
        onDragStart(e);
        const moveValue = carouselRef.current.offsetWidth - e.touches[0].pageX;
        handlePointerMove(moveValue);
      },
      [isDragging, carouselRef, handlePointerMove, onDragStart]
    );
    const onMouseDown = (0, import_react.useCallback)(
      (e) => {
        if (!desktopDraggingEnabled || !sliderListRef.current || !carouselRef.current)
          return;
        setIsDragging(true);
        preDragOffset.current = sliderListRef.current.getBoundingClientRect().left - carouselRef.current.getBoundingClientRect().left;
        onDragStart(e);
      },
      [carouselRef, desktopDraggingEnabled, onDragStart]
    );
    const onMouseMove = (0, import_react.useCallback)(
      (e) => {
        if (!isDragging || !carouselRef.current)
          return;
        onDrag(e);
        const offsetX = e.clientX - carouselRef.current.getBoundingClientRect().left;
        const moveValue = carouselRef.current.offsetWidth - offsetX;
        handlePointerMove(moveValue);
      },
      [carouselRef, isDragging, handlePointerMove, onDrag]
    );
    const onMouseUp = (e) => {
      e.preventDefault();
      handleDragEnd(e);
    };
    const onMouseEnter = (0, import_react.useCallback)(() => {
      if (pauseOnHover) {
        setPause(true);
      }
    }, [pauseOnHover]);
    const onMouseLeave = (0, import_react.useCallback)(() => {
      if (pauseOnHover) {
        setPause(false);
      }
    }, [pauseOnHover]);
    const {
      frameHeight,
      handleVisibleSlideHeightChange,
      initializedAdaptiveHeight
    } = useFrameHeight(adaptiveHeight, slidesToShow, slideCount);
    const renderSlides = (typeOfSlide) => {
      const slides = filteredSlides.map((child, index) => {
        return (0, import_jsx_runtime7.jsx)(
          slide_default,
          {
            id: `${typeOfSlide}-${index}`,
            count: slideCount,
            index,
            isCurrentSlide: currentSlide === index,
            typeOfSlide,
            wrapAround,
            cellSpacing,
            animation,
            speed,
            zoomScale,
            onVisibleSlideHeightChange: handleVisibleSlideHeightChange,
            slideWidth,
            updateIOEntry: updateSlideIOEntry,
            adaptiveHeight,
            initializedAdaptiveHeight,
            carouselRef,
            children: child
          },
          `${typeOfSlide}-${index}`
        );
      });
      return slides;
    };
    return (0, import_jsx_runtime7.jsxs)(
      "div",
      {
        className: "slider-container",
        style: {
          position: "relative"
        },
        onMouseEnter,
        onMouseLeave,
        children: [
          (0, import_jsx_runtime7.jsx)(
            announce_slide_default,
            {
              ariaLive: autoplay && !pause ? "off" : "polite",
              message: renderAnnounceSlideMessage({
                currentSlide,
                count: slideCount
              })
            }
          ),
          controls_default(
            props,
            slideCount,
            currentSlide,
            goToSlide,
            nextSlide,
            prevSlide,
            slidesToScroll
          ),
          (0, import_jsx_runtime7.jsx)(
            "div",
            {
              className: ["slider-frame", className || ""].join(" ").trim(),
              style: __spreadValues({
                overflow: "hidden",
                width: "100%",
                position: "relative",
                outline: "none",
                touchAction: "pan-y",
                height: frameHeight,
                transition: adaptiveHeightAnimation ? "height 300ms ease-in-out" : void 0,
                willChange: "height",
                userSelect: "none"
              }, style),
              "aria-label": frameAriaLabel,
              role: "region",
              tabIndex: enableKeyboardControls ? 0 : -1,
              onKeyDown: enableKeyboardControls ? onKeyDown : void 0,
              ref: carouselRef,
              onMouseUp,
              onMouseDown,
              onMouseMove,
              onMouseLeave: onMouseUp,
              onTouchStart,
              onTouchEnd: handleDragEnd,
              onTouchMove,
              children: (0, import_jsx_runtime7.jsxs)(
                SliderList,
                {
                  animationDistance,
                  cellAlign,
                  currentSlide,
                  disableEdgeSwiping: props.disableEdgeSwiping,
                  draggedOffset: preDragOffset.current - dragDistance,
                  disableAnimation,
                  easing: props.easing,
                  edgeEasing: props.edgeEasing,
                  isDragging,
                  ref: setSliderListRef,
                  scrollMode,
                  animation,
                  slideCount,
                  slidesToScroll,
                  slidesToShow,
                  speed,
                  slideWidth,
                  wrapAround,
                  setIsAnimating,
                  children: [
                    wrapAround ? renderSlides("prev-cloned") : null,
                    renderSlides(),
                    wrapAround ? renderSlides("next-cloned") : null
                  ]
                }
              )
            }
          )
        ]
      }
    );
  }
);
Carousel.defaultProps = default_carousel_props_default;
Carousel.displayName = "Carousel";
export {
  Alignment,
  Directions,
  NextButton,
  PagingDots,
  Positions,
  PreviousButton,
  ScrollMode,
  Carousel as default
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=nuka-carousel.js.map
