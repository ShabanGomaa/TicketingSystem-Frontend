import {
  Injectable,
  Router,
  SystemService,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// src/app/auth.guard.ts
var AuthGuard = class AuthGuard2 {
  constructor(router, service) {
    this.router = router;
    this.service = service;
    this.defered = new Deferred();
  }
  canActivate(route, state) {
    this.defered = new Deferred();
    this.lastURL = state.url;
    this.service.HasAccountData.then(() => {
      window.setTimeout(() => {
        if (this.service.App.getCookie("Bearer") && this.service.Account.UserID > 0) {
          if (route.data.pageProp) {
            if (this.service.Account[route.data.pageProp] || route.data.type) {
              this.defered.resolve(true);
            } else {
              this.defered.resolve(false);
            }
          } else {
            this.defered.resolve(true);
          }
        } else {
          this.defered.resolve(false);
          this.service.redirectToLogin(this.lastURL);
        }
      }, 10);
    }, () => {
      this.defered.resolve(false);
      this.service.redirectToLogin(this.lastURL);
    });
    return this.defered.promise;
  }
  static {
    this.ctorParameters = () => [
      { type: Router },
      { type: SystemService }
    ];
  }
};
AuthGuard = __decorate([
  Injectable()
], AuthGuard);
var Deferred = class {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};

export {
  AuthGuard
};
//# sourceMappingURL=chunk-KNU3ZFCB.js.map
