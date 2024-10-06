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
  User_Technician_ListComponent,
  ViewChild,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\admin_setting\general\agent_setting.html
var agent_setting_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblAgentSetting'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblAgentSetting'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="AgentSettingForm" (ngSubmit)="AgentSettingForm.valid && SaveAgentSetting()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <a class="btn btn-sm btn-secondary" routerLink="/admin"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Profile_Visible" type="checkbox" formControlName="Is_Profile_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Profile_Visible">{{'lblIsProfileVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_CommonSetting_Visible" type="checkbox" formControlName="Is_CommonSetting_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_CommonSetting_Visible">{{'lblIsAdminSettingVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <!--<div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Help_Visible" type="checkbox" formControlName="Is_Help_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Help_Visible">{{'lblIsHelpSectionVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>-->\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Solution_Visible" type="checkbox" formControlName="Is_Solution_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Solution_Visible">{{'lblIsSolutionVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_ColumnChooser_Visible" type="checkbox" formControlName="Is_ColumnChooser_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_ColumnChooser_Visible">{{'lblIsColumnChooserVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Print" type="checkbox" formControlName="Is_Print" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Print">{{'lblEnablePrintFunction'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Export" type="checkbox" formControlName="Is_Export" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Export">{{'lblEnableExportFunction'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Ticket_Search" type="checkbox" formControlName="Is_Ticket_Search" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Ticket_Search">{{'lblEnableCommonSearchInTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Solution_Search" type="checkbox" formControlName="Is_Solution_Search" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Solution_Search">{{'lblEnableCommonSearchInSolution'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Column_Filter_Ticket" type="checkbox" formControlName="Is_Column_Filter_Ticket" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Column_Filter_Ticket">{{'lblEnableColumnFilterInTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Column_Filter_Solution" type="checkbox" formControlName="Is_Column_Filter_Solution" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Column_Filter_Solution">{{'lblEnableColumnFilterInSolution'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Clone_Ticket" type="checkbox" formControlName="Is_Clone_Ticket" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Clone_Ticket">{{'lblEnableCloneTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Clone_Solution" type="checkbox" formControlName="Is_Clone_Solution" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Clone_Solution">{{'lblEnableCloneSolution'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <label>{{'lblPageSize'| translate:service.CL}}</label>\r
                                        <select formControlName="PageSize" class="form-control col-md-2">\r
                                            <option value="10">10</option>\r
                                            <option value="20">20</option>\r
                                            <option value="30">30</option>\r
                                            <option value="50">50</option>\r
                                            <option value="100">100</option>\r
                                        </select>\r
                                    </div>\r
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

// src/app/admin_setting/general/agent_setting.ts
var Agent_SettingComponent = class Agent_SettingComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.service.GoTo_ScrollTop(window);
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  initForm() {
    this.AgentSettingForm = this.fb.group({
      AgentSettingID: [0],
      Is_Profile_Visible: [true],
      Is_CommonSetting_Visible: [true],
      Is_Help_Visible: [true],
      Is_Solution_Visible: [true],
      Is_ColumnChooser_Visible: [true],
      PageSize: [10],
      Is_Print: [true],
      Is_Export: [true],
      Is_Ticket_Search: [true],
      Is_Solution_Search: [true],
      Is_Column_Filter_Ticket: [true],
      Is_Column_Filter_Solution: [true],
      Is_Clone_Ticket: [true],
      Is_Clone_Solution: [true]
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_AgentSetting");
        if (res) {
          this.AgentSettingForm.patchValue(res);
        }
      } catch (e) {
      }
    });
  }
  SaveAgentSetting() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/AgentSetting_Update", this.AgentSettingForm.getRawValue());
        if (res > 0) {
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSettingSaved"));
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
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
  static {
    this.propDecorators = {
      form: [{ type: ViewChild, args: ["f"] }]
    };
  }
};
Agent_SettingComponent = __decorate([
  Component({
    template: agent_setting_default
  })
], Agent_SettingComponent);

// angular:jit:template:file:src\app\admin_setting\general\client_setting.html
var client_setting_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblClientSetting'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblClientSetting'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="ClientSettingForm" (ngSubmit)="ClientSettingForm.valid && SaveClientSetting()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <a class="btn btn-sm btn-secondary" routerLink="/admin"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Profile_Visible" type="checkbox" formControlName="Is_Profile_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Profile_Visible">{{'lblIsProfileVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Ticket_Visible" type="checkbox" formControlName="Is_Ticket_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Ticket_Visible">{{'lblIsTicketVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <!--<div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Help_Visible" type="checkbox" formControlName="Is_Help_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Help_Visible">{{'lblIsHelpSectionVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>-->\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Solution_Visible" type="checkbox" formControlName="Is_Solution_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Solution_Visible">{{'lblIsSolutionVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_ColumnChooser_Visible" type="checkbox" formControlName="Is_ColumnChooser_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_ColumnChooser_Visible">{{'lblIsColumnChooserVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Search_Visible" type="checkbox" formControlName="Is_Search_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Search_Visible">{{'lblIsSearchVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Print" type="checkbox" formControlName="Is_Print" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Print">{{'lblEnablePrintFunction'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Export" type="checkbox" formControlName="Is_Export" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Export">{{'lblEnableExportFunction'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Ticket_Search" type="checkbox" formControlName="Is_Ticket_Search" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Ticket_Search">{{'lblEnableCommonSearchInTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Solution_Search" type="checkbox" formControlName="Is_Solution_Search" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Solution_Search">{{'lblEnableCommonSearchInSolution'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Column_Filter_Ticket" type="checkbox" formControlName="Is_Column_Filter_Ticket" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Column_Filter_Ticket">{{'lblEnableColumnFilterInTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Column_Filter_Solution" type="checkbox" formControlName="Is_Column_Filter_Solution" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Column_Filter_Solution">{{'lblEnableColumnFilterInSolution'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Clone_Ticket" type="checkbox" formControlName="Is_Clone_Ticket" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Clone_Ticket">{{'lblEnableCloneTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Clone_Solution" type="checkbox" formControlName="Is_Clone_Solution" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Clone_Solution">{{'lblEnableCloneSolution'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <label>{{'lblPageSize'| translate:service.CL}}</label>\r
                                        <select formControlName="PageSize" class="form-control col-md-2">\r
                                            <option value="10">10</option>\r
                                            <option value="20">20</option>\r
                                            <option value="30">30</option>\r
                                            <option value="50">50</option>\r
                                            <option value="100">100</option>\r
                                        </select>\r
                                    </div>\r
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

// src/app/admin_setting/general/client_setting.ts
var Client_SettingComponent = class Client_SettingComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.service.GoTo_ScrollTop(window);
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  initForm() {
    this.ClientSettingForm = this.fb.group({
      ClientSettingID: [0],
      Is_Profile_Visible: [true],
      Is_Help_Visible: [true],
      Is_Ticket_Visible: [true],
      Is_Solution_Visible: [false],
      Is_ColumnChooser_Visible: [false],
      Is_Search_Visible: [true],
      PageSize: [10],
      Is_Print: [true],
      Is_Export: [true],
      Is_Ticket_Search: [true],
      Is_Solution_Search: [true],
      Is_Column_Filter_Ticket: [true],
      Is_Column_Filter_Solution: [true],
      Is_Clone_Ticket: [true],
      Is_Clone_Solution: [true]
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_ClientSetting");
        if (res) {
          this.ClientSettingForm.patchValue(res);
        }
      } catch (e) {
      }
    });
  }
  SaveClientSetting() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/ClientSetting_Update", this.ClientSettingForm.getRawValue());
        if (res > 0) {
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSettingSaved"));
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
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
  static {
    this.propDecorators = {
      form: [{ type: ViewChild, args: ["f"] }]
    };
  }
};
Client_SettingComponent = __decorate([
  Component({
    template: client_setting_default
  })
], Client_SettingComponent);

// angular:jit:template:file:src\app\admin_setting\general\app_setting.html
var app_setting_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblApplicationSetting'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblApplicationSetting'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="ApplicationSettingForm" (ngSubmit)="ApplicationSettingForm.valid && SaveApplicationSetting()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <a class="btn btn-sm btn-secondary" routerLink="/admin"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <!--<div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_EasyAddOn_Visible" type="checkbox" formControlName="Is_EasyAddOn_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_EasyAddOn_Visible">Enable EasyAdd Functionality In Ticket Detail</label>\r
                                        </div>\r
                                    </div>-->\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Admin_Search" type="checkbox" formControlName="Is_Admin_Search" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Admin_Search">{{'lblEnableCommonSearchInAdmin'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Pickup" type="checkbox" formControlName="Is_Pickup" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Pickup">{{'lblEnablePickupFunctionInTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_AssignTo_Dropdown" type="checkbox" formControlName="Is_AssignTo_Dropdown" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_AssignTo_Dropdown">{{'lblEnableAssignAgentInTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Close_Ticket" type="checkbox" formControlName="Is_Close_Ticket" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Close_Ticket">{{'lblEnableCloseTicket'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Ticket_StartPage" type="checkbox" formControlName="Is_Ticket_StartPage" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Ticket_StartPage">{{'lblIsTicketListAsStartPage'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_EditRow_On_DoubleClick" type="checkbox" formControlName="Is_EditRow_On_DoubleClick" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_EditRow_On_DoubleClick">{{'lblIsEditRowOnDoubleClick'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <label>{{'lblDefaultLanguage'| translate:service.CL}}</label>\r
                                        <select class="form-control col-md-6" formControlName="DefaultLanguage">\r
                                            <option value="">{{'lblSelect'| translate:service.CL}}</option>\r
                                            <option *ngFor="let item of LanguageList" [value]="item.Value">{{item.Key}}</option>\r
                                        </select>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <label>{{'lblDefaultPassword'| translate:service.CL}}</label>\r
                                        <input type="text" class="form-control col-md-6" formControlName="DefaultPassword" placeholder="Enter Default Password" />\r
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

// src/app/admin_setting/general/app_setting.ts
var App_SettingComponent = class App_SettingComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.LanguageList = [];
    this.service.GoTo_ScrollTop(window);
    this.service.Get_Languages().then((res) => {
      this.LanguageList = res;
    });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  initForm() {
    this.ApplicationSettingForm = this.fb.group({
      ApplicationSettingID: [0],
      Is_EasyAddOn_Visible: [false],
      DefaultLanguage: [""],
      DefaultPassword: [""],
      Is_Chat_Visible: [false],
      Is_LockUser: [false],
      Is_Admin_Search: [false],
      Is_Pickup: [false],
      Is_AssignTo_Dropdown: [false],
      Is_Close_Ticket: [false],
      Is_Ticket_StartPage: [false],
      Is_EditRow_On_DoubleClick: [true]
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_ApplicationSetting");
        if (res) {
          this.ApplicationSettingForm.patchValue(res);
        }
      } catch (e) {
      }
    });
  }
  SaveApplicationSetting() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/ApplicationSetting_Update", this.ApplicationSettingForm.getRawValue());
        if (res > 0) {
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSettingSaved"));
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
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
  static {
    this.propDecorators = {
      form: [{ type: ViewChild, args: ["f"] }]
    };
  }
};
App_SettingComponent = __decorate([
  Component({
    template: app_setting_default
  })
], App_SettingComponent);

// angular:jit:template:file:src\app\admin_setting\general\tech_autoassign.html
var tech_autoassign_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblAgentAutoAssign'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblAgentAutoAssign'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="TechAutoAssignForm" (ngSubmit)="TechAutoAssignForm.valid && Save()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <a class="btn btn-sm btn-secondary" routerLink="/admin"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <div class="col-12 col-sm-12 col-md-6">\r
                                        <div class="col-12 col-sm-12 col-md-12 form-group">\r
                                            <div class="custom-control custom-checkbox">\r
                                                <input id="frmIs_Enable" type="checkbox" formControlName="Is_Enable" class="custom-control-input">\r
                                                <label class="custom-control-label" for="frmIs_Enable">{{'lblIs_Enable'| translate:service.CL}}</label>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-sm-12 col-md-12 form-group">\r
                                            <div class="custom-control custom-radio">\r
                                                <input id="frm_loadbalance" type="radio" value="load_balance" formControlName="AutoAssign_Type" class="custom-control-input">\r
                                                <label class="custom-control-label" for="frm_loadbalance">{{'lblLoadBalance'| translate:service.CL}}</label>\r
                                            </div>\r
                                            <div class="custom-control custom-radio">\r
                                                <input id="frm_roundrobin" type="radio" value="round_robin" formControlName="AutoAssign_Type" class="custom-control-input">\r
                                                <label class="custom-control-label" for="frm_roundrobin">{{'lblRoundRobin'| translate:service.CL}}</label>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="table-header">\r
                                            <button class="btn btn-sm btn-primary" type="button" (click)="OpenUserList();">{{'btnAddAgentsToExclude'| translate:service.CL}}</button>\r
                                        </div>\r
                                        <div class="table-responsive">\r
                                            <table class="table table-bordered table-striped">\r
                                                <thead><tr><th>{{'lblName'| translate:service.CL}}</th><th width="1%"></th></tr></thead>\r
                                                <tbody>\r
                                                    <tr *ngFor="let user of lstUsers">\r
                                                        <td>{{user.DisplayName + ' (' + user.Email + ')' }}</td>\r
                                                        <td class="small-btn"><button class="btn btn-xs btn-danger" type="button" title="Remove" (click)="Remove(user);">Remove</button></td>\r
                                                    </tr>\r
                                                </tbody>\r
                                            </table>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </form>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<user-technician (onSave)="UserSelectDone($event)" #UserSelect></user-technician>`;

// src/app/admin_setting/general/tech_autoassign.ts
var Tech_AutoassignComponent = class Tech_AutoassignComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.lstUsers = [];
    this.AgentList = [];
    this.service.GoTo_ScrollTop(window);
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  initForm() {
    this.TechAutoAssignForm = this.fb.group({
      TechAutoAssignID: [0],
      Is_Enable: [true],
      AutoAssign_Type: [""],
      Exclude_Users: [""]
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_TechAutoAssign");
        if (res) {
          this.TechAutoAssignForm.patchValue(res);
        }
        let data = yield this.service.Data.ExecuteAPI_Post("Admin/Get_UserSelection_List", { Is_Agent: true });
        if (data) {
          this.AgentList = data.filter((d) => d.Is_Agent);
          if (res && res.Exclude_Users) {
            res.Exclude_Users.split(",").map((d) => {
              let user = this.AgentList.find((x) => x.UserID == d);
              if (user) {
                this.lstUsers.push(user);
              }
            });
          }
        }
      } catch (e) {
      }
    });
  }
  //Bind User & Technician Grid   
  OpenUserList() {
    this.UserSelect.open(true, this.AgentList, true);
  }
  UserSelectDone(item) {
    if (item && item.user) {
      let userList = [];
      if (item.user.length > 0) {
        userList = item.user;
      } else {
        userList.push(item.user);
      }
      userList.map((d) => {
        let user = this.lstUsers.find((x) => x.UserID == d.UserID);
        if (!user) {
          this.lstUsers.push(d);
        }
      });
    }
  }
  Remove(item) {
    this.lstUsers = this.lstUsers.filter((x) => x.UserID != item.UserID);
  }
  Save() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.TechAutoAssignForm.getRawValue();
        obj.Exclude_Users = this.lstUsers.map((d) => d.UserID).join();
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Update_TechAutoAssign", obj);
        if (res > 0) {
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSettingSaved"));
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
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
  static {
    this.propDecorators = {
      UserSelect: [{ type: ViewChild, args: [User_Technician_ListComponent] }],
      form: [{ type: ViewChild, args: ["f"] }]
    };
  }
};
Tech_AutoassignComponent = __decorate([
  Component({
    template: tech_autoassign_default
  })
], Tech_AutoassignComponent);

// src/app/admin_setting/general/general.module.ts
var routes = [
  { path: "agent_setting", component: Agent_SettingComponent },
  { path: "client_setting", component: Client_SettingComponent },
  { path: "app_setting", component: App_SettingComponent },
  { path: "tech_autoassign", component: Tech_AutoassignComponent }
];
var GeneralModule = class GeneralModule2 {
};
GeneralModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [Agent_SettingComponent, Client_SettingComponent, App_SettingComponent, Tech_AutoassignComponent]
  })
], GeneralModule);
export {
  GeneralModule
};
//# sourceMappingURL=general.module-AIMK5ZQP.js.map
