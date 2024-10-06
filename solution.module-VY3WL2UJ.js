import {
  AuthGuard
} from "./chunk-KNU3ZFCB.js";
import {
  ActivatedRoute,
  AlertType,
  CommonModule,
  Component,
  FocusInvalidDirective,
  Location,
  NgModule,
  Router,
  RouterModule,
  Row_ViewComponent,
  SharedModule,
  SystemService,
  UntypedFormBuilder,
  Validators,
  ViewChild,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\solution\solution_list.html
var solution_list_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{'lblSolutionList'| translate:service.CL}}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblSolution'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body min-height">\r
                        <div class="table-header">\r
                            <div>\r
                                <button type="button" class="btn btn-sm btn-secondary tlp" (click)="txtSearch='';refreshGrid(true);" tooltip="{{'tlpRefresh'| translate:service.CL}}"><i class="fa fa-sync"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Add_Solution" (click)="AddRow()" class="btn btn-sm btn-warning tlp" tooltip="{{'tlpAddNew'| translate:service.CL}}"><i class="fa fa-plus"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Edit_Solution" (click)="EditRow()" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpEdit'| translate:service.CL}}"><i class="fa fa-pencil-alt"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_View_Solution" (click)="ViewRow('')" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpView'| translate:service.CL}}"><i class="fa fa-search"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Delete_Solution" (click)="DeleteRow()" class="btn btn-sm btn-danger tlp" tooltip="{{'tlpDelete'| translate:service.CL}}"><i class="fa fa-trash"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Clone_Solution" (click)="CloneSolution()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpCloneSolution'| translate:service.CL}}"><i class="fa fa-clone"></i></button>\r
                                <a target="_blank" *ngIf="service?.Account?.Is_Print" (click)="Print()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpPrint'| translate:service.CL}}"><i class="fa fa-print"></i></a>\r
\r
                                <div class="dropdown d-inline" *ngIf="service?.Account?.Is_Export">\r
                                    <button type="button" class="btn btn-sm btn-info tlp" tooltip="{{'tlpExport'| translate:service.CL}}" id="export" data-toggle="dropdown" aria-expanded="false">\r
                                        <i class="fa fa-file-excel mr-1"></i> <i class="fa fa-angle-down"></i>\r
                                    </button>\r
                                    <div class="dropdown-menu cursor" aria-labelledby="export">\r
                                        <div class="dropdown-item" (click)="Export('excel')"><i class="fa fa-file-excel"></i> {{'lblExportToExcel'| translate:service.CL}}</div>\r
                                        <div class="dropdown-item" (click)="Export('pdf')"><i class="fa fa-file-pdf"></i> {{'lblExportToPDF'| translate:service.CL}}</div>\r
                                        <div class="dropdown-item" (click)="Export('csv')"><i class="fa fa-file-alt"></i> {{'lblExportToCSV'| translate:service.CL}}</div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="table-filter">\r
                                <input type="text" *ngIf="service?.Account?.Is_Solution_Search" class="form-control form-control-sm" name="filter" placeholder="{{'phSearch'| translate:service.CL}}" [(ngModel)]="txtSearch" (keyup)="service.App.searchFilter.emit($event.target.value);">\r
                                <button *ngIf="service?.Account?.Is_Column_Filter_Solution" class="btn btn-sm btn-secondary tlp" tooltip="{{'tlpShowHideColumnFilter'| translate:service.CL}}" type="button" (click)="ShowHideColumnFilter()"><i class="fa fa-eye-slash"></i></button>\r
                                <div class="dropdown dropleft" *ngIf="service?.Account?.Is_ColumnChooser_Visible">\r
                                    <button class="btn btn-sm btn-secondary tlp" data-toggle="dropdown" tooltip="{{'tlpColumnChooser'| translate:service.CL}}" type="button">\r
                                        <i class="fa fa-cog"></i>\r
                                    </button>\r
                                    <ul class="dropdown-menu max-dropdown-overflow" (click)="$event.stopPropagation()">\r
                                        <ng-container *ngFor="let filter of gridFilter;let i = index;">\r
                                            <li *ngIf="filter.ColumnName != 'HasAttachment'" class="dropdown-item">\r
                                                <div class="custom-control custom-checkbox">\r
                                                    <input type="checkbox" class="custom-control-input" id="chkfltr-{{i}}" [(ngModel)]="filter.Is_Visible" (change)="change_columnchooser(filter, $event.target.value, i)">\r
                                                    <label class="custom-control-label" for="chkfltr-{{i}}">\r
                                                        <span>{{filter.DisplayText | translate:service.CL}}</span>\r
                                                    </label>\r
                                                </div>\r
                                            </li>\r
                                        </ng-container>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div style="position:relative;">\r
                            <ticket-commongrid #commongrid [ModuleType]="'solution'" *ngIf="allItems.length > 0" [records]="allItems" [gridfilter]="gridFilter" [SearchText]="txtSearch"\r
                                               [pagesize]="10" (change)="pageChanged($event)" [ShowSorting]="true"\r
                                               [PagingType]="'nextprevnumberadvanced'" [ShowPagesize]="true" [ShowFilter]="true" [ShowCheckbox]="true"\r
                                               [Edit]="true" (EditRow)="EditRowDBClick($event)" (ViewRow)="service?.Account?.Is_View_Solution && ViewRow($event)">\r
                            </ticket-commongrid>\r
                            <div class="nodata" *ngIf="!isLoading && allItems.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
