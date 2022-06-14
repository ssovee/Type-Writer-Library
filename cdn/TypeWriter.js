"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TypeWriter_instances, _TypeWriter_queue, _TypeWriter_element, _TypeWriter_loop, _TypeWriter_typingSpeed, _TypeWriter_deletingSpeed, _TypeWriter_editorDiv, _TypeWriter_addToQueue;
const controlBtn = `
<span class="control"></span>
<span class="control"></span>
<span class="control"></span>
`;
class TypeWriter {
    constructor(parent, { loop = false, typingSpeed = 50, deletingSpeed = 50, title = 'Type Writer', isDarkTheme = true, fontSize = 18 } = {}) {
        _TypeWriter_instances.add(this);
        _TypeWriter_queue.set(this, []);
        _TypeWriter_element.set(this, void 0);
        _TypeWriter_loop.set(this, void 0);
        _TypeWriter_typingSpeed.set(this, void 0);
        _TypeWriter_deletingSpeed.set(this, void 0);
        _TypeWriter_editorDiv.set(this, void 0);
        // TypeWriter design 
        __classPrivateFieldSet(this, _TypeWriter_editorDiv, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _TypeWriter_editorDiv, "f").classList.add('code-editor', isDarkTheme ? 'dark-theme' : 'light-theme');
        __classPrivateFieldGet(this, _TypeWriter_editorDiv, "f").setAttribute('data-content', title);
        __classPrivateFieldSet(this, _TypeWriter_element, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _TypeWriter_element, "f").classList.add('white-space', isDarkTheme ? 'dark-text' : 'light-text');
        __classPrivateFieldGet(this, _TypeWriter_element, "f").style.fontSize = fontSize + 'px';
        __classPrivateFieldGet(this, _TypeWriter_editorDiv, "f").innerHTML = controlBtn;
        __classPrivateFieldGet(this, _TypeWriter_editorDiv, "f").append(__classPrivateFieldGet(this, _TypeWriter_element, "f"));
        parent.append(__classPrivateFieldGet(this, _TypeWriter_editorDiv, "f"));
        __classPrivateFieldSet(this, _TypeWriter_loop, loop, "f");
        __classPrivateFieldSet(this, _TypeWriter_typingSpeed, typingSpeed, "f");
        __classPrivateFieldSet(this, _TypeWriter_deletingSpeed, deletingSpeed, "f");
    }
    typeString(string) {
        __classPrivateFieldGet(this, _TypeWriter_instances, "m", _TypeWriter_addToQueue).call(this, (resolve) => {
            let i = 0;
            const interval = setInterval(() => {
                __classPrivateFieldGet(this, _TypeWriter_element, "f").append(string[i]);
                i++;
                if (i >= string.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, __classPrivateFieldGet(this, _TypeWriter_typingSpeed, "f"));
        });
        return this;
    }
    pauseFor(seconds) {
        __classPrivateFieldGet(this, _TypeWriter_instances, "m", _TypeWriter_addToQueue).call(this, (resolve) => {
            setTimeout(resolve, seconds);
            ;
        });
        return this;
    }
    deleteChars(number) {
        __classPrivateFieldGet(this, _TypeWriter_instances, "m", _TypeWriter_addToQueue).call(this, (resolve) => {
            let i = 0;
            const interval = setInterval(() => {
                __classPrivateFieldGet(this, _TypeWriter_element, "f").innerText = __classPrivateFieldGet(this, _TypeWriter_element, "f").innerText.substring(0, __classPrivateFieldGet(this, _TypeWriter_element, "f").innerText.length - 1);
                i++;
                if (i >= number) {
                    clearInterval(interval);
                    resolve();
                }
            }, __classPrivateFieldGet(this, _TypeWriter_deletingSpeed, "f"));
        });
        return this;
    }
    deleteAll(seconds = __classPrivateFieldGet(this, _TypeWriter_deletingSpeed, "f")) {
        __classPrivateFieldGet(this, _TypeWriter_instances, "m", _TypeWriter_addToQueue).call(this, (resolve) => {
            const interval = setInterval(() => {
                __classPrivateFieldGet(this, _TypeWriter_element, "f").innerText = __classPrivateFieldGet(this, _TypeWriter_element, "f").innerText.substring(0, __classPrivateFieldGet(this, _TypeWriter_element, "f").innerText.length - 1);
                if (__classPrivateFieldGet(this, _TypeWriter_element, "f").innerText.length === 0) {
                    clearInterval(interval);
                    resolve();
                }
            }, seconds);
        });
        return this;
    }
    async start() {
        let cb = __classPrivateFieldGet(this, _TypeWriter_queue, "f").shift();
        while (cb != null) {
            await cb();
            if (__classPrivateFieldGet(this, _TypeWriter_loop, "f"))
                __classPrivateFieldGet(this, _TypeWriter_queue, "f").push(cb);
            cb = __classPrivateFieldGet(this, _TypeWriter_queue, "f").shift();
        }
        return this;
    }
}
_TypeWriter_queue = new WeakMap(), _TypeWriter_element = new WeakMap(), _TypeWriter_loop = new WeakMap(), _TypeWriter_typingSpeed = new WeakMap(), _TypeWriter_deletingSpeed = new WeakMap(), _TypeWriter_editorDiv = new WeakMap(), _TypeWriter_instances = new WeakSet(), _TypeWriter_addToQueue = function _TypeWriter_addToQueue(callback) {
    __classPrivateFieldGet(this, _TypeWriter_queue, "f").push(() => {
        return new Promise(callback);
    });
};