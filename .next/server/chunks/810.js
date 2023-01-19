"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profileCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/globalStyle.ts

const GlobalStyle = external_styled_components_.createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-sans, Helvetica, sans-serif;
    }

    body, html {
        height: 100%;
    }
`;
/* harmony default export */ const globalStyle = (GlobalStyle);

;// CONCATENATED MODULE: ./src/pages/profileCard/bg-pattern-card.svg
/* harmony default export */ const bg_pattern_card = ({"src":"/_next/static/media/bg-pattern-card.b1e69f4b.svg","height":140,"width":350});
;// CONCATENATED MODULE: ./src/pages/profileCard/image-victor.jpg
/* harmony default export */ const image_victor = ({"src":"/_next/static/media/image-victor.c3e09b71.jpg","height":96,"width":96,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAK4K/8QAHBABAAIBBQAAAAAAAAAAAAAAAgMSBQABBCNy/9oACAEBAAE/AIs+Fk1kjUwPjiEbKXqubWHvX//EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAECAQE/AAv/xAAXEQEAAwAAAAAAAAAAAAAAAAABABFB/9oACAEDAQE/AFvCf//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/styles/profile.ts

const Container = (external_styled_components_default()).div`
    height: 100vh;
    padding-top: 2rem;
    background-color: #22B7E7;

    .profile-card-wrapper {
        margin: 0 auto;
        border-radius: 1rem;
        max-width: 350px;
        width: 100%;
        background-color: white;
        
        .background {
            max-width: 350px;
            width: 100%;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }

        .profile {

            .image-profile {
                border-radius: 100%;
                justify-content: center;
                display: flex;
                margin: -50px auto 0 auto;
            }
        
            .profile-name-age-city {
                text-align: center;

                .name-age {
                    font-weight: 600;
                    font-family: 'Cairo', sans-serif;
                    margin: 1rem 0 0.3rem 0;
                    justify-content: center;
                    display: flex;
                    align-items: center;

                    h2 {
                        color: #1C1C1C;
                        margin: 0 0.8rem 0 0;
                    }

                    p {
                        margin: 0;
                        font-size: 1.5rem;
                        color: #4F4F4F;
                    }
                }

                h3 {
                    font-weight: 200;
                    margin: 0 0 2rem 0;
                    color: gray;
                }
            }

            .hr {
                height: 2px;
                background-color: rgba(67, 67, 67, 0.1);
                width: 100%;
            }

            .socialnetworks {
                font-family: 'Cairo', sans-serif;
                margin: 2rem 0;
                text-align: center;
                justify-content: space-around;
                display: flex;

                h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0;
                }

                p {
                    font-weight: 300;
                    color: #434343;
                    letter-spacing: 1px;
                    margin: 0 0 2rem 0;
                }
            }

        }

    }
`;

;// CONCATENATED MODULE: ./src/pages/profileCard/index.tsx







function profileCard() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Profile Card"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;700&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(globalStyle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "profile-card-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "background",
                            alt: "",
                            src: bg_pattern_card
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "profile",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "image-profile",
                                    alt: "",
                                    src: image_victor
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "profile-name-age-city",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "name-age",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Victor Crest"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "26"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "London"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hr"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "socialnetworks",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "followers",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "80K"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Followers"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "likes",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "803K"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Likes"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "photos",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "1.4K"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Photos"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;