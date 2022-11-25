// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2mNKm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6rimH":[function(require,module,exports) {
var _contatosPageJs = require("./src/scripts/pages/contatos.page.js");
var _criarContaPageJs = require("./src/scripts/pages/criar-conta.page.js");
var _loginPageJs = require("./src/scripts/pages/login.page.js");
var _criarContatoPageJs = require("./src/scripts/pages/criar-contato.page.js");
var _editarContatoPageJs = require("./src/scripts/pages/editar-contato.page.js");
var _contatoUnicoPageJs = require("./src/scripts/pages/contato-unico.page.js");
function redirectPages() {
    const root = document.getElementById("root");
    const Router = {
        "#login": {
            component: (0, _loginPageJs.Login),
            path: "#login"
        },
        "#criar-conta": {
            component: (0, _criarContaPageJs.CriarConta),
            path: "#criar-conta"
        },
        "#contatos": {
            component: (0, _contatosPageJs.Contatos),
            path: "#contatos"
        },
        "#contato-unico": {
            component: (0, _contatoUnicoPageJs.ContatoUnico),
            path: "#contato-unico"
        },
        "#criar-contato": {
            component: (0, _criarContatoPageJs.CriarContato),
            path: "#criar-contato"
        },
        "#editar-contato": {
            component: (0, _editarContatoPageJs.EditarContato),
            path: "#editar-contato"
        },
        "#404": {
            component: (0, _loginPageJs.Login),
            path: "#404"
        }
    };
    let route;
    const token = sessionStorage.getItem("@token");
    if (window.location.hash === "") route = Router["#login"];
    else route = Router[window.location.hash] || Router["#404"];
    root.innerHTML = null;
    root.append(route.component());
    window.history.pushState(null, null, route.path);
}
window.addEventListener("load", ()=>{
    redirectPages();
    window.addEventListener("hashchange", redirectPages);
});

},{"./src/scripts/pages/contatos.page.js":"7prdI","./src/scripts/pages/criar-conta.page.js":"6gShC","./src/scripts/pages/login.page.js":"2wcBy","./src/scripts/pages/criar-contato.page.js":"8mPTj","./src/scripts/pages/editar-contato.page.js":"cldWW","./src/scripts/pages/contato-unico.page.js":"6Rmzk"}],"7prdI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Contatos", ()=>Contatos);
var _headerComponentJs = require("./../components/header.component.js");
var _contactServiceJs = require("../services/contact.service.js");
const root = document.getElementById("root");
const contacts = document.createElement("div");
contacts.setAttribute("id", "p-contacts");
contacts.setAttribute("class", "p_container");
const contactsContainer = document.createElement("div");
contactsContainer.setAttribute("class", "contacts__container");
let data = [];
const getContacts = async ()=>{
    const response = await (0, _contactServiceJs.ContactGet)();
    if (response.status === 200) {
        populateList(response.data);
        createSearchArea();
        data = response.data;
    }
};
const populateList = (contactsArray)=>{
    const arrayList = contactsArray.map((contact)=>{
        return `
        <div class="contacts__card" id="${contact.id}">
            <div class="photo-name" id="${contact.id}">
                <div class="contacts__img">
                    <img src="data:image/jpeg;base64,${contact.foto}" alt="Foto do contato">
                </div>
                <div class="contacts__data">
                    <p>${contact.nome}</p>
                    <span>${contact.email}</span>
                    <div>
                        ${contact.telefones.map((tel)=>`<span>${tel.numero}</span>`).join(" ")}
                    </div>   
                </div>
            </div>
            <div class="contacts__options">
                <button class="delete-button" id="${contact.id}">
                    <i class="fa fa-trash"></i>
                </button>
                <button class="edit-button" id="${contact.id}" name="hype">
                    <i class="fa fa-edit"></i>
                </button>
            </div>
        </div>
        `;
    });
    const listHtml = arrayList.join(" ");
    contactsContainer.insertAdjacentHTML("beforeend", listHtml);
    const buttons = document.querySelectorAll(".contacts__options button.delete-button");
    buttons.forEach((b)=>b.addEventListener("click", ()=>deleteContact(b.id)));
    const editButton = document.querySelectorAll(".contacts__options button.edit-button");
    editButton.forEach((b)=>b.addEventListener("click", ()=>editContac(b.id)));
    const contactDiv = document.querySelectorAll(".photo-name");
    contactDiv.forEach((card)=>card.addEventListener("click", ()=>showContac(card.id)));
};
const editContac = (id)=>{
    sessionStorage.setItem("@contactId", `${id}`);
    window.open("#editar-contato", "_self");
};
const showContac = (id)=>{
    /* console.log(id) */ sessionStorage.setItem("@contactId", `${id}`);
    window.open("#contato-unico", "_self");
};
const createSearchArea = ()=>{
    const menu = `
            <div class="search_container">
                <div>
                    <button id="btnExportToCsv" class="btn-todos" style="margin-right: 10px;">
                        Exportar
                    </button>
                    <input type="text" id="search" placeholder="Buscar contato">
                    <button class="btn-busca">
                        Buscar
                    </button>
                </div>
                <div>
                    <button id="btn-todos" class="btn-todos">
                        Todos
                    </button>
                    
                    <a class="btn-novo" href="#criar-contato" target="_self">
                        Novo
                    </a>
                </div>
            </div>
            `;
    contacts.insertAdjacentHTML("afterbegin", menu);
    const btnSearch = document.querySelector(".btn-busca");
    btnSearch.addEventListener("click", searchContact);
    const btnAllContacts = document.querySelector("#btn-todos");
    btnAllContacts.addEventListener("click", searchAllContacts);
    const btnExportToCsv = document.querySelector("#btnExportToCsv");
    btnExportToCsv.addEventListener("click", exportContactsToCsv);
};
const exportContactsToCsv = async ()=>{
    const response = await (0, _contactServiceJs.ContactGet)();
    if (response.status === 200) {
        let csv = generateCsv(response.data);
        download(csv);
    }
};
function generateCsv(contacts) {
    let csv = "fn,ln,email,phone";
    contacts.forEach((contact, index, array)=>{
        let fullName = contact.nome.trim();
        let indexOfFirstWhiteSpace = fullName.indexOf(" ");
        let fn;
        let ln;
        if (indexOfFirstWhiteSpace != -1) {
            fn = fullName.substring(0, indexOfFirstWhiteSpace).trim();
            ln = fullName.substring(indexOfFirstWhiteSpace + 1).trim();
        } else {
            fn = fullName;
            ln = "";
        }
        let email = contact.email;
        let phone = contact.telefones[0].numero;
        csv += `\n${fn},${ln},${email},${phone}`;
    });
    return csv;
}
const download = function(data) {
    const blob = new Blob([
        data
    ], {
        type: "text/csv"
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "contatos.csv");
    a.click();
};
const deleteContact = async (id)=>{
    const resp = await (0, _contactServiceJs.ContactDelete)(id);
    if (resp.status === 200) {
        const response = await (0, _contactServiceJs.ContactGet)();
        contactsContainer.innerHTML = " ";
        if (response.status === 200) {
            populateList(response.data);
            data = response.data;
        }
    }
};
const searchContact = ()=>{
    const inputSearch = document.querySelector("#search");
    const value = inputSearch.value;
    if (value) {
        const searchFilter = data.filter((contact)=>contact.nome.toLowerCase().includes(value.toLowerCase()));
        if (searchFilter.length !== 0) {
            contactsContainer.innerHTML = "";
            populateList(searchFilter);
        } else alert("Nenhum contato encontrado");
    }
    inputSearch.value = "";
};
const searchAllContacts = ()=>{
    contactsContainer.innerHTML = " ";
    populateList(data);
};
const events = ()=>{
    window.addEventListener("load", getContacts);
};
const Contatos = ()=>{
    const header = (0, _headerComponentJs.Header)();
    root.append(header);
    contacts.innerHTML = " ";
    contactsContainer.innerHTML = " ";
    contacts.appendChild(contactsContainer);
    getContacts();
    events();
    return contacts;
};

},{"./../components/header.component.js":"5Zcf5","../services/contact.service.js":"bHr4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Zcf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
const header = document.createElement("header");
header.setAttribute("id", "c-header");
const sair = ()=>{
    sessionStorage.clear();
    window.open("#login", "_self");
/* console.log("saiu"); */ };
const events = ()=>{
    const btnSair = header.querySelector("#sair");
    btnSair.addEventListener("click", sair);
};
const Header = ()=>{
    const user = JSON.parse(sessionStorage.getItem("@user"));
    header.innerHTML = `
        <div>
            <img src="data:image/jpeg;base64,${user.foto}">
            <label>${user?.nome}</label>
        </div>
        <button id="sair">Sair</button>
    `;
    events();
    return header;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bHr4j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContactGet", ()=>ContactGet);
parcelHelpers.export(exports, "ContactGetById", ()=>ContactGetById);
parcelHelpers.export(exports, "ContactPost", ()=>ContactPost);
parcelHelpers.export(exports, "ContactPatch", ()=>ContactPatch);
parcelHelpers.export(exports, "ContactDelete", ()=>ContactDelete);
var _compressJs = require("compress.js");
var _compressJsDefault = parcelHelpers.interopDefault(_compressJs);
const baseUrl = "http://localhost:5000/v1/";
const headers = new Headers();
headers.append("Content-Type", "application/json");
const token = sessionStorage.getItem("@token");
headers.append("Authorization", token);
const ContactGet = async ()=>{
    const response = await fetch(baseUrl + "contact", {
        headers,
        method: "GET"
    });
    return await response.json();
};
const ContactGetById = async ()=>{
    const id = sessionStorage.getItem("@contactId");
    const response = await fetch(baseUrl + "contact/" + id, {
        headers,
        method: "GET"
    });
    return await response.json();
};
const ContactPost = async (formData)=>{
    const contato = await ArrangeObject(formData);
    const body = JSON.stringify(contato);
    //console.log(body);
    const response = await fetch(baseUrl + "contact", {
        body,
        headers,
        method: "POST"
    });
    return await response.json();
};
const ContactPatch = async (formData)=>{
    const contato = ArrangeObject(formData);
    const body = JSON.stringify(contato);
    const response = await fetch(baseUrl + "contact", {
        body,
        headers,
        method: "PATCH"
    });
    return await response.json();
};
const ContactDelete = async (id)=>{
    const body = JSON.stringify({
        idContato: id
    });
    const response = await fetch(baseUrl + "contact", {
        body,
        headers,
        method: "DELETE"
    });
    return await response.json();
};
function ArrangeObject(formData) {
    const entries = Object.fromEntries(formData);
    const contato = {
        idContato: entries.idContato,
        nome: entries.nome,
        apelido: entries.apelido,
        telefones: [
            {
                tipo: "celular",
                numero: entries.celular
            },
            {
                tipo: "casa",
                numero: entries.casa
            },
            {
                tipo: "trabalho",
                numero: entries.trabalho
            }
        ],
        email: entries.email,
        endereco: {
            cep: entries.cep,
            logradouro: entries.logradouro,
            estado: entries.estado,
            pais: entries.pais,
            cidade: entries.pais
        },
        notas: entries.notas,
        foto: ""
    };
    const foto = fotoHandler(entries);
    if (foto) contato.foto = foto.data;
    return contato;
}
const fotoHandler = (entries)=>{
    return new Promise((resolve, reject)=>{
        const compress = new (0, _compressJsDefault.default)();
        const upload = [];
        upload.push(entries.foto);
        const options = {
            size: 2,
            quality: 0.75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false
        };
        compress.compress(upload, options).then((data)=>resolve(data[0])).catch(()=>reject(null));
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","compress.js":"gGLmb"}],"gGLmb":[function(require,module,exports) {
// Support regenerator-runtime globally.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _base64Js = require("./core/base64.js");
var _base64JsDefault = parcelHelpers.interopDefault(_base64Js);
var _converterJs = require("./core/converter.js");
var _converterJsDefault = parcelHelpers.interopDefault(_converterJs);
var _fileJs = require("./core/file.js");
var _fileJsDefault = parcelHelpers.interopDefault(_fileJs);
var _imageJs = require("./core/image.js");
var _imageJsDefault = parcelHelpers.interopDefault(_imageJs);
var _photoJs = require("./core/photo.js");
var _photoJsDefault = parcelHelpers.interopDefault(_photoJs);
var _rotateJs = require("./core/rotate.js");
var _rotateJsDefault = parcelHelpers.interopDefault(_rotateJs);
class Compress {
    attach(el, options) {
        return new Promise((resolve)=>{
            const input = document.querySelector(el);
            input.setAttribute("accept", "image/*");
            input.addEventListener("change", (evt)=>{
                const output = this.compress([
                    ...evt.target.files
                ], options);
                resolve(output);
            }, false);
        });
    }
    compress(files, options) {
        return Promise.all(files.map((file)=>compressFile(file, options)));
    }
    static convertBase64ToFile(base64, mime) {
        return (0, _converterJsDefault.default).base64ToFile(base64, mime);
    }
}
exports.default = Compress;
function loopCompression(canvas, size, quality = 1, targetSize, targetQuality = 1, iterations = 1) {
    const base64str = (0, _converterJsDefault.default).canvasToBase64(canvas, quality);
    const newSize = (0, _base64JsDefault.default).size(base64str);
    return newSize > targetSize || quality > targetQuality ? loopCompression(canvas, newSize, quality - 0.1, targetSize, targetQuality, iterations + 1) : base64str;
}
async function compressFile(file, options) {
    // Create a new photo object
    const photo = new (0, _photoJsDefault.default)(options);
    photo.start = window.performance.now();
    photo.alt = file.name;
    photo.ext = file.type;
    photo.startSize = file.size;
    photo.orientation = photo.rotate ? await (0, _rotateJsDefault.default).orientation(file) : 0;
    return compressImage(photo)(await (0, _fileJsDefault.default).load(file));
}
function compressImage(photo) {
    return async (src)=>{
        const img = await (0, _imageJsDefault.default).load(src);
        // Store the initial dimensions
        photo.startWidth = img.naturalWidth;
        photo.startHeight = img.naturalHeight;
        // Resize the image
        if (photo.resize) {
            const { width , height  } = (0, _imageJsDefault.default).resize(photo.maxWidth, photo.maxHeight)(img.naturalWidth, img.naturalHeight);
            photo.endWidth = width;
            photo.endHeight = height;
        } else {
            photo.endWidth = img.naturalWidth;
            photo.endHeight = img.naturalHeight;
        }
        const canvas = (0, _converterJsDefault.default).imageToCanvas(photo.endWidth, photo.endHeight, photo.orientation)(img);
        photo.iterations = 1;
        photo.base64prefix = (0, _base64JsDefault.default).prefix(photo.ext);
        const base64 = await loopCompression(canvas, photo.startSize, photo.quality, photo.size, photo.minQuality, photo.iterations);
        photo.finalSize = (0, _base64JsDefault.default).size(base64);
        photo.end = window.performance.now();
        const difference = photo.end - photo.start; // in ms
        return {
            data: (0, _base64JsDefault.default).data(base64),
            prefix: photo.base64prefix,
            elapsedTimeInSeconds: difference / 1000,
            alt: photo.alt,
            initialSizeInMb: (0, _converterJsDefault.default).size(photo.startSize).MB,
            endSizeInMb: (0, _converterJsDefault.default).size(photo.finalSize).MB,
            ext: photo.ext,
            quality: photo.quality,
            endWidthInPx: photo.endWidth,
            endHeightInPx: photo.endHeight,
            initialWidthInPx: photo.startWidth,
            initialHeightInPx: photo.startHeight,
            sizeReducedInPercent: (photo.startSize - photo.finalSize) / photo.startSize * 100,
            iterations: photo.iterations
        };
    };
}

},{"./core/base64.js":"nQY6t","./core/converter.js":"5Ehsy","./core/file.js":"eaDxq","./core/image.js":"khc95","./core/photo.js":"8dTM7","./core/rotate.js":"cb6PZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"nQY6t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const size = (base64)=>{
    const len = base64.replace(/^data:image\/\w+;base64,/, "").length;
    return (len - 814) / 1.37;
// return len * 3 / 4
};
// strip off the data: url prefix to get just the base64-encoded bytes
// var data = img.replace(/^data:image\/\w+;base64,/, "");
const mime = (base64)=>{
    return base64.split(";")[0].match(/jpeg|png|gif/)[0];
};
const data = (base64)=>{
    return base64.replace(/^data:image\/\w+;base64,/, "");
};
const prefix = (ext)=>{
    return `data:${ext};base64,`;
};
exports.default = {
    size,
    mime,
    data,
    prefix
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Ehsy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const base64ToFile = (base64, mime = "image/jpeg")=>{
    const byteString = window.atob(base64);
    const content = [];
    for(let i = 0; i < byteString.length; i++)content[i] = byteString.charCodeAt(i);
    return new window.Blob([
        new Uint8Array(content)
    ], {
        type: mime
    });
};
const imageToCanvas = (width, height, orientation)=>{
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    return (image)=>{
        if (!orientation || orientation > 8) {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            return canvas;
        }
        if (orientation > 4) {
            canvas.width = height;
            canvas.height = width;
        }
        switch(orientation){
            case 2:
                // horizontal flip
                context.translate(width, 0);
                context.scale(-1, 1);
                break;
            case 3:
                // 180° rotate left
                context.translate(width, height);
                context.rotate(Math.PI);
                break;
            case 4:
                // vertical flip
                context.translate(0, height);
                context.scale(1, -1);
                break;
            case 5:
                // vertical flip + 90 rotate right
                context.rotate(0.5 * Math.PI);
                context.scale(1, -1);
                break;
            case 6:
                // 90° rotate right
                context.rotate(0.5 * Math.PI);
                context.translate(0, -height);
                break;
            case 7:
                // horizontal flip + 90 rotate right
                context.rotate(0.5 * Math.PI);
                context.translate(width, -height);
                context.scale(-1, 1);
                break;
            case 8:
                // 90° rotate left
                context.rotate(-0.5 * Math.PI);
                context.translate(-width, 0);
                break;
        }
        if (orientation > 4) context.drawImage(image, 0, 0, canvas.height, canvas.width);
        else context.drawImage(image, 0, 0, canvas.width, canvas.height);
        return canvas;
    };
};
const canvasToBase64 = (canvas, quality = 0.75)=>{
    // in order to compress the final image format has to be jpeg
    const base64 = canvas.toDataURL("image/jpeg", quality);
    return base64;
};
const size = (size)=>({
        KB: size / 1000,
        MB: size / 1000000
    });
exports.default = {
    base64ToFile,
    imageToCanvas,
    canvasToBase64,
    size
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eaDxq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const load = (file)=>{
    return new Promise((resolve, reject)=>{
        const fileReader = new window.FileReader();
        fileReader.addEventListener("load", (evt)=>resolve(evt.target.result), false);
        fileReader.addEventListener("error", reject, false);
        fileReader.readAsDataURL(file);
    });
};
exports.default = {
    load
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khc95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const load = (src)=>{
    return new Promise((resolve, reject)=>{
        const img = new window.Image();
        img.addEventListener("load", ()=>resolve(img), false);
        img.addEventListener("error", reject, false);
        img.src = src;
    });
};
/*
 * Resize the image based on the given height or width boundary.
 * Auto resize based on aspect ratio.
 **/ const resize = (targetWidth, targetHeight)=>{
    return (width, height)=>{
        if (!targetWidth && !targetHeight) return {
            width,
            height
        };
        const originalAspectRatio = width / height;
        const targetAspectRatio = targetWidth / targetHeight;
        let outputWidth, outputHeight;
        if (originalAspectRatio > targetAspectRatio) {
            outputWidth = Math.min(width, targetWidth);
            outputHeight = outputWidth / originalAspectRatio;
        } else {
            outputHeight = Math.min(height, targetHeight);
            outputWidth = outputHeight * originalAspectRatio;
        }
        return {
            width: outputWidth,
            height: outputHeight
        };
    };
};
exports.default = {
    load,
    resize
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dTM7":[function(require,module,exports) {
// The photo model
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Photo {
    constructor({ quality =0.75 , size =2 , maxWidth =1920 , maxHeight =1920 , resize =true , rotate =false  }){
        this.start = window.performance.now();
        this.end = null;
        this.alt = null;
        this.ext = null;
        this.startSize = null;
        this.startWidth = null;
        this.startHeight = null;
        // size in MB
        this.size = size * 1000000;
        this.endSize = null;
        this.endWidth = null;
        this.endHeight = null;
        this.iterations = 0;
        this.base64prefix = null;
        this.quality = quality;
        this.resize = resize;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.orientation = 1;
        this.rotate = rotate;
    }
}
exports.default = Photo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cb6PZ":[function(require,module,exports) {
// https://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images/31273162#31273162
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const orientation = (file)=>{
    return new Promise((resolve)=>{
        const reader = new window.FileReader();
        reader.onload = function(event) {
            var view = new DataView(event.target.result);
            if (view.getUint16(0, false) !== 0xffd8) resolve(-2);
            const length = view.byteLength;
            let offset = 2;
            while(offset < length){
                const marker = view.getUint16(offset, false);
                offset += 2;
                if (marker === 0xffe1) {
                    if (view.getUint32(offset += 2, false) !== 0x45786966) resolve(-1);
                    const little = view.getUint16(offset += 6, false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    const tags = view.getUint16(offset, little);
                    offset += 2;
                    for(let i = 0; i < tags; i++)if (view.getUint16(offset + i * 12, little) === 0x0112) resolve(view.getUint16(offset + i * 12 + 8, little));
                } else if ((marker & 0xff00) !== 0xff00) break;
                else offset += view.getUint16(offset, false);
            }
            resolve(-1);
        };
        reader.readAsArrayBuffer(file.slice(0, 65536));
    });
};
exports.default = {
    orientation
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gShC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CriarConta", ()=>CriarConta);
var _userServiceJs = require("../services/user.service.js");
var _compressJs = require("compress.js");
var _compressJsDefault = parcelHelpers.interopDefault(_compressJs);
const signup = document.createElement("form");
signup.setAttribute("id", "p-signup");
const criarConta = async (event)=>{
    event.preventDefault();
    const fd = new FormData(signup);
    const foto = await recuperarEComprimirFoto();
    if (foto) fd.append("foto", foto.data);
    const response = await (0, _userServiceJs.UserPost)(fd);
    if (response.status === 200) window.open("#login", "_self");
};
const recuperarEComprimirFoto = async ()=>{
    return new Promise((resolve, reject)=>{
        const compress = new (0, _compressJsDefault.default)();
        const upload = signup.querySelector('input[type="file"]');
        const files = [
            ...upload.files
        ];
        const options = {
            size: 2,
            quality: 0.75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false
        };
        compress.compress(files, options).then((data)=>resolve(data[0])).catch(()=>reject(null));
    });
};
const events = ()=>{
    signup.addEventListener("submit", criarConta);
};
const CriarConta = ()=>{
    signup.innerHTML = `
        <h1>
          Signup
        </h1>
        <div class="form__name">
            <label for="nome">Nome</label>
            <input type="text" class="form__name__input" name="nome" id="nome">
        </div>
        <div class="form__email">
            <label for="email">E-mail</label>
            <input type="email" class="form__email__input" name="email" id="email">
        </div>
        <div class="form__password">
            <label for="senha">Senha</label>
            <div class="form__password__input">
              <input type="password" name="senha" id="senha">
              <img id="show-password" src="">
            </div>
        </div>
        <label for="inputGroupFile04">Foto</label>
        <div class="input-group">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" accept="image/*">
        </div>
        <div>
            <button type="submit" id="btn__login">Criar conta</button>
        </div> 
    `;
    events();
    return signup;
};

},{"../services/user.service.js":"cFUX9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","compress.js":"gGLmb"}],"cFUX9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserPost", ()=>UserPost);
const baseUrl = "http://localhost:5000/v1/";
const headers = new Headers();
headers.append("Content-Type", "application/json");
const UserPost = async (formData)=>{
    const obj = Object.fromEntries(formData);
    const body = JSON.stringify(obj);
    const response = await fetch(baseUrl + "user", {
        body,
        headers,
        method: "POST"
    });
    return await response.json();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wcBy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Login", ()=>Login);
var _authServiceJs = require("../services/auth.service.js");
const login = document.createElement("form");
login.setAttribute("id", "p-login");
const entrar = async (event)=>{
    event.preventDefault();
    const fd = new FormData(login);
    const response = await (0, _authServiceJs.AuthPost)(fd);
    if (response.status === 200) {
        const { token , ...user } = response.data;
        sessionStorage.setItem("@user", JSON.stringify(user));
        sessionStorage.setItem("@token", token);
        window.open("#contatos", "_self");
    }
// if(response.status !== 200) window.alert('Deu ruim')
// else window.alert('Deu bom!')
// const json = await response.json()
// console.log(json);
};
const events = ()=>{
    login.addEventListener("submit", entrar);
};
const Login = ()=>{
    login.innerHTML = `
        <h1>
          Login
        </h1>
        <div class="form__email">
          <label for="email">E-mail</label>
          <input class="form__email__input" type="email" name="email" id="email">
        </div>
        <div class="form__password">
          <label for="password">Senha</label>
          <div class="form__password__input">
            <input type="password" name="senha" id="senha">
            <img id="show-password" src="">
          </div>
        </div>
        <div class="form__signup">
          <span>Ainda não tem cadastro?</span>
          <a href="/#criar-conta" target="_self">Clique Aqui</a>  
        </div>
        <div>
          <button type="submit" id="btn__login">Entrar</button>
        </div> 
    `;
    events();
    return login;
};

},{"../services/auth.service.js":"icwmM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"icwmM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthPost", ()=>AuthPost);
const baseUrl = "http://localhost:5000/v1/";
const headers = new Headers();
headers.append("Content-Type", "application/json");
const AuthPost = async (formData)=>{
    const obj = Object.fromEntries(formData);
    const body = JSON.stringify(obj);
    const response = await fetch(baseUrl + "auth", {
        body,
        headers,
        method: "POST"
    });
    return await response.json();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mPTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CriarContato", ()=>CriarContato);
var _contactServiceJs = require("../services/contact.service.js");
const formCreate = document.createElement("form");
formCreate.setAttribute("id", "p-create");
const criarContato = async (event)=>{
    event.preventDefault();
    const fd = new FormData(formCreate);
    const response = await (0, _contactServiceJs.ContactPost)(fd);
    /* console.log(response); */ if (response.status === 200) {
        window.open("#contatos", "_self");
        window.alert("Contato Criado com Sucesso!");
    } else window.alert("Erro no cria\xe7\xe3o! Verifique os dados inseridos!");
};
const events = ()=>{
    formCreate.addEventListener("submit", criarContato);
};
const CriarContato = ()=>{
    formCreate.innerHTML = `
        <div class="form_header">
            <h1>
                Registrar novo Contato 
            </h1>
            <a href="#contatos"><i class="fa fa-solid fa-reply"></i></a>
        </div>
    
        <div class="big_box">
            <h3>Contato</h3>
            <div class="form_nome">
    
                <label for="nome">Nome*</label>
                <input id="nome" name="nome" required>
            </div>
            <div class="form_apelido">
                <label for="apelido">Apelido</label>
                <input id="apelido" name="apelido">
            </div>
    
            <div class="form_email">
                <label for="email">Email</label>
                <input id="email" name="email">
            </div>
            <div class="form_notas">
                <label for="notas">Notas</label>
                <input id="notas" name="notas">
            </div>
            <div class="form_fotos">
                <label for="foto">Foto</label>
                <input type="file" accept="image/*" id="Foto" name="foto">
            </div>
            <div class="div_telefone">
                <h3>Telefones</h3>
    
                <div class="form_celular_numero">
                    <label for="celular">Celular: </label>
                    <input id="celular" name="celular" placeholder="(xx) xxxxxxxxx">
                </div>
    
                <div class="form_Casa_numero">
                    <label for="casa">Casa: </label>
                    <input id="casa" name="casa" placeholder="(xx) xxxxxxxx">
                </div>
    
                <div class="form_Trabalho_numero">
                    <label for="trabalho">Trabalho: </label>
                    <input id="trabalho" name="trabalho" placeholder="(xx) xxxxxxxx">
                </div>
            </div>
        </div>

        <div class="big_box">
            <div class="div_endereco">
                <h3>Endereço</h3>
                <div class="logradouro">
                    <label for="logradouro">Logradouro</label>
                    <input id="logradouro" name="logradouro">
                </div>
                <div class="cidade">
                    <label for="cidade">Cidade</label>
                    <input id="cidade" name="cidade">
                </div>
                <div class="estado">
                    <label for="estado">Estado</label>
                    <input id="estado" name="estado">
                </div>
                <div class="cep">
                    <label for="cep">Cep</label>
                    <input id="cep" name="cep">
                </div>
                <div class="pais">
                    <label for="pais">País</label>
                    <input id="pais" name="pais">
                </div>
            </div>
        </div>
    
        <div class="big_box">
            <button type="submit" id="btn_criarContato" form="p-create">Criar</button>
        </div>

    `;
    events();
    return formCreate;
};

},{"../services/contact.service.js":"bHr4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cldWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EditarContato", ()=>EditarContato);
var _contactServiceJs = require("../services/contact.service.js");
const formCreate = document.createElement("form");
formCreate.setAttribute("id", "p-create");
const editarContato = async (event)=>{
    event.preventDefault();
    const fd = new FormData(formCreate);
    const response = await (0, _contactServiceJs.ContactPatch)(fd);
    if (response.status === 200) {
        window.open("#contatos", "_self");
        window.alert("Contato Atualizado com Sucesso!");
    } else window.alert("Erro no edi\xe7\xe3o! Verifique os dados inseridos!");
};
const events = async ()=>{
    formCreate.addEventListener("submit", editarContato);
};
const EditarContato = ()=>{
    formCreate.innerHTML = `
        <div class="form_header">
            <h1>
                Editar Contato
            </h1>
            <a href="#contatos">
                <i class="fa fa-solid fa-reply">
            </i></a>
        </div>

        <div class="big_box">
            <h3>Contato</h3>
            <div class="form_idContato">
                <label for="idContato">Id do contato</label>
                <input id="idContato" name="idContato" value="${sessionStorage.getItem("@contactId")}">
            </div>
            <div class="form_nome">

                <label for="nome">Nome*</label>
                <input id="nome" name="nome" required>
            </div>
            <div class="form_apelido">
                <label for="apelido">Apelido</label>
                <input id="apelido" name="apelido">
            </div>

            <div class="form_email">
                <label for="email">Email</label>
                <input id="email" name="email">
            </div>
            <div class="form_notas">
                <label for="notas">Notas</label>
                <input id="notas" name="notas">
            </div>
            <div class="form_fotos">
                <label for="foto">Foto</label>
                <input type="file" accept="image/*" id="Foto" name="foto">
            </div>
            <div class="div_telefone">
                <h3>Telefones</h3>

                <div class="form_celular_numero">
                    <label for="celular">Celular: </label>
                    <input id="celular" name="celular" placeholder="(xx) xxxxxxxxx">
                </div>

                <div class="form_Casa_numero">
                    <label for="casa">Casa: </label>
                    <input id="casa" name="casa" placeholder="(xx) xxxxxxxx">
                </div>

                <div class="form_Trabalho_numero">
                    <label for="trabalho">Trabalho: </label>
                    <input id="trabalho" name="trabalho" placeholder="(xx) xxxxxxxx">
                </div>
            </div>
        </div>

        <div class="big_box">
            <div class="div_endereco">
                <h3>Endereço</h3>
                <div class="logradouro">
                    <label for="logradouro">Logradouro</label>
                    <input id="logradouro" name="logradouro">
                </div>
                <div class="cidade">
                    <label for="cidade">Cidade</label>
                    <input id="cidade" name="cidade">
                </div>
                <div class="estado">
                    <label for="estado">Estado</label>
                    <input id="estado" name="estado">
                </div>
                <div class="cep">
                    <label for="cep">Cep</label>
                    <input id="cep" name="cep">
                </div>
                <div class="pais">
                    <label for="pais">País</label>
                    <input id="pais" name="pais">
                </div>
            </div>
        </div>

        <div class="big_box">
            <button type="submit" id="btn_criarContato" form="p-create">Atualizar</button>
            <button type="button" onclick="window.open('#contatos', '_self')" id="btn_cancelar" form="p-create">Cancelar</button>
        </div>
    `;
    events();
    return formCreate;
};

},{"../services/contact.service.js":"bHr4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Rmzk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContatoUnico", ()=>ContatoUnico);
var _headerComponentJs = require("../components/header.component.js");
var _contactServiceJs = require("../services/contact.service.js");
const root = document.getElementById("root");
/* const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts') */ const contactsContainer = document.createElement("div");
contactsContainer.setAttribute("class", "p-contact_byId");
const getContact = async ()=>{
    const response = await (0, _contactServiceJs.ContactGetById)();
    if (response.status === 200) {
        console.log("status 200");
        renderContact(response.data);
    } else console.log("erro");
};
const renderContact = (contact)=>{
    const contactHtml = `
    
        <div class="container-contato">
            <div class="contato-photo">
                <img src="data:image/jpeg;base64,${contact.foto}" alt="Foto do contato">
                <h1>${contact.nome}</h1>
            </div>
            <div class="contato-dados">
                
                <span>Nome </span>
                <p>${contact.nome}</p>

                <span>Apelido </span>
                <p>${contact.apelido}</p>

                <span>E-mail </span>
                <p>${contact.email}</p>

                <span>Notas </span>
                <p>${contact.notas}</p>
            </div>
    
            <div class="contato-dados">
                <span>celular </span>
                <p>${contact.telefones[0].numero}</p>

                <div class="contato-group">
                    <div>
                        <span>residencial </span>
                        <p>${contact.telefones[1].numero}</p>
                    </div>
    
                    <div>
                        <span>comercial </span>
                        <p>${contact.telefones[2].numero}</p>
                    </div>
                </div>

                <span>Endereço </span>
                <p>${contact.endereco.logradouro} ${contact.endereco.cidade} ${contact.endereco.estado} ${contact.endereco.cep} ${contact.endereco.pais} </p>        
                
                <div class="contato-group">
                    <div>
                        <span>Cidade </span>
                        <p>${contact.endereco.cidade} ${contact.endereco.estado} ${contact.endereco.pais} </p>
                    </div>   
    
                    <div>
                        <span>CEP </span>
                        <p>${contact.endereco.cep}</p> 
                    </div> 
                </div>
            </div>
        </div>
        <a href="#contatos"><i class="fa fa-solid fa-reply"></i></a>
    `;
    contactsContainer.insertAdjacentHTML("beforeend", contactHtml);
};
const ContatoUnico = ()=>{
    const header = (0, _headerComponentJs.Header)();
    root.append(header);
    /* contacts.innerHTML= " ";
    contactsContainer.innerHTML = " ";
    contacts.appendChild(contactsContainer) */ contactsContainer.innerHTML = " ";
    getContact();
    return contactsContainer;
};

},{"../components/header.component.js":"5Zcf5","../services/contact.service.js":"bHr4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2mNKm","6rimH"], "6rimH", "parcelRequire3316")

//# sourceMappingURL=index.8cfc62b9.js.map
