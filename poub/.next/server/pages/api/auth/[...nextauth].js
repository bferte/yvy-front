(function() {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 1072:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _nextauth_; }
});

;// CONCATENATED MODULE: external "next-auth"
var external_next_auth_namespaceObject = require("next-auth");;
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
var providers_namespaceObject = require("next-auth/providers");;
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



const options = {
  providers: [providers_default().Credentials({
    name: 'Credentials',
    credentials: {
      username: {
        label: "Email",
        type: "email",
        placeholder: "jsmith"
      },
      password: {
        label: "Password",
        type: "password"
      }
    },
    authorize: async credentials => {
      try {
        const user = await external_axios_default().post(`${"http://localhost:1337"}/auth/local`, {
          identifier: credentials.username,
          password: credentials.password
        });

        if (user.data) {
          return user.data;
        } else {
          return null;
        }
      } catch (error) {
        const errorMessage = error.response.data.message[0].messages[0].message;
        throw new Error(errorMessage);
      }
    }
  })],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true
  },
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.jwt = user.jwt;
        token.user = user.user;
      }

      return Promise.resolve(token);
    },
    session: async (session, token) => {
      session.jwt = token.jwt;
      session.user = token.user;
      return Promise.resolve(session);
    }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  }
};

const Auth = (req, res) => external_next_auth_default()(req, res, options);

/* harmony default export */ var _nextauth_ = (Auth);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1072));
module.exports = __webpack_exports__;

})();