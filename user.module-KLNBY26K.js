import {
  ActivatedRoute,
  AlertType,
  CommonModule,
  Component,
  Location,
  NgModule,
  Router,
  RouterModule,
  SharedModule,
  SystemService,
  UntypedFormBuilder,
  Validators,
  ViewChild,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\admin_setting\admin_dashboard.html
var admin_dashboard_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i><span>{{'lblAdminDashboard'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper admin-header">        \r
        <h4 class="card-title1 mb-4">{{'lblBasicHelpdesk'| translate:service.CL}}</h4>\r
        <div class="row">\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-info-light bmsTooltip" data-content="Status is used to indicate progress of tickets.">\r
                    <a class="card-body" routerLink="/admin/basic/status">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblStatus'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-primary-light">\r
                    <a class="card-body" routerLink="/admin/basic/level">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblLevel'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-teal-light">\r
                    <a class="card-body" routerLink="/admin/basic/category">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblCategory'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-warning-light">\r
                    <a class="card-body" routerLink="/admin/basic/subcategory">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblSubCategory'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-dark-light">\r
                    <a class="card-body" routerLink="/admin/basic/item">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblItem'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-pink-light">\r
                    <a class="card-body" routerLink="/admin/basic/department">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblDepartment'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-pink-light">\r
                    <a class="card-body" routerLink="/admin/basic/request_type">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblRequestType'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-dark-light">\r
                    <a class="card-body" routerLink="/admin/basic/impact">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblImpact'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-warning-light">\r
                    <a class="card-body" routerLink="/admin/basic/urgency">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblUrgency'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-teal-light">\r
                    <a class="card-body" routerLink="/admin/basic/priority">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblPriority'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-primary-light">\r
                    <a class="card-body" routerLink="/admin/basic/location">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblLocation'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-info-light">\r
                    <a class="card-body" routerLink="/admin/basic/notification">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblAnnouncement'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
\r
        </div>\r
\r
\r
        <h4 class="card-title1 mb-4 mt-3">{{'lblGeneralSetting'| translate:service.CL}}</h4>\r
        <div class="row">\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card  bg-info-light">\r
                    <a class="card-body" routerLink="/admin/general/app_setting">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblApplicationSetting'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card  bg-primary-light">\r
                    <a class="card-body" routerLink="/admin/general/agent_setting">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblAgentSetting'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card  bg-teal-light">\r
                    <a class="card-body" routerLink="/admin/general/client_setting">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblClientSetting'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card bg-warning-light">\r
                    <a class="card-body" routerLink="/admin/general/tech_autoassign">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblAgentAutoAssign'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
\r
        </div>\r
\r
        <h4 class="card-title1 mb-4 mt-3">{{'lblMailSetting'| translate:service.CL}}</h4>\r
        <div class="row">\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card  bg-info-light">\r
                    <a class="card-body" routerLink="/admin/mail/outgoing_server">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblOutgoingEmailServer'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
        </div>\r
\r
\r
        <h4 class="card-title1 mb-4 mt-3">{{'lblUserManagement'| translate:service.CL}}</h4>\r
        <div class="row">\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card" *ngIf="service?.Account?.Is_Agent && service?.Account?.Is_Client">\r
                <div class="card  bg-info-light">\r
                    <a class="card-body" routerLink="/admin/user_admin">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblAdmins'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card  bg-primary-light">\r
                    <a class="card-body" routerLink="/admin/user_agent">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblAgents'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card  bg-teal-light">\r
                    <a class="card-body" routerLink="/admin/user_client">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblClients'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card  bg-warning-light">\r
                    <a class="card-body" routerLink="/admin/roles">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblRoles'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <h4 class="card-title1 mb-4 mt-3">{{'lblCompanyLogo'| translate:service.CL}}</h4>\r
        <div class="row">\r
            <div class="col-6 col-md-2 col-sm-6 grid-margin stretch-card">\r
                <div class="card  bg-info-light">\r
                    <a class="card-body" routerLink="/admin/logo">\r
                        <div class="bookmark-icon">\r
                            <i class="fa fa-bookmark float-right icon-md text-white"></i>\r
                        </div>\r
                        <h6 class="card-subtitle mb-1 mt-1"><span class="text-white">{{'lblLogoAndTitle'| translate:service.CL}}</span></h6>\r
                    </a>\r
                </div>\r
            </div>\r
        </div>\r
\r
    </div>\r
</div>\r
`;

// src/app/admin_setting/admin_dashboard.ts
var Admin_DashboardComponent = class Admin_DashboardComponent2 {
  constructor(service) {
    this.service = service;
    this.isLoading = false;
  }
  ngOnInit() {
  }
  static {
    this.ctorParameters = () => [
      { type: SystemService }
    ];
  }
};
Admin_DashboardComponent = __decorate([
  Component({
    template: admin_dashboard_default
  })
], Admin_DashboardComponent);

// angular:jit:template:file:src\app\admin_setting\user\user.html
var user_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{header_title | translate:service.CL}}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblUserManagement'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div [hidden]="Is_Edit_Form" class="card-body">\r
                        <div class="table-header">\r
                            <div>\r
                                <button type="button" class="btn btn-sm btn-secondary" title="{{'tlpRefresh'| translate:service.CL}}" (click)="txtSearch='';refreshGrid();"><i class="fa fa-sync"></i></button>\r
\r
                                <button type="button" *ngIf="service?.Account?.Is_Add_Admin" (click)="AddRow()" class="btn btn-sm btn-warning" title="{{'tlpAddNew'| translate:service.CL}}"><i class="fa fa-plus"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Edit_Admin" (click)="EditRow()" class="btn btn-sm btn-primary" title="{{'tlpEdit'| translate:service.CL}}"><i class="fa fa-pencil-alt"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Delete_Admin" (click)="DeleteRow()" class="btn btn-sm btn-danger" title="{{'tlpDelete'| translate:service.CL}}"><i class="fa fa-trash"></i></button>\r
\r
                                <button type="button" (click)="ActiveDeActiveUser()" class="btn btn-sm btn-info" title="{{'tlpActiveDeActiveUser'| translate:service.CL}}"><i class="fa fa-user-times"></i></button>\r
                                <button type="button" (click)="ResetDefaultPassword()" class="btn btn-sm btn-info" title="{{'tlpResetPasswordToDefaultPassword'| translate:service.CL}}"><i class="fa fa-eye-slash"></i></button>\r
                            </div>\r
                            <div class="table-filter">\r
                                <input type="text" *ngIf="service?.Account?.Is_Admin_Search" class="form-control form-control-sm" name="filter" placeholder="{{'phSearch'| translate:service.CL}}" [(ngModel)]="txtSearch" (keyup)="service.App.searchFilter.emit($event.target.value);">\r
                                <div class="dropdown dropleft" *ngIf="service?.Account?.Is_ColumnChooser_Visible">\r
                                    <button class="btn btn-sm btn-secondary" data-toggle="dropdown" title="{{'tlpColumnChooser'| translate:service.CL}}" type="button">\r
                                        <i class="fa fa-cog"></i>\r
                                    </button>\r
                                    <ul class="dropdown-menu" (click)="$event.stopPropagation()">\r
                                        <li *ngFor="let filter of gridFilter;let i = index;" class="dropdown-item">\r
                                            <div class="custom-control custom-checkbox">\r
                                                <input type="checkbox" class="custom-control-input" id="chkfltr-{{i}}" [(ngModel)]="filter.Is_Visible" (change)="filter.Is_Visible != $event.target.value;">\r
                                                <label class="custom-control-label" for="chkfltr-{{i}}">\r
                                                    <span *ngIf="filter.ColumnName == 'ProfilePicture'">{{'lblProfilePicture'| translate:service.CL}}</span>\r
                                                    <span *ngIf="filter.ColumnName != 'ProfilePicture'">{{filter.DisplayText}}</span>\r
                                                </label>\r
                                            </div>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div style="position:relative;">\r
                            <commongrid *ngIf="allItems.length > 0" [records]="allItems" [gridfilter]="gridFilter" [SearchText]="txtSearch"\r
                                        [pagesize]="10" (change)="pageChanged($event)" [ShowSorting]="true"\r
                                        [PagingType]="'nextprevnumberadvanced'" [ShowPagesize]="true" [ShowFilter]="true" [ShowCheckbox]="true"\r
                                        [Edit]="true" (EditRow)="service?.Account?.Is_EditRow_On_DoubleClick && EditRowDBClick($event)">\r
                            </commongrid>                           \r
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
\r
\r
                    <div [hidden]="!Is_Edit_Form" class="card-body">                        \r
                        <form [formGroup]="UserManagementForm" (ngSubmit)="UserManagementForm.valid && SaveUserManagement()" #f="ngForm" novalidate>\r
                            <div *ngIf="Is_Edit_Form" class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <button *ngIf="service?.Account?.Is_Show_ClientPortal_Link && service?.Account?.Is_Agent" type="button" class="btn btn-sm btn-secondary" (click)="BackToList();"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</button>\r
                                <a *ngIf="!service?.Account?.Is_Show_ClientPortal_Link && !service?.Account?.Is_Agent" routerLink="/requester" class="btn btn-sm btn-secondary"><i class="fa fa-trash mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row1">\r
                                    <div class="col-12">\r
                                        <div class="row">\r
                                            <div class="col-12 col-sm-4 col-md-3 mb-3 text-center border pt-2 pb-2 dv-profile-left">\r
                                                <div class="m-card-profile__pic-wrapper">\r
                                                    <img *ngIf="imageUrl" class="img-fluid" [src]="imageUrl" style="width:160px;" />\r
                                                </div>\r
                                                <h4>{{displayName.value}}</h4>\r
                                                <p class="font-13"><a href="mailto:{{email.value}}">{{email.value}}</a></p>\r
\r
                                                <button type="button" class="btn btn-info btn-sm mt-2" (click)="flProfilepic.click();">{{'lblChooseProfilePicture'| translate:service.CL}}</button>\r
                                                <input type="hidden" formControlName="ProfilePicture" />\r
                                                <input #flProfilepic type="file" class="hide" (change)="fileChange($event)" accept="image/*">\r
                                            </div>                                            \r
                                            <div class="col-12 col-sm-8 col-md-9 dv-profile-right">\r
                                                <div class="row">\r
                                                    <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !UserManagementForm.controls.DisplayName.valid}">\r
                                                        <label>{{'lblDisplayName'| translate:service.CL}}</label>\r
                                                        <input type="text" #displayName class="form-control" autofocus formControlName="DisplayName" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDisplayName'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !UserManagementForm.controls.UserName.valid}">\r
                                                        <label>{{'lblUserName'| translate:service.CL}}</label>\r
                                                        <input type="text" class="form-control" formControlName="UserName" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblUserName'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !UserManagementForm.controls.Email.valid}">\r
                                                        <label>{{'lblEmail'| translate:service.CL}}</label>\r
                                                        <input type="email" #email class="form-control" formControlName="Email" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblEmail'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !UserManagementForm.controls.Password.valid}">\r
                                                        <label>{{'lblPassword'| translate:service.CL}}</label>\r
                                                        <input type="password" class="form-control" formControlName="Password" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblPassword'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !UserManagementForm.controls.RoleID.valid}">\r
                                                        <label>{{'lblRole'| translate:service.CL}}</label>\r
                                                        <select class="form-control" formControlName="RoleID">\r
                                                            <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                                                            <option *ngFor="let item of RoleList" [value]="item.Value">{{item.Key}}</option>\r
                                                        </select>\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblPhoneNo'| translate:service.CL}}</label>\r
                                                        <input type="text" class="form-control" formControlName="PhoneNo" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblPhoneNo'| translate:service.CL}}" />\r
                                                    </div>\r
\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblCity'| translate:service.CL}}</label>\r
                                                        <input type="text" class="form-control" formControlName="City" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblCity'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblState'| translate:service.CL}}</label>\r
                                                        <input type="text" class="form-control" formControlName="State" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblState'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblCountry'| translate:service.CL}}</label>\r
                                                        <input type="text" class="form-control" formControlName="Country" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblCountry'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblPincode'| translate:service.CL}}</label>\r
                                                        <input type="text" class="form-control" formControlName="Pincode" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblPincode'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblJobTitle'| translate:service.CL}}</label>\r
                                                        <input type="text" class="form-control" formControlName="JobTitle" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblJobTitle'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblOrganization'| translate:service.CL}}</label>\r
                                                        <input type="text" class="form-control" formControlName="Organization" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblOrganization'| translate:service.CL}}" />\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblAddress'| translate:service.CL}}</label>\r
                                                        <textarea class="form-control" formControlName="Address" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblAddress'| translate:service.CL}}"></textarea>\r
                                                    </div>\r
                                                    <div class="col-12 col-md-6 form-group">\r
                                                        <label>{{'lblDescription'| translate:service.CL}}</label>\r
                                                        <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                                                    </div>\r
                                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                                        <div class="custom-control custom-checkbox">\r
                                                            <input id="frmIs_SendMail_Password" type="checkbox" formControlName="Is_SendMail_Password" class="custom-control-input">\r
                                                            <label class="custom-control-label" for="frmIs_SendMail_Password">{{'lblSendPasswordInMail'| translate:service.CL}}</label>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                                        <div class="custom-control custom-checkbox">\r
                                                            <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                                                            <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div *ngIf="Is_Edit_Form" class="modal-footer form-btn mt-4 pb-0 prl-0">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <button *ngIf="service?.Account?.Is_Show_ClientPortal_Link && service?.Account?.Is_Agent" type="button" class="btn btn-sm btn-secondary" (click)="BackToList();"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</button>\r
                                <a *ngIf="!service?.Account?.Is_Show_ClientPortal_Link && !service?.Account?.Is_Agent" routerLink="/requester" class="btn btn-sm btn-secondary"><i class="fa fa-trash mr-1"></i>{{'btnCancel'| translate:service.CL}}</a>\r
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

// src/app/admin_setting/user/user.ts
var UserComponent = class UserComponent2 {
  constructor(fb, service, route, router, location) {
    this.fb = fb;
    this.service = service;
    this.route = route;
    this.router = router;
    this.location = location;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.RoleList = [];
    this.Is_Agent = false;
    this.Is_Client = true;
    this.RoleList_All = [];
    this.Is_Edit_Form = false;
    this.imageUrl = "/assets/images/profile.png";
    this.allowedExtensions = ["png", "jpg", "jpeg", "gif", "bmp"];
    this.UserID = 0;
    this.Is_Agent_Only = false;
    this.header_title = "";
    this.isEdit = false;
    this.ProfilePictureName = "";
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "", ColumnName: "ProfilePicture", Type: "image", Value: "", Is_Visible: true, TextAlign: "text-center", Width: 5 });
    this.gridFilter.push({ DisplayText: "lblDisplayName", ColumnName: "DisplayName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblUserName", ColumnName: "UserName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblEmail", ColumnName: "Email", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblRoleName", ColumnName: "RoleName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblPhoneNo", ColumnName: "PhoneNo", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblCountry", ColumnName: "Country", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    if (window.location.href.indexOf("user_admin") > -1) {
      this.Is_Agent = true;
      this.Is_Client = true;
      if (!this.service.Account.Is_Agent || !this.service.Account.Is_Client) {
        this.router.navigate(["/admin"]);
      }
    } else if (window.location.href.indexOf("user_agent") > -1) {
      this.Is_Agent = true;
      this.Is_Client = false;
    } else {
      this.Is_Agent = false;
      this.Is_Client = false;
    }
    this.UserID = this.route.snapshot.queryParams["id"];
    if (this.UserID && this.UserID > 0) {
      this.Is_Edit_Form = true;
      if (this.Is_Agent && this.Is_Client) {
        this.location.replaceState("/admin/user_admin");
      } else if (this.Is_Agent) {
        this.location.replaceState("/admin/user_agent");
      } else {
        this.location.replaceState("/admin/user_client");
      }
      this.isEdit = true;
      this.EditUserManagement(this.UserID);
      if (this.service.Account.Is_Agent && !this.service.Account.Is_Client) {
        this.Is_Agent_Only = true;
      }
    }
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
    this.set_header_title();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_UserManagement_List", { Is_Agent: this.Is_Agent, Is_Client: this.Is_Client });
        if (res) {
          this.allItems = res;
          this.totalitems = res.length;
          if (isRefresh) {
            this.service.App.refreshGrid.emit();
          }
        }
        this.RoleList_All = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Roles_List");
        this.setRoles();
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
      }
    });
  }
  setRoles() {
    return __async(this, null, function* () {
      let lst = [];
      if (this.Is_Agent && this.Is_Client) {
        lst = this.RoleList_All.filter((d) => d.Is_Agent && d.Is_Client);
      } else if (this.Is_Agent && !this.Is_Client) {
        lst = this.RoleList_All.filter((d) => d.Is_Agent && !d.Is_Client);
      } else if (!this.Is_Agent) {
        lst = this.RoleList_All.filter((d) => !d.Is_Agent && d.Is_Client);
      } else {
        lst = this.RoleList_All;
      }
      this.RoleList = yield lst.map((d) => {
        return { Key: d.Name, Value: d.RoleID };
      });
    });
  }
  pageChanged(obj) {
  }
  refreshGrid() {
    this.bindData(true);
  }
  initForm() {
    this.UserManagementForm = this.fb.group({
      UserID: [0],
      RoleID: [0, Validators.compose([Validators.required, Validators.min(1)])],
      DisplayName: ["", Validators.required],
      UserName: ["", Validators.required],
      Email: ["", Validators.compose([Validators.required, Validators.email])],
      Password: ["", Validators.required],
      PhoneNo: [""],
      //CellPhoneNo: [""],
      City: [""],
      State: [""],
      Country: [""],
      Pincode: [""],
      JobTitle: [""],
      Address: [""],
      //TimeZoneID: [""],
      Organization: [""],
      Is_SendMail_Password: [false],
      Description: [""],
      ProfilePicture: [""],
      Is_Active: [true]
    });
  }
  AddRow() {
    this.setRoles();
    this.imageUrl = "/assets/images/profile.png";
    this.isEdit = false;
    this.Is_Edit_Form = true;
    this.clearForm();
    this.setUserName_Readonly(false);
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["UserID"];
      this.EditUserManagement(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditUserManagement(RowItem.UserID);
    }
  }
  EditUserManagement(UserID) {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        this.setRoles();
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_UserManagement_ByID", { UserID });
        if (res) {
          this.UserManagementForm.patchValue(res);
          if (res.ProfilePicture) {
            let cdt = this.service.Date_Format(/* @__PURE__ */ new Date(), "yyyyMMddHHmmss");
            this.imageUrl = this.service.Settings.Base_API_URL + "/Documents/Profile/" + res.ProfilePicture + "?" + cdt;
          } else {
            this.imageUrl = "/assets/images/profile.png";
          }
          if (this.service.Account.Is_DemoVersion && res.UserName == "admin") {
            this.UserManagementForm.controls["Password"].setValue(".......");
          }
        }
        this.Is_Edit_Form = true;
        this.setUserName_Readonly(true);
        this.set_header_title();
        this.service.App.clearAllCheckbox.emit();
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  SaveUserManagement() {
    return __async(this, null, function* () {
      try {
        let obj = this.UserManagementForm.getRawValue();
        if (!this.service.Account.Is_DemoVersion || this.service.Account.Is_DemoVersion && obj.UserName != "admin") {
          this.service.App.ShowLoader = true;
          obj.UserID = obj.UserID == null ? 0 : obj.UserID;
          obj.ProfilePicture = this.imageUrl ? this.imageUrl : obj.ProfilePicture;
          obj.ProfilePictureName = this.ProfilePictureName;
          let index = this.allItems.findIndex((d) => d.UserName == obj.UserName && d.UserID != obj.UserID);
          if (index < 0) {
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/UserManagement_Update", obj);
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgUserSaved"));
              if (this.UserID > 0 || this.Is_Agent_Only) {
              } else {
                this.Is_Edit_Form = false;
                this.clearForm();
                this.refreshGrid();
              }
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
            }
          } else {
            if (index > -1) {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgUserAlreadyExists"));
            }
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
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.UserID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/UserManagement_Delete", { UserIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgUserDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorUsersUsedInAnotherTable"));
            }
            this.service.App.ShowLoader = false;
          }
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  clearForm() {
    this.set_header_title();
    if (this.form) {
      this.form.resetForm();
    }
    this.UserManagementForm.controls["UserID"].setValue(0);
    this.UserManagementForm.controls["RoleID"].setValue(0);
    this.UserManagementForm.controls["Is_SendMail_Password"].setValue(false);
    this.UserManagementForm.controls["Is_Active"].setValue(true);
  }
  BackToList() {
    if (this.Is_Agent_Only) {
      this.router.navigate(["/"]);
    } else {
      this.Is_Edit_Form = false;
      this.service.GoTo_ScrollTop(window);
      this.UserID = 0;
    }
    this.set_header_title();
  }
  fileChange(event) {
    let file = event.target.files[0];
    if (file) {
      let extension = file.name.replace(/^.*\./, "");
      if (this.allowedExtensions.indexOf(extension.toLowerCase()) > -1) {
        var myReader = new FileReader();
        myReader.onloadend = (e) => {
          this.imageUrl = myReader.result;
          this.ProfilePictureName = file.name;
        };
        myReader.readAsDataURL(file);
      } else {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSelectValidImage"));
      }
    }
  }
  ActiveDeActiveUser() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.UserID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          let lstUsers = this.allItems.filter((x) => x.selectedRow).map((d) => ({
            Key: d.Is_Active.toString(),
            Value: d.UserID
          }));
          if (confirm(this.service.Translator.instant("msgActiveDeactiveSelectedUsers"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/ActiveDeActive_User", lstUsers);
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgUserActivateDeActivate"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
            }
            this.service.App.ShowLoader = false;
          }
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  ResetDefaultPassword() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.UserID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (this.service.Account.DefaultPassword) {
            if (confirm(this.service.Translator.instant("msgResetPasswordToDefaultOfSelectedUsers"))) {
              this.service.App.ShowLoader = true;
              let res = yield this.service.Data.ExecuteAPI_Post("Admin/ResetDefaultPassword_User", { UserIDs: selectedRow, DefaultPassword: this.service.Account.DefaultPassword });
              if (res > 0) {
                this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgPasswordReseted"));
                this.refreshGrid();
              } else {
                this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
              }
              this.service.App.ShowLoader = false;
            }
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultPasswordNotSetted"));
          }
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  setUserName_Readonly(is_readonly) {
    if (is_readonly) {
      $("input[formcontrolname='UserName']").attr("readonly", "readonly");
    } else {
      $("input[formcontrolname='UserName']").removeAttr("readonly");
    }
  }
  set_header_title() {
    if (this.Is_Edit_Form) {
      if (this.Is_Agent && this.Is_Client) {
        if (this.isEdit) {
          this.header_title = "lblUpdateAdmin";
        } else {
          this.header_title = "lblAddAdmin";
        }
      } else if (this.Is_Agent && !this.Is_Client) {
        if (this.isEdit) {
          this.header_title = "lblUpdateAgent";
        } else {
          this.header_title = "lblAddAgent";
        }
      } else {
        if (this.isEdit) {
          this.header_title = "lblUpdateClient";
        } else {
          this.header_title = "lblAddClient";
        }
      }
    } else {
      if (this.Is_Agent && this.Is_Client) {
        this.header_title = "lblAdminList";
      } else if (this.Is_Agent && !this.Is_Client) {
        this.header_title = "lblAgentList";
      } else {
        this.header_title = "lblClientList";
      }
    }
  }
  static {
    this.ctorParameters = () => [
      { type: UntypedFormBuilder },
      { type: SystemService },
      { type: ActivatedRoute },
      { type: Router },
      { type: Location }
    ];
  }
  static {
    this.propDecorators = {
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      form: [{ type: ViewChild, args: ["f"] }]
    };
  }
};
UserComponent = __decorate([
  Component({
    template: user_default
  })
], UserComponent);

// angular:jit:template:file:src\app\admin_setting\user\roles.html
var roles_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{((!Is_Edit_Form ? 'lblRoleList': (isEdit ? 'lblUpdateRole' : 'lblAddRole')) | translate:service.CL) }}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblRoles'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div [hidden]="Is_Edit_Form" class="card-body">\r
                        <div class="table-header">\r
                            <div>\r
                                <button type="button" class="btn btn-sm btn-secondary" title="{{'tlpRefresh'| translate:service.CL}}" (click)="txtSearch='';refreshGrid();"><i class="fa fa-sync"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Add_Admin" (click)="AddRow()" class="btn btn-sm btn-warning" title="{{'tlpAddNew'| translate:service.CL}}"><i class="fa fa-plus"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Edit_Admin" (click)="EditRow()" class="btn btn-sm btn-primary" title="{{'tlpEdit'| translate:service.CL}}"><i class="fa fa-pencil-alt"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Delete_Admin" (click)="DeleteRow()" class="btn btn-sm btn-danger" title="{{'tlpDelete'| translate:service.CL}}"><i class="fa fa-trash"></i></button>\r
                            </div>\r
                            <div class="table-filter">\r
                                <input type="text" *ngIf="service?.Account?.Is_Admin_Search" class="form-control form-control-sm" name="filter" placeholder="{{'phSearch'| translate:service.CL}}" [(ngModel)]="txtSearch" (keyup)="service.App.searchFilter.emit($event.target.value);">\r
                                <div class="dropdown dropleft" *ngIf="service?.Account?.Is_ColumnChooser_Visible">\r
                                    <button class="btn btn-sm btn-secondary" data-toggle="dropdown" title="{{'tlpColumnChooser'| translate:service.CL}}" type="button">\r
                                        <i class="fa fa-cog"></i>\r
                                    </button>\r
                                    <ul class="dropdown-menu" (click)="$event.stopPropagation()">\r
                                        <li *ngFor="let filter of gridFilter;let i = index;" class="dropdown-item">\r
                                            <div class="custom-control custom-checkbox">\r
                                                <input type="checkbox" class="custom-control-input" id="chkfltr-{{i}}" [(ngModel)]="filter.Is_Visible" (change)="filter.Is_Visible != $event.target.value;">\r
                                                <label class="custom-control-label" for="chkfltr-{{i}}">\r
                                                    <span>{{filter.DisplayText | translate:service.CL}}</span>\r
                                                </label>\r
                                            </div>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div style="position:relative;">\r
                            <commongrid *ngIf="allItems.length > 0" [records]="allItems" [gridfilter]="gridFilter" [SearchText]="txtSearch"\r
                                        [pagesize]="10" (change)="pageChanged($event)" [ShowSorting]="true"\r
                                        [PagingType]="'nextprevnumberadvanced'" [ShowPagesize]="true" [ShowFilter]="true" [ShowCheckbox]="true"\r
                                        [Edit]="true" (EditRow)="service?.Account?.Is_EditRow_On_DoubleClick && EditRowDBClick($event)">\r
                            </commongrid>\r
\r
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
\r
                    <div [hidden]="!Is_Edit_Form" class="card-body">\r
                        <form [formGroup]="RolesForm" (ngSubmit)="RolesForm.valid && SaveRoles()" #f="ngForm" novalidate>\r
                            <div *ngIf="Is_Edit_Form" class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <button type="button" class="btn btn-sm btn-secondary" (click)="BackToList();"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</button>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !RolesForm.controls.Name.valid}">\r
                                        <label>{{'lblRoleName'| translate:service.CL}}</label>\r
                                        <input type="text" class="form-control" formControlName="Name" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblRoleName'| translate:service.CL}}" />\r
                                    </div>\r
                                    <div class="col-12 col-md-6 form-group">\r
                                        <label>{{'lblDescription'| translate:service.CL}}</label>\r
                                        <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-4 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Agent" type="checkbox" formControlName="Is_Agent" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Agent">{{'lblIsAgent'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-4 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Client" type="checkbox" formControlName="Is_Client" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Client">{{'lblIsClient'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-4 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12">\r
                                        <h4 class="card-title1 mt-4 mb-3">{{'lblModulePermission'| translate:service.CL}}</h4>\r
                                        <div class="table-responsive">\r
                                            <table class="table table-bordered table-striped">\r
                                                <thead>\r
                                                    <tr>\r
                                                        <th>{{'lblModuleName'| translate:service.CL}}</th>\r
                                                        <th>{{'lblFullAccess'| translate:service.CL}}</th>\r
                                                        <th>{{'lblView'| translate:service.CL}}</th>\r
                                                        <th>{{'lblAdd'| translate:service.CL}}</th>\r
                                                        <th>{{'lblEdit'| translate:service.CL}}</th>\r
                                                        <th>{{'lblDelete'| translate:service.CL}}</th>\r
                                                    </tr>\r
                                                </thead>\r
                                                <tbody *ngIf="Role_PermissionList">\r
                                                    <tr *ngFor="let item of Role_PermissionList">\r
                                                        <td>{{item.MenuName}}</td>\r
                                                        <td>\r
                                                            <div class="custom-control custom-checkbox">\r
                                                                <input id="frmIs_Full{{item.MenuName}}" type="checkbox" [(ngModel)]="item.Is_Full" [ngModelOptions]="{standalone: true}" (change)="FullAccess(item);" class="custom-control-input">\r
                                                                <label class="custom-control-label" for="frmIs_Full{{item.MenuName}}"></label>\r
                                                            </div>\r
                                                        </td>\r
                                                        <td>\r
                                                            <div class="custom-control custom-checkbox">\r
                                                                <input id="frmIs_View{{item.MenuName}}" type="checkbox" [(ngModel)]="item.Is_View" [ngModelOptions]="{standalone: true}" (change)="SubAccess(item);" class="custom-control-input">\r
                                                                <label class="custom-control-label" for="frmIs_View{{item.MenuName}}"></label>\r
                                                            </div>\r
                                                        </td>\r
                                                        <td>\r
                                                            <div class="custom-control custom-checkbox">\r
                                                                <input id="frmIs_Add{{item.MenuName}}" type="checkbox" [(ngModel)]="item.Is_Add" [ngModelOptions]="{standalone: true}" (change)="SubAccess(item);" class="custom-control-input">\r
                                                                <label class="custom-control-label" for="frmIs_Add{{item.MenuName}}"></label>\r
                                                            </div>\r
                                                        </td>\r
                                                        <td>\r
                                                            <div class="custom-control custom-checkbox">\r
                                                                <input id="frmIs_Edit{{item.MenuName}}" type="checkbox" [(ngModel)]="item.Is_Edit" [ngModelOptions]="{standalone: true}" (change)="SubAccess(item);" class="custom-control-input">\r
                                                                <label class="custom-control-label" for="frmIs_Edit{{item.MenuName}}"></label>\r
                                                            </div>\r
                                                        </td>\r
                                                        <td>\r
                                                            <div class="custom-control custom-checkbox">\r
                                                                <input id="frmIs_Delete{{item.MenuName}}" type="checkbox" [(ngModel)]="item.Is_Delete" [ngModelOptions]="{standalone: true}" (change)="SubAccess(item);" class="custom-control-input">\r
                                                                <label class="custom-control-label" for="frmIs_Delete{{item.MenuName}}"></label>\r
                                                            </div>\r
                                                        </td>\r
                                                    </tr>\r
                                                </tbody>\r
                                            </table>\r
\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div *ngIf="Is_Edit_Form" class="modal-footer form-btn mt-4 pb-0 prl-0">\r
                                <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
                                <button type="button" class="btn btn-sm btn-secondary" (click)="BackToList();"><i class="fa fa-times mr-1"></i>{{'btnCancel'| translate:service.CL}}</button>\r
                            </div>\r
                        </form>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`;

// src/app/admin_setting/user/roles.ts
var RolesComponent = class RolesComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_Edit_Form = false;
    this.Default_Role_PermissionList = [];
    this.Role_PermissionList = [];
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblRoleName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true, Width: 35 });
    this.gridFilter.push({ DisplayText: "lblIsAgent", ColumnName: "Is_Agent", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClient", ColumnName: "Is_Client", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Roles_List");
        if (res) {
          this.allItems = res;
          this.totalitems = res.length;
          if (isRefresh) {
            this.service.App.refreshGrid.emit();
          }
        }
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
      }
    });
  }
  pageChanged(obj) {
  }
  initForm() {
    this.RolesForm = this.fb.group({
      RoleID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Agent: [false],
      Is_Client: [false],
      Is_Active: [true]
    });
  }
  AddRow() {
    return __async(this, null, function* () {
      this.isEdit = false;
      this.clearForm();
      if (this.Default_Role_PermissionList.length > 0) {
        this.Role_PermissionList = this.Default_Role_PermissionList;
      } else {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Roles_ByID", { RoleID: 0 });
        if (res) {
          this.Default_Role_PermissionList = this.Role_PermissionList = res.RolePermission_Model;
        }
      }
      this.Is_Edit_Form = true;
    });
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["RoleID"];
      this.EditRoles(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditRoles(RowItem.RoleID);
    }
  }
  EditRoles(RoleID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Roles_ByID", { RoleID });
        if (res) {
          this.RolesForm.patchValue(res.Roles_Model);
          this.Role_PermissionList = res.RolePermission_Model;
        }
        this.Is_Edit_Form = true;
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveRoles() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.RolesForm.getRawValue();
        obj.RoleID = obj.RoleID == null ? 0 : obj.RoleID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.RoleID != obj.RoleID);
        if (index < 0) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Roles_Update", { model: obj, Permission_List: this.Role_PermissionList });
          if (res > 0) {
            this.Is_Edit_Form = false;
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgRoleSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgRoleAlreadyExists"));
          }
        }
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.RoleID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Roles_Delete", { RoleIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgRoleDeleted"));
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorRolesUsedInAnotherTable"));
            }
            this.refreshGrid();
            this.service.App.ShowLoader = false;
          }
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  FullAccess(item) {
    item.Is_View = item.Is_Add = item.Is_Edit = item.Is_Delete = item.Is_Full;
  }
  SubAccess(item) {
    if (item.Is_View && item.Is_Add && item.Is_Edit && item.Is_Delete) {
      item.Is_Full = true;
    } else {
      item.Is_Full = false;
    }
  }
  clearForm() {
    this.form.resetForm();
    this.RolesForm.controls["Is_Active"].setValue(true);
    this.RolesForm.controls["Is_Agent"].setValue(false);
    this.RolesForm.controls["Is_Client"].setValue(false);
  }
  refreshGrid() {
    this.bindData(true);
  }
  BackToList() {
    this.Is_Edit_Form = false;
    this.service.GoTo_ScrollTop(window);
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
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      form: [{ type: ViewChild, args: ["f"] }]
    };
  }
};
RolesComponent = __decorate([
  Component({
    template: roles_default
  })
], RolesComponent);

// src/app/admin_setting/user/user.module.ts
var routes = [
  { path: "", component: Admin_DashboardComponent },
  { path: "user_agent", component: UserComponent },
  { path: "user_client", component: UserComponent },
  { path: "user_admin", component: UserComponent },
  { path: "roles", component: RolesComponent }
];
var UserModule = class UserModule2 {
};
UserModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [Admin_DashboardComponent, UserComponent, RolesComponent]
  })
], UserModule);
export {
  UserModule
};
//# sourceMappingURL=user.module-KLNBY26K.js.map
