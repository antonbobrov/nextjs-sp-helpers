"use strict";(self.webpackChunk_anton_bobrov_nextjs_sp_helpers=self.webpackChunk_anton_bobrov_nextjs_sp_helpers||[]).push([[191],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/TagName/TagName.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Div:()=>Div,H1:()=>H1,Section:()=>Section,default:()=>TagName_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),_excluded=["tagName"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _H1$parameters,_H1$parameters2,_Div$parameters,_Div$parameters2,_Section$parameters,_Section$parameters2,TagName=(0,react.forwardRef)((function(_ref,forwardedRef){var tagName=_ref.tagName,props=(0,objectWithoutProperties.Z)(_ref,_excluded),ref=(0,react.useRef)(null);return(0,react.useImperativeHandle)(forwardedRef,(function(){return ref.current})),(0,react.createElement)(tagName,_objectSpread(_objectSpread({},props),{},{ref}))}));TagName.displayName="TagName",TagName.__docgenInfo={description:"",methods:[],displayName:"TagName"};try{TagName.displayName="TagName",TagName.__docgenInfo={description:"",displayName:"TagName",props:{tagName:{defaultValue:null,description:"",name:"tagName",required:!0,type:{name:"enum",value:[{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"slot"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TagName/index.tsx#TagName"]={docgenInfo:TagName.__docgenInfo,name:"TagName",path:"src/components/TagName/index.tsx#TagName"})}catch(__react_docgen_typescript_loader_error){}var TagName_stories_excluded=["tagName","children"],__jsx=react.createElement;function TagName_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function TagName_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?TagName_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TagName_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const TagName_stories={title:"TagName",tags:["autodocs"]};var Component=function Component(_ref){var tagName=_ref.tagName,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,TagName_stories_excluded);return __jsx(TagName,(0,esm_extends.Z)({},props,{tagName}),null!=children?children:"Contents")};Component.displayName="Component";var H1=Component.bind({});H1.args={tagName:"h1",children:"H1 Contents"};var Div=Component.bind({});Div.args={tagName:"div",children:"Div Contents"};var Section=Component.bind({});Section.args={tagName:"section",children:"Section Contents"},H1.parameters=TagName_stories_objectSpread(TagName_stories_objectSpread({},H1.parameters),{},{docs:TagName_stories_objectSpread(TagName_stories_objectSpread({},null===(_H1$parameters=H1.parameters)||void 0===_H1$parameters?void 0:_H1$parameters.docs),{},{source:TagName_stories_objectSpread({originalSource:"({\n  tagName,\n  children,\n  ...props\n}) => <TagName {...props} tagName={tagName}>\r\n    {children ?? 'Contents'}\r\n  </TagName>"},null===(_H1$parameters2=H1.parameters)||void 0===_H1$parameters2||null===(_H1$parameters2=_H1$parameters2.docs)||void 0===_H1$parameters2?void 0:_H1$parameters2.source)})}),Div.parameters=TagName_stories_objectSpread(TagName_stories_objectSpread({},Div.parameters),{},{docs:TagName_stories_objectSpread(TagName_stories_objectSpread({},null===(_Div$parameters=Div.parameters)||void 0===_Div$parameters?void 0:_Div$parameters.docs),{},{source:TagName_stories_objectSpread({originalSource:"({\n  tagName,\n  children,\n  ...props\n}) => <TagName {...props} tagName={tagName}>\r\n    {children ?? 'Contents'}\r\n  </TagName>"},null===(_Div$parameters2=Div.parameters)||void 0===_Div$parameters2||null===(_Div$parameters2=_Div$parameters2.docs)||void 0===_Div$parameters2?void 0:_Div$parameters2.source)})}),Section.parameters=TagName_stories_objectSpread(TagName_stories_objectSpread({},Section.parameters),{},{docs:TagName_stories_objectSpread(TagName_stories_objectSpread({},null===(_Section$parameters=Section.parameters)||void 0===_Section$parameters?void 0:_Section$parameters.docs),{},{source:TagName_stories_objectSpread({originalSource:"({\n  tagName,\n  children,\n  ...props\n}) => <TagName {...props} tagName={tagName}>\r\n    {children ?? 'Contents'}\r\n  </TagName>"},null===(_Section$parameters2=Section.parameters)||void 0===_Section$parameters2||null===(_Section$parameters2=_Section$parameters2.docs)||void 0===_Section$parameters2?void 0:_Section$parameters2.source)})})}}]);