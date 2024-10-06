import {
  AlertType,
  CommonModule,
  Component,
  NgModule,
  Router,
  RouterModule,
  SharedModule,
  SystemService,
  UntypedFormBuilder,
  Validators,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\admin_setting\mailsetting\outgoing_server.html
var outgoing_server_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblOutgoingEmailServer'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblOutgoingEmailServer'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="OutgoingEmail_ServerForm" (ngSubmit)="OutgoingEmail_ServerForm.valid && SaveOutgoing_Server()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <a class="btn btn-sm btn-secondary" routerLink="/admin"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
                                <a class="btn btn-sm btn-info" (click)="TestOutgoing_Server();"><i class="fa fa-check mr-1"></i>{{'btnTestConnection'| translate:service.CL}}</a>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group" [ngClass]="{ 'has-error': f.submitted && !OutgoingEmail_ServerForm.controls.host.valid }">\r
                                        <label>{{'lblServerName'| translate:service.CL}}</label>\r
                                        <input type="text" class="form-control col-md-10" formControlName="host" placeholder="Enter Server Name" />\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group" [ngClass]="{ 'has-error': f.submitted && !OutgoingEmail_ServerForm.controls.port.valid }">\r
                                        <label>{{'lblPort'| translate:service.CL}}</label>\r
                                        <input type="text" number-only class="form-control col-md-10" formControlName="port" placeholder="Enter Port" />\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group" [ngClass]="{ 'has-error': f.submitted && !OutgoingEmail_ServerForm.controls.userName.valid }">\r
                                        <label>{{'lblUsername'| translate:service.CL}}</label>\r
                                        <input type="text" class="form-control col-md-10" formControlName="userName" placeholder="Enter Username" />\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group" [ngClass]="{ 'has-error': f.submitted && !OutgoingEmail_ServerForm.controls.password.valid }">\r
                                        <label>{{'lblPassword'| translate:service.CL}}</label>\r
                                        <input type="password" class="form-control col-md-10" formControlName="password" placeholder="Enter Password" />\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmEnableSsl" type="checkbox" formControlName="enableSsl" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmEnableSsl">{{'lblEnableSsl'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmDefaultCredentials" type="checkbox" formControlName="defaultCredentials" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmDefaultCredentials">{{'lblDefaultCredentials'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <label>{{'lblFromEmail'| translate:service.CL}}</label>\r
                                        <input type="text" class="form-control col-md-10" formControlName="fromEmail" placeholder="Enter From Email" />\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <label>{{'lblFromEmailAlias'| translate:service.CL}}</label>\r
                                        <input type="text" class="form-control col-md-10" formControlName="fromEmailAlias" placeholder="Enter From Email Alias" />\r
                                    </div>\r
\r
                                </div>\r
                            </div>\r
                            <div class="modal-footer form-btn mt-4 pb-0 prl-0">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <a class="btn btn-sm btn-secondary" routerLink="/admin"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
                            </div>\r
                        </form>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
\r
\r
</div>`;

// src/app/admin_setting/mailsetting/outgoing_server.ts
var Outgoing_ServerComponent = class Outgoing_ServerComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.LanguageList = [];
    this.service.GoTo_ScrollTop(window);
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  initForm() {
    this.OutgoingEmail_ServerForm = this.fb.group({
      host: ["", Validators.required],
      userName: ["", Validators.required],
      password: ["", Validators.required],
      port: ["", Validators.required],
      enableSsl: [false],
      defaultCredentials: [false],
      fromEmail: [""],
      fromEmailAlias: [""]
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Outgoing_Server");
        if (res) {
          this.OutgoingEmail_ServerForm.patchValue(res);
          if (this.service.Account.Is_DemoVersion) {
            this.OutgoingEmail_ServerForm.controls["password"].setValue(".......");
          }
        }
      } catch (e) {
      }
    });
  }
  SaveOutgoing_Server() {
    return __async(this, null, function* () {
      try {
        if (!this.service.Account.Is_DemoVersion) {
          this.service.App.ShowLoader = true;
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Update_Outgoing_Server", this.OutgoingEmail_ServerForm.getRawValue());
          if (res > 0) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgOutgoingEmailServerUpdated"));
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
          this.service.App.ShowLoader = false;
        } else {
          this.service.showMessage(AlertType.Error, "This features is not enable for demo version.");
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  TestOutgoing_Server() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Test_Outgoing_Server", this.OutgoingEmail_ServerForm.getRawValue());
        if (res > 0) {
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgOutgoingEmailServerConnectionSuccess"));
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgOutgoingEmailServerConnectionFailed"));
        }
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  static {
    this.ctorParameters = () => [
      { type: UntypedFormBuilder },
      { type: SystemService },
      { type: Router }
    ];
  }
};
Outgoing_ServerComponent = __decorate([
  Component({
    template: outgoing_server_default
  })
], Outgoing_ServerComponent);

// src/app/admin_setting/mailsetting/mailsetting.module.ts
var routes = [
  { path: "outgoing_server", component: Outgoing_ServerComponent }
];
var MailSettingModule = class MailSettingModule2 {
};
MailSettingModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [Outgoing_ServerComponent]
  })
], MailSettingModule);
export {
  MailSettingModule
};
//# sourceMappingURL=mailsetting.module-6VAENSGL.js.map
