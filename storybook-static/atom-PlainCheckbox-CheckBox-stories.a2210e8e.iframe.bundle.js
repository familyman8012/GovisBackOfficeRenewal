"use strict";(self.webpackChunkgovis_renewal=self.webpackChunkgovis_renewal||[]).push([[2961],{"./component/atom/PlainCheckbox/CheckBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>CheckBox_stories});var _Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),StoryLayout=__webpack_require__("./component/modules/story_layout/StoryLayout.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),sizes={sm:"1.6rem",md:"2.4rem"},CheckBoxWrap=(0,emotion_styled_base_browser_esm.Z)("input",{target:"e17gc6tr0"})("width:",(function(props){return sizes[props.chksize||"md"]}),";height:",(function(props){return sizes[props.chksize||"md"]}),";background:#fff no-repeat 50%/contain;border:1px solid var(--input-checkBoxBorder);border-radius:0.25em;appearance:none;color-adjust:exact;&:checked{border:1px solid var(--input-checkBoxCheckedBorder);background-color:var(--bg-inputCheckBox);background-image:url('/images/common/ico_checkbox.svg');}&.readonly{border:1px solid var(--input-checkBoxReadOnlyBorder);background-color:var(--bg-inputCheckBoxReadOnly);pointer-events:none;&:checked{background-image:url('/images/common/ico_checkbox_disabled.svg');}}&:disabled{border:1px solid var(--input-checkBoxDisabeldBorder);background-color:var(--bg-inputCheckBoxDisabled);pointer-events:none;&:checked{background-image:url('/images/common/ico_checkbox_disabled.svg');}~.form-check-label{opacity:0.5;}}"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const CheckBox_stories={title:"Atoms/Plain CheckBox",tags:["autodocs"],args:{TotalProps:{props:"variant(필수값), size(기본값,md)"}},parameters:{storySource:{source:'import _objectSpread from "/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/objectSpread2.js";\nimport _extends from "/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/extends.js";\nvar _Default$parameters, _Default$parameters2, _Default$parameters2$;\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }\n\nimport React from \'react\';\nimport { css } from \'@emotion/react\';\nimport StoryLayout from \'@ComponentFarm/modules/story_layout/StoryLayout\';\nimport { CheckBoxWrap } from \'./style\';\nimport { jsx as ___EmotionJSX } from "@emotion/react";\nvar meta = {\n  title: \'Atoms/Plain CheckBox\',\n  tags: [\'autodocs\'],\n  args: {\n    TotalProps: {\n      props: "variant(\\uD544\\uC218\\uAC12), size(\\uAE30\\uBCF8\\uAC12,md)"\n    }\n  },\n  parameters: {\n    docs: {\n      story: {\n        inline: true\n      },\n      // render the story in an iframe\n      canvas: {\n        sourceState: \'shown\'\n      },\n      // start with the source open\n      source: {\n        type: \'code\'\n      } // forces the raw source code (rather than the rendered JSX).\n    }\n  }\n};\n\nexport default meta;\nvar _ref = process.env.NODE_ENV === "production" ? {\n  name: "gs2wf1",\n  styles: "display:inline-flex;flex-direction:column;&>div+div{margin-top:1.25rem;}"\n} : {\n  name: "6vi5r9-StoryBadge",\n  styles: "display:inline-flex;flex-direction:column;&>div+div{margin-top:1.25rem;};label:StoryBadge;",\n  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dW4tZXVuc2VvZy93b3Jrc3BhY2UvZ292aXMtcmVuZXdhbC9jb21wb25lbnQvYXRvbS9QbGFpbkNoZWNrYm94L0NoZWNrQm94LnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DOEMiLCJmaWxlIjoiL1VzZXJzL3l1bi1ldW5zZW9nL3dvcmtzcGFjZS9nb3Zpcy1yZW5ld2FsL2NvbXBvbmVudC9hdG9tL1BsYWluQ2hlY2tib3gvQ2hlY2tCb3guc3Rvcmllcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZXRhLCBTdG9yeSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IFN0b3J5TGF5b3V0IGZyb20gJ0BDb21wb25lbnRGYXJtL21vZHVsZXMvc3RvcnlfbGF5b3V0L1N0b3J5TGF5b3V0JztcbmltcG9ydCB7IENoZWNrQm94V3JhcCB9IGZyb20gJy4vc3R5bGUnO1xuY29uc3QgbWV0YTogTWV0YSA9IHtcbiAgdGl0bGU6ICdBdG9tcy9QbGFpbiBDaGVja0JveCcsXG4gIHRhZ3M6IFsnYXV0b2RvY3MnXSxcbiAgYXJnczoge1xuICAgIFRvdGFsUHJvcHM6IHtcbiAgICAgIHByb3BzOiBgdmFyaWFudCjtlYTsiJjqsJIpLCBzaXplKOq4sOuzuOqwkixtZClgXG4gICAgfVxuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZG9jczoge1xuICAgICAgc3Rvcnk6IHtcbiAgICAgICAgaW5saW5lOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gcmVuZGVyIHRoZSBzdG9yeSBpbiBhbiBpZnJhbWVcbiAgICAgIGNhbnZhczoge1xuICAgICAgICBzb3VyY2VTdGF0ZTogJ3Nob3duJ1xuICAgICAgfSxcbiAgICAgIC8vIHN0YXJ0IHdpdGggdGhlIHNvdXJjZSBvcGVuXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdHlwZTogJ2NvZGUnXG4gICAgICB9IC8vIGZvcmNlcyB0aGUgcmF3IHNvdXJjZSBjb2RlIChyYXRoZXIgdGhhbiB0aGUgcmVuZGVyZWQgSlNYKS5cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG5pbnRlcmZhY2UgUHJvcHMge1xuICBkYXJrTW9kZTogYm9vbGVhbjtcbn1cbmNvbnN0IFN0b3J5QmFkZ2U6IFN0b3J5PFByb3BzPiA9IGFyZ3MgPT4ge1xuICByZXR1cm4gPFN0b3J5TGF5b3V0IHsuLi5hcmdzfSBjdXN0b21Dc3M9e2Nzc2BcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICYgPiBkaXYgKyBkaXYge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07IC8qIENvcnJlc3BvbmRzIHRvIHNwYWNlLXktNSBpbiBUYWlsd2luZCBDU1MgKi9cbiAgICAgICAgfVxuICAgICAgYH0+XG4gICAgICA8Q2hlY2tCb3hXcmFwIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmcnVpdHNcIiB2YWx1ZT1cImFwcGxlXCIgY2hlY2tlZCBjaGtzaXplPVwic21cIiAvPlxuICAgICAgPENoZWNrQm94V3JhcCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZnJ1aXRzXCIgdmFsdWU9XCJhcHBsZVwiIC8+XG4gICAgICA8Q2hlY2tCb3hXcmFwIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmcnVpdHNcIiB2YWx1ZT1cImFwcGxlXCIgY2hlY2tlZCAvPlxuICAgICAgPENoZWNrQm94V3JhcCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZnJ1aXRzXCIgdmFsdWU9XCJhcHBsZVwiIGNsYXNzTmFtZT1cInJlYWRvbmx5XCIgLz5cbiAgICAgIDxDaGVja0JveFdyYXAgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZydWl0c1wiIHZhbHVlPVwiYXBwbGVcIiBjbGFzc05hbWU9XCJyZWFkb25seVwiIGNoZWNrZWQgLz5cbiAgICAgIDxDaGVja0JveFdyYXAgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZydWl0c1wiIHZhbHVlPVwiYXBwbGVcIiBkaXNhYmxlZCAvPlxuICAgICAgPENoZWNrQm94V3JhcCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZnJ1aXRzXCIgdmFsdWU9XCJhcHBsZVwiIGNoZWNrZWQgZGlzYWJsZWQgLz5cbiAgICA8L1N0b3J5TGF5b3V0Pjtcbn07XG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFN0b3J5QmFkZ2UuYmluZCh7fSk7XG5EZWZhdWx0LnBhcmFtZXRlcnMgPSB7XG4gIC4uLkRlZmF1bHQucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkRlZmF1bHQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcImFyZ3MgPT4ge1xcbiAgcmV0dXJuIDxTdG9yeUxheW91dCB7Li4uYXJnc30gY3VzdG9tQ3NzPXtjc3NgXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAmID4gZGl2ICsgZGl2IHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTsgLyogQ29ycmVzcG9uZHMgdG8gc3BhY2UteS01IGluIFRhaWx3aW5kIENTUyAqL1xcbiAgICAgICAgfVxcbiAgICAgIGB9PlxcbiAgICAgIDxDaGVja0JveFdyYXAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcImZydWl0c1xcXCIgdmFsdWU9XFxcImFwcGxlXFxcIiBjaGVja2VkIGNoa3NpemU9XFxcInNtXFxcIiAvPlxcbiAgICAgIDxDaGVja0JveFdyYXAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcImZydWl0c1xcXCIgdmFsdWU9XFxcImFwcGxlXFxcIiAvPlxcbiAgICAgIDxDaGVja0JveFdyYXAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcImZydWl0c1xcXCIgdmFsdWU9XFxcImFwcGxlXFxcIiBjaGVja2VkIC8+XFxuICAgICAgPENoZWNrQm94V3JhcCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwiZnJ1aXRzXFxcIiB2YWx1ZT1cXFwiYXBwbGVcXFwiIGNsYXNzTmFtZT1cXFwicmVhZG9ubHlcXFwiIC8+XFxuICAgICAgPENoZWNrQm94V3JhcCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwiZnJ1aXRzXFxcIiB2YWx1ZT1cXFwiYXBwbGVcXFwiIGNsYXNzTmFtZT1cXFwicmVhZG9ubHlcXFwiIGNoZWNrZWQgLz5cXG4gICAgICA8Q2hlY2tCb3hXcmFwIHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJmcnVpdHNcXFwiIHZhbHVlPVxcXCJhcHBsZVxcXCIgZGlzYWJsZWQgLz5cXG4gICAgICA8Q2hlY2tCb3hXcmFwIHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJmcnVpdHNcXFwiIHZhbHVlPVxcXCJhcHBsZVxcXCIgY2hlY2tlZCBkaXNhYmxlZCAvPlxcbiAgICA8L1N0b3J5TGF5b3V0PjtcXG59XCIsXG4gICAgICAuLi5EZWZhdWx0LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiXX0= */",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nvar StoryBadge = function StoryBadge(args) {\n  return ___EmotionJSX(StoryLayout, _extends({}, args, {\n    customCss: _ref\n  }), ___EmotionJSX(CheckBoxWrap, {\n    type: "checkbox",\n    name: "fruits",\n    value: "apple",\n    checked: true,\n    chksize: "sm"\n  }), ___EmotionJSX(CheckBoxWrap, {\n    type: "checkbox",\n    name: "fruits",\n    value: "apple"\n  }), ___EmotionJSX(CheckBoxWrap, {\n    type: "checkbox",\n    name: "fruits",\n    value: "apple",\n    checked: true\n  }), ___EmotionJSX(CheckBoxWrap, {\n    type: "checkbox",\n    name: "fruits",\n    value: "apple",\n    className: "readonly"\n  }), ___EmotionJSX(CheckBoxWrap, {\n    type: "checkbox",\n    name: "fruits",\n    value: "apple",\n    className: "readonly",\n    checked: true\n  }), ___EmotionJSX(CheckBoxWrap, {\n    type: "checkbox",\n    name: "fruits",\n    value: "apple",\n    disabled: true\n  }), ___EmotionJSX(CheckBoxWrap, {\n    type: "checkbox",\n    name: "fruits",\n    value: "apple",\n    checked: true,\n    disabled: true\n  }));\n};\nexport var Default = StoryBadge.bind({});\nDefault.parameters = _objectSpread(_objectSpread({}, Default.parameters), {}, {\n  docs: _objectSpread(_objectSpread({}, (_Default$parameters = Default.parameters) === null || _Default$parameters === void 0 ? void 0 : _Default$parameters.docs), {}, {\n    source: _objectSpread({\n      originalSource: "args => {\\n  return <StoryLayout {...args} customCss={css`\\n        display: inline-flex;\\n        flex-direction: column;\\n        & > div + div {\\n          margin-top: 1.25rem; /* Corresponds to space-y-5 in Tailwind CSS */\\n        }\\n      `}>\\n      <CheckBoxWrap type=\\"checkbox\\" name=\\"fruits\\" value=\\"apple\\" checked chksize=\\"sm\\" />\\n      <CheckBoxWrap type=\\"checkbox\\" name=\\"fruits\\" value=\\"apple\\" />\\n      <CheckBoxWrap type=\\"checkbox\\" name=\\"fruits\\" value=\\"apple\\" checked />\\n      <CheckBoxWrap type=\\"checkbox\\" name=\\"fruits\\" value=\\"apple\\" className=\\"readonly\\" />\\n      <CheckBoxWrap type=\\"checkbox\\" name=\\"fruits\\" value=\\"apple\\" className=\\"readonly\\" checked />\\n      <CheckBoxWrap type=\\"checkbox\\" name=\\"fruits\\" value=\\"apple\\" disabled />\\n      <CheckBoxWrap type=\\"checkbox\\" name=\\"fruits\\" value=\\"apple\\" checked disabled />\\n    </StoryLayout>;\\n}"\n    }, (_Default$parameters2 = Default.parameters) === null || _Default$parameters2 === void 0 ? void 0 : (_Default$parameters2$ = _Default$parameters2.docs) === null || _Default$parameters2$ === void 0 ? void 0 : _Default$parameters2$.source)\n  })\n});',locationsMap:{default:{startLoc:{col:17,line:46},endLoc:{col:1,line:87},startBody:{col:17,line:46},endBody:{col:1,line:87}}}},docs:{story:{inline:!0},canvas:{sourceState:"shown"},source:{type:"code"}}}};var _ref={name:"gs2wf1",styles:"display:inline-flex;flex-direction:column;&>div+div{margin-top:1.25rem;}"},Default=function StoryBadge(args){return(0,emotion_react_browser_esm.tZ)(StoryLayout.Z,(0,esm_extends.Z)({},args,{customCss:_ref}),(0,emotion_react_browser_esm.tZ)(CheckBoxWrap,{type:"checkbox",name:"fruits",value:"apple",checked:!0,chksize:"sm"}),(0,emotion_react_browser_esm.tZ)(CheckBoxWrap,{type:"checkbox",name:"fruits",value:"apple"}),(0,emotion_react_browser_esm.tZ)(CheckBoxWrap,{type:"checkbox",name:"fruits",value:"apple",checked:!0}),(0,emotion_react_browser_esm.tZ)(CheckBoxWrap,{type:"checkbox",name:"fruits",value:"apple",className:"readonly"}),(0,emotion_react_browser_esm.tZ)(CheckBoxWrap,{type:"checkbox",name:"fruits",value:"apple",className:"readonly",checked:!0}),(0,emotion_react_browser_esm.tZ)(CheckBoxWrap,{type:"checkbox",name:"fruits",value:"apple",disabled:!0}),(0,emotion_react_browser_esm.tZ)(CheckBoxWrap,{type:"checkbox",name:"fruits",value:"apple",checked:!0,disabled:!0}))}.bind({});Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => {\n  return <StoryLayout {...args} customCss={css`\n        display: inline-flex;\n        flex-direction: column;\n        & > div + div {\n          margin-top: 1.25rem; /* Corresponds to space-y-5 in Tailwind CSS */\n        }\n      `}>\n      <CheckBoxWrap type="checkbox" name="fruits" value="apple" checked chksize="sm" />\n      <CheckBoxWrap type="checkbox" name="fruits" value="apple" />\n      <CheckBoxWrap type="checkbox" name="fruits" value="apple" checked />\n      <CheckBoxWrap type="checkbox" name="fruits" value="apple" className="readonly" />\n      <CheckBoxWrap type="checkbox" name="fruits" value="apple" className="readonly" checked />\n      <CheckBoxWrap type="checkbox" name="fruits" value="apple" disabled />\n      <CheckBoxWrap type="checkbox" name="fruits" value="apple" checked disabled />\n    </StoryLayout>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./component/modules/story_layout/StoryLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_ComponentFarm_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./component/theme.ts"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js")),Container=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"esemnhh1"})("margin:-1rem;",(function(_ref){return _ref.darkMode&&"\n    background-color: #2D3748;\n  "}),";"),Content=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"esemnhh0"})("display:flex;flex-direction:column;gap:1rem;*{box-sizing:border-box;}padding:",(function(_ref2){return _ref2.noPadding?"0":"1rem"}),";",(function(_ref3){return _ref3.customCss}),";"),StoryLayout=function StoryLayout(_ref4){var darkMode=_ref4.darkMode,children=_ref4.children,noPadding=_ref4.noPadding,customCss=_ref4.customCss;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.a,{theme:_ComponentFarm_theme__WEBPACK_IMPORTED_MODULE_1__.r},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Container,{darkMode},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Content,{noPadding,customCss},children)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{id:"modal-root"}))};const __WEBPACK_DEFAULT_EXPORT__=StoryLayout;try{StoryLayout.displayName="StoryLayout",StoryLayout.__docgenInfo={description:"",displayName:"StoryLayout",props:{darkMode:{defaultValue:null,description:"",name:"darkMode",required:!0,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},customCss:{defaultValue:null,description:"",name:"customCss",required:!1,type:{name:"SerializedStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/modules/story_layout/StoryLayout.tsx#StoryLayout"]={docgenInfo:StoryLayout.__docgenInfo,name:"StoryLayout",path:"component/modules/story_layout/StoryLayout.tsx#StoryLayout"})}catch(__react_docgen_typescript_loader_error){}},"./component/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var theme={colors:{transparent:"transparent",white:"#fff",black:"#000",brand25:"#ff6d00",brand50:"#ff9240",gray25:"#FCFCFD",gray50:"#F9FAFB",gray100:"#F2F4F7",gray200:"#E4E7EC",gray300:"#D0D5DD",gray400:"#98A2B3",gray500:"#667085",gray600:"#475467",gray700:"#344054",gray800:"#1D2939",gray900:"#101828",primary25:"#F5FAFF",primary50:"#EFF8FF",primary100:"#D1E9FF",primary200:"#B2DDFF",primary300:"#84CAFF",primary400:"#53B1FD",primary500:"#2E90FA",primary600:"#1570EF",primary700:"#175CD3",primary800:"#1849A9",primary900:"#194185",error25:"#FFFBFA",error50:"#FEF3F2",error100:"#FEE4E2",error200:"#FECDCA",error300:"#FDA29B",error400:"#F97066",error500:"#F04438",error600:"#D92D20",error700:"#B42318",error800:"#912018",error900:"#7A271A",warning25:"#FFFCF5",warning50:"#FFFAEB",warning100:"#FEF0C7",warning200:"#FEDF89",warning300:"#FEC84B",warning400:"#FDB022",warning500:"#F79009",warning600:"#DC6803",warning700:"#B54708",warning800:"#93370D",warning900:"#7A2E0E",success25:"#F6FEF9",success50:"#ECFDF3",success100:"#D1FADF",success200:"#A6F4C5",success300:"#6CE9A6",success400:"#32D583",success500:"#12B76A",success600:"#039855",success700:"#027A48",success800:"#05603A",success900:"#054F31"},fontSize:{xs:["12px","18px"],sm:["14px","20px"],md:["16px","24px"],lg:["18px","28px"],xl:["20px","30px"],h6:["24px","32px"],h5:["30px","38px"],h4:["36px","44px"],h3:["48px","60px"],h2:["60px","72px"],h1:["72px","90px"]},fontWeight:{normal:400,medium:500,semibold:600,bold:700},screens:{xs:"420px"},spacing:{4.5:"1.125rem",5.5:"1.375rem",6.5:"1.625rem",13:"3.25rem",15:"3.75rem",19:"4.75rem",19.5:"4.875rem",50:"12.5rem",58:"14.5rem",62:"15.5rem",70:"17.5rem"}}}}]);