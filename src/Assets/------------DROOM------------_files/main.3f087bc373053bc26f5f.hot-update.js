webpackHotUpdate("main",{

/***/ "./src/components/ProfilePages/SeekerProfile.js":
/*!******************************************************!*\
  !*** ./src/components/ProfilePages/SeekerProfile.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_actions_seekers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Redux/actions/seekers */ "./src/Redux/actions/seekers.js");
var _jsxFileName = "/Users/jamescrowley/Documents/lambda/Projects/build-weeks/FrontEnd-Two/src/components/ProfilePages/SeekerProfile.js";







const SeekerProfile = ({
  errors,
  touched,
  values,
  status,
  getSeekerById,
  updateSeeker
}) => {
  const [seeker, setSeeker] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    password: "",
    location: "",
    skills: "",
    experience: ""
  });
  const [updateForm, setUpdateForm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    status && setUpdateForm(status);
  }, [status]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    status && setSeeker(status);
  }, [status]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const ID = localStorage.getItem("userid");
    getSeekerById(ID);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "seeker-profile-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Droom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "seeker-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/seeker-matches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Matches"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/seekerUI",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "seeker-profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Your Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "seeker-profile-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Username: ", seeker.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Location: ", seeker.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Skills: ", seeker.skills), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Experience: ", seeker.experience))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: `button ${!updateForm ? "hidden" : ""}`,
    onClick: () => setUpdateForm(!updateForm),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Update Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: `form ${updateForm ? "hidden" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    className: "input",
    name: "name",
    type: "text",
    value: values.name,
    placeholder: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), touched.name && errors.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, errors.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    className: "input",
    name: "location",
    type: "text",
    value: values.location,
    placeholder: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), touched.location && errors.location && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, errors.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    className: "input",
    name: "skills",
    type: "text",
    value: values.skills,
    placeholder: "skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), touched.skills && errors.skills && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, errors.skills), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    className: "input",
    name: "experience",
    type: "text",
    value: values.experience,
    placeholder: "experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), touched.experience && errors.experience && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, errors.experience), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Update")));
};

const FormikSeekerProfile = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues() {
    return {
      name: "",
      location: "",
      skills: "",
      experience: ""
    };
  },

  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Name is required"),
    location: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Location is required"),
    skills: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Skills are required"),
    experience: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Experience is required")
  }),

  handleSubmit(values, {
    resetForm,
    setStatus
  }) {
    console.log("Seeker form values ", values);
    const userID = localStorage.getItem("userID");
    Object(_Redux_actions_seekers__WEBPACK_IMPORTED_MODULE_5__["updateSeeker"])(userID);
  }

})(SeekerProfile);

const mapStateToProps = state => {
  return {
    seekers: state.seekers
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getSeekerById: _Redux_actions_seekers__WEBPACK_IMPORTED_MODULE_5__["getSeekerById"],
  updateSeeker: _Redux_actions_seekers__WEBPACK_IMPORTED_MODULE_5__["updateSeeker"]
})(FormikSeekerProfile));

/***/ })

})
//# sourceMappingURL=main.3f087bc373053bc26f5f.hot-update.js.map