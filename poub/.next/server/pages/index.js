(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 8047:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const BasketCard = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "jsx-3335635622" + " " + 'cardBasket',
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3335635622",
      children: [".cardBasket.jsx-3335635622{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:255px;margin:15px;}", ".imgBasket.jsx-3335635622{height:238px;width:238px;box-shadow:0px 3px 20px #00000029;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:25px;margin:0;}", ".basketName.jsx-3335635622{color:var(--darkGreen);font-weight:bold;font-size:20px;}", ".price.jsx-3335635622{color:var(--yellow);font-weight:bold;}", "img.jsx-3335635622{height:165px;}", ".txtBasketCard.jsx-3335635622{font-family:var(--font2);margin-top:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}", ".txtBasketCard.jsx-3335635622 span.jsx-3335635622{display:inline-block;text-align:center;}", ".txtBasketCard.jsx-3335635622 p.jsx-3335635622{margin-top:15px;}", ".txtBasketCard.jsx-3335635622 a.jsx-3335635622{color:var(--lightGreen);-webkit-text-decoration:underline;text-decoration:underline;}"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "jsx-3335635622" + " " + "imgBasket",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: props.img,
        alt: "logo panier",
        className: "jsx-3335635622"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-3335635622" + " " + "txtBasketCard",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "jsx-3335635622" + " " + "basketName",
        children: children
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "jsx-3335635622" + " " + "price",
        children: ["\xC0 partir de ", props.price, "\u20AC"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "jsx-3335635622",
        children: props.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: "#",
        className: "jsx-3335635622",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "11.115",
          viewBox: "0 0 18 11.115",
          className: "jsx-3335635622",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            id: "Icon_material-keyboard-arrow-down",
            "data-name": "Icon material-keyboard-arrow-down",
            d: "M11.115,11.76,18,18.63l6.885-6.87L27,13.875l-9,9-9-9Z",
            transform: "translate(-9 -11.76)",
            fill: "#7baa68",
            className: "jsx-3335635622"
          })
        }), "Voir le panier de la semaine"]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (BasketCard);

/***/ }),

/***/ 8474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(964);
/* harmony import */ var _components_common_basketCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8047);








