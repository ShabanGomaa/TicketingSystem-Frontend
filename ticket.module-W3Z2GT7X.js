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
  Solution_Find_ListComponent,
  SystemService,
  UntypedFormBuilder,
  User_Technician_ListComponent,
  Validators,
  ViewChild,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\ticket\ticket_list.html
var ticket_list_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{'lblTicketList'| translate:service.CL}}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblTicket'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body min-height">\r
                        <div class="table-header">\r
                            <div>\r
                                <button type="button" class="btn btn-sm btn-secondary tlp" tooltip="{{'tlpRefresh'| translate:service.CL}}" (click)="txtSearch='';refreshGrid(true);"><i class="fa fa-sync"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Add_Ticket" (click)="AddRow()" class="btn btn-sm btn-warning tlp" tooltip="{{'tlpAddNew'| translate:service.CL}}"><i class="fa fa-plus"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Edit_Ticket" (click)="EditRow()" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpEdit'| translate:service.CL}}"><i class="fa fa-pencil-alt"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_View_Ticket" (click)="ViewRow('')" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpView'| translate:service.CL}}"><i class="fa fa-search"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Delete_Ticket" (click)="DeleteRow()" class="btn btn-sm btn-danger tlp" tooltip="{{'tlpDelete'| translate:service.CL}}"><i class="fa fa-trash"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Clone_Ticket" (click)="CloneTicket()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpCloneTicket'| translate:service.CL}}"><i class="fa fa-clone"></i></button>\r
                                <a target="_blank" *ngIf="service?.Account?.Is_Print" (click)="Print()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpPrint'| translate:service.CL}}"><i class="fa fa-print"></i></a>\r
                                <div class="dropdown" *ngIf="service?.Account?.Is_Export">\r
                                    <button type="button" class="btn btn-sm btn-info tlp" tooltip="{{'tlpExport'| translate:service.CL}}" id="export" data-toggle="dropdown" aria-expanded="false">\r
                                        <i class="fa fa-file-excel mr-1"></i> <i class="fa fa-angle-down"></i>\r
                                    </button>\r
                                    <div class="dropdown-menu cursor" aria-labelledby="export">\r
                                        <div class="dropdown-item" (click)="Export('excel')"><i class="fa fa-file-excel"></i> {{'lblExportToExcel'| translate:service.CL}}</div>\r
                                        <div class="dropdown-item" (click)="Export('pdf')"><i class="fa fa-file-pdf"></i> {{'lblExportToPDF'| translate:service.CL}}</div>\r
                                        <div class="dropdown-item" (click)="Export('csv')"><i class="fa fa-file-alt"></i> {{'lblExportToCSV'| translate:service.CL}}</div>\r
                                    </div>\r
                                </div>\r
                                <button type="button" *ngIf="service?.Account?.Is_Close_Ticket" (click)="OpenCloseTicket()" class="btn btn-sm btn-danger tlp" tooltip="{{'tlpCloseTickets'| translate:service.CL}}"><i class="fa fa-times"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Pickup" (click)="PickUp()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpPickUp'| translate:service.CL}}"><i class="fa fa-shipping-fast mr-1"></i> {{'btnPickUp'| translate:service.CL}}</button>\r
