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
  ViewChild,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\admin_setting\branding\logo.html
var logo_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblLogoAndTitle'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblLogoAndTitle'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="LogoForm" (ngSubmit)="LogoForm.valid && SaveLogo()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-teal mr-1"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <a class="btn btn-sm btn-secondary" routerLink="/admin"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <div class="col-12 col-md-6 form-group mt-2">\r
                                        <div class="col-12 mb-5">\r
                                            <img *ngIf="imageUrl" class="img-fluid" [src]="imageUrl" style="width:200px;height:24px;" />\r
                                        </div>\r
                                        <div class="col-12 text-muted">\r
                                            {{'lblImageDimension200by24'| translate:service.CL}}\r
                                        </div>\r
                                        <div class="col-12">\r
                                            <button type="button" class="btn btn-info btn-sm mt-2" (click)="fllogo.click();">{{'lblChooseCompanyLogo'| translate:service.CL}}</button>\r
                                            <input type="hidden" formControlName="CompanyLogo" />\r
                                            <input #fllogo type="file" class="hide" (change)="fileChange($event)" accept="image/*">\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-md-6 form-group">\r
                                        <label>{{'lblTitle'| translate:service.CL}}</label>\r
                                        <input type="text" class="form-control" formControlName="CompanyTitle" placeholder="{{'lblTitle'| translate:service.CL}} {{'lblTitle'| translate:service.CL}}" />\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </form>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`;

// src/app/admin_setting/branding/logo.ts
var LogoComponent = class LogoComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.LogoName = "";
    this.allowedExtensions = ["png", "jpg", "jpeg", "gif", "bmp"];
    this.service.GoTo_ScrollTop(window);
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  initForm() {
    this.LogoForm = this.fb.group({
      ApplicationSettingID: [0],
      CompanyLogo: [""],
      CompanyTitle: [""]
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_ApplicationSetting");
        if (res) {
          this.LogoForm.patchValue(res);
          if (res.CompanyLogo) {
            let cdt = this.service.Date_Format(/* @__PURE__ */ new Date(), "yyyyMMddHHmmss");
            this.imageUrl = this.service.Settings.Base_API_URL + "/Documents/Attachments/" + res.CompanyLogo + "?" + cdt;
          } else {
            this.imageUrl = "/assets/images/old_logo.png";
          }
        }
      } catch (e) {
      }
    });
  }
  SaveLogo() {
    return __async(this, null, function* () {
      try {
        if (!this.service.Account.Is_DemoVersion) {
          this.service.App.ShowLoader = true;
          let obj = this.LogoForm.getRawValue();
          obj.CompanyLogo = this.imageUrl ? this.imageUrl : obj.CompanyLogo;
          obj.LogoName = this.LogoName;
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Logo_Update", obj);
          if (res > 0) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSettingSaved"));
            this.service.App.RefreshData.emit();
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
  //logo   
  fileChange(event) {
    let file = event.target.files[0];
    if (file) {
      let extension = file.name.replace(/^.*\./, "");
      if (this.allowedExtensions.indexOf(extension.toLowerCase()) > -1) {
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
          this.imageUrl = myReader.result;
          this.LogoName = file.name;
        };
        myReader.readAsDataURL(file);
      } else {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSelectValidImage"));
      }
    }
  }
  static {
    this.ctorParameters = () => [
      { type: UntypedFormBuilder },
      { type: SystemService },
      { type: Router }
    ];
  }
  static {
    this.propDecorators = {
      form: [{ type: ViewChild, args: ["f"] }]
    };
  }
};
LogoComponent = __decorate([
  Component({
    template: logo_default
  })
], LogoComponent);

// src/app/admin_setting/branding/branding.module.ts
var routes = [
  { path: "logo", component: LogoComponent }
];
var BrandingModule = class BrandingModule2 {
};
BrandingModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [LogoComponent]
  })
], BrandingModule);
export {
  BrandingModule
};
//# sourceMappingURL=branding.module-UFOZCYJ5.js.map
