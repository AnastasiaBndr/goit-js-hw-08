!function(){function e(e){return e&&e.__esModule?e.default:e}var t,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof r&&r&&r.Object===Object&&r,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,r){var n,i,o,u,l,f,s=0,c=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function y(t){var r=n,a=i;return n=i=void 0,s=t,u=e.apply(a,r)}function O(e){return s=e,l=setTimeout(N,t),c?y(e):u}function j(e){var r=e-f;return void 0===f||r>=t||r<0||d&&e-s>=o}function N(){var e=p();if(j(e))return T(e);l=setTimeout(N,function(e){var r=t-(e-f);return d?m(r,o-(e-s)):r}(e))}function T(e){return l=void 0,v&&n?y(e):(n=i=void 0,u)}function E(){var e=p(),r=j(e);if(n=arguments,i=this,f=e,r){if(void 0===l)return O(f);if(d)return l=setTimeout(N,t),y(f)}return void 0===l&&(l=setTimeout(N,t)),u}return t=S(t)||0,b(r)&&(c=!!r.leading,o=(d="maxWait"in r)?g(S(r.maxWait)||0,t):o,v="trailing"in r?!!r.trailing:v),E.cancel=function(){void 0!==l&&clearTimeout(l),s=0,n=f=i=l=void 0},E.flush=function(){return void 0===l?u:T(p())},E}function b(t){var r=void 0===t?"undefined":e(n)(t);return!!t&&("object"==r||"function"==r)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=b(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var a=u.test(t);return a||l.test(t)?f(t.slice(2),a?2:8):o.test(t)?NaN:+t}t=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(a);return b(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),y(e,t,{leading:n,maxWait:t,trailing:i})};var O="feedback-form",j={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};!function(e){var t=localStorage.getItem(O);if(console.log(t),t){var r=JSON.parse(t);j.textarea.value=Object.values(r)[1],j.email.value=Object.values(r)[0]}}(),j.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,n=t.message;""!=r.value&&""!=n.value?(localStorage.setItem(O,JSON.stringify({userEmail:r.value,userMessage:n.value})),console.log(JSON.parse(localStorage.getItem(O))),e.currentTarget.reset()):alert("ЗАПОВНИ ВСІ ПОЛЯ")})),j.textarea.addEventListener("input",e(t)((function(e){var t=e.currentTarget.value,r=localStorage.getItem(O);if(r){var n=JSON.parse(r).userEmail;localStorage.setItem(O,JSON.stringify({userEmail:n,userMessage:t}))}else localStorage.setItem(O,JSON.stringify({userEmail:"",userMessage:t}))})),8e3),j.email.addEventListener("input",e(t)((function(e){var t=e.currentTarget.value,r=localStorage.getItem(O);if(r){var n=JSON.parse(r).userMessage;localStorage.setItem(O,JSON.stringify({userEmail:t,userMessage:n}))}else localStorage.setItem(O,JSON.stringify({userEmail:t,userMessage:""}))})),8e3)}();
//# sourceMappingURL=03-feedback.5f884fd5.js.map
