var t=document.querySelector(".contact__form"),e=document.querySelector(".contact__form--message");e.addEventListener("input",function(){e.value.split(/\r\n|\r|\n/).length>1&&(e.style.height="auto",e.style.paddingBottom="18px",e.style.height="".concat(e.scrollHeight,"px"))}),t.addEventListener("submit",function(o){o.preventDefault(),t.reset(),window.scrollTo({top:0}),e.style.height="auto",e.style.paddingBottom="0"});
//# sourceMappingURL=index.c9b3c9a6.js.map