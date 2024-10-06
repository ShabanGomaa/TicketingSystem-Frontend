import {
  AuthGuard
} from "./chunk-KNU3ZFCB.js";
import {
  ActivatedRoute,
  AlertType,
  CommonModule,
  Component,
  Location,
  NgModule,
  Router,
  RouterModule,
  Row_ViewComponent,
  SharedModule,
  SystemService,
  UntypedFormBuilder,
  ViewChild,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\requester\solution\requester_solution_list.html
var requester_solution_list_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{'lblSolutionList'| translate:service.CL}}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/requester">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
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
                                <button id="Tooltip-6" type="button" class="btn btn-sm btn-secondary mr-1 tlp" tooltip="{{'tlpRefresh'| translate:service.CL}}" (click)="txtSearch='';refreshGrid(true);"><i class="fa fa-sync"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_View_Solution_Client" (click)="ViewRow('')" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpView'| translate:service.CL}}"><i class="fa fa-search"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Clone_Solution_Client" (click)="CloneSolution()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpCloneSolution'| translate:service.CL}}"><i class="fa fa-clone"></i></button>\r
                                <a target="_blank" *ngIf="service?.Account?.Is_Print_Client" (click)="Print()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpPrint'| translate:service.CL}}"><i class="fa fa-print"></i></a>\r
                                <div class="dropdown d-inline" *ngIf="service?.Account?.Is_Export_Client">\r
                                    <button type="button" class="btn btn-sm btn-info tlp" tooltip="{{'tlpExport'| translate:service.CL}}" id="export" data-toggle="dropdown" aria-expanded="false">\r
                                        <i class="fa fa-file-excel mr-1"></i> <i class="fa fa-angle-down ml-2"></i>\r
                                    </button>\r
                                    <div class="dropdown-menu cursor" aria-labelledby="export">\r
                                        <div class="dropdown-item" (click)="Export('excel')"><i class="fa fa-file-excel"></i> {{'lblExportToExcel'| translate:service.CL}}</div>\r
                                        <div class="dropdown-item" (click)="Export('pdf')"><i class="fa fa-file-pdf"></i> {{'lblExportToPDF'| translate:service.CL}}</div>\r
                                        <div class="dropdown-item" (click)="Export('csv')"><i class="fa fa-file-alt"></i> {{'lblExportToCSV'| translate:service.CL}}</div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="table-filter">\r
                                <input type="text" *ngIf="service?.Account?.Is_Solution_Search_Client" class="form-control form-control-sm" name="filter" placeholder="{{'phSearch'| translate:service.CL}}" [(ngModel)]="txtSearch" (keyup)="service.App.searchFilter.emit($event.target.value);">\r
                                <button *ngIf="service?.Account?.Is_Column_Filter_Solution_Client" class="btn btn-sm btn-secondary tlp" tooltip="{{'tlpShowHideColumnFilter'| translate:service.CL}}" type="button" (click)="ShowHideColumnFilter()"><i class="fa fa-eye-slash"></i></button>\r
                                <div class="dropdown dropleft" *ngIf="service?.Account?.Is_ColumnChooser_Visible_Client">\r
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
                                               (ViewRow)="service?.Account?.Is_View_Solution_Client && ViewRow($event)">\r
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

// src/app/requester/solution/requester_solution_list.ts
var Requester_Solution_ListComponent = class Requester_Solution_ListComponent2 {
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
    this.search = "";
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
    this.service.App.get_cached_column("solution_req_colums", this.gridFilter);
    this.search = this.route.snapshot.queryParamMap.get("search");
    if (this.search) {
      this.location.replaceState("/requester/solution");
    }
  }
  ngOnInit() {
    this.bindData();
    this.sub = this.service.Data.registerReceiver("Get_Language_Refresh").subscribe((res) => {
      if (res.UserID == this.service.Account.UserID && this.router.url.toLowerCase() == "/requester/solution") {
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
        let res = yield this.service.Data.ExecuteAPI_Post("Solution/Get_Solution_List", { Is_Agent: false });
        if (res) {
          this.allItems_main = this.allItems = res;
          this.totalitems = res.length;
          if (isRefresh) {
            this.service.App.refreshGrid.emit();
          }
          if (this.search) {
            this.txtSearch = this.search;
            window.setTimeout(() => {
              this.service.App.searchFilter.emit(this.txtSearch);
            }, 10);
            this.search = "";
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
    this.service.App.set_localstorage("solution_req_colums", lst);
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
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow);
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else if (selectedRow.length > 1) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
        } else {
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
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
        ;
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
          this.service.App.ShowLoader = false;
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgNoRecordsToExport"));
        }
        this.ClearCheckbox();
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
Requester_Solution_ListComponent = __decorate([
  Component({
    template: requester_solution_list_default
  })
], Requester_Solution_ListComponent);

// src/app/requester/solution/requester_solution.module.ts
var routes = [
  { path: "", component: Requester_Solution_ListComponent, data: { pageProp: "Show_Solution_Menu_Client" }, canActivate: [AuthGuard] }
];
var Requester_SolutionModule = class Requester_SolutionModule2 {
};
Requester_SolutionModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [Requester_Solution_ListComponent]
  })
], Requester_SolutionModule);
export {
  Requester_SolutionModule
};
//# sourceMappingURL=requester_solution.module-BZHCIL5F.js.map
