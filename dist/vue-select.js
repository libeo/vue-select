!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSelect=t():e.VueSelect=t()}("undefined"!=typeof self?self:this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{VueSelect:()=>v,default:()=>_,mixins:()=>m});function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}function r(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(e){var t=this;this.autoscroll&&e&&this.$nextTick((function(){return t.maybeAdjustScroll()}))}},methods:{maybeAdjustScroll:function(){var e,t=(null===(e=this.$refs.dropdownMenu)||void 0===e?void 0:e.children[this.typeAheadPointer])||!1;if(t){var n=this.getDropdownViewport(),o=t.getBoundingClientRect(),i=o.top,s=o.bottom,r=o.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop;if(s>n.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(n.height-r)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},l={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open:function(e){e&&this.typeAheadToLastSelected()},selectedValue:function(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp:function(){for(var e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown:function(){for(var e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect:function(){var e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected:function(){var e=0!==this.selectedValue.length?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1;-1!==e&&(this.typeAheadPointer=e)}}},c={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(e){this.mutableLoading=e}},methods:{toggleLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==e?!this.mutableLoading:e}}};function u(e,t,n,o,i,s,r,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}const p={Deselect:u({},(function(){var e=this._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:u({},(function(){var e=this._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports,Magnifier:u({},(function(){var e=this._self._c;return e("svg",{attrs:{height:"18",viewBox:"0 0 20 20",width:"22",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m18.869 19.162-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887.78-5.303 2.197-2.197 3.3-2.197 5.303.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-.579 4.688-1.645l5.943 6.483c.099.108.233.162.369.162.121 0 .242-.043.338-.131.204-.187.217-.503.031-.706zm-17.869-11.662c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"}})])}),[],!1,null,null,null).exports},d={inserted:function(e,t,n){var o=n.context;if(o.appendToBody){var i=o.$refs.toggle.getBoundingClientRect(),s=i.height,r=i.top,a=i.left,l=i.width,c=window.scrollX||window.pageXOffset,u=window.scrollY||window.pageYOffset;e.unbindPosition=o.calculatePosition(e,o,{width:l+"px",left:c+a+"px",top:u+r+s+"px"}),document.body.appendChild(e)}},unbind:function(e,t,n){n.context.appendToBody&&(e.unbindPosition&&"function"==typeof e.unbindPosition&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};const h=function(e){var t={};return Object.keys(e).sort().forEach((function(n){t[n]=e[n]})),JSON.stringify(t)};var f=0;const y=function(){return++f};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const v=u({components:b({},p),directives:{appendToBody:d},mixins:[a,l,c],props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},displayMagnifierIcon:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(e){return e}},selectable:{type:Function,default:function(e){return!0}},getOptionLabel:{type:Function,default:function(e){return"object"===i(e)?e.hasOwnProperty(this.label)?e[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(e),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):e}},optionSearchLabel:{type:String,default:"Rechercher une option"},clearSelectedLabel:{type:String,default:"Réinitialiser la sélection"},deselectItemLabel:{type:String,default:"Déselectionner"},getOptionKey:{type:Function,default:function(e){if("object"!==i(e))return e;try{return e.hasOwnProperty("id")?e.id:h(e)}catch(t){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.open&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(e,t,n){return(t||"").toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(e,t){var n=this;return e.filter((function(e){var o=n.getOptionLabel(e);return"number"==typeof o&&(o=o.toString()),n.filterBy(e,o,t)}))}},createOption:{type:Function,default:function(e){return"object"===i(this.optionList[0])?r({},this.label,e):e}},resetOnOptionsChange:{default:!1,validator:function(e){return["function","boolean"].includes(i(e))}},clearSearchOnBlur:{type:Function,default:function(e){var t=e.clearSearchOnSelect,n=e.multiple;return t&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(e,t){return e}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(e,t,n){var o=n.width,i=n.top,s=n.left;e.style.top=i,e.style.left=s,e.style.width=o}},dropdownShouldOpen:{type:Function,default:function(e){var t=e.noDrop,n=e.open,o=e.mutableLoading;return!t&&(n&&!o)}},uid:{type:[String,Number],default:function(){return y()}},ariaDescribedByUids:{type:[Array,String],default:""}},data:function(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},computed:{displayMagnifier:function(){return!!this.displayMagnifierIcon&&this.open},ariaDescribedBy:function(){var e=this,t=[];t="string"==typeof this.ariaDescribedByUids?this.ariaDescribedByUids.split(" "):o(this.ariaDescribedByUids);var n=this.selectedValue.map((function(t,n){return"vs".concat(e.uid,"__selected-option").concat(n)}));return[].concat(o(t),o(n)).join(" ")},isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var e=this.value;return this.isTrackingValues&&(e=this.$data._value),null!=e&&""!==e?[].concat(e):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var e=this,t={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:b({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":this.autocomplete?"list":"","aria-describedby":this.ariaDescribedBy,"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return e.isComposing=!0},compositionend:function(){return e.isComposing=!1},keydown:this.onSearchKeyDown,keypress:this.onSearchKeyPress,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(t){return e.search=t.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:t,listFooter:t,header:b(b({},t),{},{deselect:this.deselect}),footer:b(b({},t),{},{deselect:this.deselect})}},childComponents:function(){return b(b({},p),this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;var t=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||t.unshift(n)}return t},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(e,t){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(e,t,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:{immediate:!0,handler:function(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple:function(){this.clearSelection()},open:function(e){this.$emit(e?"open":"close")},search:function(e){e.length&&(this.open=!0)}},created:function(){this.mutableLoading=this.loading,this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(e){var t=this;Array.isArray(e)?this.$data._value=e.map((function(e){return t.findOptionFromReducedValue(e)})):this.$data._value=this.findOptionFromReducedValue(e)},select:function(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&this.$emit("option:created",e),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect:function(e){var t=this;this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter((function(n){return!t.optionComparator(n,e)}))),this.$emit("option:deselected",e)},clearSelection:function(){this.updateValue(this.multiple?[]:null),this.$refs.search.focus()},onAfterSelect:function(e){var t=this;this.closeOnSelect&&(this.open=!this.open),this.clearSearchOnSelect&&(this.search=""),this.noDrop&&this.multiple&&this.$nextTick((function(){return t.$refs.search.focus()}))},updateValue:function(e){var t=this;void 0===this.value&&(this.$data._value=e),null!==e&&(e=Array.isArray(e)?e.map((function(e){return t.reduce(e)})):this.reduce(e)),this.$emit("input",e)},toggleDropdown:function(e){var t=e.target!==this.searchEl;t&&e.preventDefault();var n=[].concat(o(this.$refs.deselectButtons||[]),o([this.$refs.clearButton]||0));void 0===this.searchEl||n.filter(Boolean).some((function(t){return t.contains(e.target)||t===e.target}))?e.preventDefault():this.open&&t?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(e){var t=this;return this.selectedValue.some((function(n){return t.optionComparator(n,e)}))},isOptionDeselectable:function(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator:function(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue:function(e){var t=this,n=[].concat(o(this.options),o(this.pushedTags)).filter((function(n){return JSON.stringify(t.reduce(n))===JSON.stringify(e)}));return 1===n.length?n[0]:n.find((function(e){return t.optionComparator(e,t.$data._value)}))||e},closeSearchOptions:function(){this.open=!1,this.typeAheadPointer=-1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var e=null;this.multiple&&(e=o(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(e)}},optionExists:function(e){var t=this;return this.optionList.some((function(n){return t.optionComparator(n,e)}))},normalizeOptionForSlot:function(e){return"object"===i(e)?e:r({},this.label,e)},pushTag:function(e){this.pushedTags.push(e)},onEscape:function(){this.search.length?this.search="":this.open=!1},onSearchBlur:function(){if(!this.mousedown||this.searching){var e=this.clearSearchOnSelect,t=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(e){var t=this,n=function(e){return e.preventDefault(),!t.isComposing&&t.typeAheadSelect()},o={8:function(e){return t.maybeDeleteValue()},9:function(e){return t.onTab()},27:function(e){return t.onEscape()},38:function(e){if(e.preventDefault(),t.open)return t.typeAheadUp();t.open=!0},40:function(e){if(e.preventDefault(),t.open)return t.typeAheadDown();t.open=!0}};this.selectOnKeyCodes.forEach((function(e){return o[e]=n}));var i=this.mapKeydown(o,this);if("function"==typeof i[e.keyCode])return i[e.keyCode](e)},onSearchKeyPress:function(e){this.open||32!==e.code||(e.preventDefault(),this.open=!0)}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"v-select",class:e.stateClasses,attrs:{dir:e.dir}},[e._t("header",null,null,e.scope.header),e._v(" "),t("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs".concat(e.uid,"__combobox"),role:"combobox","aria-expanded":e.dropdownOpen.toString(),"aria-owns":"vs".concat(e.uid,"__listbox"),"aria-label":0===e.selectedValue.length&&e.optionSearchLabel},on:{mousedown:function(t){return e.toggleDropdown(t)}}},[t("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[e._l(e.selectedValue,(function(n,o){return e._t("selected-option-container",(function(){return[t("span",{key:e.getOptionKey(n),staticClass:"vs__selected"},[e._t("selected-option",(function(){return[t("span",{attrs:{id:"vs".concat(e.uid,"__selected-option").concat(o)}},[e._v("\n              "+e._s(e.getOptionLabel(n))+"\n            ")])]}),null,e.normalizeOptionForSlot(n)),e._v(" "),e.multiple?t("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:e.disabled,type:"button",title:"".concat(e.deselectItemLabel," ").concat(e.getOptionLabel(n)),"aria-label":"".concat(e.deselectItemLabel," ").concat(e.getOptionLabel(n))},on:{click:function(t){return e.deselect(n)}}},[t(e.childComponents.Deselect,{tag:"component"})],1):e._e()],2)]}),{option:e.normalizeOptionForSlot(n),deselect:e.deselect,multiple:e.multiple,disabled:e.disabled})})),e._v(" "),e._t("search",(function(){return[t("div",{staticClass:"vs__search-wrapper"},[t("input",e._g(e._b({staticClass:"vs__search"},"input",e.scope.search.attributes,!1),e.scope.search.events)),e._v(" "),e.displayMagnifier?t(e.childComponents.Magnifier,{tag:"component",staticClass:"vs__magnifier"}):e._e()],1)]}),null,e.scope.search)],2),e._v(" "),t("div",{ref:"actions",staticClass:"vs__actions"},[t("button",{directives:[{name:"show",rawName:"v-show",value:e.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:e.disabled,type:"button",title:e.clearSelectedLabel,"aria-label":e.clearSelectedLabel},on:{click:e.clearSelection}},[t(e.childComponents.Deselect,{tag:"component"})],1),e._v(" "),e._t("open-indicator",(function(){return[e.noDrop?e._e():t(e.childComponents.OpenIndicator,e._b({tag:"component"},"component",e.scope.openIndicator.attributes,!1))]}),null,e.scope.openIndicator),e._v(" "),e._t("spinner",(function(){return[t("div",{directives:[{name:"show",rawName:"v-show",value:e.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[e._v("Loading...")])]}),null,e.scope.spinner)],2)]),e._v(" "),t("transition",{attrs:{name:e.transition}},[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.dropdownOpen,expression:"dropdownOpen"},{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs".concat(e.uid,"__listbox"),ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs".concat(e.uid,"__listbox"),role:"listbox",tabindex:"-1","aria-multiselectable":!0},on:{mousedown:function(t){return t.preventDefault(),e.onMousedown.apply(null,arguments)},mouseup:e.onMouseUp}},[e._t("list-header",null,null,e.scope.listHeader),e._v(" "),e._l(e.filteredOptions,(function(n,o){return t("li",{key:e.getOptionKey(n),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--deselect":e.isOptionDeselectable(n)&&o===e.typeAheadPointer,"vs__dropdown-option--selected":e.isOptionSelected(n),"vs__dropdown-option--highlight":o===e.typeAheadPointer,"vs__dropdown-option--disabled":!e.selectable(n)},attrs:{id:"vs".concat(e.uid,"__option-").concat(o),role:"option","aria-selected":e.isOptionSelected(n)?"true":"false"},on:{mouseover:function(t){e.selectable(n)&&(e.typeAheadPointer=o)},click:function(t){t.preventDefault(),t.stopPropagation(),e.selectable(n)&&e.select(n)}}},[e._t("option",(function(){return[e._v("\n          "+e._s(e.getOptionLabel(n))+"\n        ")]}),null,e.normalizeOptionForSlot(n))],2)})),e._v(" "),0===e.filteredOptions.length?t("li",{staticClass:"vs__no-options"},[e._t("no-options",(function(){return[e._v("\n          Sorry, no matching options.\n        ")]}),null,e.scope.noOptions)],2):e._e(),e._v(" "),e._t("list-footer",null,null,e.scope.listFooter)],2)]),e._v(" "),e._t("footer",null,null,e.scope.footer)],2)}),[],!1,null,null,null).exports,m={ajax:c,pointer:l,pointerScroll:a},_=v;return t})()));
//# sourceMappingURL=vue-select.js.map