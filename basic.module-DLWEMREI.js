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
  ViewChild,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\admin_setting\basic\request_type.html
var request_type_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblRequestTypeList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblRequestType'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateRequestType' : 'lblAddRequestType') | translate:service.CL">\r
    <form [formGroup]="RequestTypeForm" (ngSubmit)="RequestTypeForm.valid && SaveRequestType()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !RequestTypeForm.controls.Name.valid}">\r
                    <label>{{'lblRequestTypeName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblRequestTypeName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">                    \r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/request_type.ts
var Request_TypeComponent = class Request_TypeComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblRequestTypeName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_RequestType_List");
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
    this.RequestTypeForm = this.fb.group({
      RequestTypeID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Default: [false],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["RequestTypeID"];
      this.EditRequestType(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditRequestType(RowItem.RequestTypeID);
    }
  }
  EditRequestType(RequestTypeID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_RequestType_ByID", { RequestTypeID });
        if (res) {
          this.RequestTypeForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveRequestType() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.RequestTypeForm.getRawValue();
        obj.RequestTypeID = obj.RequestTypeID == null ? 0 : obj.RequestTypeID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.RequestTypeID != obj.RequestTypeID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.RequestTypeID != obj.RequestTypeID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/RequestType_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgRequestTypeSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgRequestTypeAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultRequestTypeSupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.RequestTypeID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/RequestType_Delete", { RequestTypeIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgRequestTypeDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorRequestTypesUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.RequestTypeForm.controls["Is_Active"].setValue(true);
    this.RequestTypeForm.controls["Is_Client_Visible"].setValue(true);
    this.RequestTypeForm.controls["Is_Default"].setValue(false);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
Request_TypeComponent = __decorate([
  Component({
    template: request_type_default
  })
], Request_TypeComponent);

// angular:jit:template:file:src\app\admin_setting\basic\category.html
var category_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblCategoryList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblCategory'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateCategory' : 'lblAddCategory') | translate:service.CL">\r
    <form [formGroup]="CategoryForm" (ngSubmit)="CategoryForm.valid && SaveCategory()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !CategoryForm.controls.Name.valid}">\r
                    <label>{{'lblCategoryName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblCategoryName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">                    \r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/category.ts
var CategoryComponent = class CategoryComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblCategoryName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Category_List");
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
    this.CategoryForm = this.fb.group({
      CategoryID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Default: [false],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["CategoryID"];
      this.EditCategory(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditCategory(RowItem.CategoryID);
    }
  }
  EditCategory(CategoryID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Category_ByID", { CategoryID });
        if (res) {
          this.CategoryForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveCategory() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.CategoryForm.getRawValue();
        obj.CategoryID = obj.CategoryID == null ? 0 : obj.CategoryID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.CategoryID != obj.CategoryID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.CategoryID != obj.CategoryID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Category_Update", obj);
          this.service.App.ShowLoader = false;
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgCategorySaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          this.service.App.ShowLoader = false;
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgCategoryAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultCategorySupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.CategoryID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Category_Delete", { CategoryIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgCategoryDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorCategoriesUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.CategoryForm.controls["Is_Active"].setValue(true);
    this.CategoryForm.controls["Is_Client_Visible"].setValue(true);
    this.CategoryForm.controls["Is_Default"].setValue(false);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
CategoryComponent = __decorate([
  Component({
    template: category_default
  })
], CategoryComponent);

// angular:jit:template:file:src\app\admin_setting\basic\subcategory.html
var subcategory_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblSubCategoryList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblSubCategory'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateSubCategory' : 'lblAddSubCategory') | translate:service.CL">\r
    <form [formGroup]="SubCategoryForm" (ngSubmit)="SubCategoryForm.valid && SaveSubCategory()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !SubCategoryForm.controls.CategoryID.valid}">\r
                    <label>{{'lblCategoryName'| translate:service.CL}}</label>\r
                    <select #focus class="form-control" formControlName="CategoryID" autofocus>\r
                        <option *ngFor="let item of CategoryList" [value]="item.Value">{{item.Key}}</option>\r
                    </select>\r
                </div>\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !SubCategoryForm.controls.Name.valid}">\r
                    <label>{{'lblSubCategoryName'| translate:service.CL}}</label>\r
                    <input type="text" class="form-control" formControlName="Name" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblSubCategoryName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/subcategory.ts
var SubCategoryComponent = class SubCategoryComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.CategoryList = [];
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblSubCategoryName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblCategoryName", ColumnName: "CategoryName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_SubCategory_List");
        if (res) {
          this.allItems = res;
          this.totalitems = res.length;
          if (isRefresh) {
            this.service.App.refreshGrid.emit();
          }
        }
        this.isLoading = false;
        this.CategoryList = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Category_List_KeyValue");
        this.CategoryList.splice(0, 0, { Key: this.service.Translator.instant("lblSelect"), Value: 0 });
      } catch (e) {
        this.isLoading = false;
      }
    });
  }
  pageChanged(obj) {
  }
  initForm() {
    this.SubCategoryForm = this.fb.group({
      SubCategoryID: [0],
      CategoryID: [0, Validators.compose([Validators.required, Validators.min(1)])],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["SubCategoryID"];
      this.EditSubCategory(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditSubCategory(RowItem.SubCategoryID);
    }
  }
  EditSubCategory(SubCategoryID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_SubCategory_ByID", { SubCategoryID });
        if (res) {
          this.SubCategoryForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveSubCategory() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.SubCategoryForm.getRawValue();
        obj.SubCategoryID = obj.SubCategoryID == null ? 0 : obj.SubCategoryID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.SubCategoryID != obj.SubCategoryID && d.CategoryID == obj.CategoryID);
        if (index < 0) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/SubCategory_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSubCategorySaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSubCategoryAlreadyExists"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.SubCategoryID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/SubCategory_Delete", { SubCategoryIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSubCategoryDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorSubCategorysUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.SubCategoryForm.controls["CategoryID"].setValue(0);
    this.SubCategoryForm.controls["Is_Active"].setValue(true);
    this.SubCategoryForm.controls["Is_Client_Visible"].setValue(true);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
SubCategoryComponent = __decorate([
  Component({
    template: subcategory_default
  })
], SubCategoryComponent);

// angular:jit:template:file:src\app\admin_setting\basic\item.html
var item_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblItemList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblItem'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateItem' : 'lblAddItem') | translate:service.CL">\r
    <form [formGroup]="ItemForm" (ngSubmit)="ItemForm.valid && SaveItem()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !ItemForm.controls.SubCategoryID.valid}">\r
                    <label>{{'lblSubCategoryName'| translate:service.CL}}</label>\r
                    <select #focus class="form-control" formControlName="SubCategoryID" autofocus>\r
                        <option *ngFor="let item of SubCategoryList" [value]="item.Value">{{item.Key}}</option>\r
                    </select>\r
                </div>\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !ItemForm.controls.Name.valid}">\r
                    <label>{{'lblItemName'| translate:service.CL}}</label>\r
                    <input type="text" class="form-control" formControlName="Name" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblItemName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <!--<label>Is Active</label>-->\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/item.ts
var ItemComponent = class ItemComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.SubCategoryList = [];
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblItemName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblCategorySubCategory", ColumnName: "SubCategoryName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Item_List");
        if (res) {
          this.allItems = res;
          this.totalitems = res.length;
          if (isRefresh) {
            this.service.App.refreshGrid.emit();
          }
        }
        this.isLoading = false;
        this.SubCategoryList = yield this.service.Data.ExecuteAPI_Post("Admin/Get_SubCategory_List_KeyValue");
        this.SubCategoryList.splice(0, 0, { Key: this.service.Translator.instant("lblSelect"), Value: 0 });
      } catch (e) {
        this.isLoading = false;
      }
    });
  }
  pageChanged(obj) {
  }
  initForm() {
    this.ItemForm = this.fb.group({
      ItemID: [0],
      SubCategoryID: [0, Validators.compose([Validators.required, Validators.min(1)])],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["ItemID"];
      this.EditItem(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditItem(RowItem.ItemID);
    }
  }
  EditItem(ItemID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Item_ByID", { ItemID });
        if (res) {
          this.ItemForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveItem() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.ItemForm.getRawValue();
        obj.ItemID = obj.ItemID == null ? 0 : obj.ItemID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.ItemID != obj.ItemID && d.SubCategoryID == obj.SubCategoryID);
        if (index < 0) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Item_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgItemSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgItemAlreadyExists"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.ItemID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Item_Delete", { ItemIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgItemDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorItemsUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.ItemForm.controls["SubCategoryID"].setValue(0);
    this.ItemForm.controls["Is_Active"].setValue(true);
    this.ItemForm.controls["Is_Client_Visible"].setValue(true);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
ItemComponent = __decorate([
  Component({
    template: item_default
  })
], ItemComponent);

// angular:jit:template:file:src\app\admin_setting\basic\status.html
var status_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblStatusList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblStatus'| translate:service.CL}}</span>\r
        </div>\r
    </div>    \r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateStatus' : 'lblAddStatus') | translate:service.CL">\r
    <form [formGroup]="StatusForm" (ngSubmit)="StatusForm.valid && SaveStatus()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !StatusForm.controls.Name.valid}">\r
                    <label>{{'lblStatusName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblStatusName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 col-md-6 form-group">\r
                    <label>{{'lblStatusType'| translate:service.CL}}</label>\r
                    <select class="form-control" formControlName="Is_Closed">\r
                        <option value="0">Open</option>\r
                        <option value="1">Closed</option>\r
                        <!--<option value="2">On Hold</option>-->\r
                    </select>\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/status.ts
var StatusComponent = class StatusComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblStatusName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblStatusType", ColumnName: "StatusType", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Status_List");
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
    this.StatusForm = this.fb.group({
      StatusID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Closed: [0],
      Is_Active: [true],
      Is_Default: [false],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["StatusID"];
      this.EditStatus(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditStatus(RowItem.StatusID);
    }
  }
  EditStatus(StatusID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Status_ByID", { StatusID });
        if (res) {
          this.StatusForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveStatus() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.StatusForm.getRawValue();
        obj.StatusID = obj.StatusID == null ? 0 : obj.StatusID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.StatusID != obj.StatusID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.StatusID != obj.StatusID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Status_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgStatusSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgStatusAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultStatusSupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.StatusID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Status_Delete", { StatusIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgStatusDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorStatusUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.StatusForm.controls["Is_Active"].setValue(true);
    this.StatusForm.controls["Is_Client_Visible"].setValue(true);
    this.StatusForm.controls["Is_Default"].setValue(false);
    this.StatusForm.controls["Is_Closed"].setValue(0);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
StatusComponent = __decorate([
  Component({
    template: status_default
  })
], StatusComponent);

// angular:jit:template:file:src\app\admin_setting\basic\department.html
var department_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblDepartmentList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblDepartment'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateDepartment' : 'lblAddDepartment') | translate:service.CL">\r
    <form [formGroup]="DepartmentForm" (ngSubmit)="DepartmentForm.valid && SaveDepartment()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !DepartmentForm.controls.Name.valid}">\r
                    <label>{{'lblDepartmentName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDepartmentName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/department.ts
var DepartmentComponent = class DepartmentComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblDepartmentName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Department_List");
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
    this.DepartmentForm = this.fb.group({
      DepartmentID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Default: [false],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["DepartmentID"];
      this.EditDepartment(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditDepartment(RowItem.DepartmentID);
    }
  }
  EditDepartment(DepartmentID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Department_ByID", { DepartmentID });
        if (res) {
          this.DepartmentForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveDepartment() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.DepartmentForm.getRawValue();
        obj.DepartmentID = obj.DepartmentID == null ? 0 : obj.DepartmentID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.DepartmentID != obj.DepartmentID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.DepartmentID != obj.DepartmentID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Department_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgDepartmentSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDepartmentAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultDepartmentSupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.DepartmentID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Department_Delete", { DepartmentIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgDepartmentDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorDepartmentsUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.DepartmentForm.controls["Is_Active"].setValue(true);
    this.DepartmentForm.controls["Is_Client_Visible"].setValue(true);
    this.DepartmentForm.controls["Is_Default"].setValue(false);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
DepartmentComponent = __decorate([
  Component({
    template: department_default
  })
], DepartmentComponent);

// angular:jit:template:file:src\app\admin_setting\basic\impact.html
var impact_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblImpactList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblImpact'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <div class="table-header">\r
                            <div>\r
                                <button type="button" class="btn btn-sm btn-secondary" title="{{'tlpRefresh'| translate:service.CL}}" (click)="txtSearch='';refreshGrid();"><i class="fa fa-sync"></i></button>\r
\r
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
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateImpact' : 'lblAddImpact') | translate:service.CL">\r
    <form [formGroup]="ImpactForm" (ngSubmit)="ImpactForm.valid && SaveImpact()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !ImpactForm.controls.Name.valid}">\r
                    <label>{{'lblImpactName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblImpactName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/impact.ts
var ImpactComponent = class ImpactComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblImpactName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Impact_List");
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
    this.ImpactForm = this.fb.group({
      ImpactID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Default: [false],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["ImpactID"];
      this.EditImpact(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditImpact(RowItem.ImpactID);
    }
  }
  EditImpact(ImpactID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Impact_ByID", { ImpactID });
        if (res) {
          this.ImpactForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveImpact() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.ImpactForm.getRawValue();
        obj.ImpactID = obj.ImpactID == null ? 0 : obj.ImpactID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.ImpactID != obj.ImpactID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.ImpactID != obj.ImpactID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Impact_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgImpactSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgImpactAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultImpactSupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.ImpactID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Impact_Delete", { ImpactIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgImpactDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorImpactsUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.ImpactForm.controls["Is_Active"].setValue(true);
    this.ImpactForm.controls["Is_Client_Visible"].setValue(true);
    this.ImpactForm.controls["Is_Default"].setValue(false);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
ImpactComponent = __decorate([
  Component({
    template: impact_default
  })
], ImpactComponent);

// angular:jit:template:file:src\app\admin_setting\basic\level.html
var level_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblLevelList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblLevel'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateLevel' : 'lblAddLevel') | translate:service.CL">\r
    <form [formGroup]="LevelForm" (ngSubmit)="LevelForm.valid && SaveLevel()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !LevelForm.controls.Name.valid}">\r
                    <label>{{'lblLevelName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblLevelName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/level.ts
var LevelComponent = class LevelComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblLevelName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Level_List");
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
    this.LevelForm = this.fb.group({
      LevelID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Default: [false]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["LevelID"];
      this.EditLevel(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditLevel(RowItem.LevelID);
    }
  }
  EditLevel(LevelID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Level_ByID", { LevelID });
        if (res) {
          this.LevelForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveLevel() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.LevelForm.getRawValue();
        obj.LevelID = obj.LevelID == null ? 0 : obj.LevelID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.LevelID != obj.LevelID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.LevelID != obj.LevelID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Level_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgLevelSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgLevelAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultLevelSupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.LevelID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Level_Delete", { LevelIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgLevelDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorLevelsUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.LevelForm.controls["Is_Active"].setValue(true);
    this.LevelForm.controls["Is_Default"].setValue(false);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
LevelComponent = __decorate([
  Component({
    template: level_default
  })
], LevelComponent);

// angular:jit:template:file:src\app\admin_setting\basic\priority.html
var priority_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblPriorityList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblPriority'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdatePriority' : 'lblAddPriority') | translate:service.CL">\r
    <form [formGroup]="PriorityForm" (ngSubmit)="PriorityForm.valid && SavePriority()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !PriorityForm.controls.Name.valid}">\r
                    <label>{{'lblPriorityName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" placeholder="Enter Priority Name" />\r
                </div>\r
                <div class="col-12 col-md-6 form-group">\r
                    <label>{{'lblColor'| translate:service.CL}}</label>\r
                    <span class="clrBox float-right" [style.background]="Color"></span>\r
                    <input type="text" [(colorPicker)]="Color" [cpOutputFormat]="'hex'" [value]="Color" [cpPosition]="'bottom'" class="form-control" formControlName="Color" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblColor'| translate:service.CL}}" />                   \r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/priority.ts
var PriorityComponent = class PriorityComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblPriorityName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblColor", ColumnName: "Color", Condition: "no", Type: "color", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Priority_List");
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
    this.PriorityForm = this.fb.group({
      PriorityID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Color: [""],
      Is_Active: [true],
      Is_Default: [false],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["PriorityID"];
      this.EditPriority(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditPriority(RowItem.PriorityID);
    }
  }
  EditPriority(PriorityID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Priority_ByID", { PriorityID });
        if (res) {
          this.PriorityForm.patchValue(res);
          this.Color = res.Color ? res.Color : "";
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SavePriority() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.PriorityForm.getRawValue();
        obj.PriorityID = obj.PriorityID == null ? 0 : obj.PriorityID;
        if (this.Color) {
          obj.Color = this.Color;
        }
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.PriorityID != obj.PriorityID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.PriorityID != obj.PriorityID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Priority_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgPrioritySaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgPriorityAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultPrioritySupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.PriorityID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Priority_Delete", { PriorityIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgPriorityDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorPrioritiesUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.PriorityForm.controls["Is_Active"].setValue(true);
    this.PriorityForm.controls["Is_Client_Visible"].setValue(true);
    this.PriorityForm.controls["Is_Default"].setValue(false);
    this.PriorityForm.controls["Color"].setValue("");
    this.Color = "";
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
PriorityComponent = __decorate([
  Component({
    template: priority_default
  })
], PriorityComponent);

// angular:jit:template:file:src\app\admin_setting\basic\location.html
var location_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblLocationList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblLocation'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">                        \r
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
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateLocation' : 'lblAddLocation') | translate:service.CL">\r
    <form [formGroup]="LocationForm" (ngSubmit)="LocationForm.valid && SaveLocation()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !LocationForm.controls.Name.valid}">\r
                    <label>{{'lblLocationName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblLocationName'| translate:service.CL}}"/>\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">                  \r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/location.ts
var LocationComponent = class LocationComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblLocationName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Location_List");
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
    this.LocationForm = this.fb.group({
      LocationID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Default: [false],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["LocationID"];
      this.EditLocation(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditLocation(RowItem.LocationID);
    }
  }
  EditLocation(LocationID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Location_ByID", { LocationID });
        if (res) {
          this.LocationForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveLocation() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.LocationForm.getRawValue();
        obj.LocationID = obj.LocationID == null ? 0 : obj.LocationID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.LocationID != obj.LocationID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.LocationID != obj.LocationID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Location_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgLocationSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgLocationAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultLocationSupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.LocationID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Location_Delete", { LocationIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgLocationDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorLocationsUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.LocationForm.controls["Is_Active"].setValue(true);
    this.LocationForm.controls["Is_Client_Visible"].setValue(true);
    this.LocationForm.controls["Is_Default"].setValue(false);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
LocationComponent = __decorate([
  Component({
    template: location_default
  })
], LocationComponent);

// angular:jit:template:file:src\app\admin_setting\basic\urgency.html
var urgency_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblUrgencyList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblUrgency'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="(isEdit ? 'lblUpdateUrgency' : 'lblAddUrgency') | translate:service.CL">\r
    <form [formGroup]="UrgencyForm" (ngSubmit)="UrgencyForm.valid && SaveUrgency()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !UrgencyForm.controls.Name.valid}">\r
                    <label>{{'lblUrgencyName'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Name" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblUrgencyName'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Default" type="checkbox" formControlName="Is_Default" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Default">{{'lblIsDefault'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/urgency.ts
var UrgencyComponent = class UrgencyComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblUrgencyName", ColumnName: "Name", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblDescription", ColumnName: "Description", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsDefault", ColumnName: "Is_Default", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Urgency_List");
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
    this.UrgencyForm = this.fb.group({
      UrgencyID: [0],
      Name: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Default: [false],
      Is_Client_Visible: [true]
    });
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["UrgencyID"];
      this.EditUrgency(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditUrgency(RowItem.UrgencyID);
    }
  }
  EditUrgency(UrgencyID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Urgency_ByID", { UrgencyID });
        if (res) {
          this.UrgencyForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveUrgency() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.UrgencyForm.getRawValue();
        obj.UrgencyID = obj.UrgencyID == null ? 0 : obj.UrgencyID;
        let index = this.allItems.findIndex((d) => d.Name == obj.Name && d.UrgencyID != obj.UrgencyID);
        let default_index = this.allItems.findIndex((d) => d.Is_Default && d.UrgencyID != obj.UrgencyID);
        if (index < 0 && (default_index < 0 || !obj.Is_Default)) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Urgency_Update", obj);
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgUrgencySaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgUrgencyAlreadyExists"));
          } else if (default_index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgDefaultUrgencySupportOnlyOne"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.UrgencyID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Urgency_Delete", { UrgencyIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgUrgencyDeleted"));
              this.refreshGrid();
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorUrgencysUsedInAnotherTable"));
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
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.UrgencyForm.controls["Is_Active"].setValue(true);
    this.UrgencyForm.controls["Is_Client_Visible"].setValue(true);
    this.UrgencyForm.controls["Is_Default"].setValue(false);
  }
  refreshGrid() {
    this.bindData(true);
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
UrgencyComponent = __decorate([
  Component({
    template: urgency_default
  })
], UrgencyComponent);

// angular:jit:template:file:src\app\admin_setting\basic\notification.html
var notification_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">{{'lblNotificationList'| translate:service.CL}}</div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/admin">{{'lblAdminSetting'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblNotification'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
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
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<modal-dialog #modalAdd [backDrop]="false" modalClass="modal-md" [modalHeader]="isEdit ? 'Update Notification' : 'Add Notification' ">\r
    <form [formGroup]="NotificationForm" (ngSubmit)="NotificationForm.valid && SaveNotification()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !NotificationForm.controls.Subject.valid}">\r
                    <label>{{'lblSubject'| translate:service.CL}}</label>\r
                    <input #focus type="text" class="form-control" formControlName="Subject" autofocus placeholder="{{'lblEnter'| translate:service.CL}} {{'lblSubject'| translate:service.CL}}" />\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblDescription'| translate:service.CL}}</label>\r
                    <textarea class="form-control kendoEditor" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                </div>\r
\r
                <div class="col-12 col-sm-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !NotificationForm.controls.StartDate.valid}">\r
                    <label>{{'lblStartDate'| translate:service.CL}}</label>\r
                    <div class="input-group datepicker">\r
                        <ng2-flatpickr #stDate [config]="dtStart_Config" altInputClass="form-control"></ng2-flatpickr>\r
                        <div class="input-group-append">\r
                            <button type="button" class="btn btn-secondary btn-sm" (click)="service?.OpenFlatpickr(stDate)"><i class="fa fa-calendar"></i></button>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-12 col-sm-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !NotificationForm.controls.EndDate.valid}">\r
                    <label>{{'lblEndDate'| translate:service.CL}}</label>\r
                    <div class="input-group datepicker">\r
                        <ng2-flatpickr #edDate [config]="dtEnd_Config" altInputClass="form-control"></ng2-flatpickr>\r
                        <div class="input-group-append">\r
                            <button type="button" class="btn btn-secondary btn-sm" (click)="service?.OpenFlatpickr(edDate)"><i class="fa fa-calendar"></i></button>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-6 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                    </div>\r
                </div>\r
                <div class="col-6 col-sm-12 col-md-6 form-group">\r
                    <div class="custom-control custom-checkbox">\r
                        <input id="frmIs_Agent_Visible" type="checkbox" formControlName="Is_Agent_Visible" class="custom-control-input">\r
                        <label class="custom-control-label" for="frmIs_Agent_Visible">{{'lblIsAgentVisible'| translate:service.CL}}</label>\r
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
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-sm btn-teal"><i class="fa fa-save mr-1"></i>{{'btnSave'| translate:service.CL}}</button>\r
            <button type="submit" class="btn btn-sm btn-teal" (click)="Is_SaveAndAddNew = true;"><i class="fa fa-save mr-1"></i><span class="save-plus"><i class="fa fa-plus"></i></span> {{'btnSaveAndNew'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="modalAdd.close()"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/admin_setting/basic/notification.ts
var NotificationComponent = class NotificationComponent2 {
  constructor(fb, service, router) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.isLoading = false;
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.Is_SaveAndAddNew = false;
    this.dtStart_Config = this.service.CommonDateConfig();
    this.dtEnd_Config = this.service.CommonDateConfig();
    this.isEdit = false;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblSubject", ColumnName: "Subject", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblStartDate", ColumnName: "StartDate", Condition: "no", Type: "date", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblEndDate", ColumnName: "EndDate", Condition: "no", Type: "date", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsAgentVisible", ColumnName: "Is_Agent_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    let cdt = /* @__PURE__ */ new Date();
    cdt.setDate(cdt.getDate() + 1);
    this.minStDate = this.service.Date_Format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    this.minEndDate = this.service.Date_Format(cdt, "yyyy-MM-dd");
    this.initForm();
  }
  ngOnInit() {
    this.bindData();
  }
  ngAfterViewInit() {
    this.setKendoEditor(".kendoEditor");
  }
  SetDateOptions() {
    this.Set_StartDate(this.minStDate);
    this.stDate.flatpickr.set("onChange", (dtarr, dt, instance) => {
      this.NotificationForm.controls["StartDate"].setValue(dt);
      let cdt = new Date(dt);
      cdt.setDate(cdt.getDate() + 1);
      this.Set_EndDate(this.service.Date_Format(cdt, "yyyy-MM-dd"), dt);
    });
    this.Set_EndDate(this.minEndDate, this.minStDate);
    this.edDate.flatpickr.set("onChange", (dtarr, dt, instance) => {
      this.NotificationForm.controls["EndDate"].setValue(dt);
    });
  }
  Set_StartDate(dt) {
    this.stDate.flatpickr.set("minDate", dt);
    this.stDate.flatpickr.setDate(dt);
    this.NotificationForm.controls["StartDate"].setValue(dt);
  }
  Set_EndDate(dt, minDt) {
    this.edDate.flatpickr.set("minDate", minDt);
    this.edDate.flatpickr.setDate(dt);
    this.NotificationForm.controls["EndDate"].setValue(dt);
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Notification_List");
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
    this.NotificationForm = this.fb.group({
      NotificationID: [0],
      Subject: ["", Validators.required],
      StartDate: ["", Validators.required],
      EndDate: ["", Validators.required],
      Description: [""],
      Is_Active: [true],
      Is_Client_Visible: [true],
      Is_Agent_Visible: [true]
    });
    window.setTimeout(() => {
      this.SetDateOptions();
    }, 10);
  }
  AddRow() {
    this.isEdit = false;
    this.clearForm();
    this.modalAdd.open();
    this.Focus_Element();
    this.refreshKendoEditor(".kendoEditor");
    this.setKendoEditorValue(".kendoEditor", "");
    this.Set_StartDate(this.minStDate);
    this.Set_EndDate(this.minEndDate, this.minStDate);
  }
  EditRow() {
    this.isEdit = true;
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["NotificationID"];
      this.EditNotification(ID);
    }
  }
  EditRowDBClick(RowItem) {
    this.isEdit = true;
    if (!RowItem.isTrusted && RowItem) {
      this.EditNotification(RowItem.NotificationID);
    }
  }
  EditNotification(NotificationID) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Notification_ByID", { NotificationID });
        if (res) {
          this.NotificationForm.patchValue(res);
        }
        this.modalAdd.open();
        this.Focus_Element();
        this.refreshKendoEditor(".kendoEditor");
        this.setKendoEditorValue(".kendoEditor", res.Description);
        if (res) {
          window.setTimeout(() => {
            let stdt = this.service.Date_Format(res.StartDate, "yyyy-MM-dd");
            let enddt = this.service.Date_Format(res.EndDate, "yyyy-MM-dd");
            this.Set_StartDate(stdt);
            this.Set_EndDate(enddt, stdt);
          }, 60);
        }
      } catch (e) {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  SaveNotification() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.NotificationForm.getRawValue();
        obj.NotificationID = obj.NotificationID == null ? 0 : obj.NotificationID;
        obj.Description = $(".kendoEditor").data("kendoEditor").value();
        let index = this.allItems.findIndex((d) => d.Subject == obj.Subject && d.NotificationID != obj.NotificationID);
        if (index < 0) {
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Notification_Update", obj);
          this.service.App.ShowLoader = false;
          if (res > 0) {
            if (!this.Is_SaveAndAddNew) {
              this.modalAdd.close();
            }
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgNotificationSaved"));
            this.clearForm();
            this.refreshGrid();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          if (index > -1) {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgNotificationSubjectAlreadyExists"));
          }
        }
        this.Is_SaveAndAddNew = false;
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.NotificationID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Admin/Notification_Delete", { NotificationIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgNotificationDeleted"));
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
  clearForm() {
    this.Is_SaveAndAddNew = false;
    this.form.resetForm();
    this.NotificationForm.controls["Is_Active"].setValue(true);
    this.NotificationForm.controls["Is_Client_Visible"].setValue(true);
    this.NotificationForm.controls["Is_Agent_Visible"].setValue(true);
    this.setKendoEditorValue(".kendoEditor", "");
  }
  refreshGrid() {
    this.bindData(true);
  }
  //Kendo Editor Set, Refresh and Get Value
  setKendoEditor(id) {
    window.setTimeout(() => {
      $(id)["kendoEditor"]({
        tools: [
          "formatting",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "justifyLeft",
          "justifyCenter",
          "justifyRight",
          "justifyFull",
          "insertUnorderedList",
          "insertOrderedList",
          "createLink",
          "unlink",
          "insertImage",
          "viewHtml",
          "foreColor",
          "backColor",
          "fontName",
          "fontSize"
        ]
      });
    }, 200);
  }
  refreshKendoEditor(id) {
    $(id).data("kendoEditor").refresh();
  }
  setKendoEditorValue(id, value) {
    $(id).data("kendoEditor").value(value);
  }
  getKendoEditorValue(id) {
    $(id).data("kendoEditor").value();
  }
  Focus_Element() {
    window.setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 50);
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
      stDate: [{ type: ViewChild, args: ["stDate"] }],
      edDate: [{ type: ViewChild, args: ["edDate"] }],
      form: [{ type: ViewChild, args: ["f"] }],
      modalAdd: [{ type: ViewChild, args: ["modalAdd"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }]
    };
  }
};
NotificationComponent = __decorate([
  Component({
    template: notification_default
  })
], NotificationComponent);

// src/app/admin_setting/basic/basic.module.ts
var routes = [
  { path: "request_type", component: Request_TypeComponent },
  { path: "category", component: CategoryComponent },
  { path: "subcategory", component: SubCategoryComponent },
  { path: "item", component: ItemComponent },
  { path: "status", component: StatusComponent },
  { path: "department", component: DepartmentComponent },
  { path: "impact", component: ImpactComponent },
  { path: "level", component: LevelComponent },
  { path: "priority", component: PriorityComponent },
  { path: "location", component: LocationComponent },
  { path: "urgency", component: UrgencyComponent },
  { path: "notification", component: NotificationComponent }
];
var BasicModule = class BasicModule2 {
};
BasicModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [
      Request_TypeComponent,
      CategoryComponent,
      SubCategoryComponent,
      ItemComponent,
      StatusComponent,
      DepartmentComponent,
      ImpactComponent,
      LevelComponent,
      PriorityComponent,
      LocationComponent,
      UrgencyComponent,
      NotificationComponent
    ]
  })
], BasicModule);
export {
  BasicModule
};
//# sourceMappingURL=basic.module-DLWEMREI.js.map
