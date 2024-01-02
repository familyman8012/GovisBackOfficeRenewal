"use strict";(self.webpackChunkgovis_renewal=self.webpackChunkgovis_renewal||[]).push([[9059],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./component/atom/Toggle/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ReactHookForm:()=>ReactHookForm,default:()=>Toggle_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),StoryLayout=__webpack_require__("./component/modules/story_layout/StoryLayout.tsx"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),useSyncedRef=__webpack_require__("./src/hook/useSyncedRef.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_excluded=["checked","loading","onChange","className","disabled","variant"];var _ref={name:"1p6asi5",styles:"input:checked+.slider{background-color:var(--color-blue60);}"},_ref2={name:"12aqi7",styles:"input:checked+.slider{background-color:var(--color-green400);}"},_ref3={name:"7opbkl",styles:"input:checked+.slider{background-color:var(--color-red60);}"},variantStyle=function variantStyle(props){return"red"===props.variant?_ref3:"green"===props.variant?_ref2:_ref},ToggleStyle=(0,emotion_styled_base_browser_esm.Z)("label",{target:"e16te6ce0"})("position:relative;display:inline-flex;width:3.6rem;height:2rem;cursor:pointer;margin:0;&.disabled,&.loading{cursor:not-allowed;}input{opacity:0;width:0;height:0;}.slider{position:absolute;top:0;left:0;right:0;bottom:0;cursor:inherit;background-color:var(--color-gray4);border-radius:11px;transition:all 0.3s ease;}.slider:before{position:absolute;content:'';height:1.6rem;width:1.6rem;left:0.2rem;bottom:0.2rem;border-radius:50%;transition:all 0.3s ease;box-shadow:0px 2px 1px rgba(16, 24, 40, 0.06);background-color:var(--color-gray2);}input:checked+.slider{background-color:var(--color-blue60);}input:checked+.slider:before{transform:translateX(calc(3.6rem - 2rem));}",variantStyle,";"),Toggle=react.forwardRef((function(_ref4,ref){var checked=_ref4.checked,loading=_ref4.loading,_onChange=_ref4.onChange,className=_ref4.className,disabled=_ref4.disabled,_ref4$variant=_ref4.variant,variant=void 0===_ref4$variant?"primary":_ref4$variant,otherProps=(0,objectWithoutProperties.Z)(_ref4,_excluded),refs=(0,useSyncedRef.Z)(ref);return(0,emotion_react_browser_esm.tZ)(ToggleStyle,{className:"".concat(loading?"loading":""," ").concat(disabled?"disabled":""," ").concat(null!=className?className:""),variant},(0,emotion_react_browser_esm.tZ)("input",(0,esm_extends.Z)({ref:refs},otherProps,{type:"checkbox",checked,disabled:loading||disabled,onChange:function onChange(e){return!loading&&(null==_onChange?void 0:_onChange(e))}})),(0,emotion_react_browser_esm.tZ)("span",{className:"slider"}))}));Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle"};const Toggle_Toggle=Toggle;try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"red"'},{value:'"green"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/atom/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"component/atom/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,_ReactHookForm$parame,_ReactHookForm$parame2,_ReactHookForm$parame3,console=__webpack_require__("./node_modules/console-browserify/index.js");const Toggle_stories={title:"Atoms/Toggle",tags:["autodocs"],args:{loading:!1,checked:!0,disabled:!1},parameters:{storySource:{source:'import _objectSpread from "/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/objectSpread2.js";\nvar _Default$parameters, _Default$parameters2, _Default$parameters2$, _ReactHookForm$parame, _ReactHookForm$parame2, _ReactHookForm$parame3;\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }\nimport React from \'react\';\nimport { useForm } from \'react-hook-form\';\nimport { css } from \'@emotion/react\';\nimport StoryLayout from \'@ComponentFarm/modules/story_layout/StoryLayout\';\nimport Toggle from \'./Toggle\';\nimport { jsx as ___EmotionJSX } from "@emotion/react";\nvar meta = {\n  title: \'Atoms/Toggle\',\n  tags: [\'autodocs\'],\n  args: {\n    loading: false,\n    checked: true,\n    disabled: false\n  },\n  parameters: {\n    docs: {\n      story: {\n        inline: true\n      },\n      // render the story in an iframe\n      canvas: {\n        sourceState: \'shown\'\n      },\n      // start with the source open\n      source: {\n        type: \'code\'\n      } // forces the raw source code (rather than the rendered JSX).\n    }\n  }\n};\n\nexport default meta;\nvar _ref = process.env.NODE_ENV === "production" ? {\n  name: "iajdyc",\n  styles: "display:flex;flex-direction:column;gap:1rem;align-items:flex-start"\n} : {\n  name: "1q8c55i-Default",\n  styles: "display:flex;flex-direction:column;gap:1rem;align-items:flex-start;label:Default;",\n  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dW4tZXVuc2VvZy93b3Jrc3BhY2UvZ292aXMtcmVuZXdhbC9jb21wb25lbnQvYXRvbS9Ub2dnbGUvVG9nZ2xlLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDd0QiLCJmaWxlIjoiL1VzZXJzL3l1bi1ldW5zZW9nL3dvcmtzcGFjZS9nb3Zpcy1yZW5ld2FsL2NvbXBvbmVudC9hdG9tL1RvZ2dsZS9Ub2dnbGUuc3Rvcmllcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWV0YSwgU3RvcnkgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IFN0b3J5TGF5b3V0IGZyb20gJ0BDb21wb25lbnRGYXJtL21vZHVsZXMvc3RvcnlfbGF5b3V0L1N0b3J5TGF5b3V0JztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9Ub2dnbGUnO1xuY29uc3QgbWV0YTogTWV0YSA9IHtcbiAgdGl0bGU6ICdBdG9tcy9Ub2dnbGUnLFxuICB0YWdzOiBbJ2F1dG9kb2NzJ10sXG4gIGFyZ3M6IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBjaGVja2VkOiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZVxuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgZG9jczoge1xuICAgICAgc3Rvcnk6IHtcbiAgICAgICAgaW5saW5lOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gcmVuZGVyIHRoZSBzdG9yeSBpbiBhbiBpZnJhbWVcbiAgICAgIGNhbnZhczoge1xuICAgICAgICBzb3VyY2VTdGF0ZTogJ3Nob3duJ1xuICAgICAgfSxcbiAgICAgIC8vIHN0YXJ0IHdpdGggdGhlIHNvdXJjZSBvcGVuXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdHlwZTogJ2NvZGUnXG4gICAgICB9IC8vIGZvcmNlcyB0aGUgcmF3IHNvdXJjZSBjb2RlIChyYXRoZXIgdGhhbiB0aGUgcmVuZGVyZWQgSlNYKS5cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG5pbnRlcmZhY2UgUHJvcHMge1xuICBkYXJrTW9kZTogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgY2hlY2tlZDogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuZXhwb3J0IGNvbnN0IERlZmF1bHQ6IFN0b3J5PFByb3BzPiA9ICh7XG4gIGRhcmtNb2RlLFxuICBsb2FkaW5nLFxuICBjaGVja2VkLFxuICBkaXNhYmxlZFxufSkgPT4ge1xuICByZXR1cm4gPFN0b3J5TGF5b3V0IGRhcmtNb2RlPXtkYXJrTW9kZX0gY3VzdG9tQ3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBgfT5cbiAgICAgIDxUb2dnbGUgbG9hZGluZz17bG9hZGluZ30gY2hlY2tlZD17Y2hlY2tlZH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSB2YXJpYW50PVwicmVkXCIgLz5cbiAgICAgIDxUb2dnbGUgbG9hZGluZz17bG9hZGluZ30gY2hlY2tlZD17Y2hlY2tlZH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSB2YXJpYW50PVwiZ3JlZW5cIiAvPlxuICAgICAgPFRvZ2dsZSBsb2FkaW5nPXtsb2FkaW5nfSBjaGVja2VkPXtmYWxzZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSAvPlxuICAgICAgPFRvZ2dsZSBjaGVja2VkPXtjaGVja2VkfSBsb2FkaW5nPXtsb2FkaW5nfSBvbkNoYW5nZT17dmFsdWUgPT4gY29uc29sZS5sb2coJ2NoYW5nZWQgVmFsdWUgOiAnLCB2YWx1ZSl9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgICA8L1N0b3J5TGF5b3V0Pjtcbn07XG5leHBvcnQgY29uc3QgUmVhY3RIb29rRm9ybTogU3Rvcnk8UHJvcHM+ID0gKHtcbiAgZGFya01vZGVcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIHdhdGNoXG4gIH0gPSB1c2VGb3JtPHtcbiAgICBzd2l0Y2g6IGJvb2xlYW47XG4gIH0+KHtcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBzd2l0Y2g6IGZhbHNlXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIDxTdG9yeUxheW91dCBkYXJrTW9kZT17ZGFya01vZGV9PlxuICAgICAgPFRvZ2dsZSB7Li4ucmVnaXN0ZXIoJ3N3aXRjaCcpfSAvPlxuICAgICAgPHA+XG4gICAgICAgIGNoZWNrZWQgOiB7d2F0Y2goJ3N3aXRjaCcpPy50b1N0cmluZygpfSB0eXBlOiB7dHlwZW9mIHdhdGNoKCdzd2l0Y2gnKX1cbiAgICAgIDwvcD5cbiAgICA8L1N0b3J5TGF5b3V0Pjtcbn07XG5EZWZhdWx0LnBhcmFtZXRlcnMgPSB7XG4gIC4uLkRlZmF1bHQucGFyYW1ldGVycyxcbiAgZG9jczoge1xuICAgIC4uLkRlZmF1bHQucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIih7XFxuICBkYXJrTW9kZSxcXG4gIGxvYWRpbmcsXFxuICBjaGVja2VkLFxcbiAgZGlzYWJsZWRcXG59KSA9PiB7XFxuICByZXR1cm4gPFN0b3J5TGF5b3V0IGRhcmtNb2RlPXtkYXJrTW9kZX0gY3VzdG9tQ3NzPXtjc3NgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgIGB9PlxcbiAgICAgIDxUb2dnbGUgbG9hZGluZz17bG9hZGluZ30gY2hlY2tlZD17Y2hlY2tlZH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSB2YXJpYW50PVxcXCJyZWRcXFwiIC8+XFxuICAgICAgPFRvZ2dsZSBsb2FkaW5nPXtsb2FkaW5nfSBjaGVja2VkPXtjaGVja2VkfSBkaXNhYmxlZD17ZGlzYWJsZWR9IHZhcmlhbnQ9XFxcImdyZWVuXFxcIiAvPlxcbiAgICAgIDxUb2dnbGUgbG9hZGluZz17bG9hZGluZ30gY2hlY2tlZD17ZmFsc2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cXG4gICAgICA8VG9nZ2xlIGNoZWNrZWQ9e2NoZWNrZWR9IGxvYWRpbmc9e2xvYWRpbmd9IG9uQ2hhbmdlPXt2YWx1ZSA9PiBjb25zb2xlLmxvZygnY2hhbmdlZCBWYWx1ZSA6ICcsIHZhbHVlKX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSAvPlxcbiAgICA8L1N0b3J5TGF5b3V0PjtcXG59XCIsXG4gICAgICAuLi5EZWZhdWx0LnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTtcblJlYWN0SG9va0Zvcm0ucGFyYW1ldGVycyA9IHtcbiAgLi4uUmVhY3RIb29rRm9ybS5wYXJhbWV0ZXJzLFxuICBkb2NzOiB7XG4gICAgLi4uUmVhY3RIb29rRm9ybS5wYXJhbWV0ZXJzPy5kb2NzLFxuICAgIHNvdXJjZToge1xuICAgICAgb3JpZ2luYWxTb3VyY2U6IFwiKHtcXG4gIGRhcmtNb2RlXFxufSkgPT4ge1xcbiAgY29uc3Qge1xcbiAgICByZWdpc3RlcixcXG4gICAgd2F0Y2hcXG4gIH0gPSB1c2VGb3JtPHtcXG4gICAgc3dpdGNoOiBib29sZWFuO1xcbiAgfT4oe1xcbiAgICBkZWZhdWx0VmFsdWVzOiB7XFxuICAgICAgc3dpdGNoOiBmYWxzZVxcbiAgICB9XFxuICB9KTtcXG4gIHJldHVybiA8U3RvcnlMYXlvdXQgZGFya01vZGU9e2RhcmtNb2RlfT5cXG4gICAgICA8VG9nZ2xlIHsuLi5yZWdpc3Rlcignc3dpdGNoJyl9IC8+XFxuICAgICAgPHA+XFxuICAgICAgICBjaGVja2VkIDoge3dhdGNoKCdzd2l0Y2gnKT8udG9TdHJpbmcoKX0gdHlwZToge3R5cGVvZiB3YXRjaCgnc3dpdGNoJyl9XFxuICAgICAgPC9wPlxcbiAgICA8L1N0b3J5TGF5b3V0PjtcXG59XCIsXG4gICAgICAuLi5SZWFjdEhvb2tGb3JtLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiXX0= */",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nexport var Default = function Default(_ref2) {\n  var darkMode = _ref2.darkMode,\n    loading = _ref2.loading,\n    checked = _ref2.checked,\n    disabled = _ref2.disabled;\n  return ___EmotionJSX(StoryLayout, {\n    darkMode: darkMode,\n    customCss: _ref\n  }, ___EmotionJSX(Toggle, {\n    loading: loading,\n    checked: checked,\n    disabled: disabled,\n    variant: "red"\n  }), ___EmotionJSX(Toggle, {\n    loading: loading,\n    checked: checked,\n    disabled: disabled,\n    variant: "green"\n  }), ___EmotionJSX(Toggle, {\n    loading: loading,\n    checked: false,\n    disabled: disabled\n  }), ___EmotionJSX(Toggle, {\n    checked: checked,\n    loading: loading,\n    onChange: function onChange(value) {\n      return console.log(\'changed Value : \', value);\n    },\n    disabled: disabled\n  }));\n};\nexport var ReactHookForm = function ReactHookForm(_ref3) {\n  var _watch;\n  var darkMode = _ref3.darkMode;\n  var _useForm = useForm({\n      defaultValues: {\n        "switch": false\n      }\n    }),\n    register = _useForm.register,\n    watch = _useForm.watch;\n  return ___EmotionJSX(StoryLayout, {\n    darkMode: darkMode\n  }, ___EmotionJSX(Toggle, register(\'switch\')), ___EmotionJSX("p", null, "checked : ", (_watch = watch(\'switch\')) === null || _watch === void 0 ? void 0 : _watch.toString(), " type: ", typeof watch(\'switch\')));\n};\nDefault.parameters = _objectSpread(_objectSpread({}, Default.parameters), {}, {\n  docs: _objectSpread(_objectSpread({}, (_Default$parameters = Default.parameters) === null || _Default$parameters === void 0 ? void 0 : _Default$parameters.docs), {}, {\n    source: _objectSpread({\n      originalSource: "({\\n  darkMode,\\n  loading,\\n  checked,\\n  disabled\\n}) => {\\n  return <StoryLayout darkMode={darkMode} customCss={css`\\n        display: flex;\\n        flex-direction: column;\\n        gap: 1rem;\\n        align-items: flex-start;\\n      `}>\\n      <Toggle loading={loading} checked={checked} disabled={disabled} variant=\\"red\\" />\\n      <Toggle loading={loading} checked={checked} disabled={disabled} variant=\\"green\\" />\\n      <Toggle loading={loading} checked={false} disabled={disabled} />\\n      <Toggle checked={checked} loading={loading} onChange={value => console.log(\'changed Value : \', value)} disabled={disabled} />\\n    </StoryLayout>;\\n}"\n    }, (_Default$parameters2 = Default.parameters) === null || _Default$parameters2 === void 0 ? void 0 : (_Default$parameters2$ = _Default$parameters2.docs) === null || _Default$parameters2$ === void 0 ? void 0 : _Default$parameters2$.source)\n  })\n});\nReactHookForm.parameters = _objectSpread(_objectSpread({}, ReactHookForm.parameters), {}, {\n  docs: _objectSpread(_objectSpread({}, (_ReactHookForm$parame = ReactHookForm.parameters) === null || _ReactHookForm$parame === void 0 ? void 0 : _ReactHookForm$parame.docs), {}, {\n    source: _objectSpread({\n      originalSource: "({\\n  darkMode\\n}) => {\\n  const {\\n    register,\\n    watch\\n  } = useForm<{\\n    switch: boolean;\\n  }>({\\n    defaultValues: {\\n      switch: false\\n    }\\n  });\\n  return <StoryLayout darkMode={darkMode}>\\n      <Toggle {...register(\'switch\')} />\\n      <p>\\n        checked : {watch(\'switch\')?.toString()} type: {typeof watch(\'switch\')}\\n      </p>\\n    </StoryLayout>;\\n}"\n    }, (_ReactHookForm$parame2 = ReactHookForm.parameters) === null || _ReactHookForm$parame2 === void 0 ? void 0 : (_ReactHookForm$parame3 = _ReactHookForm$parame2.docs) === null || _ReactHookForm$parame3 === void 0 ? void 0 : _ReactHookForm$parame3.source)\n  })\n});',locationsMap:{default:{startLoc:{col:21,line:45},endLoc:{col:1,line:75},startBody:{col:21,line:45},endBody:{col:1,line:75}},"react-hook-form":{startLoc:{col:27,line:76},endLoc:{col:1,line:89},startBody:{col:27,line:76},endBody:{col:1,line:89}}}},docs:{story:{inline:!0},canvas:{sourceState:"shown"},source:{type:"code"}}}};var Toggle_stories_ref={name:"iajdyc",styles:"display:flex;flex-direction:column;gap:1rem;align-items:flex-start"},Default=function Default(_ref2){var darkMode=_ref2.darkMode,loading=_ref2.loading,checked=_ref2.checked,disabled=_ref2.disabled;return(0,emotion_react_browser_esm.tZ)(StoryLayout.Z,{darkMode,customCss:Toggle_stories_ref},(0,emotion_react_browser_esm.tZ)(Toggle_Toggle,{loading,checked,disabled,variant:"red"}),(0,emotion_react_browser_esm.tZ)(Toggle_Toggle,{loading,checked,disabled,variant:"green"}),(0,emotion_react_browser_esm.tZ)(Toggle_Toggle,{loading,checked:!1,disabled}),(0,emotion_react_browser_esm.tZ)(Toggle_Toggle,{checked,loading,onChange:function onChange(value){return console.log("changed Value : ",value)},disabled}))},ReactHookForm=function ReactHookForm(_ref3){var _watch,darkMode=_ref3.darkMode,_useForm=(0,index_esm.cI)({defaultValues:{switch:!1}}),register=_useForm.register,watch=_useForm.watch;return(0,emotion_react_browser_esm.tZ)(StoryLayout.Z,{darkMode},(0,emotion_react_browser_esm.tZ)(Toggle_Toggle,register("switch")),(0,emotion_react_browser_esm.tZ)("p",null,"checked : ",null===(_watch=watch("switch"))||void 0===_watch?void 0:_watch.toString()," type: ",typeof watch("switch")))};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'({\n  darkMode,\n  loading,\n  checked,\n  disabled\n}) => {\n  return <StoryLayout darkMode={darkMode} customCss={css`\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        align-items: flex-start;\n      `}>\n      <Toggle loading={loading} checked={checked} disabled={disabled} variant="red" />\n      <Toggle loading={loading} checked={checked} disabled={disabled} variant="green" />\n      <Toggle loading={loading} checked={false} disabled={disabled} />\n      <Toggle checked={checked} loading={loading} onChange={value => console.log(\'changed Value : \', value)} disabled={disabled} />\n    </StoryLayout>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),ReactHookForm.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ReactHookForm.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ReactHookForm$parame=ReactHookForm.parameters)||void 0===_ReactHookForm$parame?void 0:_ReactHookForm$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"({\n  darkMode\n}) => {\n  const {\n    register,\n    watch\n  } = useForm<{\n    switch: boolean;\n  }>({\n    defaultValues: {\n      switch: false\n    }\n  });\n  return <StoryLayout darkMode={darkMode}>\n      <Toggle {...register('switch')} />\n      <p>\n        checked : {watch('switch')?.toString()} type: {typeof watch('switch')}\n      </p>\n    </StoryLayout>;\n}"},null===(_ReactHookForm$parame2=ReactHookForm.parameters)||void 0===_ReactHookForm$parame2||null===(_ReactHookForm$parame3=_ReactHookForm$parame2.docs)||void 0===_ReactHookForm$parame3?void 0:_ReactHookForm$parame3.source)})})},"./component/modules/story_layout/StoryLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_ComponentFarm_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./component/theme.ts"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js")),Container=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"esemnhh1"})("margin:-1rem;",(function(_ref){return _ref.darkMode&&"\n    background-color: #2D3748;\n  "}),";"),Content=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"esemnhh0"})("display:flex;flex-direction:column;gap:1rem;*{box-sizing:border-box;}&.center{align-items:center;}padding:",(function(_ref2){return _ref2.noPadding?"0":"1rem"}),";",(function(_ref3){return _ref3.customCss}),";"),StoryLayout=function StoryLayout(_ref4){var darkMode=_ref4.darkMode,children=_ref4.children,className=_ref4.className,noPadding=_ref4.noPadding,customCss=_ref4.customCss;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.a,{theme:_ComponentFarm_theme__WEBPACK_IMPORTED_MODULE_1__.r},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Container,{darkMode},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Content,{className,noPadding,customCss},children)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{id:"modal-root"}))};const __WEBPACK_DEFAULT_EXPORT__=StoryLayout;try{StoryLayout.displayName="StoryLayout",StoryLayout.__docgenInfo={description:"",displayName:"StoryLayout",props:{darkMode:{defaultValue:null,description:"",name:"darkMode",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},customCss:{defaultValue:null,description:"",name:"customCss",required:!1,type:{name:"SerializedStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["component/modules/story_layout/StoryLayout.tsx#StoryLayout"]={docgenInfo:StoryLayout.__docgenInfo,name:"StoryLayout",path:"component/modules/story_layout/StoryLayout.tsx#StoryLayout"})}catch(__react_docgen_typescript_loader_error){}},"./component/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var theme={colors:{transparent:"transparent",white:"#fff",black:"#000",brand25:"#ff6d00",brand50:"#ff9240",gray25:"#FCFCFD",gray50:"#F9FAFB",gray100:"#F2F4F7",gray200:"#E4E7EC",gray300:"#D0D5DD",gray400:"#98A2B3",gray500:"#667085",gray600:"#475467",gray700:"#344054",gray800:"#1D2939",gray900:"#101828",primary25:"#F5FAFF",primary50:"#EFF8FF",primary100:"#D1E9FF",primary200:"#B2DDFF",primary300:"#84CAFF",primary400:"#53B1FD",primary500:"#2E90FA",primary600:"#1570EF",primary700:"#175CD3",primary800:"#1849A9",primary900:"#194185",error25:"#FFFBFA",error50:"#FEF3F2",error100:"#FEE4E2",error200:"#FECDCA",error300:"#FDA29B",error400:"#F97066",error500:"#F04438",error600:"#D92D20",error700:"#B42318",error800:"#912018",error900:"#7A271A",warning25:"#FFFCF5",warning50:"#FFFAEB",warning100:"#FEF0C7",warning200:"#FEDF89",warning300:"#FEC84B",warning400:"#FDB022",warning500:"#F79009",warning600:"#DC6803",warning700:"#B54708",warning800:"#93370D",warning900:"#7A2E0E",success25:"#F6FEF9",success50:"#ECFDF3",success100:"#D1FADF",success200:"#A6F4C5",success300:"#6CE9A6",success400:"#32D583",success500:"#12B76A",success600:"#039855",success700:"#027A48",success800:"#05603A",success900:"#054F31"},fontSize:{xs:["12px","18px"],sm:["14px","20px"],md:["16px","24px"],lg:["18px","28px"],xl:["20px","30px"],h6:["24px","32px"],h5:["30px","38px"],h4:["36px","44px"],h3:["48px","60px"],h2:["60px","72px"],h1:["72px","90px"]},fontWeight:{normal:400,medium:500,semibold:600,bold:700},screens:{xs:"420px"},spacing:{4.5:"1.125rem",5.5:"1.375rem",6.5:"1.625rem",13:"3.25rem",15:"3.75rem",19:"4.75rem",19.5:"4.875rem",50:"12.5rem",58:"14.5rem",62:"15.5rem",70:"17.5rem"}}},"./src/hook/useSyncedRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useSyncedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useSyncedRef(ref){var innerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){ref&&("function"==typeof ref?ref(innerRef.current):ref.current=innerRef.current)}),[innerRef.current]),innerRef}}}]);