\r
                                <div class="dropdown">\r
                                    <button type="button" class="btn btn-sm btn-secondary tlp" tooltip="{{'tlpGridFilter'| translate:service.CL}}" data-toggle="dropdown" aria-expanded="false">\r
                                        <i class="fa fa-filter"></i> {{selectedFilterText | translate:service.CL}} <i class="fa fa-angle-down"></i>\r
                                    </button>\r
                                    <div class="dropdown-menu cursor">\r
                                        <div class="dropdown-item" *ngFor="let item of FilterList" [class.active]="selectedFilterType == item.Value" (click)="selectedFilterText=item.Key;selectedFilterType=item.Value;FilterChange(item.Value)">\r
                                            {{item.Key | translate:service.CL}}\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div class="dropdown" *ngIf="service?.Account?.Is_AssignTo_Dropdown">\r
                                    <button type="button" class="btn btn-sm btn-secondary tlp" tooltip="{{'lblAssignAgent'| translate:service.CL}}" data-toggle="dropdown" aria-expanded="false">\r
                                        <i class="fa fa-share"></i> {{'lblAssignAgent'| translate:service.CL}} <i class="fa fa-angle-down"></i>\r
                                    </button>\r
                                    <div class="dropdown-menu cursor">                                       \r
                                        <div class="dropdown-item" *ngFor="let item of AgentList" [class.active]="selectedAgent == item.UserID" (click)="selectedAgent=item.UserID;AssignToUser(item)">{{item.DisplayName}}</div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="table-filter">\r
                                <input type="text" *ngIf="service?.Account?.Is_Ticket_Search" class="form-control form-control-sm" name="filter" placeholder="{{'phSearch'| translate:service.CL}}" [(ngModel)]="txtSearch" (keyup)="service.App.searchFilter.emit($event.target.value);">\r
                                <button *ngIf="service?.Account?.Is_Column_Filter_Ticket" class="btn btn-sm btn-secondary tlp" tooltip="{{'tlpShowHideColumnFilter'| translate:service.CL}}" type="button" (click)="ShowHideColumnFilter()"><i class="fa fa-eye-slash"></i></button>\r
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
                                                        <span *ngIf="filter.ColumnName == 'ProfilePicture'">{{'lblProfilePicture' | translate:service.CL}}</span>\r
                                                        <span *ngIf="filter.ColumnName != 'ProfilePicture'">{{filter.DisplayText | translate:service.CL}}</span>\r
                                                    </label>\r
                                                </div>\r
                                            </li>\r
                                        </ng-container>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div style="position:relative;">\r
                            <ticket-commongrid #commongrid [ModuleType]="'ticket'" *ngIf="allItems.length > 0" [records]="allItems" [gridfilter]="gridFilter" [SearchText]="txtSearch"\r
                                               [pagesize]="10" (change)="pageChanged($event)" [ShowSorting]="true"\r
                                               [PagingType]="'nextprevnumberadvanced'" [ShowPagesize]="true" [ShowFilter]="Is_ShowColumnFilter" [ShowCheckbox]="true"\r
                                               [Edit]="true" (EditRow)="EditRowDBClick($event)" (ViewRow)="service?.Account?.Is_View_Ticket && ViewRow($event)">\r
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
<modal-dialog #modalCloseTicket [backDrop]="false" modalClass="modal-md" modalHeader="{{'lblCloseTicket' | translate:service.CL}}">\r
    <form [formGroup]="CloseTicketForm" (ngSubmit)="CloseTicketForm.valid && CloseTicket()" #f="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !CloseTicketForm.controls.StatusID.valid}">\r
                    <label>{{'lblStatus'| translate:service.CL}}</label>\r
                    <select class="form-control" formControlName="StatusID" autofocus>\r
                        <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                        <option *ngFor="let item of CLosedStatusList" [value]="item.StatusID">{{item.Name}}</option>\r
                    </select>\r
                </div>\r
                <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f.submitted && !CloseTicketForm.controls.TicketCloseModeID.valid}">\r
                    <label>{{'lblTicketCloseMode'| translate:service.CL}}</label>\r
                    <select class="form-control" formControlName="TicketCloseModeID">\r
                        <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                        <option *ngFor="let item of TicketCloseModeList" [value]="item.Value">{{item.Key}}</option>\r
                    </select>\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblReason'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="StatusCloseReason" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblReasonForClosedTicket'| translate:service.CL}}"></textarea>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-teal">{{'btnCloseTicket'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-secondary" (click)="modalCloseTicket.close()">{{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>\r
\r
<row-view #RowView></row-view>\r
\r
\r
`;

// src/app/ticket/ticket_list.ts
var Ticket_ListComponent = class Ticket_ListComponent2 {
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
    this.FilterList = [];
    this.selectedFilterType = "";
    this.selectedFilterText = "lblAllTickets";
    this.flType = "";
    this.AgentList = [];
    this.selectedAgent = 0;
    this.StatusList = [];
    this.CLosedStatusList = [];
    this.TicketCloseModeList = [];
    this.Is_ShowColumnFilter = true;
    this.service.GoTo_ScrollTop(window);
    this.gridFilter.push({ DisplayText: "lblAttachment", ColumnName: "HasAttachment", Type: "icon", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblTicketID", ColumnName: "DisplayTicketID", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblSubject", ColumnName: "Subject", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblRequestType", ColumnName: "RequestTypeName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblStatus", ColumnName: "StatusName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblRequester", ColumnName: "RequestedName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblAssignedTo", ColumnName: "AssignedName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblCreatedBy", ColumnName: "CreatedUserName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblPriority", ColumnName: "PriorityName", Condition: "no", Type: "string", Value: "", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblCategory", ColumnName: "CategoryName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblSubCategory", ColumnName: "SubCategoryName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblItem", ColumnName: "ItemName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblUrgency", ColumnName: "UrgencyName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblImpact", ColumnName: "ImpactName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblDepartment", ColumnName: "DepartmentName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblLevel", ColumnName: "LevelName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblLocation", ColumnName: "LocationName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblTicketMode", ColumnName: "TicketModeName", Condition: "no", Type: "string", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblCreatedDate", ColumnName: "CreatedDate", Condition: "no", Type: "datetime", Value: "", Is_Visible: true, Width: 11 });
    this.gridFilter.push({ DisplayText: "lblDueDate", ColumnName: "DueDate", Condition: "no", Type: "datetime", Value: "", Is_Visible: false });
    this.gridFilter.push({ DisplayText: "lblClosedDate", ColumnName: "ClosedDate", Condition: "no", Type: "datetime", Value: "", Is_Visible: false });
    this.service.App.get_cached_column("ticket_colums", this.gridFilter);
    this.flType = this.route.snapshot.queryParamMap.get("type");
    if (this.flType) {
      this.location.replaceState("/ticket");
    }
    this.bindFilterList();
  }
  ngOnInit() {
    this.bindData();
    this.InitCloseTicketForm();
    this.sub = this.service.Data.registerReceiver("Get_Language_Refresh").subscribe((res) => {
      if (res.UserID == this.service.Account.UserID && this.router.url.toLowerCase() == "/ticket") {
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
        let account = this.service.Account;
        let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Get_Ticket_List", { Is_Agent: account.Is_Agent, Is_Client: account.Is_Client });
        if (res) {
          this.allItems_main = this.allItems = res;
          this.totalitems = res.length;
          if (this.flType) {
            this.selectedFilterType = this.flType;
            this.selectedFilterText = this.FilterList.find((d) => d.Value == this.flType).Key;
            this.FilterChange(this.selectedFilterType);
            this.flType = "";
          } else {
            if (isRefresh) {
              this.FilterChange(this.selectedFilterType);
            }
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
  bindFilterList() {
    return __async(this, null, function* () {
      this.FilterList.push({ Key: "lblAllTickets", Value: "" });
      this.FilterList.push({ Key: "lblOpenTickets", Value: "open" });
      this.FilterList.push({ Key: "lblCompletedTickets", Value: "closed" });
      this.FilterList.push({ Key: "lblPendingTickets", Value: "pending" });
      this.FilterList.push({ Key: "lblUnassignedTickets", Value: "unassign" });
      this.FilterList.push({ Key: "lblOverdueTickets", Value: "overdue" });
      this.FilterList.push({ Key: "lblTicketsDueToday", Value: "duetoday" });
      this.FilterList.push({ Key: "lblAssginedToMeTickets", Value: "assignme" });
      this.FilterList.push({ Key: "lblMyOpenTickets", Value: "myopen" });
      this.FilterList.push({ Key: "lblMyCompletedTickets", Value: "myclosed" });
      this.FilterList.push({ Key: "lblMyOpenAndUnassigned", Value: "myunassign" });
      this.FilterList.push({ Key: "lblMyOverdueTickets", Value: "myoverdue" });
      this.FilterList.push({ Key: "lblMyTicketsDueToday", Value: "myduetoday" });
      this.FilterList.push({ Key: "lblMyUpdatedTickets", Value: "myupdated" });
      this.AgentList = yield this.service.Data.ExecuteAPI_Post("Admin/Get_UserSelection_List", { Is_Agent: true });
    });
  }
  bindToolTip() {
    let service = this.service;
    window.setTimeout(() => {
      $(".subtooltip").each(function() {
        var $this = $(this);
        let obj = $this.find("#ID").val();
        let strSplit = obj.split("|");
        let site_url = service.Settings.API_URL + "/Home/Get_Tooltip?ModuleType=ticket&lang=" + service.CL + "&ID=" + strSplit[0] + "&Subject=" + strSplit[1] + "&Category=" + strSplit[2] + "&Status=" + strSplit[3];
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
    this.service.App.set_localstorage("ticket_colums", lst);
  }
  AddRow() {
    this.router.navigate(["/ticket/add"]);
  }
  EditRow() {
    let selectedRow = this.allItems.filter((x) => x.selectedRow);
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
    } else if (selectedRow.length > 1) {
      this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
    } else {
      let ID = selectedRow[0]["DisplayTicketID"];
      this.EditTicket(ID);
    }
  }
  EditRowDBClick(RowItem) {
    if (!RowItem.isTrusted && RowItem) {
      this.EditTicket(RowItem.DisplayTicketID);
    }
  }
  EditTicket(DisplayTicketID) {
    $(".subtooltip")["webuiPopover"]("destroy");
    this.router.navigate(["/ticket/detail", DisplayTicketID]);
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.TicketID).join();
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else {
          if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_Delete", { TicketIDs: selectedRow });
            if (res > 0) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketDeleted"));
              this.refreshGrid(true);
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorTicketsUsedInAnotherTable"));
            }
            this.service.App.ShowLoader = false;
          }
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  ViewRow(RowItem) {
    if (RowItem) {
      this.Row_View.open(RowItem, "ticket");
    } else {
      let selectedRow = this.allItems.filter((x) => x.selectedRow);
      if (selectedRow.length == 0) {
        this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
      } else if (selectedRow.length > 1) {
        this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
      } else {
        this.Row_View.open(selectedRow[0], "ticket");
      }
    }
  }
  //CloneTicket
  CloneTicket() {
    return __async(this, null, function* () {
      try {
        let selectedRow = this.allItems.filter((x) => x.selectedRow);
        if (selectedRow.length == 0) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectRow"));
        } else if (selectedRow.length > 1) {
          this.service.showMessage(AlertType.Warning, this.service.Translator.instant("msgSelectOnlyOneRow"));
        } else {
          let ID = selectedRow[0]["TicketID"];
          if (confirm(this.service.Translator.instant("msgCloneSelectedTicket"))) {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_Clone", { TicketID: ID });
            if (res) {
              this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketCloned"));
              this.refreshGrid(true);
              this.service.GoTo_ScrollTop(window);
            }
            this.service.App.ShowLoader = false;
            ;
          }
        }
        this.ClearCheckbox();
      } catch (e) {
        this.service.App.ShowLoader = false;
        ;
      }
    });
  }
  //Filter 
  FilterChange(value) {
    let filter_Items = [];
    let cDate = this.service.Date_Format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    if (value == "") {
      filter_Items = this.allItems_main;
    } else if (value == "open") {
      filter_Items = this.allItems_main.filter((d) => d.StatusType == "Open" || d.StatusType == "OnHold");
    } else if (value == "closed") {
      filter_Items = this.allItems_main.filter((d) => d.StatusType == "Closed");
    } else if (value == "pending") {
      filter_Items = this.allItems_main.filter((d) => (d.StatusType == "Open" || d.StatusType == "OnHold") && d.AssignedUser);
    } else if (value == "unassign") {
      filter_Items = this.allItems_main.filter((d) => !d.AssignedUser);
    } else if (value == "overdue") {
      filter_Items = this.allItems_main.filter((d) => (d.StatusType == "Open" || d.StatusType == "OnHold") && d.DueDate && this.service.Date_Format(d.DueDate, "yyyy-MM-dd") < cDate);
    } else if (value == "duetoday") {
      filter_Items = this.allItems_main.filter((d) => (d.StatusType == "Open" || d.StatusType == "OnHold") && d.DueDate && this.service.Date_Format(d.DueDate, "yyyy-MM-dd") == cDate);
    } else if (value == "assignme") {
      filter_Items = this.allItems_main.filter((d) => d.AssignedUser == this.service.Account.UserID);
    } else if (value == "myopen") {
      filter_Items = this.allItems_main.filter((d) => (d.StatusType == "Open" || d.StatusType == "OnHold") && d.AssignedUser == this.service.Account.UserID);
    } else if (value == "myclosed") {
      filter_Items = this.allItems_main.filter((d) => d.StatusType == "Closed" && d.AssignedUser == this.service.Account.UserID);
    } else if (value == "myunassign") {
      filter_Items = this.allItems_main.filter((d) => (d.StatusType == "Open" || d.StatusType == "OnHold") && (d.AssignedUser == this.service.Account.UserID || !d.AssignedUser));
    } else if (value == "myoverdue") {
      filter_Items = this.allItems_main.filter((d) => (d.StatusType == "Open" || d.StatusType == "OnHold") && d.AssignedUser == this.service.Account.UserID && d.DueDate && this.service.Date_Format(d.DueDate, "yyyy-MM-dd") < cDate);
    } else if (value == "myduetoday") {
      filter_Items = this.allItems_main.filter((d) => (d.StatusType == "Open" || d.StatusType == "OnHold") && d.AssignedUser == this.service.Account.UserID && d.DueDate && this.service.Date_Format(d.DueDate, "yyyy-MM-dd") == cDate);
    } else if (value == "myupdated") {
      filter_Items = this.allItems_main.filter((d) => d.UpdatedUser == this.service.Account.UserID);
    }
    this.allItems = filter_Items;
    this.service.App.refreshGrid.emit();
  }
  //Assigned And Pickup Tickets        
  AssignToUser(item) {
    let objUser = { UserID: item.UserID, DisplayName: item.DisplayName, Email: item.Email };
    if (item.UserID > 0) {
      this.Ticket_AssignTo_Update(objUser, false);
      this.selectedAgent = 0;
    }
  }
  PickUp() {
    let objUser = { UserID: this.service.Account.UserID, DisplayName: this.service.Account.DisplayName, Email: this.service.Account.Email };
    this.Ticket_AssignTo_Update(objUser, true);
  }
  Ticket_AssignTo_Update(objUser, Is_PickUp) {
    return __async(this, null, function* () {
      try {
        if (objUser.UserID > 0) {
          let lstSelectedRow = this.allItems.filter((x) => x.selectedRow && x.AssignedUser != objUser.UserID);
          if (lstSelectedRow.length == 0) {
            if (Is_PickUp) {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSelectTicketsToPickedUp"));
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSelectTicketsToAssignAgent"));
            }
          } else {
            this.service.App.ShowLoader = true;
            let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_AssignTo_Update", { lstTicket: lstSelectedRow, objUser });
            if (res > 0) {
              if (Is_PickUp) {
                this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketPickedUp"));
              } else {
                this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketAssignedToAgent"));
              }
              this.refreshGrid(true);
            } else {
              this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
            }
            this.service.App.ShowLoader = false;
          }
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
        }
        this.ClearCheckbox();
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  InitCloseTicketForm() {
    return __async(this, null, function* () {
      this.CloseTicketForm = this.fb.group({
        StatusID: [0, Validators.compose([Validators.required, Validators.min(1)])],
        TicketCloseModeID: [0, Validators.compose([Validators.required, Validators.min(1)])],
        StatusCloseReason: [""]
      });
      this.StatusList = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Status_List");
      this.CLosedStatusList = this.StatusList.filter((d) => d.Is_Closed == 1);
      this.TicketCloseModeList = yield this.service.Data.ExecuteAPI_Post("Admin/Get_TicketCloseMode_List");
    });
  }
  OpenCloseTicket() {
    let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.TicketID).join();
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSelectTicketsToClose"));
    } else {
      this.modalCloseTicket.open();
    }
  }
  CloseTicket() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.CloseTicketForm.getRawValue();
        let lstSelectedRow = this.allItems.filter((x) => x.selectedRow);
        let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_Status_Update", { lstTicket: lstSelectedRow, StatusID: obj.StatusID, TicketCloseModeID: obj.TicketCloseModeID, StatusCloseReason: obj.StatusCloseReason });
        if (res > 0) {
          this.modalCloseTicket.close();
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketClosed"));
          this.CloseTicketForm.reset();
          this.clearCloseTicketForm();
          this.refreshGrid(true);
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
        }
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  clearCloseTicketForm() {
    this.CloseTicketForm.controls["StatusID"].setValue(0);
    this.CloseTicketForm.controls["TicketCloseModeID"].setValue(0);
    this.CloseTicketForm.controls["StatusCloseReason"].setValue("");
  }
  //Print
  Print() {
    let selectedRow = this.allItems.filter((x) => x.selectedRow).map((d) => d.TicketID).join();
    if (selectedRow.length == 0) {
      this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgSelectTicketsToPrint"));
    } else {
      let url = this.service.Settings.API_URL + "/Home/Print?ids=" + selectedRow + "&type=ticket&lang=" + this.service.CL;
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
              filename = "Tickets.xlsx";
              filetype = "application/octet-stream";
            } else if (ftype == "pdf") {
              filename = "Tickets.pdf";
              filetype = "application/pdf";
            } else if (ftype == "csv") {
              filename = "Tickets.csv";
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
      commongrid: [{ type: ViewChild, args: ["commongrid"] }],
      modalCloseTicket: [{ type: ViewChild, args: ["modalCloseTicket"] }]
    };
  }
};
Ticket_ListComponent = __decorate([
  Component({
    template: ticket_list_default
  })
], Ticket_ListComponent);

// angular:jit:template:file:src\app\ticket\ticket_new.html
var ticket_new_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{'lblNewTicket'| translate:service.CL}}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/ticket">{{'lblTicket'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblNewTicket'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="TicketForm" (ngSubmit)="TicketForm.valid && SaveTicket()" #f="ngForm" novalidate>\r
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
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row" [ngClass]="{'has-error': f.submitted && !TicketForm.controls.RequestedName.valid}">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblRequester'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <div class="input-group">\r
                                                    <input type="hidden" class="form-control" formControlName="RequestedUser">\r
                                                    <ng-template #reqTemplate let-model="item">{{model?.DisplayName}} {{'('+ model?.Email +')'}}</ng-template>\r
                                                    <input #focus formControlName="RequestedName"\r
                                                           [typeahead]="ClientList"\r
                                                           typeaheadOptionField="DisplayName"\r
                                                           (typeaheadNoResults)="NoRequesterFound($event)"\r
                                                           [typeaheadScrollable]="true"\r
                                                           [typeaheadOptionsInScrollableView]="8"\r
                                                           [typeaheadLatinize]="true"\r
                                                           (typeaheadOnSelect)="onSelectRequester($event)"\r
                                                           [typeaheadMinLength]="0"\r
                                                           [typeaheadItemTemplate]="reqTemplate"\r
                                                           class="form-control">\r
                                                    <div class="input-append ml-1"><a class="btn btn-secondary btn-sm tlp" (click)="OpenUserList('user')" tooltip="{{'lblSelectUser'| translate:service.CL}}"><i class="fa fa-user"></i></a></div>\r
                                                    <div [class.hide]="!selectedClient && TicketForm.controls.RequestedUser?.value <= 0" class="input-append ml-1"><a class="btn btn-secondary btn-sm tlp" (click)="ViewUser()" tooltip="{{'lblViewUserDetail'| translate:service.CL}}"><i class="fa fa-id-card"></i></a></div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblTechnician'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <div class="input-group">\r
                                                    <input type="hidden" class="form-control" formControlName="AssignedUser">\r
                                                    <ng-template #assignTemplate let-model="item">{{model?.DisplayName}} {{'('+ model?.Email +')'}}</ng-template>\r
                                                    <input formControlName="AssignedName"\r
                                                           [typeahead]="AgentList"\r
                                                           typeaheadOptionField="DisplayName"\r
                                                           (typeaheadNoResults)="NoTechnicianFound($event)"\r
                                                           [typeaheadScrollable]="true"\r
                                                           [typeaheadOptionsInScrollableView]="8"\r
                                                           [typeaheadLatinize]="true"\r
                                                           (typeaheadOnSelect)="onSelectTechnician($event)"\r
                                                           [typeaheadMinLength]="0"\r
                                                           [typeaheadItemTemplate]="assignTemplate"\r
                                                           [typeaheadSelectFirstItem]="false"\r
                                                           class="form-control">\r
                                                    <div class="input-append ml-1"><a class="btn btn-secondary btn-sm tlp" (click)="OpenUserList('technician')" tooltip="{{'lblSelectTechnician'| translate:service.CL}}"><i class="fa fa-user"></i></a></div>\r
                                                    <div class="input-append ml-1"><a class="btn btn-secondary btn-sm tlp" (click)="AssignCurrentUser()" tooltip="{{'lblAssignCurrentUser'| translate:service.CL}}"><i class="fa fa-share"></i></a></div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblRequestType'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="RequestTypeID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.RequestTypeList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row" [ngClass]="{'has-error': f.submitted && !TicketForm.controls.StatusID.valid}">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblStatus'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="StatusID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.StatusList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblTicketMode'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="TicketModeID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.TicketModeList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblLevel'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="LevelID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.LevelList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblCategory'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="CategoryID" (change)="Change_Category($event.target.value,0)">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.CategoryList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblSubCategory'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="SubCategoryID" (change)="Change_SubCategory($event.target.value)">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of Filter_SubCategory_List" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblItem'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="ItemID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of Filter_ItemList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblImpact'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="ImpactID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.ImpactList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblPriority'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="PriorityID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.PriorityList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblUrgency'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="UrgencyID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.UrgencyList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblDepartment'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="DepartmentID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.DepartmentList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblLocation'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <select class="form-control custom-select" formControlName="LocationID">\r
                                                    <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                    <option *ngFor="let item of model?.LocationList" [value]="item.Value">{{item.Key}}</option>\r
                                                </select>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="col-12 col-lg-6">\r
                                        <div class="form-group row">\r
                                            <label class="col-12 col-lg-3 col-form-label">{{'lblDueDate'| translate:service.CL}}</label>\r
                                            <div class="col-12 col-lg-8">\r
                                                <div class="input-group datepicker">\r
                                                    <ng2-flatpickr #dueDate [config]="DueDate_Config" formControlName="DueDate" altInputClass="form-control"></ng2-flatpickr>\r
                                                    <div class="input-group-append">\r
                                                        <button type="button" class="btn btn-secondary btn-sm" (click)="service?.OpenFlatpickr(dueDate)"><i class="fa fa-calendar"></i></button>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
\r
                                    <div class="col-12 col-lg-6"></div>\r
                                    <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !TicketForm.controls.Subject.valid}">\r
                                        <label>{{'lblSubject'| translate:service.CL}}</label>\r
                                        <input type="text" class="form-control" formControlName="Subject" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblSubject'| translate:service.CL}}" />\r
                                    </div>\r
                                    <div class="col-12 form-group editor-height">\r
                                        <label>{{'lblDescription'| translate:service.CL}}</label>\r
                                        <textarea id="txtDesc" class="form-control kendoEditor" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
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
\r
                                    <div class="col-12 form-group mt-5">\r
                                        <h5>{{'lblResolution'| translate:service.CL}}</h5>\r
                                    </div>\r
                                    <div class="col-12 form-group editor-height">\r
                                        <textarea id="txtSolDesc" class="form-control kendoEditor" formControlName="SolutionDescription" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblResolution'| translate:service.CL}}"></textarea>\r
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
<user-technician (onSave)="UserSelectDone($event)" #UserSelect></user-technician>\r
`;

// src/app/ticket/ticket_new.ts
var Ticket_NewComponent = class Ticket_NewComponent2 {
  constructor(fb, service, route, router, location) {
    this.fb = fb;
    this.service = service;
    this.route = route;
    this.router = router;
    this.location = location;
    this.isLoading = false;
    this.Is_SaveAndclose = false;
    this.AgentList = [];
    this.ClientList = [];
    this.Filter_SubCategory_List = [];
    this.Filter_ItemList = [];
    this.minStDate = /* @__PURE__ */ new Date();
    this.DueDate_Config = this.service.CommonDateConfig();
    this.isAttachLoading = false;
    this.lstAttachments = [];
    this.Not_AllowedExtensions = [];
    this.service.GoTo_ScrollTop(window);
    this.InitTicketForm();
    this.Not_AllowedExtensions = this.service.Get_NotAllowedExtensions();
  }
  ngOnInit() {
    setTimeout(() => {
      this.bindData();
    });
  }
  ngAfterViewInit() {
    this.service.setKendoEditor(".kendoEditor");
    this.SetDateOptions();
    setTimeout(() => {
      this.inpfocus.nativeElement.focus();
    }, 100);
  }
  InitTicketForm() {
    this.TicketForm = this.fb.group({
      TicketID: [0],
      RequestedName: ["", Validators.required],
      RequestedUser: [null, Validators.compose([Validators.required, Validators.min(1)])],
      RequestedUserEmail: [""],
      //Only for send mail
      AssignedName: [""],
      AssignedUser: [null],
      AssignedUserEmail: [""],
      //Only for send mail
      StatusID: [null, Validators.compose([Validators.required, Validators.min(1)])],
      TicketModeID: [1],
      LevelID: [null],
      RequestTypeID: [null],
      CategoryID: [null],
      SubCategoryID: [null],
      ItemID: [null],
      ImpactID: [null],
      PriorityID: [null],
      DepartmentID: [null],
      UrgencyID: [null],
      LocationID: [null],
      DueDate: [""],
      Subject: ["", Validators.required],
      Description: [""],
      SolutionDescription: [""]
    });
  }
  SetDateOptions() {
    this.dueDate.flatpickr.set("onChange", (dtarr, dt, instance) => {
      this.TicketForm.controls["DueDate"].setValue(dt);
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        this.model = yield this.service.Data.ExecuteAPI_Post("Ticket/Get_Ticket_Detail_Data", { Is_Agent: true });
        this.SetDefaultValue();
        let res1 = yield this.service.Data.ExecuteAPI_Post("Admin/Get_UserSelection_List", { Is_Agent: false });
        this.ClientList = res1;
        this.AgentList = res1.filter((d) => d.Is_Agent);
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  SaveTicket() {
    return __async(this, null, function* () {
      let obj = this.TicketForm.getRawValue();
      obj.Description = $("#txtDesc").data("kendoEditor").value();
      obj.SolutionDescription = $("#txtSolDesc").data("kendoEditor").value();
      if (obj.DueDate) {
        obj.DueDate = obj.DueDate + " " + this.service.Date_Format(/* @__PURE__ */ new Date(), "HH:mm:ss");
      }
      try {
        this.service.App.ShowLoader = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_Create", { model: obj, attachment: this.lstAttachments ? this.lstAttachments : [] });
        if (res) {
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketCreated"));
          window.setTimeout(() => {
            if (this.Is_SaveAndclose) {
              this.router.navigate(["/ticket"]);
            } else {
              this.router.navigate(["/ticket/detail", res.Item2]);
            }
          }, 500);
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
        }
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  SetDefaultValue() {
    let Status = this.model.StatusList.find((d) => d.Is_Default);
    if (Status) {
      this.TicketForm.controls["StatusID"].setValue(Status.Value);
    }
    let Level = this.model.LevelList.find((d) => d.Is_Default);
    if (Level) {
      this.TicketForm.controls["LevelID"].setValue(Level.Value);
    }
    let RequestType = this.model.RequestTypeList.find((d) => d.Is_Default);
    if (RequestType) {
      this.TicketForm.controls["RequestTypeID"].setValue(RequestType.Value);
    }
    let Category = this.model.CategoryList.find((d) => d.Is_Default);
    if (Category) {
      this.TicketForm.controls["CategoryID"].setValue(Category.Value);
    }
    let Impact = this.model.ImpactList.find((d) => d.Is_Default);
    if (Impact) {
      this.TicketForm.controls["ImpactID"].setValue(Impact.Value);
    }
    let Priority = this.model.PriorityList.find((d) => d.Is_Default);
    if (Priority) {
      this.TicketForm.controls["PriorityID"].setValue(Priority.Value);
    }
    let Department = this.model.DepartmentList.find((d) => d.Is_Default);
    if (Department) {
      this.TicketForm.controls["DepartmentID"].setValue(Department.Value);
    }
    let Urgency = this.model.UrgencyList.find((d) => d.Is_Default);
    if (Urgency) {
      this.TicketForm.controls["UrgencyID"].setValue(Urgency.Value);
    }
    let Location2 = this.model.LocationList.find((d) => d.Is_Default);
    if (Location2) {
      this.TicketForm.controls["LocationID"].setValue(Location2.Value);
    }
    if (Category) {
      this.Change_Category(Category.Value);
    }
  }
  Change_Category(CategoryID, SubCategoryID = 0) {
    this.Filter_SubCategory_List = this.model.SubCategoryList.filter((d) => d.MainID == CategoryID);
    this.Change_SubCategory(SubCategoryID > 0 ? SubCategoryID : null);
  }
  Change_SubCategory(SubCategoryID) {
    this.Filter_ItemList = this.model.ItemList.filter((d) => d.MainID == SubCategoryID);
    if (this.Filter_ItemList.length == 0) {
      this.TicketForm.controls["ItemID"].setValue(null);
    }
  }
  BackToList() {
    this.router.navigate(["/ticket"]);
  }
  //AutoComplete Requester & Technician
  NoRequesterFound(item) {
  }
  //onSelectRequester($event: TypeaheadMatch) {
  onSelectRequester($event) {
    let obj = {};
    obj.user = $event.item;
    obj.isTechnician = false;
    this.UserSelectDone(obj);
  }
  NoTechnicianFound(event) {
  }
  //onSelectTechnician($event: TypeaheadMatch) {
  onSelectTechnician($event) {
    let obj = {};
    obj.user = $event.item;
    obj.isTechnician = true;
    this.UserSelectDone(obj);
  }
  //Bind User & Technician Grid   
  OpenUserList(type) {
    if (type == "user") {
      this.UserSelect.open(false, this.ClientList);
    } else if (type == "technician") {
      this.UserSelect.open(true, this.AgentList);
    }
  }
  ViewUser() {
    if (this.selectedClient) {
      this.UserSelect.ViewRow(this.selectedClient);
    }
  }
  UserSelectDone(item) {
    if (item.isTechnician) {
      this.selectedAgent = item.user;
      this.TicketForm.controls["AssignedName"].setValue(this.selectedAgent.DisplayName);
      this.TicketForm.controls["AssignedUser"].setValue(this.selectedAgent.UserID);
      this.TicketForm.controls["AssignedUserEmail"].setValue(this.selectedAgent.Email);
    } else {
      this.selectedClient = item.user;
      this.TicketForm.controls["RequestedName"].setValue(this.selectedClient.DisplayName);
      this.TicketForm.controls["RequestedUser"].setValue(this.selectedClient.UserID);
      this.TicketForm.controls["RequestedUserEmail"].setValue(this.selectedClient.Email);
    }
  }
  AssignCurrentUser() {
    this.selectedAgent = {
      UserID: this.service.Account.UserID,
      DisplayName: this.service.Account.DisplayName,
      UserName: this.service.Account.UserName,
      Email: this.service.Account.Email
    };
    this.TicketForm.controls["AssignedName"].setValue(this.selectedAgent.DisplayName);
    this.TicketForm.controls["AssignedUser"].setValue(this.selectedAgent.UserID);
    this.TicketForm.controls["AssignedUserEmail"].setValue(this.selectedAgent.Email);
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
      UserSelect: [{ type: ViewChild, args: [User_Technician_ListComponent] }],
      dueDate: [{ type: ViewChild, args: ["dueDate"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }],
      flAttachment: [{ type: ViewChild, args: ["flAttachment"] }]
    };
  }
};
Ticket_NewComponent = __decorate([
  Component({
    template: ticket_new_default,
    providers: [FocusInvalidDirective]
  })
], Ticket_NewComponent);

// angular:jit:template:file:src\app\ticket\ticket_detail.html
var ticket_detail_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12 col-md-6 title">\r
            {{'lblEditTicket'| translate:service.CL}}\r
        </div>\r
        <div class="col-12 col-md-6">\r
            <a class="link" routerLink="/">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <a class="link" routerLink="/ticket">{{'lblTicket'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i>\r
            <span>{{'lblEditTicket'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-12 stretch-card">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <form [formGroup]="TicketForm" (ngSubmit)="TicketForm.valid && SaveTicket()" #f="ngForm" novalidate>\r
                            <div class="card-title">\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpSave'| translate:service.CL}}"><i class="fa fa-save"></i></button>\r
                                <button type="submit" class="btn btn-sm btn-primary tlp" (click)="Is_SaveAndclose = true;" tooltip="{{'tlpSaveAndClose'| translate:service.CL}}">\r
                                    <i class="fa fa-save"></i>\r
                                    <span class="save-close"><i class="fa fa-times"></i></span>\r
                                </button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Delete_Ticket" (click)="DeleteRow()" class="btn btn-sm btn-danger tlp" tooltip="{{'tlpDelete'| translate:service.CL}}"><i class="fa fa-trash"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Clone_Ticket" (click)="CloneTicket()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpCloneTicket'| translate:service.CL}}"><i class="fa fa-clone"></i></button>\r
                                <a target="_blank" *ngIf="service?.Account?.Is_Print" (click)="Print()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpPrint'| translate:service.CL}}"><i class="fa fa-print"></i></a>\r
                                <button type="button" *ngIf="service?.Account?.Is_Close_Ticket" (click)="OpenCloseTicket()" class="btn btn-sm btn-danger tlp" tooltip="{{'tlpCloseTickets'| translate:service.CL}}"><i class="fa fa-times"></i></button>\r
                                <button type="button" *ngIf="service?.Account?.Is_Pickup" (click)="PickUp()" class="btn btn-sm btn-info tlp" tooltip="{{'tlpPickUp'| translate:service.CL}}"><i class="fa fa-shipping-fast"></i> {{'btnPickUp'| translate:service.CL}}</button>\r
                                <button type="button" class="btn btn-sm btn-secondary tlp" (click)="BackToList();" tooltip="{{'tlpCancel'| translate:service.CL}}"><i class="fa fa-times"></i> {{'btnCancel'| translate:service.CL}}</button>\r
                                <button [class.hide]="!Is_Show_FCR" type="button" (click)="Set_FCR(true)" class="btn btn-sm btn-primary tlp" tooltip="{{'tlpMarkFCR'| translate:service.CL}}"><i class="fa fa-bookmark"></i></button>\r
                            </div>\r
                            <div class="row">\r
                                <div class="col-12 col-xl-8">\r
                                    <div class="form-box row">\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-5 col-md-3 col-form-label">{{'lblTicketID'| translate:service.CL}} </label>\r
                                                <div class="col-7 col-md-8 col-form-label">\r
                                                    <b>{{TicketForm.controls.DisplayTicketID.value}}</b>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6 text-right">\r
                                            <button [class.hide]="!Is_FCR" type="button" (click)="Set_FCR(false)" class="badge badge-primary tlp cursor" tooltip="{{'lblUnMarkFCR'| translate:service.CL}}">\r
                                                <i class="fa fa-bookmark mr-1"></i> {{'lblFCRMarked'| translate:service.CL}}\r
                                            </button>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row" [ngClass]="{'has-error': f.submitted && !TicketForm.controls.RequestedName.valid}">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblRequester'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <div class="input-group">\r
                                                        <input type="hidden" class="form-control" formControlName="RequestedUser">\r
                                                        <ng-template #reqTemplate let-model="item">{{model.DisplayName}} {{'('+ model.Email +')'}}</ng-template>\r
                                                        <input #focus formControlName="RequestedName"\r
                                                               [typeahead]="ClientList"\r
                                                               typeaheadOptionField="DisplayName"\r
                                                               (typeaheadNoResults)="NoRequesterFound($event)"\r
                                                               [typeaheadScrollable]="true"\r
                                                               [typeaheadOptionsInScrollableView]="8"\r
                                                               [typeaheadLatinize]="true"\r
                                                               (typeaheadOnSelect)="onSelectRequester($event)"\r
                                                               [typeaheadMinLength]="0"\r
                                                               [typeaheadItemTemplate]="reqTemplate"\r
                                                               class="form-control">\r
                                                        <div class="input-append ml-1"><a class="btn btn-secondary btn-sm tlp" (click)="OpenUserList('user')" tooltip="{{'lblSelectUser'| translate:service.CL}}"><i class="fa fa-user"></i></a></div>\r
                                                        <div [class.hide]="!selectedClient && TicketForm.controls.RequestedUser?.value <= 0" class="input-append ml-1"><a class="btn btn-secondary btn-sm tlp" (click)="ViewUser()" tooltip="{{'lblViewUserDetail'| translate:service.CL}}"><i class="fa fa-id-card"></i></a></div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblTechnician'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <div class="input-group">\r
                                                        <input type="hidden" class="form-control" formControlName="AssignedUser">\r
                                                        <ng-template #assignTemplate let-model="item">{{model.DisplayName}} {{'('+ model.Email +')'}}</ng-template>\r
                                                        <input formControlName="AssignedName"\r
                                                               [typeahead]="AgentList"\r
                                                               typeaheadOptionField="DisplayName"\r
                                                               (typeaheadNoResults)="NoTechnicianFound($event)"\r
                                                               [typeaheadScrollable]="true"\r
                                                               [typeaheadOptionsInScrollableView]="8"\r
                                                               [typeaheadLatinize]="true"\r
                                                               (typeaheadOnSelect)="onSelectTechnician($event)"\r
                                                               [typeaheadMinLength]="0"\r
                                                               [typeaheadItemTemplate]="assignTemplate"\r
                                                               [typeaheadSelectFirstItem]="false"\r
                                                               class="form-control">\r
                                                        <div class="input-append ml-1"><a class="btn btn-secondary btn-sm tlp" (click)="OpenUserList('technician')" tooltip="{{'lblSelectTechnician'| translate:service.CL}}"><i class="fa fa-user"></i></a></div>\r
                                                        <div class="input-append ml-1"><a class="btn btn-secondary btn-sm tlp" (click)="AssignCurrentUser()" tooltip="{{'lblAssignCurrentUser'| translate:service.CL}}"><i class="fa fa-share"></i></a></div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblRequestType'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="RequestTypeID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.RequestTypeList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row" [ngClass]="{'has-error': f.submitted && !TicketForm.controls.StatusID.valid}">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblStatus'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="StatusID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.StatusList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblTicketMode'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="TicketModeID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.TicketModeList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblLevel'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="LevelID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.LevelList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblCategory'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="CategoryID" (change)="Change_Category($event.target.value,0)">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.CategoryList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblSubCategory'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="SubCategoryID" (change)="Change_SubCategory($event.target.value)">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of Filter_SubCategory_List" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblItem'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="ItemID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of Filter_ItemList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblImpact'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="ImpactID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.ImpactList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblPriority'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="PriorityID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.PriorityList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblUrgency'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="UrgencyID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.UrgencyList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblDepartment'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="DepartmentID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.DepartmentList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblLocation'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <select class="form-control custom-select" formControlName="LocationID">\r
                                                        <option [ngValue]="null">{{'lblSelect'| translate:service.CL}}</option>\r
                                                        <option *ngFor="let item of model?.LocationList" [value]="item.Value">{{item.Key}}</option>\r
                                                    </select>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div class="col-12 col-lg-6">\r
                                            <div class="form-group row">\r
                                                <label class="col-12 col-lg-3 col-form-label">{{'lblDueDate'| translate:service.CL}}</label>\r
                                                <div class="col-12 col-lg-8">\r
                                                    <div class="input-group datepicker">\r
                                                        <ng2-flatpickr #dueDate [config]="DueDate_Config" formControlName="DueDate" altInputClass="form-control"></ng2-flatpickr>\r
                                                        <div class="input-group-append">\r
                                                            <button type="button" class="btn btn-secondary btn-sm" (click)="service?.OpenFlatpickr(dueDate)"><i class="fa fa-calendar"></i></button>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
\r
                                        <div class="col-12 col-lg-6"></div>\r
                                        <div class="col-12 form-group" [ngClass]="{'has-error': f.submitted && !TicketForm.controls.Subject.valid}">\r
                                            <label>{{'lblSubject'| translate:service.CL}}</label>\r
                                            <input type="text" class="form-control" formControlName="Subject" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblSubject'| translate:service.CL}}" />\r
                                        </div>\r
                                        <div class="col-12 form-group editor-height">\r
                                            <label>{{'lblDescription'| translate:service.CL}}</label>\r
                                            <textarea id="txtDesc" class="form-control kendoEditor" formControlName="Description" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
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
                                                    <tr *ngFor="let item of AttachmentList">\r
                                                        <td>\r
                                                            <i class="mr-2" [ngClass]="item.Extension | fileType"></i>\r
                                                            <a target="_blank" href="{{service?.Settings?.Base_API_URL + '/Documents/Attachments/Ticket/' + item.FileName}}"> {{item.DisplayName}}</a>\r
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
\r
                                        <div class="col-12 mt-5 mb-2 d-flex justify-content-between">\r
                                            <h5>{{'lblResolution'| translate:service.CL}}</h5>\r
                                            <button type="button" class="btn btn-info btn-sm" (click)="FindSolution();">\r
                                                <i *ngIf="isLoadingFindSolution" class="fa fa-circle-notch fa-spin mr-1"></i>    {{'lblFindSolution'| translate:service.CL}}\r
                                            </button>\r
                                        </div>\r
                                        <div class="col-12 form-group editor-height">\r
                                            <textarea id="txtSolDesc" class="form-control kendoEditor" formControlName="SolutionDescription" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblResolution'| translate:service.CL}}"></textarea>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div class="col-12 col-xl-4 border-left ticket-chat">\r
                                    <h5 class="d-flex justify-content-between align-content-center">\r
                                        {{'lblTicketChat'| translate:service.CL}}\r
                                        <!--<button type="button" class="btn btn-sm btn-outline-dark" (click)="show_chat();">\r
                                            <i class="fa fa-reply mr-1"></i>{{'btnReply'| translate:service.CL}}\r
                                        </button>-->\r
                                    </h5>\r
                                    <div>\r
                                        <textarea class="form-control" [(ngModel)]="txt_chat" [ngModelOptions]="{standalone: true}" rows="4" style="resize:vertical;min-height:82px;" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblDescription'| translate:service.CL}}"></textarea>\r
                                        <div class="d-flex justify-content-between align-content-center mt-2">\r
                                            <button type="button" class="btn btn-sm btn-outline-primary" (click)="save_chat();" [disabled]="is_loading_chat">{{'btnSendReply'| translate:service.CL}}</button>\r
                                            <!--<button type="button" class="btn btn-sm btn-outline-secondary" (click)="show_chat(false);">{{'btnCancel'| translate:service.CL}}</button>-->\r
                                        </div>\r
                                    </div>\r
                                    <div class="table-responsive mt-3">\r
                                        <table class="table table-borderless">\r
                                            <tr *ngFor="let item of chat_list">\r
                                                <td style="width:1%;vertical-align:top;">\r
                                                    <img alt="" class="img-xs rounded-circle profile-list-pic"\r
                                                         [src]="item.ProfilePicture ? (service?.Settings?.Base_API_URL + '/Documents/Profile/' + item.ProfilePicture) : '/assets/images/profile.png'" />\r
                                                </td>\r
                                                <td>\r
                                                    <h5>{{item.DisplayName}}</h5>\r
                                                    <div style="white-space:pre-wrap" [innerHTML]="item.Description"></div>\r
                                                </td>\r
                                                <td style="width:22%;vertical-align:top;">\r
                                                    {{item.CreatedDate | date:'dd MMM yyyy hh:mm a'}}\r
                                                </td>\r
                                            </tr>\r
                                        </table>\r
                                        <div *ngIf="!chat_list.length" class="mt-3 font-15">\r
                                            No chats available.\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
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
<solution_find-list (onSelectSolution)="FindSolutionDone($event)" #modalFindSolution></solution_find-list>\r
\r
<modal-dialog #modalCloseTicket [backDrop]="false" modalClass="modal-md" modalHeader="Close Ticket">\r
    <form [formGroup]="CloseTicketForm" (ngSubmit)="CloseTicketForm.valid && CloseTicket()" #f1="ngForm" novalidate>\r
        <div class="modal-body">\r
            <div class="form-box row">\r
                <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f1.submitted && !CloseTicketForm.controls.StatusID.valid}">\r
                    <label>{{'lblStatus'| translate:service.CL}}</label>\r
                    <select class="form-control custom-select" formControlName="StatusID" autofocus>\r
                        <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                        <option *ngFor="let item of CLosedStatusList" [value]="item.StatusID">{{item.Name}}</option>\r
                    </select>\r
                </div>\r
                <div class="col-12 col-md-6 form-group" [ngClass]="{'has-error': f1.submitted && !CloseTicketForm.controls.TicketCloseModeID.valid}">\r
                    <label>{{'lblTicketCloseMode'| translate:service.CL}}</label>\r
                    <select class="form-control custom-select" formControlName="TicketCloseModeID">\r
                        <option value="0">{{'lblSelect'| translate:service.CL}}</option>\r
                        <option *ngFor="let item of TicketCloseModeList" [value]="item.Value">{{item.Key}}</option>\r
                    </select>\r
                </div>\r
                <div class="col-12 form-group">\r
                    <label>{{'lblReason'| translate:service.CL}}</label>\r
                    <textarea class="form-control" formControlName="StatusCloseReason" placeholder="{{'lblEnter'| translate:service.CL}} {{'lblReasonForClosedTicket'| translate:service.CL}}"></textarea>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="modal-footer form-btn">\r
            <button type="submit" class="btn btn-teal">{{'btnCloseTicket'| translate:service.CL}}</button>\r
            <button type="button" class="btn btn-secondary" (click)="modalCloseTicket.close()">{{'btnCancel'| translate:service.CL}}</button>\r
        </div>\r
    </form>\r
</modal-dialog>`;

// src/app/ticket/ticket_detail.ts
var Ticket_DetailComponent = class Ticket_DetailComponent2 {
  constructor(fb, service, route, router, location) {
    this.fb = fb;
    this.service = service;
    this.route = route;
    this.router = router;
    this.location = location;
    this.isLoading = false;
    this.Is_SaveAndclose = false;
    this.AgentList = [];
    this.ClientList = [];
    this.Filter_SubCategory_List = [];
    this.Filter_ItemList = [];
    this.minStDate = /* @__PURE__ */ new Date();
    this.AttachmentList = [];
    this.DueDate_Config = this.service.CommonDateConfig();
    this.Is_FCR = false;
    this.Is_Show_FCR = false;
    this.CLosedStatusList = [];
    this.TicketCloseModeList = [];
    this.isAttachLoading = false;
    this.lstAttachments = [];
    this.Not_AllowedExtensions = [];
    this.isLoadingFindSolution = false;
    this.is_show_chat = false;
    this.chat_list = [];
    this.txt_chat = "";
    this.is_loading_chat = false;
    this.service.GoTo_ScrollTop(window);
    this.DisplayTicketID = this.route.snapshot.paramMap.get("id");
    this.InitTicketForm();
    this.InitCloseTicketForm();
  }
  ngOnInit() {
    setTimeout(() => {
      this.bindData();
    });
    this.sub = this.service.Data.registerReceiver("Get_TicketChat_Refresh").subscribe((res) => {
      if (res && res.TicketID == this.TicketID) {
        this.bind_chats(res);
      }
    });
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  InitTicketForm() {
    this.service.App.ShowLoader = true;
    this.TicketForm = this.fb.group({
      TicketID: [0],
      DisplayTicketID: [""],
      RequestedName: ["", Validators.required],
      RequestedUser: [null, Validators.compose([Validators.required, Validators.min(1)])],
      RequestedUserEmail: [""],
      //Only for send mail
      AssignedName: [""],
      AssignedUser: [null],
      AssignedUserEmail: [""],
      //Only for send mail
      OldAssignedUser: [null],
      StatusID: [null, Validators.compose([Validators.required, Validators.min(1)])],
      OldStatusID: [null],
      TicketModeID: [null],
      LevelID: [null],
      RequestTypeID: [null],
      CategoryID: [null],
      SubCategoryID: [null],
      ItemID: [null],
      ImpactID: [null],
      PriorityID: [null],
      DepartmentID: [null],
      UrgencyID: [null],
      LocationID: [null],
      DueDate: [""],
      Subject: ["", Validators.required],
      Description: [""],
      SolutionDescription: [""],
      AssignedDate: [],
      UpdatedUser: [],
      UpdatedDate: []
    });
  }
  SetDateOptions(dt = "") {
    this.dueDate.flatpickr.setDate(dt);
    this.dueDate.flatpickr.set("onChange", (dtarr, dt2, instance) => {
      if (dt2) {
        dt2 = this.service.Date_Format(dt2, "YYYY-MM-dd") + " " + this.service.Date_Format(/* @__PURE__ */ new Date(), "HH:mm:ss");
      }
      this.TicketForm.controls["DueDate"].setValue(dt2);
    });
  }
  bindData() {
    return __async(this, null, function* () {
      try {
        this.model = yield this.service.Data.ExecuteAPI_Post("Ticket/Get_Ticket_Detail_Data", { Is_Agent: true });
        this.getTicketDetails();
        this.ClientList = yield this.service.Data.ExecuteAPI_Post("Admin/Get_UserSelection_List", { Is_Agent: false });
        this.AgentList = this.ClientList.filter((d) => d.Is_Agent);
      } catch (e) {
      }
    });
  }
  getTicketDetails() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        this.selectedTicket = yield this.service.Data.ExecuteAPI_Post("Ticket/Get_Ticket_ByID", { TicketID: 0, DisplayTicketID: this.DisplayTicketID });
        if (this.selectedTicket) {
          this.TicketForm.patchValue(this.selectedTicket);
          this.bindDescription();
          this.TicketID = this.selectedTicket.TicketID;
          this.Is_FCR = this.selectedTicket.Is_FCR;
          this.Is_Show_FCR = !this.selectedTicket.Is_FCR && this.selectedTicket.StatusType == this.service.StatusType.Closed ? true : false;
          if (this.selectedTicket.CategoryID) {
            this.Change_Category(this.selectedTicket.CategoryID, this.selectedTicket.SubCategoryID);
          }
          this.SetDateOptions(this.selectedTicket.DueDate);
        }
        this.bindTicketAttachment();
        this.bind_chats();
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  bindDescription() {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Dashboard/Get_DescriptionByID", { ModuleType: "ticket", ID: this.DisplayTicketID });
        if (res) {
          this.TicketForm.controls["Description"].setValue(res.Description);
          this.TicketForm.controls["SolutionDescription"].setValue(res.SolutionDescription);
          this.service.setKendoEditor(".kendoEditor");
        }
        window.setTimeout(() => {
          this.service.App.ShowLoader = false;
        }, 200);
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  setDescription() {
    this.TicketForm.controls["Description"].setValue(this.objDescription.Description);
    this.TicketForm.controls["SolutionDescription"].setValue(this.objDescription.SolutionDescription);
    this.service.setKendoEditor(".kendoEditor");
    window.setTimeout(() => {
      this.service.App.ShowLoader = false;
    }, 100);
  }
  // type = clone etc
  SaveTicket(type = "") {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.TicketForm.getRawValue();
        obj.Description = $("#txtDesc").data("kendoEditor").value();
        obj.SolutionDescription = $("#txtSolDesc").data("kendoEditor").value();
        let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_Update", { model: obj, attachment: this.lstAttachments ? this.lstAttachments : [] });
        if (res) {
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketUpdated"));
          if (this.Is_SaveAndclose) {
            window.setTimeout(() => {
              this.router.navigate(["/ticket"]);
            }, 300);
          } else {
            if (this.lstAttachments.length > 0) {
              this.lstAttachments = [];
              this.bindTicketAttachment();
            }
            this.service.GoTo_ScrollTop(window);
          }
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
        }
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  Change_Category(CategoryID, SubCategoryID = 0) {
    this.Filter_SubCategory_List = this.model.SubCategoryList.filter((d) => d.MainID == CategoryID);
    this.Change_SubCategory(SubCategoryID > 0 ? SubCategoryID : null);
  }
  Change_SubCategory(SubCategoryID) {
    this.Filter_ItemList = this.model.ItemList.filter((d) => d.MainID == SubCategoryID);
    if (this.Filter_ItemList.length == 0) {
      this.TicketForm.controls["ItemID"].setValue(null);
    }
  }
  BackToList() {
    this.router.navigate(["/ticket"]);
  }
  //AutoComplete Requester & Technician
  NoRequesterFound(item) {
  }
  //onSelectRequester($event: TypeaheadMatch) {
  onSelectRequester($event) {
    let obj = {};
    obj.user = $event.item;
    obj.isTechnician = false;
    this.UserSelectDone(obj);
  }
  NoTechnicianFound(item) {
  }
  //onSelectTechnician($event: TypeaheadMatch) {
  onSelectTechnician($event) {
    let obj = {};
    obj.user = $event.item;
    obj.isTechnician = true;
    this.UserSelectDone(obj);
  }
  //Bind User & Technician Grid   
  OpenUserList(type) {
    if (type == "user") {
      this.UserSelect.open(false, this.ClientList);
    } else if (type == "technician") {
      this.UserSelect.open(true, this.AgentList);
    }
  }
  ViewUser() {
    if (this.selectedClient) {
      this.UserSelect.ViewRow(this.selectedClient);
    } else {
      this.UserSelect.ViewRow(null, this.TicketForm.get("RequestedUser").value);
    }
  }
  UserSelectDone(item) {
    if (item.isTechnician) {
      this.selectedAgent = item.user;
      this.TicketForm.controls["AssignedName"].setValue(this.selectedAgent.DisplayName);
      this.TicketForm.controls["AssignedUser"].setValue(this.selectedAgent.UserID);
      this.TicketForm.controls["AssignedUserEmail"].setValue(this.selectedAgent.Email);
    } else {
      this.selectedClient = item.user;
      this.TicketForm.controls["RequestedName"].setValue(this.selectedClient.DisplayName);
      this.TicketForm.controls["RequestedUser"].setValue(this.selectedClient.UserID);
      this.TicketForm.controls["RequestedUserEmail"].setValue(this.selectedClient.Email);
    }
  }
  AssignCurrentUser() {
    this.selectedAgent = {
      UserID: this.service.Account.UserID,
      DisplayName: this.service.Account.DisplayName,
      UserName: this.service.Account.UserName,
      Email: this.service.Account.Email
    };
    this.TicketForm.controls["AssignedName"].setValue(this.selectedAgent.DisplayName);
    this.TicketForm.controls["AssignedUser"].setValue(this.selectedAgent.UserID);
    this.TicketForm.controls["AssignedUserEmail"].setValue(this.selectedAgent.Email);
  }
  DeleteRow() {
    return __async(this, null, function* () {
      try {
        if (confirm(this.service.Translator.instant("msgDeleteSelectedItems"))) {
          this.service.App.ShowLoader = true;
          let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_Delete", { TicketIDs: this.TicketID });
          if (res > 0) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketDeleted"));
            window.setTimeout(() => {
              this.BackToList();
            }, 1e3);
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgErrorTicketsUsedInAnotherTable"));
          }
          this.service.App.ShowLoader = false;
        }
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  //CloneTicket
  CloneTicket() {
    return __async(this, null, function* () {
      try {
        if (confirm(this.service.Translator.instant("msgClonethisTicket"))) {
          let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_Clone", { TicketID: this.TicketID });
          if (res) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketCloned"));
            this.TicketForm.controls["TicketID"].setValue(res.Item1);
            this.TicketForm.controls["DisplayTicketID"].setValue(res.Item2);
            this.service.GoTo_ScrollTop(window);
            this.router.navigate(["/ticket"]);
            window.setTimeout(() => {
              this.router.navigate(["/ticket/detail", res.Item2]);
            }, 20);
          }
        }
      } catch (e) {
      }
    });
  }
  //Print
  Print() {
    let url = this.service.Settings.API_URL + "/Home/Print?ids=" + this.TicketID + "&type=ticket&lang=" + this.service.CL;
    window.open(url, "Print Preview");
  }
  Set_FCR(Is_FCR) {
    return __async(this, null, function* () {
      try {
        let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Set_Ticket_FCR", { TicketID: this.TicketID, Is_FCR });
        if (res) {
          this.Is_FCR = Is_FCR;
          this.Is_Show_FCR = !Is_FCR;
          if (Is_FCR) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgFCRMarked"));
          } else {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgFCRUnMarked"));
          }
        }
      } catch (e) {
      }
    });
  }
  InitCloseTicketForm() {
    return __async(this, null, function* () {
      this.CloseTicketForm = this.fb.group({
        StatusID: [0, Validators.compose([Validators.required, Validators.min(1)])],
        TicketCloseModeID: [0, Validators.compose([Validators.required, Validators.min(1)])],
        StatusCloseReason: [""]
      });
      let res = yield this.service.Data.ExecuteAPI_Post("Admin/Get_Status_List");
      if (res) {
        this.CLosedStatusList = res.filter((d) => d.Is_Closed == 1);
      }
      let res1 = yield this.service.Data.ExecuteAPI_Post("Admin/Get_TicketCloseMode_List");
      if (res1) {
        this.TicketCloseModeList = res1;
      }
    });
  }
  OpenCloseTicket() {
    this.modalCloseTicket.open();
  }
  CloseTicket() {
    return __async(this, null, function* () {
      try {
        this.service.App.ShowLoader = true;
        let obj = this.CloseTicketForm.getRawValue();
        let lstSelectedRow = [];
        lstSelectedRow.push(this.selectedTicket);
        let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_Status_Update", { lstTicket: lstSelectedRow, StatusID: obj.StatusID, TicketCloseModeID: obj.TicketCloseModeID, StatusCloseReason: obj.StatusCloseReason });
        if (res > 0) {
          this.TicketForm.controls["StatusID"].setValue(obj.StatusID);
          this.modalCloseTicket.close();
          this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketClosed"));
          this.clearCloseTicketForm();
        } else {
          this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
        }
        this.service.App.ShowLoader = false;
      } catch (e) {
        this.service.App.ShowLoader = false;
      }
    });
  }
  clearCloseTicketForm() {
    this.CloseTicketForm.controls["StatusID"].setValue(null);
    this.CloseTicketForm.controls["TicketCloseModeID"].setValue(null);
    this.CloseTicketForm.controls["StatusCloseReason"].setValue("");
  }
  //Assigned And Pickup Tickets
  PickUp() {
    let objUser = { UserID: this.service.Account.UserID, DisplayName: this.service.Account.DisplayName, Email: this.service.Account.Email };
    this.Ticket_AssignTo_Update(objUser, true);
  }
  Ticket_AssignTo_Update(objUser, Is_PickUp) {
    return __async(this, null, function* () {
      if (objUser.UserID > 0) {
        try {
          let lstSelectedRow = [];
          lstSelectedRow.push(this.selectedTicket);
          this.service.App.ShowLoader = true;
          let res = yield this.service.Data.ExecuteAPI_Post("Ticket/Ticket_AssignTo_Update", { lstTicket: lstSelectedRow, objUser });
          if (res > 0) {
            this.service.showMessage(AlertType.Success, this.service.Translator.instant("msgTicketPickedUp"));
            this.AssignCurrentUser();
          } else {
            this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
          }
          this.service.App.ShowLoader = false;
        } catch (e) {
          this.service.App.ShowLoader = false;
        }
      } else {
        this.service.showMessage(AlertType.Error, this.service.Translator.instant("msgError"));
      }
    });
  }
  bindTicketAttachment() {
    return __async(this, null, function* () {
      this.Not_AllowedExtensions = this.service.Get_NotAllowedExtensions();
      this.AttachmentList = yield this.service.Data.ExecuteAPI_Post("Ticket/Get_TicketAttachment_ByID", { TicketID: this.TicketID });
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
            let res = yield this.service.Data.ExecuteAPI_Post("Ticket/TicketAttachment_Delete", { TicketAttachmentID: item.TicketAttachmentID, FileName: item.FileName });
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
  FindSolution() {
    this.modalFindSolution.open();
  }
  FindSolutionDone(DisplaySolutionID) {
    return __async(this, null, function* () {
      try {
        this.isLoadingFindSolution = true;
        let res = yield this.service.Data.ExecuteAPI_Post("Dashboard/Get_DescriptionByID", { ModuleType: "solution", ID: DisplaySolutionID });
        if (res) {
          this.TicketForm.controls["SolutionDescription"].setValue(res.Description);
          $("#txtSolDesc").data("kendoEditor").refresh();
          $("#txtSolDesc").data("kendoEditor").value(res.Description);
        }
        this.isLoadingFindSolution = false;
      } catch (e) {
        this.isLoadingFindSolution = false;
      }
    });
  }
  show_chat(is_show = true) {
    this.is_show_chat = is_show;
  }
  bind_chats(item = null) {
    return __async(this, null, function* () {
      try {
        if (item) {
          this.chat_list.splice(0, 0, item);
          let elem = document.querySelector(".ticket-chat .table-responsive");
          if (elem) {
            this.service.GoTo_ScrollTop(elem);
          }
        } else {
          this.chat_list = yield this.service.Data.ExecuteAPI_Post("Ticket/Get_TicketChat", { TicketID: this.TicketID });
        }
      } catch (e) {
      }
    });
  }
  save_chat() {
    return __async(this, null, function* () {
      try {
        if (this.txt_chat) {
          this.is_loading_chat = true;
          let obj = { TicketID: this.TicketID, Description: this.txt_chat };
          let res = yield this.service.Data.ExecuteAPI_Post("Ticket/TicketChat_Update", { model: obj });
          this.txt_chat = "";
          this.is_loading_chat = false;
        }
      } catch (e) {
        this.is_loading_chat = false;
      }
    });
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
      UserSelect: [{ type: ViewChild, args: [User_Technician_ListComponent] }],
      modalFindSolution: [{ type: ViewChild, args: [Solution_Find_ListComponent] }],
      dueDate: [{ type: ViewChild, args: ["dueDate"] }],
      inpfocus: [{ type: ViewChild, args: ["focus"] }],
      modalCloseTicket: [{ type: ViewChild, args: ["modalCloseTicket"] }],
      flAttachment: [{ type: ViewChild, args: ["flAttachment"] }]
    };
  }
};
Ticket_DetailComponent = __decorate([
  Component({
    template: ticket_detail_default,
    providers: [FocusInvalidDirective]
  })
], Ticket_DetailComponent);

// src/app/ticket/ticket.module.ts
var routes = [
  { path: "", component: Ticket_ListComponent, data: { pageProp: "Show_Ticket_Menu" }, canActivate: [AuthGuard] },
  { path: "add", component: Ticket_NewComponent, data: { pageProp: "Is_Add_Ticket" }, canActivate: [AuthGuard] },
  { path: "detail/:id", component: Ticket_DetailComponent, data: { pageProp: "Is_Edit_Ticket" }, canActivate: [AuthGuard] }
];
var TicketModule = class TicketModule2 {
};
TicketModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [Ticket_ListComponent, Ticket_NewComponent, Ticket_DetailComponent]
  })
], TicketModule);
export {
  TicketModule
};
//# sourceMappingURL=ticket.module-W3Z2GT7X.js.map
