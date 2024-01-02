"use strict";(self.webpackChunkgovis_renewal=self.webpackChunkgovis_renewal||[]).push([[7750],{"./component/atom/Buttongroup/Buttongroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Buttongroup_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),StoryLayout=__webpack_require__("./component/modules/story_layout/StoryLayout.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Button=(0,emotion_styled_base_browser_esm.Z)("button",{target:"ed67oiy0"})("display:inline-flex;align-items:center;height:3.5rem;padding:0 1.4rem;font-size:1.2rem;font-weight:500;color:#4b5563;border:1px solid #e5e7eb;white-space:nowrap;cursor:pointer;transition:background-color 0.2s ease-in-out;&:focus{outline:none;}&:hover{background-color:#f9fafb;}&:first-of-type{border-top-left-radius:0.7rem;border-bottom-left-radius:0.7rem;}&:last-of-type{border-top-right-radius:0.7rem;border-bottom-right-radius:0.7rem;}",(function(props){return props.isActive&&"\n      background-color: #F9FAFB; \n    "}),"@media (prefers-color-scheme: dark){color:#ffffff;border-color:#6b7280;&:hover{background-color:#374151;}}");const Buttongroup_Buttongroup=function ButtonGroup(_ref){var options=_ref.options,active=_ref.active,setActive=_ref.setActive;return(0,emotion_react_browser_esm.tZ)(react.Fragment,null,options.map((function(option){return(0,emotion_react_browser_esm.tZ)(Button,{key:option.value,isActive:active===option.value,onClick:function onClick(){return setActive(option.value)}},option.content)})))};try{Buttongroup.displayName="Buttongroup",Buttongroup.__docgenInfo={description:"",displayName:"Buttongroup",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ButtonItem[]"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"string"}},setActive:{defaultValue:null,description:"",name:"setActive",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/atom/Buttongroup/Buttongroup.tsx#Buttongroup"]={docgenInfo:Buttongroup.__docgenInfo,name:"Buttongroup",path:"component/atom/Buttongroup/Buttongroup.tsx#Buttongroup"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),options1=[{value:"Leading",content:"Leading"},{value:"Middle",content:"Middle"},{value:"Trailing",content:"Trailing"}],options2=[{value:"First",content:(0,emotion_react_browser_esm.tZ)(react.Fragment,null,(0,emotion_react_browser_esm.tZ)(index_esm.Q8x,{size:15,style:{marginRight:5}}),"FIRST")},{value:"Second",content:(0,emotion_react_browser_esm.tZ)(react.Fragment,null,(0,emotion_react_browser_esm.tZ)(index_esm.Q8x,{size:15,style:{marginRight:5}}),"SECOND")},{value:"Third",content:(0,emotion_react_browser_esm.tZ)(react.Fragment,null,(0,emotion_react_browser_esm.tZ)(index_esm.Q8x,{size:15,style:{marginRight:5}}),"THIRD")}],options3=[{value:"list",content:(0,emotion_react_browser_esm.tZ)(index_esm.SnF,{size:20})},{value:"grid",content:(0,emotion_react_browser_esm.tZ)(index_esm.aCJ,{size:20})}];const Buttongroup_stories={title:"Atoms/ButtonGroup",tags:["autodocs"],parameters:{storySource:{source:'import _objectSpread from "/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/objectSpread2.js";\nimport _slicedToArray from "/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/slicedToArray.js";\nimport _styled from "@emotion/styled/base";\nvar _Default$parameters, _Default$parameters2, _Default$parameters2$;\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }\nimport React, { useState } from \'react\';\nimport StoryLayout from \'@ComponentFarm/modules/story_layout/StoryLayout\';\nimport ButtonGroup from \'./Buttongroup\';\nimport { options1, options2, options3 } from \'./const\';\nimport { jsx as ___EmotionJSX } from "@emotion/react";\nvar meta = {\n  title: \'Atoms/ButtonGroup\',\n  tags: [\'autodocs\'],\n  parameters: {\n    docs: {\n      story: {\n        inline: true\n      },\n      // render the story in an iframe\n      canvas: {\n        sourceState: \'shown\'\n      },\n      // start with the source open\n      source: {\n        type: \'code\'\n      } // forces the raw source code (rather than the rendered JSX).\n    }\n  }\n};\n\nexport default meta;\nvar SpacedContainer = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {\n  target: "e12pe6ou0"\n} : {\n  target: "e12pe6ou0",\n  label: "SpacedContainer"\n})(process.env.NODE_ENV === "production" ? {\n  name: "10t88ar",\n  styles: "&>div+div{margin-top:1.25rem;}"\n} : {\n  name: "10t88ar",\n  styles: "&>div+div{margin-top:1.25rem;}",\n  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dW4tZXVuc2VvZy93b3Jrc3BhY2UvZ292aXMtcmVuZXdhbC9jb21wb25lbnQvYXRvbS9CdXR0b25ncm91cC9CdXR0b25ncm91cC5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtDIiwiZmlsZSI6Ii9Vc2Vycy95dW4tZXVuc2VvZy93b3Jrc3BhY2UvZ292aXMtcmVuZXdhbC9jb21wb25lbnQvYXRvbS9CdXR0b25ncm91cC9CdXR0b25ncm91cC5zdG9yaWVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1ldGEsIFN0b3J5IH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgU3RvcnlMYXlvdXQgZnJvbSAnQENvbXBvbmVudEZhcm0vbW9kdWxlcy9zdG9yeV9sYXlvdXQvU3RvcnlMYXlvdXQnO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vQnV0dG9uZ3JvdXAnO1xuaW1wb3J0IHsgb3B0aW9uczEsIG9wdGlvbnMyLCBvcHRpb25zMyB9IGZyb20gJy4vY29uc3QnO1xuY29uc3QgbWV0YTogTWV0YSA9IHtcbiAgdGl0bGU6ICdBdG9tcy9CdXR0b25Hcm91cCcsXG4gIHRhZ3M6IFsnYXV0b2RvY3MnXSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGRvY3M6IHtcbiAgICAgIHN0b3J5OiB7XG4gICAgICAgIGlubGluZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vIHJlbmRlciB0aGUgc3RvcnkgaW4gYW4gaWZyYW1lXG4gICAgICBjYW52YXM6IHtcbiAgICAgICAgc291cmNlU3RhdGU6ICdzaG93bidcbiAgICAgIH0sXG4gICAgICAvLyBzdGFydCB3aXRoIHRoZSBzb3VyY2Ugb3BlblxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHR5cGU6ICdjb2RlJ1xuICAgICAgfSAvLyBmb3JjZXMgdGhlIHJhdyBzb3VyY2UgY29kZSAocmF0aGVyIHRoYW4gdGhlIHJlbmRlcmVkIEpTWCkuXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhO1xuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGFya01vZGU6IGJvb2xlYW47XG59XG5jb25zdCBTcGFjZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAmID4gZGl2ICsgZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtOyAvKiBDb3JyZXNwb25kcyB0byBzcGFjZS15LTUgaW4gVGFpbHdpbmQgQ1NTICovXG4gIH1cbmA7XG5jb25zdCBTdG9yeUJ1dHRvbkdyb3VwOiBTdG9yeTxQcm9wcz4gPSBhcmdzID0+IHtcbiAgY29uc3QgW2FjdGl2ZTEsIHNldEFjdGl2ZTFdID0gdXNlU3RhdGUob3B0aW9uczFbMF0udmFsdWUpO1xuICBjb25zdCBbYWN0aXZlMiwgc2V0QWN0aXZlMl0gPSB1c2VTdGF0ZShvcHRpb25zMlswXS52YWx1ZSk7XG4gIGNvbnN0IFt2aWV3T3B0aW9uLCBzZXRWaWV3T3B0aW9uXSA9IHVzZVN0YXRlKCdsaXN0Jyk7XG4gIHJldHVybiA8U3RvcnlMYXlvdXQgey4uLmFyZ3N9PlxuICAgICAgPFNwYWNlZENvbnRhaW5lcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uR3JvdXAgb3B0aW9ucz17b3B0aW9uczF9IGFjdGl2ZT17YWN0aXZlMX0gc2V0QWN0aXZlPXtzZXRBY3RpdmUxfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uR3JvdXAgb3B0aW9ucz17b3B0aW9uczJ9IGFjdGl2ZT17YWN0aXZlMn0gc2V0QWN0aXZlPXtzZXRBY3RpdmUyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uR3JvdXAgb3B0aW9ucz17b3B0aW9uczN9IGFjdGl2ZT17dmlld09wdGlvbn0gc2V0QWN0aXZlPXtzZXRWaWV3T3B0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3BhY2VkQ29udGFpbmVyPlxuICAgIDwvU3RvcnlMYXlvdXQ+O1xufTtcbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gU3RvcnlCdXR0b25Hcm91cC5iaW5kKHt9KTtcbkRlZmF1bHQuYXJncyA9IHtcbiAgZGFya01vZGU6IGZhbHNlXG59O1xuRGVmYXVsdC5wYXJhbWV0ZXJzID0ge1xuICAuLi5EZWZhdWx0LnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5EZWZhdWx0LnBhcmFtZXRlcnM/LmRvY3MsXG4gICAgc291cmNlOiB7XG4gICAgICBvcmlnaW5hbFNvdXJjZTogXCJhcmdzID0+IHtcXG4gIGNvbnN0IFthY3RpdmUxLCBzZXRBY3RpdmUxXSA9IHVzZVN0YXRlKG9wdGlvbnMxWzBdLnZhbHVlKTtcXG4gIGNvbnN0IFthY3RpdmUyLCBzZXRBY3RpdmUyXSA9IHVzZVN0YXRlKG9wdGlvbnMyWzBdLnZhbHVlKTtcXG4gIGNvbnN0IFt2aWV3T3B0aW9uLCBzZXRWaWV3T3B0aW9uXSA9IHVzZVN0YXRlKCdsaXN0Jyk7XFxuICByZXR1cm4gPFN0b3J5TGF5b3V0IHsuLi5hcmdzfT5cXG4gICAgICA8U3BhY2VkQ29udGFpbmVyPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIG9wdGlvbnM9e29wdGlvbnMxfSBhY3RpdmU9e2FjdGl2ZTF9IHNldEFjdGl2ZT17c2V0QWN0aXZlMX0gLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIG9wdGlvbnM9e29wdGlvbnMyfSBhY3RpdmU9e2FjdGl2ZTJ9IHNldEFjdGl2ZT17c2V0QWN0aXZlMn0gLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIG9wdGlvbnM9e29wdGlvbnMzfSBhY3RpdmU9e3ZpZXdPcHRpb259IHNldEFjdGl2ZT17c2V0Vmlld09wdGlvbn0gLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvU3BhY2VkQ29udGFpbmVyPlxcbiAgICA8L1N0b3J5TGF5b3V0PjtcXG59XCIsXG4gICAgICAuLi5EZWZhdWx0LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiXX0= */",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\nvar StoryButtonGroup = function StoryButtonGroup(args) {\n  var _useState = useState(options1[0].value),\n    _useState2 = _slicedToArray(_useState, 2),\n    active1 = _useState2[0],\n    setActive1 = _useState2[1];\n  var _useState3 = useState(options2[0].value),\n    _useState4 = _slicedToArray(_useState3, 2),\n    active2 = _useState4[0],\n    setActive2 = _useState4[1];\n  var _useState5 = useState(\'list\'),\n    _useState6 = _slicedToArray(_useState5, 2),\n    viewOption = _useState6[0],\n    setViewOption = _useState6[1];\n  return ___EmotionJSX(StoryLayout, args, ___EmotionJSX(SpacedContainer, null, ___EmotionJSX("div", null, ___EmotionJSX(ButtonGroup, {\n    options: options1,\n    active: active1,\n    setActive: setActive1\n  })), ___EmotionJSX("div", null, ___EmotionJSX(ButtonGroup, {\n    options: options2,\n    active: active2,\n    setActive: setActive2\n  })), ___EmotionJSX("div", null, ___EmotionJSX(ButtonGroup, {\n    options: options3,\n    active: viewOption,\n    setActive: setViewOption\n  }))));\n};\nexport var Default = StoryButtonGroup.bind({});\nDefault.args = {\n  darkMode: false\n};\nDefault.parameters = _objectSpread(_objectSpread({}, Default.parameters), {}, {\n  docs: _objectSpread(_objectSpread({}, (_Default$parameters = Default.parameters) === null || _Default$parameters === void 0 ? void 0 : _Default$parameters.docs), {}, {\n    source: _objectSpread({\n      originalSource: "args => {\\n  const [active1, setActive1] = useState(options1[0].value);\\n  const [active2, setActive2] = useState(options2[0].value);\\n  const [viewOption, setViewOption] = useState(\'list\');\\n  return <StoryLayout {...args}>\\n      <SpacedContainer>\\n        <div>\\n          <ButtonGroup options={options1} active={active1} setActive={setActive1} />\\n        </div>\\n        <div>\\n          <ButtonGroup options={options2} active={active2} setActive={setActive2} />\\n        </div>\\n        <div>\\n          <ButtonGroup options={options3} active={viewOption} setActive={setViewOption} />\\n        </div>\\n      </SpacedContainer>\\n    </StoryLayout>;\\n}"\n    }, (_Default$parameters2 = Default.parameters) === null || _Default$parameters2 === void 0 ? void 0 : (_Default$parameters2$ = _Default$parameters2.docs) === null || _Default$parameters2$ === void 0 ? void 0 : _Default$parameters2$.source)\n  })\n});',locationsMap:{default:{startLoc:{col:23,line:46},endLoc:{col:1,line:72},startBody:{col:23,line:46},endBody:{col:1,line:72}}}},docs:{story:{inline:!0},canvas:{sourceState:"shown"},source:{type:"code"}}}};var SpacedContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e12pe6ou0"})({name:"10t88ar",styles:"&>div+div{margin-top:1.25rem;}"}),Default=function StoryButtonGroup(args){var _useState=(0,react.useState)(options1[0].value),_useState2=(0,slicedToArray.Z)(_useState,2),active1=_useState2[0],setActive1=_useState2[1],_useState3=(0,react.useState)(options2[0].value),_useState4=(0,slicedToArray.Z)(_useState3,2),active2=_useState4[0],setActive2=_useState4[1],_useState5=(0,react.useState)("list"),_useState6=(0,slicedToArray.Z)(_useState5,2),viewOption=_useState6[0],setViewOption=_useState6[1];return(0,emotion_react_browser_esm.tZ)(StoryLayout.Z,args,(0,emotion_react_browser_esm.tZ)(SpacedContainer,null,(0,emotion_react_browser_esm.tZ)("div",null,(0,emotion_react_browser_esm.tZ)(Buttongroup_Buttongroup,{options:options1,active:active1,setActive:setActive1})),(0,emotion_react_browser_esm.tZ)("div",null,(0,emotion_react_browser_esm.tZ)(Buttongroup_Buttongroup,{options:options2,active:active2,setActive:setActive2})),(0,emotion_react_browser_esm.tZ)("div",null,(0,emotion_react_browser_esm.tZ)(Buttongroup_Buttongroup,{options:options3,active:viewOption,setActive:setViewOption}))))}.bind({});Default.args={darkMode:!1},Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => {\n  const [active1, setActive1] = useState(options1[0].value);\n  const [active2, setActive2] = useState(options2[0].value);\n  const [viewOption, setViewOption] = useState('list');\n  return <StoryLayout {...args}>\n      <SpacedContainer>\n        <div>\n          <ButtonGroup options={options1} active={active1} setActive={setActive1} />\n        </div>\n        <div>\n          <ButtonGroup options={options2} active={active2} setActive={setActive2} />\n        </div>\n        <div>\n          <ButtonGroup options={options3} active={viewOption} setActive={setViewOption} />\n        </div>\n      </SpacedContainer>\n    </StoryLayout>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./component/modules/story_layout/StoryLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_ComponentFarm_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./component/theme.ts"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js")),Container=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"esemnhh1"})("margin:-1rem;",(function(_ref){return _ref.darkMode&&"\n    background-color: #2D3748;\n  "}),";"),Content=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"esemnhh0"})("display:flex;flex-direction:column;gap:1rem;*{box-sizing:border-box;}&.center{align-items:center;}padding:",(function(_ref2){return _ref2.noPadding?"0":"1rem"}),";",(function(_ref3){return _ref3.customCss}),";"),StoryLayout=function StoryLayout(_ref4){var darkMode=_ref4.darkMode,children=_ref4.children,className=_ref4.className,noPadding=_ref4.noPadding,customCss=_ref4.customCss;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.a,{theme:_ComponentFarm_theme__WEBPACK_IMPORTED_MODULE_1__.r},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Container,{darkMode},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Content,{className,noPadding,customCss},children)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{id:"modal-root"}))};const __WEBPACK_DEFAULT_EXPORT__=StoryLayout;try{StoryLayout.displayName="StoryLayout",StoryLayout.__docgenInfo={description:"",displayName:"StoryLayout",props:{darkMode:{defaultValue:null,description:"",name:"darkMode",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},customCss:{defaultValue:null,description:"",name:"customCss",required:!1,type:{name:"SerializedStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/modules/story_layout/StoryLayout.tsx#StoryLayout"]={docgenInfo:StoryLayout.__docgenInfo,name:"StoryLayout",path:"component/modules/story_layout/StoryLayout.tsx#StoryLayout"})}catch(__react_docgen_typescript_loader_error){}},"./component/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var theme={colors:{transparent:"transparent",white:"#fff",black:"#000",brand25:"#ff6d00",brand50:"#ff9240",gray25:"#FCFCFD",gray50:"#F9FAFB",gray100:"#F2F4F7",gray200:"#E4E7EC",gray300:"#D0D5DD",gray400:"#98A2B3",gray500:"#667085",gray600:"#475467",gray700:"#344054",gray800:"#1D2939",gray900:"#101828",primary25:"#F5FAFF",primary50:"#EFF8FF",primary100:"#D1E9FF",primary200:"#B2DDFF",primary300:"#84CAFF",primary400:"#53B1FD",primary500:"#2E90FA",primary600:"#1570EF",primary700:"#175CD3",primary800:"#1849A9",primary900:"#194185",error25:"#FFFBFA",error50:"#FEF3F2",error100:"#FEE4E2",error200:"#FECDCA",error300:"#FDA29B",error400:"#F97066",error500:"#F04438",error600:"#D92D20",error700:"#B42318",error800:"#912018",error900:"#7A271A",warning25:"#FFFCF5",warning50:"#FFFAEB",warning100:"#FEF0C7",warning200:"#FEDF89",warning300:"#FEC84B",warning400:"#FDB022",warning500:"#F79009",warning600:"#DC6803",warning700:"#B54708",warning800:"#93370D",warning900:"#7A2E0E",success25:"#F6FEF9",success50:"#ECFDF3",success100:"#D1FADF",success200:"#A6F4C5",success300:"#6CE9A6",success400:"#32D583",success500:"#12B76A",success600:"#039855",success700:"#027A48",success800:"#05603A",success900:"#054F31"},fontSize:{xs:["12px","18px"],sm:["14px","20px"],md:["16px","24px"],lg:["18px","28px"],xl:["20px","30px"],h6:["24px","32px"],h5:["30px","38px"],h4:["36px","44px"],h3:["48px","60px"],h2:["60px","72px"],h1:["72px","90px"]},fontWeight:{normal:400,medium:500,semibold:600,bold:700},screens:{xs:"420px"},spacing:{4.5:"1.125rem",5.5:"1.375rem",6.5:"1.625rem",13:"3.25rem",15:"3.75rem",19:"4.75rem",19.5:"4.875rem",50:"12.5rem",58:"14.5rem",62:"15.5rem",70:"17.5rem"}}}}]);