"use strict";(function(p,d){typeof exports=="object"?module.exports=d():p.MonacoBootstrapWindow=d()})(this,function(){const p=D(),d=E(),t=d.process;async function h(i,a,o){const c=!!t.env.VSCODE_DEV;let m=c;t.sandboxed||t.on("uncaughtException",function(s){b(s,m)});const w=setTimeout(()=>{console.error("[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...")},1e4);performance.mark("code/willWaitForWindowConfig");const n=await d.context.resolveConfiguration();performance.mark("code/didWaitForWindowConfig"),clearTimeout(w),typeof o?.canModifyDOM=="function"&&o.canModifyDOM(n);const{forceDisableShowDevtoolsOnError:r,forceEnableDeveloperKeybindings:l,disallowReloadKeybinding:j,removeDeveloperKeybindingsAfterLoad:K}=typeof o?.configureDeveloperSettings=="function"?o.configureDeveloperSettings(n):{forceDisableShowDevtoolsOnError:!1,forceEnableDeveloperKeybindings:!1,disallowReloadKeybinding:!1,removeDeveloperKeybindingsAfterLoad:!1};m=c&&!r;const y=c||l;let x;y&&(x=$(j)),t.sandboxed||globalThis.MonacoBootstrap.enableASARSupport(n.appRoot);const v=globalThis.MonacoBootstrap.setupNLS();let u=v.availableLanguages["*"]||"en";u==="zh-tw"?u="zh-Hant":u==="zh-cn"&&(u="zh-Hans"),window.document.documentElement.setAttribute("lang",u),t.sandboxed||require.define("fs",[],function(){return require.__$__nodeRequire("original-fs")}),window.MonacoEnvironment={};const f={baseUrl:`${p.fileUriFromPath(n.appRoot,{isWindows:t.platform==="win32",scheme:"vscode-file",fallbackAuthority:"vscode-app"})}/out`,"vs/nls":v,preferScriptTags:!0};f.trustedTypesPolicy=window.trustedTypes?.createPolicy("amdLoader",{createScriptURL(s){if(s.startsWith(window.location.origin))return s;throw new Error(`Invalid script url: ${s}`)}});const e=c?"../node_modules":"../node_modules.asar";f.paths={"vscode-textmate":`${e}/vscode-textmate/release/main.js`,"vscode-oniguruma":`${e}/vscode-oniguruma/release/main.js`,xterm:`${e}/xterm/lib/xterm.js`,"xterm-addon-canvas":`${e}/xterm-addon-canvas/lib/xterm-addon-canvas.js`,"xterm-addon-search":`${e}/xterm-addon-search/lib/xterm-addon-search.js`,"xterm-addon-unicode11":`${e}/xterm-addon-unicode11/lib/xterm-addon-unicode11.js`,"xterm-addon-webgl":`${e}/xterm-addon-webgl/lib/xterm-addon-webgl.js`,"@vscode/iconv-lite-umd":`${e}/@vscode/iconv-lite-umd/lib/iconv-lite-umd.js`,jschardet:`${e}/jschardet/dist/jschardet.min.js`,"@vscode/vscode-languagedetection":`${e}/@vscode/vscode-languagedetection/dist/lib/index.js`,"vscode-regexp-languagedetection":`${e}/vscode-regexp-languagedetection/dist/index.js`,"tas-client-umd":`${e}/tas-client-umd/lib/tas-client-umd.js`},t.sandboxed||(f.amdModulesPattern=/(^vs\/)|(^vscode-textmate$)|(^vscode-oniguruma$)|(^xterm$)|(^xterm-addon-canvas$)|(^xterm-addon-search$)|(^xterm-addon-unicode11$)|(^xterm-addon-webgl$)|(^@vscode\/iconv-lite-umd$)|(^jschardet$)|(^@vscode\/vscode-languagedetection$)|(^vscode-regexp-languagedetection$)|(^tas-client-umd$)/),typeof o?.beforeLoaderConfig=="function"&&o.beforeLoaderConfig(f),require.config(f),v.pseudo&&require(["vs/nls"],function(s){s.setPseudoTranslation(v.pseudo)}),typeof o?.beforeRequire=="function"&&o.beforeRequire(),require(i,async s=>{try{const g=a(s,n);g instanceof Promise&&(await g,x&&K&&x())}catch(g){b(g,y)}},b)}function $(i){const a=d.ipcRenderer,o=function(r){return[r.ctrlKey?"ctrl-":"",r.metaKey?"meta-":"",r.altKey?"alt-":"",r.shiftKey?"shift-":"",r.keyCode].join("")},c=t.platform==="darwin"?"meta-alt-73":"ctrl-shift-73",m="123",w=t.platform==="darwin"?"meta-82":"ctrl-82";let n=function(r){const l=o(r);l===c||l===m?a.send("vscode:toggleDevTools"):l===w&&!i&&a.send("vscode:reloadWindow")};return window.addEventListener("keydown",n),function(){n&&(window.removeEventListener("keydown",n),n=void 0)}}function b(i,a){a&&d.ipcRenderer.send("vscode:openDevTools"),console.error(`[uncaught exception]: ${i}`),i&&typeof i!="string"&&i.stack&&console.error(i.stack)}function D(){return window.MonacoBootstrap}function E(){return window.vscode}return{load:h}});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/64bbfbf67ada9953918d72e1df2f4d8e537d340e/core/bootstrap-window.js.map
