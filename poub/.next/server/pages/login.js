(function() {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 964:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);





function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Button = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "224067984",
      dynamic: [props.margin ? props.margin : '0px', props.width ? props.width : '185px', props.color ? props.color : 'white', props.backgroundColor ? props.backgroundColor : 'var(--lightGreen)', props.border ? props.border : 'none'],
      children: [`button.__jsx-style-dynamic-selector{border-radius:24px;margin:${props.margin ? props.margin : '0px'};width:${props.width ? props.width : '185px'};height:42px;font-family:"hero-new";color:${props.color ? props.color : 'white'};background:${props.backgroundColor ? props.backgroundColor : 'var(--lightGreen)'};border:${props.border ? props.border : 'none'};font-weight:bold;}`]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      onClick: props.clickEvent,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["224067984", [props.margin ? props.margin : '0px', props.width ? props.width : '185px', props.color ? props.color : 'white', props.backgroundColor ? props.backgroundColor : 'var(--lightGreen)', props.border ? props.border : 'none']]]),
      children: children
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Button);

/***/ }),

/***/ 6133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(964);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Login() {
  const {
    0: credentials,
    1: setCredentials
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    username: '',
    password: ''
  });
  const {
    0: loginError,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  function handleUpdate(update) {
    setCredentials(_objectSpread(_objectSpread({}, credentials), update));
  }

  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: codeCompany,
    1: setCodeCompany
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: firstName,
    1: setFirstName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: lastName,
    1: setLastName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: codeError,
    1: setCodeError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');

  async function handleRegister() {
    const registerInfo = {
      username: email,
      email: email,
      password: password,
      codeCompany: codeCompany,
      firstName: firstName,
      lastName: lastName
    };
    console.log(registerInfo);
    const register = await fetch(`${"http://localhost:1337"}/auth/local/register`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerInfo)
    });
    const registerResponse = await register.json();
    console.log(registerResponse);
  }

  const setAndCheckCompany = e => {
    if (e.value.length > 4 || e.value.length < 4) {
      setCodeError("Le code doit contenir 4 chiffres");
      setCodeCompany(e.value);
    } else {
      setCodeError('');
      setCodeCompany(e.value);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3598971150",
      children: [".loginContainer{width:700px;height:1170px;box-shadow:0px 3px 20px #00000029;border-radius:70px;padding:71px 84px;}", "h3{font-size:34px;font-family:var(--font1);color:var(--darkGreen);margin-bottom:0;}", ".inputContainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".inputLogin{width:100%;margin:38px 0 0 0;}", ".inputLoginCodeCompany{width:100%;margin:38px 0 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".inputLoginCodeCompany input{width:30%;}", ".nameInput{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}", ".nameInput .inputLogin{width:40%;}", "label{font-family:var(--font2);font-size:20px;color:var(--darkGreen);text-align:left;display:block;font-weight:500;}", "input{width:100%;background-color:rgba(123,170,104,0.3);height:49px;padding:0px 32px;border-radius:50px;border:none;font-size:17px;color:var(--textBlack);}"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-3598971150" + " " + "loginContainer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-3598971150" + " " + "inputContainer",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
          className: "jsx-3598971150",
          children: "Connexion"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3598971150" + " " + "inputLogin",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "username",
            className: "jsx-3598971150",
            children: "E-mail"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            name: "username",
            type: "email",
            onChange: e => handleUpdate({
              username: e.target.value
            }),
            className: "jsx-3598971150"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3598971150" + " " + "inputLogin",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "password",
            className: "jsx-3598971150",
            children: "Password"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            name: "password",
            type: "password",
            onChange: e => handleUpdate({
              password: e.target.value
            }),
            className: "jsx-3598971150"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "jsx-3598971150",
          children: loginError
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          margin: "30px",
          clickEvent: async () => {
            const response = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signIn)('credentials', _objectSpread({
              redirect: false
            }, credentials));

            if (response.error) {
              setError(response.error);
            } else if (response.ok) {
              router.push("/");
            }
          },
          children: "Je me connecte"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-3598971150" + " " + "inputContainer",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
          className: "jsx-3598971150",
          children: "Inscription"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3598971150" + " " + "inputLoginCodeCompany",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3598971150",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "email",
              className: "jsx-3598971150",
              children: "Code entreprise"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-3598971150",
              children: "Code de 4 chiffres donn\xE9 par votre entreprise, il faut que celle-ci soit partenaire"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "jsx-3598971150"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            name: "codeCompany",
            type: "number",
            onChange: e => setAndCheckCompany(e.target),
            value: codeCompany,
            className: "jsx-3598971150"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          style: {
            color: 'red',
            fontSize: "12px"
          },
          className: "jsx-3598971150",
          children: codeError
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3598971150" + " " + "inputLogin",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "email",
            className: "jsx-3598971150",
            children: "E-mail"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            name: "email",
            type: "email",
            onChange: e => setEmail(e.target.value),
            value: email,
            placeholder: "Email",
            className: "jsx-3598971150"
          }), console.log(email)]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3598971150" + " " + "inputLogin",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "password",
            className: "jsx-3598971150",
            children: "Password"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            name: "password",
            type: "password",
            onChange: e => setPassword(e.target.value),
            value: password,
            placeholder: "Password",
            className: "jsx-3598971150"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3598971150" + " " + "nameInput",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3598971150" + " " + "inputLogin",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "firstName",
              className: "jsx-3598971150",
              children: "Pr\xE9nom"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              name: "firstName",
              type: "text",
              onChange: e => setFirstName(e.target.value),
              value: firstName,
              placeholder: "Pr\xE9nom",
              className: "jsx-3598971150"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3598971150" + " " + "inputLogin",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "lastName",
              className: "jsx-3598971150",
              children: "Nom"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              name: "lastName",
              type: "text",
              onChange: e => setLastName(e.target.value),
              value: lastName,
              placeholder: "Nom",
              className: "jsx-3598971150"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          margin: "30px",
          clickEvent: () => handleRegister(),
          children: "Je m'inscris"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 8104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6133));
module.exports = __webpack_exports__;

})();