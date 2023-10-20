"use strict";(self.webpackChunkgovis_renewal=self.webpackChunkgovis_renewal||[]).push([[6537],{"./component/atom/Skeleton/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Loaded:()=>Loaded,Loading:()=>Loading,default:()=>Skeleton_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");__webpack_require__("./node_modules/react-loading-skeleton/dist/skeleton.css");var _Loading$parameters,_Loading$parameters2,_Loading$parameters2$,_Loaded$parameters,_Loaded$parameters2,_Loaded$parameters2$d,CardContainer={name:"12zfkei",styles:"max-width:345px;margin:2rem;border:1px solid #ddd;border-radius:4px;overflow:hidden;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)"},CardHeader={name:"19kjrov",styles:"display:flex;align-items:center;justify-content:space-between;padding:1rem"},CardContent={name:"1dvcxr3",styles:"padding:1rem"},emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const Skeleton_stories={title:"Atoms/Skelton",tags:["autodocs"],args:{TotalProps:{props:""}},parameters:{storySource:{source:'import _objectSpread from "/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/objectSpread2.js";\nimport _slicedToArray from "/Users/yun-eunseog/workspace/govis-renewal/node_modules/@babel/runtime/helpers/esm/slicedToArray.js";\nvar _Loading$parameters, _Loading$parameters2, _Loading$parameters2$, _Loaded$parameters, _Loaded$parameters2, _Loaded$parameters2$d;\nimport React, { useState } from \'react\';\nimport Skeleton from \'react-loading-skeleton\';\nimport \'react-loading-skeleton/dist/skeleton.css\';\nimport { CardContainer, CardContent, CardHeader } from \'./style\';\nimport { jsx as ___EmotionJSX } from "@emotion/react";\nvar meta = {\n  title: \'Atoms/Skelton\',\n  tags: [\'autodocs\'],\n  args: {\n    TotalProps: {\n      props: ""\n    }\n  },\n  parameters: {\n    docs: {\n      story: {\n        inline: true\n      },\n      // render the story in an iframe\n      canvas: {\n        sourceState: \'shown\'\n      },\n      // start with the source open\n      source: {\n        type: \'code\'\n      },\n      // forces the raw source code (rather than the rendered JSX).\n      description: {\n        component: \'description\'\n      }\n    }\n  }\n};\nexport default meta;\nvar StorySkelton = function StorySkelton(args) {\n  var _useState = useState(true),\n    _useState2 = _slicedToArray(_useState, 1),\n    loading = _useState2[0];\n  return ___EmotionJSX("div", {\n    css: CardContainer\n  }, ___EmotionJSX("div", {\n    css: CardHeader\n  }, loading ? ___EmotionJSX(Skeleton, {\n    circle: true,\n    height: 40,\n    width: 40\n  }) :\n  // Replace with your avatar component\n  ___EmotionJSX("img", {\n    src: "https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg",\n    alt: "Ted talk"\n  }), ___EmotionJSX("div", null, loading ? ___EmotionJSX(Skeleton, {\n    height: 10,\n    width: "80%"\n  }) : \'Ted\', loading ? ___EmotionJSX(Skeleton, {\n    height: 10,\n    width: "40%"\n  }) : \'5 hours ago\'), loading ? null :\n  // Replace with your icon button component\n  ___EmotionJSX("button", {\n    type: "button"\n  }, "...")), loading ? ___EmotionJSX(Skeleton, {\n    height: 190\n  }) : ___EmotionJSX("img", {\n    src: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",\n    alt: "Nicola Sturgeon on a TED talk stage"\n  }), ___EmotionJSX("div", {\n    css: CardContent\n  }, loading ? ___EmotionJSX(Skeleton, {\n    count: 3\n  }) : "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country\'s success:"));\n};\nexport var Loading = StorySkelton.bind({});\nvar StorySkelton2 = function StorySkelton2(args) {\n  var _useState3 = useState(false),\n    _useState4 = _slicedToArray(_useState3, 1),\n    loading = _useState4[0];\n  return ___EmotionJSX("div", {\n    css: CardContainer\n  }, ___EmotionJSX("div", {\n    css: CardHeader\n  }, loading ? ___EmotionJSX(Skeleton, {\n    circle: true,\n    height: 40,\n    width: 40\n  }) :\n  // Replace with your avatar component\n  ___EmotionJSX("img", {\n    src: "https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg",\n    alt: "Ted talk"\n  }), ___EmotionJSX("div", null, loading ? ___EmotionJSX(Skeleton, {\n    height: 10,\n    width: "80%"\n  }) : \'Ted\', loading ? ___EmotionJSX(Skeleton, {\n    height: 10,\n    width: "40%"\n  }) : \'5 hours ago\'), loading ? null :\n  // Replace with your icon button component\n  ___EmotionJSX("button", {\n    type: "button"\n  }, "...")), loading ? ___EmotionJSX(Skeleton, {\n    height: 190\n  }) : ___EmotionJSX("img", {\n    src: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",\n    alt: "Nicola Sturgeon on a TED talk stage"\n  }), ___EmotionJSX("div", {\n    css: CardContent\n  }, loading ? ___EmotionJSX(Skeleton, {\n    count: 3\n  }) : "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country\'s success:"));\n};\nexport var Loaded = StorySkelton2.bind({});\nLoading.parameters = _objectSpread(_objectSpread({}, Loading.parameters), {}, {\n  docs: _objectSpread(_objectSpread({}, (_Loading$parameters = Loading.parameters) === null || _Loading$parameters === void 0 ? void 0 : _Loading$parameters.docs), {}, {\n    source: _objectSpread({\n      originalSource: "args => {\\n  const [loading] = useState(true);\\n  return <div css={CardContainer}>\\n      <div css={CardHeader}>\\n        {loading ? <Skeleton circle height={40} width={40} /> :\\n      // Replace with your avatar component\\n      <img src=\\"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg\\" alt=\\"Ted talk\\" />}\\n        <div>\\n          {loading ? <Skeleton height={10} width=\\"80%\\" /> : \'Ted\'}\\n          {loading ? <Skeleton height={10} width=\\"40%\\" /> : \'5 hours ago\'}\\n        </div>\\n        {loading ? null :\\n      // Replace with your icon button component\\n      <button type=\\"button\\">...</button>}\\n      </div>\\n      {loading ? <Skeleton height={190} /> : <img src=\\"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512\\" alt=\\"Nicola Sturgeon on a TED talk stage\\" />}\\n      <div css={CardContent}>\\n        {loading ? <Skeleton count={3} /> : \\"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country\'s success:\\"}\\n      </div>\\n    </div>;\\n}"\n    }, (_Loading$parameters2 = Loading.parameters) === null || _Loading$parameters2 === void 0 ? void 0 : (_Loading$parameters2$ = _Loading$parameters2.docs) === null || _Loading$parameters2$ === void 0 ? void 0 : _Loading$parameters2$.source)\n  })\n});\nLoaded.parameters = _objectSpread(_objectSpread({}, Loaded.parameters), {}, {\n  docs: _objectSpread(_objectSpread({}, (_Loaded$parameters = Loaded.parameters) === null || _Loaded$parameters === void 0 ? void 0 : _Loaded$parameters.docs), {}, {\n    source: _objectSpread({\n      originalSource: "args => {\\n  const [loading] = useState(false);\\n  return <div css={CardContainer}>\\n      <div css={CardHeader}>\\n        {loading ? <Skeleton circle height={40} width={40} /> :\\n      // Replace with your avatar component\\n      <img src=\\"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg\\" alt=\\"Ted talk\\" />}\\n        <div>\\n          {loading ? <Skeleton height={10} width=\\"80%\\" /> : \'Ted\'}\\n          {loading ? <Skeleton height={10} width=\\"40%\\" /> : \'5 hours ago\'}\\n        </div>\\n        {loading ? null :\\n      // Replace with your icon button component\\n      <button type=\\"button\\">...</button>}\\n      </div>\\n      {loading ? <Skeleton height={190} /> : <img src=\\"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512\\" alt=\\"Nicola Sturgeon on a TED talk stage\\" />}\\n      <div css={CardContent}>\\n        {loading ? <Skeleton count={3} /> : \\"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country\'s success:\\"}\\n      </div>\\n    </div>;\\n}"\n    }, (_Loaded$parameters2 = Loaded.parameters) === null || _Loaded$parameters2 === void 0 ? void 0 : (_Loaded$parameters2$d = _Loaded$parameters2.docs) === null || _Loaded$parameters2$d === void 0 ? void 0 : _Loaded$parameters2$d.source)\n  })\n});',locationsMap:{loading:{startLoc:{col:19,line:38},endLoc:{col:1,line:75},startBody:{col:19,line:38},endBody:{col:1,line:75}},loaded:{startLoc:{col:20,line:77},endLoc:{col:1,line:114},startBody:{col:20,line:77},endBody:{col:1,line:114}}}},docs:{story:{inline:!0},canvas:{sourceState:"shown"},source:{type:"code"},description:{component:"description"}}}};var Loading=function StorySkelton(args){var _useState=(0,react.useState)(!0),loading=(0,slicedToArray.Z)(_useState,1)[0];return(0,emotion_react_browser_esm.tZ)("div",{css:CardContainer},(0,emotion_react_browser_esm.tZ)("div",{css:CardHeader},loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{circle:!0,height:40,width:40}):(0,emotion_react_browser_esm.tZ)("img",{src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg",alt:"Ted talk"}),(0,emotion_react_browser_esm.tZ)("div",null,loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{height:10,width:"80%"}):"Ted",loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{height:10,width:"40%"}):"5 hours ago"),loading?null:(0,emotion_react_browser_esm.tZ)("button",{type:"button"},"...")),loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{height:190}):(0,emotion_react_browser_esm.tZ)("img",{src:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",alt:"Nicola Sturgeon on a TED talk stage"}),(0,emotion_react_browser_esm.tZ)("div",{css:CardContent},loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{count:3}):"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"))}.bind({}),Loaded=function StorySkelton2(args){var _useState3=(0,react.useState)(!1),loading=(0,slicedToArray.Z)(_useState3,1)[0];return(0,emotion_react_browser_esm.tZ)("div",{css:CardContainer},(0,emotion_react_browser_esm.tZ)("div",{css:CardHeader},loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{circle:!0,height:40,width:40}):(0,emotion_react_browser_esm.tZ)("img",{src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg",alt:"Ted talk"}),(0,emotion_react_browser_esm.tZ)("div",null,loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{height:10,width:"80%"}):"Ted",loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{height:10,width:"40%"}):"5 hours ago"),loading?null:(0,emotion_react_browser_esm.tZ)("button",{type:"button"},"...")),loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{height:190}):(0,emotion_react_browser_esm.tZ)("img",{src:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",alt:"Nicola Sturgeon on a TED talk stage"}),(0,emotion_react_browser_esm.tZ)("div",{css:CardContent},loading?(0,emotion_react_browser_esm.tZ)(dist.Z,{count:3}):"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"))}.bind({});Loading.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Loading.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => {\n  const [loading] = useState(true);\n  return <div css={CardContainer}>\n      <div css={CardHeader}>\n        {loading ? <Skeleton circle height={40} width={40} /> :\n      // Replace with your avatar component\n      <img src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" alt="Ted talk" />}\n        <div>\n          {loading ? <Skeleton height={10} width="80%" /> : \'Ted\'}\n          {loading ? <Skeleton height={10} width="40%" /> : \'5 hours ago\'}\n        </div>\n        {loading ? null :\n      // Replace with your icon button component\n      <button type="button">...</button>}\n      </div>\n      {loading ? <Skeleton height={190} /> : <img src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512" alt="Nicola Sturgeon on a TED talk stage" />}\n      <div css={CardContent}>\n        {loading ? <Skeleton count={3} /> : "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country\'s success:"}\n      </div>\n    </div>;\n}'},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2$=_Loading$parameters2.docs)||void 0===_Loading$parameters2$?void 0:_Loading$parameters2$.source)})}),Loaded.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Loaded.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Loaded$parameters=Loaded.parameters)||void 0===_Loaded$parameters?void 0:_Loaded$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => {\n  const [loading] = useState(false);\n  return <div css={CardContainer}>\n      <div css={CardHeader}>\n        {loading ? <Skeleton circle height={40} width={40} /> :\n      // Replace with your avatar component\n      <img src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" alt="Ted talk" />}\n        <div>\n          {loading ? <Skeleton height={10} width="80%" /> : \'Ted\'}\n          {loading ? <Skeleton height={10} width="40%" /> : \'5 hours ago\'}\n        </div>\n        {loading ? null :\n      // Replace with your icon button component\n      <button type="button">...</button>}\n      </div>\n      {loading ? <Skeleton height={190} /> : <img src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512" alt="Nicola Sturgeon on a TED talk stage" />}\n      <div css={CardContent}>\n        {loading ? <Skeleton count={3} /> : "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country\'s success:"}\n      </div>\n    </div>;\n}'},null===(_Loaded$parameters2=Loaded.parameters)||void 0===_Loaded$parameters2||null===(_Loaded$parameters2$d=_Loaded$parameters2.docs)||void 0===_Loaded$parameters2$d?void 0:_Loaded$parameters2$d.source)})})}}]);