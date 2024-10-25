'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Button = _interopDefault(require('@material-ui/core/Button'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var DialogContentText = _interopDefault(require('@material-ui/core/DialogContentText'));
var DialogTitle = _interopDefault(require('@material-ui/core/DialogTitle'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ConfirmContext = React.createContext();

var ConfirmationDialog = function ConfirmationDialog(_ref) {
  var open = _ref.open,
      options = _ref.options,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      onClose = _ref.onClose;
  var title = options.title,
      description = options.description,
      content = options.content,
      confirmationText = options.confirmationText,
      cancellationText = options.cancellationText,
      dialogProps = options.dialogProps,
      confirmationButtonProps = options.confirmationButtonProps,
      cancellationButtonProps = options.cancellationButtonProps,
      titleProps = options.titleProps,
      contentProps = options.contentProps,
      allowClose = options.allowClose;
  return /*#__PURE__*/React__default.createElement(Dialog, _extends({
    fullWidth: true
  }, dialogProps, {
    open: open,
    onClose: allowClose ? onClose : null
  }), title && /*#__PURE__*/React__default.createElement(DialogTitle, titleProps, title), content ? /*#__PURE__*/React__default.createElement(DialogContent, contentProps, content) : description && /*#__PURE__*/React__default.createElement(DialogContent, contentProps, /*#__PURE__*/React__default.createElement(DialogContentText, null, description)), /*#__PURE__*/React__default.createElement(DialogActions, null, /*#__PURE__*/React__default.createElement(Button, _extends({}, cancellationButtonProps, {
    onClick: onCancel
  }), cancellationText), /*#__PURE__*/React__default.createElement(Button, _extends({
    color: "primary"
  }, confirmationButtonProps, {
    onClick: onConfirm
  }), confirmationText)));
};

var DEFAULT_OPTIONS = {
  title: 'Are you sure?',
  description: '',
  content: null,
  confirmationText: 'Ok',
  cancellationText: 'Cancel',
  dialogProps: {},
  confirmationButtonProps: {},
  cancellationButtonProps: {},
  titleProps: {},
  contentProps: {},
  allowClose: true
};

var buildOptions = function buildOptions(defaultOptions, options) {
  var dialogProps = _objectSpread2(_objectSpread2({}, defaultOptions.dialogProps || DEFAULT_OPTIONS.dialogProps), options.dialogProps || {});

  var confirmationButtonProps = _objectSpread2(_objectSpread2({}, defaultOptions.confirmationButtonProps || DEFAULT_OPTIONS.confirmationButtonProps), options.confirmationButtonProps || {});

  var cancellationButtonProps = _objectSpread2(_objectSpread2({}, defaultOptions.cancellationButtonProps || DEFAULT_OPTIONS.cancellationButtonProps), options.cancellationButtonProps || {});

  var titleProps = _objectSpread2(_objectSpread2({}, defaultOptions.titleProps || DEFAULT_OPTIONS.titleProps), options.titleProps || {});

  var contentProps = _objectSpread2(_objectSpread2({}, defaultOptions.contentProps || DEFAULT_OPTIONS.contentProps), options.contentProps || {});

  return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, DEFAULT_OPTIONS), defaultOptions), options), {}, {
    dialogProps: dialogProps,
    confirmationButtonProps: confirmationButtonProps,
    cancellationButtonProps: cancellationButtonProps,
    titleProps: titleProps,
    contentProps: contentProps
  });
};

var ConfirmProvider = function ConfirmProvider(_ref) {
  var children = _ref.children,
      _ref$defaultOptions = _ref.defaultOptions,
      defaultOptions = _ref$defaultOptions === void 0 ? {} : _ref$defaultOptions;

  var _useState = React.useState(_objectSpread2(_objectSpread2({}, DEFAULT_OPTIONS), defaultOptions)),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      resolveReject = _useState4[0],
      setResolveReject = _useState4[1];

  var _resolveReject = _slicedToArray(resolveReject, 2),
      resolve = _resolveReject[0],
      reject = _resolveReject[1];

  var confirm = React.useCallback(function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      setOptions(buildOptions(defaultOptions, options));
      setResolveReject([resolve, reject]);
    });
  }, []);
  var handleClose = React.useCallback(function () {
    setResolveReject([]);
  }, []);
  var handleCancel = React.useCallback(function () {
    reject();
    handleClose();
  }, [reject, handleClose]);
  var handleConfirm = React.useCallback(function () {
    resolve();
    handleClose();
  }, [resolve, handleClose]);
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(ConfirmContext.Provider, {
    value: confirm
  }, children), /*#__PURE__*/React__default.createElement(ConfirmationDialog, {
    open: resolveReject.length === 2,
    options: options,
    onClose: handleClose,
    onCancel: handleCancel,
    onConfirm: handleConfirm
  }));
};

var useConfirm = function useConfirm() {
  var confirm = React.useContext(ConfirmContext);
  return confirm;
};

exports.ConfirmProvider = ConfirmProvider;
exports.useConfirm = useConfirm;