\r
\r
</div>\r
\r
\r
<row-view #RowView></row-view>`;

// src/app/solution/solution_list.ts
var Solution_ListComponent = class Solution_ListComponent2 {
  constructor(fb, service, route, router, location) {
    this.fb = fb;
    this.service = service;
    this.route = route;
    this.router = router;
    this.location = location;
    this.isLoading = false;
    this.allItems_main = [];
    this.allItems = [];
    this.txtSearch = "";
    this.gridFilter = [];
    this.AgentList = [];
    this.Is_ShowColumnFilter = true;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblAttachment", ColumnName: "HasAttachment", Type: "icon", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblSolutionID", ColumnName: "DisplaySolutionID", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblSubject", ColumnName: "Subject", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblCategory", ColumnName: "CategoryName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblSubCategory", ColumnName: "SubCategoryName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblItem", ColumnName: "ItemName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblComments", ColumnName: "Comments", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblKeywords", ColumnName: "MetaKeywords", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblCreatedUser", ColumnName: "CreatedUserName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsClientVisible", ColumnName: "Is_Client_Visible", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblIsActive", ColumnName: "Is_Active", Condition: "no", Type: "bool", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblCreatedDate", ColumnName: "CreatedDate", Condition: "no", Type: "datetime", Value: "", Is_Visible: true, Width: 11 });
    this.service.App.get_cached_column("solution_colums", this.gridFilter);
  }
  ngOnInit() {
    this.bindData();
    this.sub = this.service.Data.registerReceiver("Get_Language_Refresh").subscribe((res) => {
      if (res.UserID == this.service.Account.UserID && this.router.url.toLowerCase() == "/solution") {
        $(".subtooltip")["webuiPopover"]("destroy");
        this.bindToolTip();
      }
    });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  bindData(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Solution/Get_Solution_List", { Is_Agent: true });
        if (res) {
          this.allItems_main = this.allItems = res;
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
    this.bindToolTip();
  }
  bindToolTip() {
    let service = this.service;
    window.setTimeout(() => {
      $(".subtooltip").each(function() {
        var $this = $(this);
        let obj = $this.find("#ID").val();
        let strSplit = obj.split("|");
        let site_url = service.Settings.API_URL + "/Home/Get_Tooltip?ModuleType=solution&lang=" + service.CL + "&ID=" + strSplit[0] + "&Subject=" + strSplit[1] + "&Category=" + strSplit[2];
        $(this)["webuiPopover"]({
          container: $this,
          //'.subtooltip',
          placement: service.Is_RTL() ? "left" : "right",
          animation: "fade",
          type: "async",
          url: site_url,
          async: { type: "POST", before: function(that, xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + service.Data.BearerToken);
          } },
          cache: true,
          width: 600,
          height: "auto",
          trigger: "hover",
          delay: {
            show: 400,
            hide: 100
          },
          closeable: false,
          offsetTop: 0
        });
      });
    }, 300);
  }
  refreshGrid(isRefresh) {
    this.bindData(isRefresh);
  }
  change_columnchooser(filter, value, index) {
    filter.Is_Visible != value;
    let lst = this.gridFilter.map((d, index2) => {
      return { col: d.ColumnName, show: d.Is_Visible, ind: index2 };
    });
    this.service.App.set_localstorage("solution_colums", lst);
  }
  AddRow() {
    this.router.navigate(["/solution/add"]);
  }
  EditRow() {
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["DisplaySolutionID"];
      this.EditSolution(ID);
    }
  }
  EditRowDBClick(RowItem) {
    if (!RowItem.isTrusted && RowItem) {
      this.EditSolution(RowItem.DisplaySolutionID);
    }
  }
  EditSolution(DisplaySolutionID) {
    $(".subtooltip")["webuiPopover"]("destroy");
    this.router.navigate(["/solution/detail", DisplaySolutionID]);
  }
  DeleteRow() {
    return __async(this, null, function* () {
      let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.SolutionID).join();
      if (selectedRow.length == 0) {
        this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
      } else {
        try {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Solution/Solution_Delete", { SolutionIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSolutionDeleted"));
              this.refreshGrid(true);
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorSolutionsUsedInAnotherTable"));
            }
            this.service.App.ShowLoader = false;
          }
        } catch (e) {
          this.service.App.ShowLoader = false;
        }
      }
    });
  }
  ViewRow(RowItem) {
    if (RowItem) {
      this.Row_View.open(RowItem, "solution");
    } else {
      let selectedRow = this.allItems.filter((x) => x.selectedRow);
      if (selectedRow.length == 0) {
        this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
      } else if (selectedRow.length > 1) {
        this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
      } else {
        this.Row_View.open(selectedRow[0], "solution");
      }
    }
  }
  //CloneSolution
  CloneSolution() {
    return __async(this, null, function* () {
      let selectedRow = this.allItems.filter((x) => x.selectedRow);
      if (selectedRow.length == 0) {
        this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
      } else if (selectedRow.length > 1) {
        this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
      } else {
        try {
          let ID = selectedRow[0]["SolutionID"];
          if (confirm(this.service.Translator.instant("msgCloneSelectedSolution"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Solution/Solution_Clone", { SolutionID: ID });
            if (res) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSolutionCloned"));
              this.refreshGrid(true);
              this.service.GoTo_ScrollTop(window);
            }
            this.service.App.ShowLoader = false;
            ;
          }
        } catch (e) {
          this.service.App.ShowLoader = false;
          ;
        }
      }
    });
  }
  //Print
  Print() {
    let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.SolutionID).join();
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSelectSolutionsToPrint"));
    } else {
      let url = this.service.Settings.API_URL + "/Home/Print?ids=" + selectedRow + "&type=solution&lang=" + this.service.CL;
      window.open(url, "Print Preview");
    }
    this.ClearCheckbox();
  }
  //Export
  Export(ftype) {
    return __async(this, null, function* () {
      try {
        let items = this.commongrid.records;
        if (items.length > 0) {
          this.service.App.ShowLoader = true;
          let columns = this.gridFilter.filter((d) => d.Is_Visible && d.ColumnName != "HasAttachment").map((val) => {
            val.DisplayText = this.service.Translator.instant(val.DisplayText);
            return val;
          });
          let obj = { model: items, Columns: columns, Type: ftype };
          let res = yield this.service.Data.ExecuteAPI_Post("Admin/Export_Data", obj);
          if (res) {
            let filename = "";
            let filetype = "";
            if (ftype == "excel") {
              filename = "Solutions.xlsx";
              filetype = "application/octet-stream";
            } else if (ftype == "pdf") {
              filename = "Solutions.pdf";
              filetype = "application/pdf";
            } else if (ftype == "csv") {
              filename = "Solutions.csv";
              filetype = "application/octet-stream";
            }
            window["saveAs"](new Blob([window["base64js"].toByteArray(res.data)], { type: filetype }), filename);
          }
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgNoRecordsToExport"));
        }
        this.ClearCheckbox();
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  ShowHideColumnFilter() {
    this.Is_ShowColumnFilter = !this.Is_ShowColumnFilter;
    this.service.App.showhideColumnFilter.emit(this.Is_ShowColumnFilter);
  }
  //Clear Checkbox
  ClearCheckbox() {
    this.service.App.clearAllCheckbox.emit();
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
      Row_View: [{ type: ViewChild, args: [Row_ViewComponent] }],
      commongrid: [{ type: ViewChild, args: ["commongrid"] }]
    };
  }
};
Solution_ListComponent = __decorate([
  Component({
    template: solution_list_default
  })
], Solution_ListComponent);

// angular:jit:template:file:src\app\solution\solution_new.html
var solution_new_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{'lblNewSolution'| translate:service.CL}}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/solution">{{'lblSolution'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblNewSolution'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="SolutionForm" (ngSubmit)="SolutionForm.valid && SaveSolution()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpSave'| translate:service.CL}}"><i class="fa fa-save"></i></button>\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" (click)="Is_SaveAndclose = true;" tooltip="{{'tlpSaveAndClose'| translate:service.CL}}">\r
                                    <i class="fa fa-save"></i>\r
                                    <span class="save-close"><i class="fa fa-times"></i></span>\r
                                </button>\r
                                <button type="button" class="btn btn-sm btn-secondary tlp" (click)="BackToList();" tooltip="{{'tlpCancel'| translate:service.CL}}"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <div class="col-12 col-xl-4 col-md-6">\r
                                        <div class="form-group row" [ngClass]="{'has-error': f.submitted && !SolutionForm.controls.CategoryID.valid}">\r
                                            <label class="col-12 col-md-4 col-form-label">{{'lblCategory'| translate:service.CL}} <span class="text-danger">*</span></label>\r
                                            <div class="col-12 col-md-8">\r
                                                <select #focus class="form-control custom-select" formControlName="CategoryID" (change)="Change_Category($event.target.value)">\r
                                                    <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.CategoryList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-xl-4 col-md-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-md-4 col-form-label">{{'lblSubCategory'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-md-8">\r
                                                <select class="form-control custom-select" formControlName="SubCategoryID" (change)="Change_SubCategory($event.target.value)">\r
                                                    <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of Filter_SubCategory_List" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-xl-4 col-md-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-md-4 col-form-label">{{'lblItem'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-md-8">\r
                                                <select class="form-control custom-select" formControlName="ItemID">\r
                                                    <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of Filter_ItemList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-md-6"></div>\r
                                    <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !SolutionForm.controls.Subject.valid}">\r
                                        <label>{{'lblSubject'| translate:service.CL}} <span class="text-danger">*</span></label>\r
                                        <input type="text" class="form-control" formControlName="Subject" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblSubject'| translate:service.CL}}" />\r
                                    </div>\r
                                    <div class="col-12 form-group editor-height">\r
                                        <label>{{'lblSolution'| translate:service.CL}} <span class="text-danger">*</span></label>\r
                                        <textarea id="txtDesc" class="form-control kendoEditor" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblSolution'| translate:service.CL}}"></textarea>\r
                                    </div>\r
\r
                                    <div class="col-12 col-md-6 form-group">\r
                                        <label>{{'lblKeywords'| translate:service.CL}}</label>\r
                                        <textarea class="form-control min-ht-60" formControlName="MetaKeywords" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblKeywords'| translate:service.CL}}"></textarea>\r
                                        <small class="text-muted">{{'lblKeywordsNote1'| translate:service.CL}}</small> <br />\r
                                        <small class="text-muted">{{'lblKeywordsNote2'| translate:service.CL}}</small>\r
                                    </div>\r
                                    <div class="col-12 col-md-6 form-group">\r
                                        <label>{{'lblComments'| translate:service.CL}}</label>\r
                                        <textarea class="form-control min-ht-100" formControlName="Comments" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblComments'| translate:service.CL}}"></textarea>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
\r
\r
                                    <div class="col-12 mt-5 mb-2 d-flex justify-content-between">\r
                                        <h5>{{'lblAttachments'| translate:service.CL}}</h5>\r
                                        <button type="button" class="btn btn-info btn-sm" (click)="flAttachment.click();">\r
                                            <i *ngIf="isAttachLoading" class="fa fa-circle-notch fa-spin mr-1"></i>  {{'lblUploadFiles'| translate:service.CL}}\r
                                        </button>\r
                                        <input #flAttachment type="file" multiple (change)="fileChange($event)" class="hide" />\r
                                    </div>\r
                                    <div class="col-12 form-group">\r
                                        <div class="table-responsive">\r
                                            <table class="table table-bordered table-striped small-btn table-attachment">\r
                                                <tr *ngFor="let file of lstAttachments;let i = index;" class="bg-light-yellow ">\r
                                                    <td>\r
                                                        <i class="mr-2" [ngClass]="file.extension | fileType"></i>\r
                                                        {{file.name}}\r
                                                    </td>\r
                                                    <td width="4%">\r
                                                        <button type="button" class="btn btn-xs btn-danger" (click)="RemoveAttachment(file,'new')">{{'lblRemove'| translate:service.CL}}</button>\r
                                                    </td>\r
                                                </tr>\r
                                            </table>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="modal-footer form-btn mt-4 pb-0 prl-0">\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpSave'| translate:service.CL}}"><i class="fa fa-save"></i></button>\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" (click)="Is_SaveAndclose = true;" tooltip="{{'tlpSaveAndClose'| translate:service.CL}}">\r
                                    <i class="fa fa-save"></i>\r
                                    <span class="save-close"><i class="fa fa-times"></i></span>\r
                                </button>\r
                                <button type="button" class="btn btn-sm btn-secondary tlp" (click)="BackToList();" tooltip="{{'tlpCancel'| translate:service.CL}}"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
                            </div>\r
                        </form>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
</div>\r
\r
\r
\r
<user-technician (onSave)="UserSelectDone($event)" #UserSelect></user-technician>\r
`;

// src/app/solution/solution_new.ts
var Solution_NewComponent = class Solution_NewComponent2 {
  constructor(fb, service, route, router) {
    this.fb = fb;
    this.service = service;
    this.route = route;
    this.router = router;
    this.isLoading = false;
    this.Is_SaveAndclose = false;
    this.Filter_SubCategory_List = [];
    this.Filter_ItemList = [];
    this.minStDate = /* @__PURE__ */ new Date();
    this.isAttachLoading = false;
    this.lstAttachments = [];
    this.Not_AllowedExtensions = [];
    this.service.GoTo_ScrollTop(window);
    this.Not_AllowedExtensions = this.service.Get_NotAllowedExtensions();
    this.InitSolutionForm();
  }
  ngOnInit() {
    setTimeout(() => {
      this.bindData();
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.service.setKendoEditor(".kendoEditor");
      this.inpfocus.nativeElement.focus();
    }, 10);
  }
  InitSolutionForm() {
    this.SolutionForm = this.fb.group({
      SolutionID: [0],
      Subject: ["", Validators.required],
      Description: [""],
      CategoryID: [0, Validators.compose([Validators.required, Validators.min(1)])],
      SubCategoryID: [0],
      ItemID: [0],
      MetaKeywords: [""],
      Comments: [""],
      Is_Client_Visible: [false],
      Is_Active: [true]
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        this.model = yield this.service.Data.ExecuteAPI_Post("Solution/Get_Solution_Detail_Data");
        this.SetDefaultValue();
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  SetDefaultValue() {
    let Category = this.model.CategoryList.find((d) => d.Is_Default);
    this.SolutionForm.controls["CategoryID"].setValue(Category == null ? 0 : Category.Value);
    window.setTimeout(() => {
      if (Category) {
        this.Change_Category(Category.Value);
      }
    }, 10);
  }
  SaveSolution() {
    return __async(this, null, function* () {
      try {
        let obj = this.SolutionForm.getRawValue();
        obj.Description = $("#txtDesc").data("kendoEditor").value();
        if (obj.Description) {
          this.service.App.ShowLoader = true;
          let res = yield this.service.Data.ExecuteAPI_Post("Solution/Solution_Update", { model: obj, attachment: this.lstAttachments ? this.lstAttachments : [] });
          if (res) {
            window.setTimeout(() => {
              if (this.Is_SaveAndclose) {
                this.router.navigate(["/solution"]);
              } else {
                this.router.navigate(["/solution/detail", res.Item2]);
              }
            }, 300);
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSolutionCreated"));
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSolutionNotEmpty"));
        }
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  Change_Category(CategoryID, SubCategoryID = 0) {
    this.Filter_SubCategory_List = this.model.SubCategoryList.filter((d) => d.MainID == CategoryID);
    this.Change_SubCategory(SubCategoryID > 0 ? SubCategoryID : 0);
  }
  Change_SubCategory(SubCategoryID) {
    this.Filter_ItemList = this.model.ItemList.filter((d) => d.MainID == SubCategoryID);
    if (this.Filter_ItemList.length == 0) {
      this.SolutionForm.controls["ItemID"].setValue(0);
    }
  }
  BackToList() {
    this.router.navigate(["/solution"]);
  }
  fileChange(event) {
    let files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      this.ReadFiles(file);
    }
  }
  ReadFiles(file) {
    this.isAttachLoading = true;
    var myReader = new FileReader();
    let extension = file.name.replace(/^.*\./, "");
    if (this.Not_AllowedExtensions.indexOf(extension.toLowerCase()) < 0) {
      myReader.readAsDataURL(file);
      myReader.onloadend = (e) => {
        this.lstAttachments.push({ name: file.name, type: file.type, extension, size: file.size, value: myReader.result });
        this.isAttachLoading = false;
      };
    } else {
      this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgFileExtensionNotSupport"));
      this.isAttachLoading = false;
    }
  }
  RemoveAttachment(item, type) {
    this.lstAttachments = this.lstAttachments.filter((d) => d != item);
  }
  UserSelectDone(item) {
  }
  static {
    this.ctorParameters = () => [
      { type: UntypedFormBuilder },
      { type: SystemService },
      { type: ActivatedRoute },
      { type: Router }
    ];
  }
  static {
    this.propDecorators = {
      inpfocus: [{ type: ViewChild, args: ["focus"] }],
      flAttachment: [{ type: ViewChild, args: ["flAttachment"] }]
    };
  }
};
Solution_NewComponent = __decorate([
  Component({
    template: solution_new_default,
    providers: [FocusInvalidDirective]
  })
], Solution_NewComponent);

// angular:jit:template:file:src\app\solution\solution_detail.html
var solution_detail_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{'lblEditSolution'| translate:service.CL}}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/solution">{{'lblSolution'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblEditSolution'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="SolutionForm" (ngSubmit)="SolutionForm.valid && SaveSolution()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpSave'| translate:service.CL}}"><i class="fa fa-save"></i></button>\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" (click)="Is_SaveAndclose = true;" tooltip="{{'tlpSaveAndClose'| translate:service.CL}}">\r
                                    <i class="fa fa-save"></i>\r
                                    <span class="save-close"><i class="fa fa-times"></i></span>\r
                                </button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Delete_Solution" (click)="DeleteRow()" class="btn btn-sm btn-danger tlp" tooltip="{{'tlpDelete'| translate:service.CL}}"><i class="fa fa-trash"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Clone_Solution" (click)="CloneSolution()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpCloneSolution'| translate:service.CL}}"><i class="fa fa-clone"></i></button>\r
                                <a target="_blank" *ngIf="service?.Account?.Is_Print" (click)="Print()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpPrint'| translate:service.CL}}"><i class="fa fa-print"></i></a>\r
                                <button type="button" class="btn btn-sm btn-secondary tlp" (click)="BackToList();" tooltip="{{'tlpCancel'| translate:service.CL}}"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
                            </div>\r
                            <div class="modal-body1">\r
                                <div class="form-box row">\r
                                    <div class="col-12 col-xl-4 col-md-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-5 col-md-4 col-form-label">{{'lblSolutionID'| translate:service.CL}} </label>\r
                                            <div class="col-7 col-md-8 col-form-label"><b>{{SolutionForm.controls.DisplaySolutionID.value}}</b></div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-md-8"></div>\r
                                    <div class="col-12 col-xl-4 col-md-6">\r
                                        <div class="form-group row" [ngClass]="{'has-error': f.submitted && !SolutionForm.controls.CategoryID.valid}">\r
                                            <label class="col-12 col-md-4 col-form-label">{{'lblCategory'| translate:service.CL}} <span class="text-danger">*</span></label>\r
                                            <div class="col-12 col-md-8">\r
                                                <select #focus class="form-control custom-select" formControlName="CategoryID" (change)="Change_Category($event.target.value)">\r
                                                    <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.CategoryList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-xl-4 col-md-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-md-4 col-form-label">{{'lblSubCategory'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-md-8">\r
                                                <select class="form-control custom-select" formControlName="SubCategoryID" (change)="Change_SubCategory($event.target.value)">\r
                                                    <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of Filter_SubCategory_List" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-xl-4 col-md-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-md-4 col-form-label">{{'lblItem'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-md-8">\r
                                                <select class="form-control custom-select" formControlName="ItemID">\r
                                                    <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of Filter_ItemList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
\r
                                    <div class="col-12 col-md-6"></div>\r
                                    <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !SolutionForm.controls.Subject.valid}">\r
                                        <label>{{'lblSubject'| translate:service.CL}} <span class="text-danger">*</span></label>\r
                                        <input type="text" class="form-control" formControlName="Subject" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblSubject'| translate:service.CL}}" />\r
                                    </div>\r
                                    <div class="col-12 form-group editor-height">\r
                                        <label>{{'lblSolution'| translate:service.CL}} <span class="text-danger">*</span></label>\r
                                        <textarea id="txtDesc" class="form-control kendoEditor" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblSolution'| translate:service.CL}}"></textarea>\r
                                    </div>\r
\r
                                    <div class="col-12 col-md-6 form-group">\r
                                        <label>{{'lblKeywords'| translate:service.CL}}</label>\r
                                        <textarea class="form-control min-ht-60" formControlName="MetaKeywords" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblKeywords'| translate:service.CL}}"></textarea>\r
                                        <small class="text-muted">{{'lblKeywordsNote1'| translate:service.CL}}</small> <br />\r
                                        <small class="text-muted">{{'lblKeywordsNote2'| translate:service.CL}}</small>\r
                                    </div>\r
                                    <div class="col-12 col-md-6 form-group">\r
                                        <label>{{'lblComments'| translate:service.CL}}</label>\r
                                        <textarea class="form-control min-ht-100" formControlName="Comments" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblComments'| translate:service.CL}}"></textarea>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Client_Visible" type="checkbox" formControlName="Is_Client_Visible" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Client_Visible">{{'lblIsClientVisible'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-sm-12 col-md-6 form-group">\r
                                        <div class="custom-control custom-checkbox">\r
                                            <input id="frmIs_Active" type="checkbox" formControlName="Is_Active" class="custom-control-input">\r
                                            <label class="custom-control-label" for="frmIs_Active">{{'lblIsActive'| translate:service.CL}}</label>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 mt-5 mb-2 d-flex justify-content-between">\r
                                        <h5>{{'lblAttachments'| translate:service.CL}}</h5>\r
                                        <button type="button" class="btn btn-info btn-sm" (click)="flAttachment.click();">\r
                                            <i *ngIf="isAttachLoading" class="fa fa-circle-notch fa-spin mr-1"></i>  {{'lblUploadFiles'| translate:service.CL}}\r
                                        </button>\r
                                        <input #flAttachment type="file" multiple (change)="fileChange($event)" class="hide" />\r
                                    </div>\r
                                    <div class="col-12 form-group">\r
                                        <div class="table-responsive">\r
                                            <table class="table table-bordered table-striped small-btn table-attachment">\r
                                                <tr *ngFor="let item of AttachmentList">\r
                                                    <td>\r
                                                        <i class="mr-2" [ngClass]="item.Extension | fileType"></i>\r
                                                        <a target="_blank" href="{{service?.Settings?.Base_API_URL + '/Documents/Attachments/Solution/' + item.FileName}}"> {{item.DisplayName}}</a>\r
                                                    </td>\r
                                                    <td width="4%">\r
                                                        <button type="button" class="btn btn-xs btn-danger" (click)="RemoveAttachment(item,'old')">{{'lblRemove'| translate:service.CL}}</button>\r
                                                    </td>\r
                                                </tr>\r
                                                <tr *ngFor="let file of lstAttachments;let i = index;" class="bg-light-yellow ">\r
                                                    <td>\r
                                                        <i class="mr-2" [ngClass]="file.extension | fileType"></i>\r
                                                        {{file.name}}\r
                                                    </td>\r
                                                    <td width="4%">\r
                                                        <button type="button" class="btn btn-xs btn-danger" (click)="RemoveAttachment(file,'new')">{{'lblRemove'| translate:service.CL}}</button>\r
                                                    </td>\r
                                                </tr>\r
                                            </table>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="modal-footer form-btn mt-4 pb-0 prl-0">\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpSave'| translate:service.CL}}"><i class="fa fa-save"></i></button>\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" (click)="Is_SaveAndclose = true;" tooltip="{{'tlpSaveAndClose'| translate:service.CL}}">\r
                                    <i class="fa fa-save"></i>\r
                                    <span class="save-close"><i class="fa fa-times"></i></span>\r
                                </button>\r
                                <button type="button" class="btn btn-sm btn-secondary tlp" (click)="BackToList();" tooltip="{{'tlpCancel'| translate:service.CL}}"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
                            </div>\r
                        </form>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
</div>\r
\r
\r
\r
<user-technician (onSave)="UserSelectDone($event)" #UserSelect></user-technician>`;

// src/app/solution/solution_detail.ts
var Solution_DetailComponent = class Solution_DetailComponent2 {
  constructor(fb, service, route, router) {
    this.fb = fb;
    this.service = service;
    this.route = route;
    this.router = router;
    this.isLoading = false;
    this.Is_SaveAndclose = false;
    this.Filter_SubCategory_List = [];
    this.Filter_ItemList = [];
    this.minStDate = /* @__PURE__ */ new Date();
    this.AttachmentList = [];
    this.isAttachLoading = false;
    this.lstAttachments = [];
    this.Not_AllowedExtensions = [];
    this.service.GoTo_ScrollTop(window);
    this.DisplaySolutionID = this.route.snapshot.paramMap.get("id");
    this.InitSolutionForm();
  }
  ngOnInit() {
    setTimeout(() => {
      this.bindData();
    });
  }
  ngAfterViewInit() {
    this.inpfocus.nativeElement.focus();
  }
  InitSolutionForm() {
    this.SolutionForm = this.fb.group({
      SolutionID: [0],
      DisplaySolutionID: [""],
      Subject: ["", Validators.required],
      Description: [""],
      CategoryID: [0, Validators.compose([Validators.required, Validators.min(1)])],
      SubCategoryID: [0],
      ItemID: [0],
      MetaKeywords: [""],
      Comments: [""],
      Is_Client_Visible: [false],
      Is_Active: [true]
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        this.model = yield this.service.Data.ExecuteAPI_Post("Solution/Get_Solution_Detail_Data");
        this.SetDefaultValue();
        let res = yield this.service.Data.ExecuteAPI_Post("Solution/Get_Solution_ByID", { SolutionID: 0, DisplaySolutionID: this.DisplaySolutionID });
        if (res) {
          this.SolutionForm.patchValue(res);
          this.bindDescription();
          this.SolutionID = res.SolutionID;
          if (res.CategoryID) {
            this.Change_Category(res.CategoryID, res.SubCategoryID);
          }
        }
        this.bindSolutionAttachment();
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  bindDescription() {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Dashboard/Get_DescriptionByID", { ModuleType: "solution", ID: this.DisplaySolutionID });
        if (res) {
          this.SolutionForm.controls["Description"].setValue(res.Description);
          setTimeout(() => {
            this.service.setKendoEditor(".kendoEditor");
          }, 10);
          window.setTimeout(() => {
            this.service.App.ShowLoader = false;
          }, 200);
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  SetDefaultValue() {
    let Category = this.model.CategoryList.find((d) => d.Is_Default);
    this.SolutionForm.controls["CategoryID"].setValue(Category == null ? 0 : Category.Value);
    window.setTimeout(() => {
      if (Category) {
        this.Change_Category(Category.Value);
      }
    }, 10);
  }
  SaveSolution() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.SolutionForm.getRawValue();
        obj.Description = $("#txtDesc").data("kendoEditor").value();
        if (obj.Description) {
          let res = yield this.service.Data.ExecuteAPI_Post("Solution/Solution_Update", { model: obj, attachment: this.lstAttachments ? this.lstAttachments : [] });
          if (res) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSolutionUpdated"));
            if (this.Is_SaveAndclose) {
              window.setTimeout(() => {
                this.router.navigate(["/solution"]);
              }, 300);
            } else {
              if (this.lstAttachments.length > 0) {
                this.lstAttachments = [];
                this.bindSolutionAttachment();
              }
              this.service.GoTo_ScrollTop(window);
            }
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSolutionNotEmpty"));
        }
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  Change_Category(CategoryID, SubCategoryID = 0) {
    this.Filter_SubCategory_List = this.model.SubCategoryList.filter((d) => d.MainID == CategoryID);
    this.Change_SubCategory(SubCategoryID > 0 ? SubCategoryID : 0);
  }
  Change_SubCategory(SubCategoryID) {
    this.Filter_ItemList = this.model.ItemList.filter((d) => d.MainID == SubCategoryID);
    if (this.Filter_ItemList.length == 0) {
      this.SolutionForm.controls["ItemID"].setValue(0);
    }
  }
  BackToList() {
    this.router.navigate(["/solution"]);
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
          this.service.App.ShowLoader = true;
          let res = yield this.service.Data.ExecuteAPI_Post("Solution/Solution_Delete", { SolutionIDs: this.SolutionID });
          if (res > 0) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSolutionDeleted"));
            window.setTimeout(() => {
              this.BackToList();
            }, 500);
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorSolutionsUsedInAnotherTable"));
          }
          this.service.App.ShowLoader = false;
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  //CloneSolution
  CloneSolution() {
    return __async(this, null, function* () {
      try {
        if (confirm(this.service.Translator.instant("msgClonethisSolution"))) {
          this.service.App.ShowLoader = true;
          let res = yield this.service.Data.ExecuteAPI_Post("Solution/Solution_Clone", { SolutionID: this.SolutionID });
          if (res) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgSolutionCloned"));
            this.SolutionForm.controls["SolutionID"].setValue(res.Item1);
            this.SolutionForm.controls["DisplaySolutionID"].setValue(res.Item2);
            this.service.GoTo_ScrollTop(window);
            this.router.navigate(["/solution"]);
            window.setTimeout(() => {
              this.router.navigate(["/solution/detail", res.Item2]);
            }, 20);
          }
          this.service.App.ShowLoader = false;
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  //Print
  Print() {
    let url = this.service.Settings.API_URL + "/Home/Print?ids=" + this.SolutionID + "&type=solution&lang=" + this.service.CL;
    window.open(url, "Print Preview");
  }
  bindSolutionAttachment() {
    return __async(this, null, function* () {
      this.Not_AllowedExtensions = this.service.Get_NotAllowedExtensions();
      this.AttachmentList = yield this.service.Data.ExecuteAPI_Post("Solution/Get_SolutionAttachment_ByID", { SolutionID: this.SolutionID });
    });
  }
  fileChange(event) {
    let files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      this.ReadFiles(file);
    }
  }
  ReadFiles(file) {
    this.isAttachLoading = true;
    var myReader = new FileReader();
    let extension = file.name.replace(/^.*\./, "");
    if (this.Not_AllowedExtensions.indexOf(extension.toLowerCase()) < 0) {
      myReader.readAsDataURL(file);
      myReader.onloadend = (e) => {
        this.lstAttachments.push({ name: file.name, type: file.type, extension, size: file.size, value: myReader.result });
        this.isAttachLoading = false;
      };
    } else {
      this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgFileExtensionNotSupport"));
      this.isAttachLoading = false;
    }
  }
  RemoveAttachment(item, type) {
    return __async(this, null, function* () {
      if (type == "new") {
        this.lstAttachments = this.lstAttachments.filter((d) => d != item);
      } else if (type == "old") {
        try {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedAttachments"))) {
            this.isAttachLoading = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Solution/SolutionAttachment_Delete", { SolutionAttachmentID: item.SolutionAttachmentID, FileName: item.FileName });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgAttachmentDeleted"));
              this.AttachmentList = this.AttachmentList.filter((d) => d != item);
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
            }
            this.isAttachLoading = false;
          }
        } catch (e) {
          this.isAttachLoading = false;
        }
      }
    });
  }
  UserSelectDone(item) {
  }
  static {
    this.ctorParameters = () => [
      { type: UntypedFormBuilder },
      { type: SystemService },
      { type: ActivatedRoute },
      { type: Router }
    ];
  }
  static {
    this.propDecorators = {
      inpfocus: [{ type: ViewChild, args: ["focus"] }],
      flAttachment: [{ type: ViewChild, args: ["flAttachment"] }]
    };
  }
};
Solution_DetailComponent = __decorate([
  Component({
    template: solution_detail_default,
    providers: [FocusInvalidDirective]
  })
], Solution_DetailComponent);

// src/app/solution/solution.module.ts
var routes = [
  { path: "", component: Solution_ListComponent, data: { pageProp: "Show_Solution_Menu" }, canActivate: [AuthGuard] },
  { path: "add", component: Solution_NewComponent, data: { pageProp: "Is_Add_Solution" }, canActivate: [AuthGuard] },
  { path: "detail/:id", component: Solution_DetailComponent, data: { pageProp: "Is_Edit_Solution" }, canActivate: [AuthGuard] }
];
var SolutionModule = class SolutionModule2 {
};
SolutionModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [Solution_ListComponent, Solution_NewComponent, Solution_DetailComponent]
  })
], SolutionModule);
export {
  SolutionModule
};
//# sourceMappingURL=solution.module-VY3WL2UJ.js.map
