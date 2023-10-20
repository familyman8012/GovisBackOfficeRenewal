"use strict";(self.webpackChunkgovis_renewal=self.webpackChunkgovis_renewal||[]).push([[4513],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./component/modules/ImageUploader/ImageUploader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>ImageUploader_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),StoryLayout=__webpack_require__("./component/modules/story_layout/StoryLayout.tsx"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),Pic=__webpack_require__("./component/atom/icons/Pic.tsx"),Edit=__webpack_require__("./component/atom/icons/Edit.tsx"),Plus=__webpack_require__("./component/atom/icons/Plus.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");var Container=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ev7s9tp5"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),GrayBox=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ev7s9tp4"})({name:"1elbntg",styles:"overflow:hidden;width:100%;max-width:40rem;height:24.8rem;background:var(--color-neutral90);box-shadow:0px 1px 2px 0px rgba(16, 24, 40, 0.05);border-radius:0.8rem;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;cursor:pointer;img{width:100%;height:100%;objectfit:cover;}"}),Text=(0,emotion_styled_base_browser_esm.Z)("p",{target:"ev7s9tp3"})({name:"1j10oq4",styles:"color:var(--color-neutral30);font-size:1.2rem;font-style:normal;font-weight:400;line-height:1.8rem;margin-top:3rem"}),ImageWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ev7s9tp2"})({name:"1iqwm4c",styles:"display:flex;align-items:center;padding:0.8rem 0;margin-top:1.6rem;cursor:pointer;svg{path{fill:var(--color-blue60);}}"}),ImageText=(0,emotion_styled_base_browser_esm.Z)("span",{target:"ev7s9tp1"})({name:"ia40bt",styles:"color:var(--color-blue60);font-size:1.4rem;font-weight:600;line-height:120%;margin-left:0.8rem"}),ImageInput=(0,emotion_styled_base_browser_esm.Z)("input",{target:"ev7s9tp0"})({name:"eivff4",styles:"display:none"}),ImageUploader=function ImageUploader(_ref){var pageMode=_ref.pageMode,isReadOnly=_ref.isReadOnly,product_image=_ref.product_image,onImageChange=_ref.onImageChange,_useState=(0,react.useState)("add"===pageMode||null===product_image?null:product_image),_useState2=(0,slicedToArray.Z)(_useState,2),image=_useState2[0],setImage=_useState2[1],imageInputRef=(0,react.useRef)(null),imgSelect=function imgSelect(){var _imageInputRef$curren;return isReadOnly?null:null===(_imageInputRef$curren=imageInputRef.current)||void 0===_imageInputRef$curren?void 0:_imageInputRef$curren.click()};return(0,emotion_react_browser_esm.tZ)(Container,null,(0,emotion_react_browser_esm.tZ)(GrayBox,{onClick:imgSelect},(0,emotion_react_browser_esm.tZ)(ImageInput,{type:"file",ref:imageInputRef,id:"imageInput",accept:"image/*",onChange:function handleImageChange(event){var _event$target$files,file=null===(_event$target$files=event.target.files)||void 0===_event$target$files?void 0:_event$target$files[0];if(file&&file.type.startsWith("image/")){var imageUrl=URL.createObjectURL(file);setImage(imageUrl),onImageChange&&onImageChange(file)}}}),image&&"null"!==String(image)?(0,emotion_react_browser_esm.tZ)("img",{src:"string"==typeof image?image:URL.createObjectURL(image),alt:"Uploaded",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,emotion_react_browser_esm.tZ)(react.Fragment,null,(0,emotion_react_browser_esm.tZ)(Pic.default,{size:40}),(0,emotion_react_browser_esm.tZ)(Text,null,"권장 용량 최대 2MB"))),!isReadOnly&&(0,emotion_react_browser_esm.tZ)(ImageWrapper,{onClick:imgSelect},image?(0,emotion_react_browser_esm.tZ)(Edit.default,null):(0,emotion_react_browser_esm.tZ)(Plus.default,null),(0,emotion_react_browser_esm.tZ)(ImageText,null,image?"이미지 수정":"이미지 추가")))};const ImageUploader_ImageUploader=ImageUploader;try{ImageUploader.displayName="ImageUploader",ImageUploader.__docgenInfo={description:"",displayName:"ImageUploader",props:{pageMode:{defaultValue:null,description:"",name:"pageMode",required:!1,type:{name:"string"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},product_image:{defaultValue:null,description:"",name:"product_image",required:!0,type:{name:"string"}},onImageChange:{defaultValue:null,description:"",name:"onImageChange",required:!1,type:{name:"((file: File) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/modules/ImageUploader/ImageUploader.tsx#ImageUploader"]={docgenInfo:ImageUploader.__docgenInfo,name:"ImageUploader",path:"component/modules/ImageUploader/ImageUploader.tsx#ImageUploader"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;const ImageUploader_stories={title:"Modules/ImageUploader",tags:["autodocs"],args:{Desc:""},parameters:{storySource:{source:"import _objectSpread from \"/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/objectSpread2.js\";\nvar _Default$parameters, _Default$parameters2, _Default$parameters2$;\n\nimport React from 'react';\nimport StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';\nimport ImageUploader from './ImageUploader';\n\n// Create a client\nimport { jsx as ___EmotionJSX } from \"@emotion/react\";\nvar meta = {\n  title: 'Modules/ImageUploader',\n  tags: ['autodocs'],\n  args: {\n    Desc: \"\"\n  },\n  parameters: {\n    docs: {\n      story: {\n        inline: true\n      },\n      // render the story in an iframe\n      canvas: {\n        sourceState: 'shown'\n      },\n      // start with the source open\n      source: {\n        type: 'code'\n      } // forces the raw source code (rather than the rendered JSX).\n    }\n  }\n};\n\nexport default meta;\nvar StoryPagination = function StoryPagination(args) {\n  return ___EmotionJSX(StoryLayout, args, ___EmotionJSX(ImageUploader, {\n    product_image: \"\"\n  }));\n};\nexport var Default = StoryPagination.bind({});\nDefault.args = {\n  darkMode: false\n};\nDefault.parameters = {\n  controls: {\n    exclude: ['setPageNumber']\n  }\n};\nDefault.parameters = _objectSpread(_objectSpread({}, Default.parameters), {}, {\n  docs: _objectSpread(_objectSpread({}, (_Default$parameters = Default.parameters) === null || _Default$parameters === void 0 ? void 0 : _Default$parameters.docs), {}, {\n    source: _objectSpread({\n      originalSource: \"args => {\\n  return <StoryLayout {...args}>\\n      <ImageUploader product_image=\\\"\\\" />\\n    </StoryLayout>;\\n}\"\n    }, (_Default$parameters2 = Default.parameters) === null || _Default$parameters2 === void 0 ? void 0 : (_Default$parameters2$ = _Default$parameters2.docs) === null || _Default$parameters2$ === void 0 ? void 0 : _Default$parameters2$.source)\n  })\n});",locationsMap:{default:{startLoc:{col:22,line:34},endLoc:{col:1,line:38},startBody:{col:22,line:34},endBody:{col:1,line:38}}}},docs:{story:{inline:!0},canvas:{sourceState:"shown"},source:{type:"code"}}}};var Default=function StoryPagination(args){return(0,emotion_react_browser_esm.tZ)(StoryLayout.Z,args,(0,emotion_react_browser_esm.tZ)(ImageUploader_ImageUploader,{product_image:""}))}.bind({});Default.args={darkMode:!1},Default.parameters={controls:{exclude:["setPageNumber"]}},Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => {\n  return <StoryLayout {...args}>\n      <ImageUploader product_image="" />\n    </StoryLayout>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./component/atom/icons/Edit.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_yun_eunseog_workspace_govis_renewal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_excluded=["size","viewBoxSize"],Edit=function Edit(_ref){var size=_ref.size,viewBoxSize=_ref.viewBoxSize,props=(0,_Users_yun_eunseog_workspace_govis_renewal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_ref,_excluded);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.tZ)("svg",{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(props.customCss,";",""),xmlns:"http://www.w3.org/2000/svg",width:size||16,height:size||16,fill:"none",viewBox:"0 0 ".concat(viewBoxSize||24," ").concat(viewBoxSize||24)},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16.617 3.752a2.567 2.567 0 1 1 3.631 3.631L7.993 19.638 3 21l1.362-4.993L16.617 3.752Z"}))};const __WEBPACK_DEFAULT_EXPORT__=Edit;try{Edit.displayName="Edit",Edit.__docgenInfo={description:"",displayName:"Edit",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},viewBoxSize:{defaultValue:null,description:"",name:"viewBoxSize",required:!1,type:{name:"number"}},customCss:{defaultValue:null,description:"",name:"customCss",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/atom/icons/Edit.tsx#Edit"]={docgenInfo:Edit.__docgenInfo,name:"Edit",path:"component/atom/icons/Edit.tsx#Edit"})}catch(__react_docgen_typescript_loader_error){}},"./component/atom/icons/Pic.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_yun_eunseog_workspace_govis_renewal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_excluded=["size","viewBoxSize"],Pic=function Pic(_ref){var size=_ref.size,viewBoxSize=_ref.viewBoxSize,props=(0,_Users_yun_eunseog_workspace_govis_renewal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_ref,_excluded);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.tZ)("svg",{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(props.customCss,";",""),xmlns:"http://www.w3.org/2000/svg",width:size||16,height:size||16,fill:"none",viewBox:"0 0 ".concat(viewBoxSize||24," ").concat(viewBoxSize||24)},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{fill:"#747474",fillRule:"evenodd",d:"M8 10a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 8 10Zm10 9H6.561l7.005-5.845c.246-.209.692-.208.933-.001L19 16.994V18a1 1 0 0 1-1 1ZM6 5h12a1 1 0 0 1 1 1v8.364l-3.203-2.732c-.99-.842-2.539-.842-3.52-.006L5 17.698V6a1 1 0 0 1 1-1Zm12-2H6C4.346 3 3 4.346 3 6v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3Z",clipRule:"evenodd"}))};const __WEBPACK_DEFAULT_EXPORT__=Pic;try{Pic.displayName="Pic",Pic.__docgenInfo={description:"",displayName:"Pic",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},viewBoxSize:{defaultValue:null,description:"",name:"viewBoxSize",required:!1,type:{name:"number"}},customCss:{defaultValue:null,description:"",name:"customCss",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/atom/icons/Pic.tsx#Pic"]={docgenInfo:Pic.__docgenInfo,name:"Pic",path:"component/atom/icons/Pic.tsx#Pic"})}catch(__react_docgen_typescript_loader_error){}},"./component/atom/icons/Plus.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_yun_eunseog_workspace_govis_renewal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_excluded=["size","viewBoxSize"],Plus=function Plus(_ref){var size=_ref.size,viewBoxSize=_ref.viewBoxSize,props=(0,_Users_yun_eunseog_workspace_govis_renewal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_ref,_excluded);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.tZ)("svg",{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(props.customCss,";",""),xmlns:"http://www.w3.org/2000/svg",width:size||16,height:size||16,fill:"none",viewBox:"0 0 ".concat(viewBoxSize||24," ").concat(viewBoxSize||24)},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{fill:"currentColor",fillRule:"evenodd",d:"M19 11h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2Z",clipRule:"evenodd"}))};const __WEBPACK_DEFAULT_EXPORT__=Plus;try{Plus.displayName="Plus",Plus.__docgenInfo={description:"",displayName:"Plus",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},viewBoxSize:{defaultValue:null,description:"",name:"viewBoxSize",required:!1,type:{name:"number"}},customCss:{defaultValue:null,description:"",name:"customCss",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/atom/icons/Plus.tsx#Plus"]={docgenInfo:Plus.__docgenInfo,name:"Plus",path:"component/atom/icons/Plus.tsx#Plus"})}catch(__react_docgen_typescript_loader_error){}},"./component/modules/story_layout/StoryLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_ComponentFarm_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./component/theme.ts"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js")),Container=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"esemnhh1"})("margin:-1rem;",(function(_ref){return _ref.darkMode&&"\n    background-color: #2D3748;\n  "}),";"),Content=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"esemnhh0"})("display:flex;flex-direction:column;gap:1rem;*{box-sizing:border-box;}padding:",(function(_ref2){return _ref2.noPadding?"0":"1rem"}),";",(function(_ref3){return _ref3.customCss}),";"),StoryLayout=function StoryLayout(_ref4){var darkMode=_ref4.darkMode,children=_ref4.children,noPadding=_ref4.noPadding,customCss=_ref4.customCss;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.a,{theme:_ComponentFarm_theme__WEBPACK_IMPORTED_MODULE_1__.r},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Container,{darkMode},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Content,{noPadding,customCss},children)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{id:"modal-root"}))};const __WEBPACK_DEFAULT_EXPORT__=StoryLayout;try{StoryLayout.displayName="StoryLayout",StoryLayout.__docgenInfo={description:"",displayName:"StoryLayout",props:{darkMode:{defaultValue:null,description:"",name:"darkMode",required:!0,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},customCss:{defaultValue:null,description:"",name:"customCss",required:!1,type:{name:"SerializedStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/modules/story_layout/StoryLayout.tsx#StoryLayout"]={docgenInfo:StoryLayout.__docgenInfo,name:"StoryLayout",path:"component/modules/story_layout/StoryLayout.tsx#StoryLayout"})}catch(__react_docgen_typescript_loader_error){}},"./component/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var theme={colors:{transparent:"transparent",white:"#fff",black:"#000",brand25:"#ff6d00",brand50:"#ff9240",gray25:"#FCFCFD",gray50:"#F9FAFB",gray100:"#F2F4F7",gray200:"#E4E7EC",gray300:"#D0D5DD",gray400:"#98A2B3",gray500:"#667085",gray600:"#475467",gray700:"#344054",gray800:"#1D2939",gray900:"#101828",primary25:"#F5FAFF",primary50:"#EFF8FF",primary100:"#D1E9FF",primary200:"#B2DDFF",primary300:"#84CAFF",primary400:"#53B1FD",primary500:"#2E90FA",primary600:"#1570EF",primary700:"#175CD3",primary800:"#1849A9",primary900:"#194185",error25:"#FFFBFA",error50:"#FEF3F2",error100:"#FEE4E2",error200:"#FECDCA",error300:"#FDA29B",error400:"#F97066",error500:"#F04438",error600:"#D92D20",error700:"#B42318",error800:"#912018",error900:"#7A271A",warning25:"#FFFCF5",warning50:"#FFFAEB",warning100:"#FEF0C7",warning200:"#FEDF89",warning300:"#FEC84B",warning400:"#FDB022",warning500:"#F79009",warning600:"#DC6803",warning700:"#B54708",warning800:"#93370D",warning900:"#7A2E0E",success25:"#F6FEF9",success50:"#ECFDF3",success100:"#D1FADF",success200:"#A6F4C5",success300:"#6CE9A6",success400:"#32D583",success500:"#12B76A",success600:"#039855",success700:"#027A48",success800:"#05603A",success900:"#054F31"},fontSize:{xs:["12px","18px"],sm:["14px","20px"],md:["16px","24px"],lg:["18px","28px"],xl:["20px","30px"],h6:["24px","32px"],h5:["30px","38px"],h4:["36px","44px"],h3:["48px","60px"],h2:["60px","72px"],h1:["72px","90px"]},fontWeight:{normal:400,medium:500,semibold:600,bold:700},screens:{xs:"420px"},spacing:{4.5:"1.125rem",5.5:"1.375rem",6.5:"1.625rem",13:"3.25rem",15:"3.75rem",19:"4.75rem",19.5:"4.875rem",50:"12.5rem",58:"14.5rem",62:"15.5rem",70:"17.5rem"}}}}]);