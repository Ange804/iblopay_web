var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// src/app/modules/dashboard/widgets/activity-feed/activity-feed.component.ts
import { Component, Input } from '@angular/core';
let ActivityFeedComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-activity-feed',
            templateUrl: './activity-feed.component.html',
            styleUrls: ['./activity-feed.component.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _activities_decorators;
    let _activities_initializers = [];
    let _activities_extraInitializers = [];
    var ActivityFeedComponent = _classThis = class {
        getActivityIcon(type) {
            const icons = {
                'person_add': '👤',
                'payment': '💳',
                'credit_card': '💳',
                'warning': '⚠️',
                'agent': '👤',
                'transaction': '💰',
                'card': '💳',
                'system': '🖥️'
            };
            return icons[type] || '📌';
        }
        getActivityTypeClass(type) {
            const classes = {
                'success': 'success',
                'info': 'info',
                'warning': 'warning',
                'danger': 'danger'
            };
            return classes[type] || 'info';
        }
        getTimeAgo(date) {
            const now = new Date();
            const diff = now.getTime() - date.getTime();
            const minutes = Math.floor(diff / 60000);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            if (minutes < 1)
                return 'à l\'instant';
            if (minutes < 60)
                return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
            if (hours < 24)
                return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
            if (days < 7)
                return `il y a ${days} jour${days > 1 ? 's' : ''}`;
            return date.toLocaleDateString('fr-FR');
        }
        constructor() {
            this.activities = __runInitializers(this, _activities_initializers, []);
            __runInitializers(this, _activities_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "ActivityFeedComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _activities_decorators = [Input()];
        __esDecorate(null, null, _activities_decorators, { kind: "field", name: "activities", static: false, private: false, access: { has: obj => "activities" in obj, get: obj => obj.activities, set: (obj, value) => { obj.activities = value; } }, metadata: _metadata }, _activities_initializers, _activities_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ActivityFeedComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ActivityFeedComponent = _classThis;
})();
export { ActivityFeedComponent };
//# sourceMappingURL=activity-feed.component.js.map