function Home() {
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3201061060",
      children: [".rootIndex{width:100%;}", "main{margin :auto;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".containerResume{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;margin :0 375px;}", ".resume h2{color :var(--darkGreen);}", ".resume{height:700px;width:586px;margin-right:85px;}", ".basketFull{background-image:url('basketFull.png');background-repeat:no-repeat;background-size:cover;background-position:center;width:50%;right:0;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;z-index:-1;}", ".containerBaskets{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}", ".containerBaskets button{margin-bottom:51px;}", "h3{text-align:center;font-weight:400;font-size:35px;margin-bottom:20px;margin-top:35px;}", ".navBaskets{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".containerImg{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".containerImg img{width:28%;margin:38.5px;}", ".howWork{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}", ".howWork{width:1000px;}", ".howWork h3{margin-bottom:16px;}", ".howWork h4{color:var(--lightGreen);margin-top:0;margin-bottom:23px;}", ".howWork p{margin-top :0;}", ".ourProducers{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;max-width:1100px;margin-top:90px;margin-bottom:120px;}", ".ourProducers iframe{border-radius:66px;margin-left:100px;height:343px;}", ".orangeContainer{height:618px;background-image:url('orangeT.svg');background-repeat:no-repeat;background-size:cover;background-position:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".orangeContent{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;top:100px;color:var(--white);}", ".orangeContent h3{margin-top:15px;}", ".listAdvantage{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".advantage{margin:0 58px;}", ".advantage h5{font-size:25px;font-family:var(--font1);height:40px;text-align:center;margin-top:-30px;text-align:left;}", "#timeAdv::before{content:url(\"icon-time.svg\");position:relative;top:29px;right:62px;}", "#priceAdv::before{content:url(\"icon-euro.svg\");position:relative;top:29px;right:62px;}", "#ecoAdv::before{content:url(\"icon-leaf.svg\");position:relative;top:29px;right:62px;}", ".guaranteeContainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".guarantee{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:52px 20px 0 20px;text-align:center;}", ".guarantee h5{font-family:\"hero-new\";margin :5px 0;color:var(--darkGreen);}", ".guarantee img{height:80px;margin :0 0 5px 0;}", ".guarantee p{margin:0;}"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "jsx-3201061060" + " " + "rootIndex",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "jsx-3201061060",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3201061060" + " " + "containerResume",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3201061060" + " " + "resume",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
              className: "jsx-3201061060",
              children: "Le plaisir de la bonne cuisine sans la corv\xE9e des courses !"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-3201061060",
              children: "Des bons produits locaux pour concocter des recettes simples et d\xE9licieuses, livr\xE9s dans votre entreprise, \xE0 partir de X,XX \u20AC par repas."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              href: "login",
              className: "jsx-3201061060",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                children: "Je cr\xE9\xE9 un compte"
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "jsx-3201061060" + " " + "basketFull"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3201061060" + " " + "containerBaskets",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: "jsx-3201061060",
            children: "Nos paniers"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3201061060" + " " + "navBaskets",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_basketCard__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              img: "basket/panier-classique.png",
              price: "12,50",
              description: "Fruits et l\xE9gumes de saison pour la semaine",
              children: "Le classique"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_basketCard__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              img: "basket/panier-laitier.png",
              price: "20",
              description: "Fruits et l\xE9gumes de saison avec du lait, des \u0153ufs et du fromage",
              children: "Le laitier"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_basketCard__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              img: "basket/panier-complet.png",
              price: "26",
              description: "Le panier classique et laitier r\xE9unis avec de la viande",
              children: "Le complet"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_basketCard__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              img: "basket/panier-repas.png",
              price: "16",
              description: "Panier pour composer des recettes de saison",
              children: "Le sp\xE9ciale recette"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            children: "Voir tous les paniers"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          id: "howWork",
          className: "jsx-3201061060" + " " + "howWork",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: "jsx-3201061060",
            children: "Comment \xE7a marche"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: "jsx-3201061060",
            children: "C\u2019est simple comme bonjour"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "jsx-3201061060",
            children: "Par abonnement ou \xE0 l\u2019unit\xE9, choisissez la formule qui vous pla\xEEt ! Des bons petits paniers de produits locaux livr\xE9 au bureau. Plus besoin de courir faire ses courses, elles arrivent \xE0 vous. Nous choisissons pour vous des produits de haute qualit\xE9 \xE0 nos producteurs partenaires. Commandez votre panier YVY en quelques clics, il sera livr\xE9 \xE0 l\u2019avance ou pour le jour J."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "howWorkPict.svg",
            alt: "explication du fonctionnement YVY",
            className: "jsx-3201061060"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3201061060" + " " + "ourProducers",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3201061060" + " " + "resumeProducer",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
              className: "jsx-3201061060",
              children: "Nos producteurs"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-3201061060",
              children: "100% local ! Et oui, nous travaillons avec des producteurs de Loire Atlantique. Chaque produit parcours en moyenne 60km avant d\u2019arriver dans votre assiette. Des prix justes ! Parce que sans eux nous ne mangerions pas aussi bien, chaque producteur fixe librement son prix. Nous choisissons les meilleurs petits producteurs de la r\xE9gion, pour vous garantir une qualit\xE9 irr\xE9prochable."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
              children: "Voir tous les paniers"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "jsx-3201061060" + " " + "videoProducer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
              width: "560",
              height: "315",
              src: "https://www.youtube.com/embed/OVJEeXT78IE",
              title: "YouTube video player",
              frameborder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: true,
              className: "jsx-3201061060"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-3201061060" + " " + "orangeContainer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3201061060" + " " + "orangeContent",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
              className: "jsx-3201061060",
              children: "Bon pour vous, bon pour la plan\xE8te, bon pour votre porte-monnaie !"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "jsx-3201061060" + " " + "listAdvantage",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "timeAdv",
                className: "jsx-3201061060" + " " + "advantage",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                  className: "jsx-3201061060",
                  children: ["\xC9conomie ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                    className: "jsx-3201061060"
                  }), " de temps"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "jsx-3201061060",
                  children: "Nous livrons sur votre lieu de travail tout ce dont vous avez besoin pour pr\xE9parer de d\xE9licieux d\xEEners maison. Moins de temps \xE0 faire les courses, plus de temps pour vous."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "priceAdv",
                className: "jsx-3201061060" + " " + "advantage",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                  className: "jsx-3201061060",
                  children: ["Rapport ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                    className: "jsx-3201061060"
                  }), " qualit\xE9-prix"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "jsx-3201061060",
                  children: "Nous travaillons avec des producteurs locaux de confiance pour acheter des ingr\xE9dients frais, de haute qualit\xE9 et de saison !"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "ecoAdv",
                className: "jsx-3201061060" + " " + "advantage",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                  className: "jsx-3201061060",
                  children: "Compenser votre empreinte carbone"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "jsx-3201061060",
                  children: "Les paniers YVY est la premi\xE8re entreprise local de panier \xE0 cuisiner neutre en CO2, qui soutient des projets \xE9cologiques locaux qui vous tiennent \xE0 c\u0153ur."
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
              margin: "19px 0",
              children: "D\xE9couvrir notre concept"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-3201061060" + " " + "guaranteeContainer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3201061060" + " " + "guarantee",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "icone-cadenas.svg",
              alt: "un cadenas",
              className: "jsx-3201061060"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
              className: "jsx-3201061060",
              children: "Paiements s\xE9curis\xE9s"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-3201061060",
              children: "Par PayPal, carte ou virement bancaire"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3201061060" + " " + "guarantee",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "icone-France.svg",
              alt: "la France",
              className: "jsx-3201061060"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
              className: "jsx-3201061060",
              children: "Made in Loire-Atlantique"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-3201061060",
              children: "Produits 100% locaux, 100% de saison"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3201061060" + " " + "guarantee",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "icone-company.svg",
              alt: "un immeuble",
              className: "jsx-3201061060"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
              className: "jsx-3201061060",
              children: "Livraison en entreprise"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-3201061060",
              children: "Oui oui, ne bougez pas on arrive sur votre lieu de travail"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3201061060" + " " + "guarantee",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "icone-dialog.svg",
              alt: "une bulle de dialogue",
              className: "jsx-3201061060"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
              className: "jsx-3201061060",
              children: "Un SAV au taquet"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-3201061060",
              children: "Un live chat de 8h30 \xE0 18h o\xF9 par email \xE0 contact@yvy.com"
            })]
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ 8104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

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
var __webpack_exports__ = (__webpack_exec__(8474));
module.exports = __webpack_exports__;

})();