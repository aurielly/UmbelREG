!function(){const e=function(e){e.stopImmediatePropagation(),t(),function(e){for(const[t,n]of Object.entries(___grecaptcha_cfg.clients))for(const[c,o]of Object.entries(n))if(o instanceof Object)for(const[n,c]of Object.entries(o))if(c instanceof Element&&c.src===e)return void(grecaptcha.reset||grecaptcha.enterprise.reset)(t)}(e.detail)},t=function(){window.clearTimeout(n),document.removeEventListener("___resetCaptcha",e,{capture:!0,once:!0})},n=window.setTimeout(t,1e4);document.addEventListener("___resetCaptcha",e,{capture:!0,once:!0})}();