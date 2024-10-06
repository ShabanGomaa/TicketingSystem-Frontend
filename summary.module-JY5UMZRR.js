import {
  CommonModule,
  Component,
  NgModule,
  RouterModule,
  SharedModule,
  SystemService,
  ViewChild,
  __async,
  __decorate
} from "./chunk-5SYOLY5Z.js";

// angular:jit:template:file:src\app\summary\summary.html
var summary_default = `\uFEFF\r
<div class="main-panel" style="width:100%;">\r
    <div class="row breadcrumb">\r
        <div class="col-12">\r
            <a class="link">{{'lblHome'| translate:service.CL}}</a> <i class="fa fa-angle-double-right"></i><span> {{'lblSummary'| translate:service.CL}}</span>\r
        </div>\r
    </div>\r
    <div class="content-wrapper">\r
        <div class="row">\r
            <div class="col-lg-6 grid-margin">\r
                <div class="card full-height">\r
                    <div class="card-title">\r
                        <div>{{'lblRequestsBy'| translate:service.CL}} {{'lbl' + ddlRequestType | translate:service.CL}}</div>\r
                        <div class="table-filter summary">\r
                            <div class="input-group datepicker mr-2 ml-1">\r
                                <ng2-flatpickr #stDate_Req_By [config]="dtStart_Req_By_Config" altInputClass="form-control"></ng2-flatpickr>\r
                            </div>\r
                            <span class="font-13">{{'lblTo'| translate:service.CL}}</span>\r
                            <div class="input-group datepicker ml-2 mr-1">\r
                                <ng2-flatpickr #edDate_Req_By [config]="dtEnd_Req_By_Config" altInputClass="form-control"></ng2-flatpickr>\r
                            </div>\r
                            <select class="form-control custom-select" [(ngModel)]="ddlRequestType" (change)="ddlRequestType_Change()">\r
                                <option value="Agent" selected>{{'lblAgent'| translate:service.CL}}</option>\r
                                <option value="Status">{{'lblStatus'| translate:service.CL}}</option>\r
                                <option value="Category">{{'lblCategory'| translate:service.CL}}</option>\r
                                <option value="Priority">{{'lblPriority'| translate:service.CL}}</option>\r
                                <option value="Level">{{'lblLevel'| translate:service.CL}}</option>\r
                                <option value="Mode">{{'lblMode'| translate:service.CL}}</option>\r
                                <option value="Department">{{'lblDepartment'| translate:service.CL}}</option>\r
                                <option value="Location">{{'lblLocation'| translate:service.CL}}</option>\r
                            </select>\r
                        </div>\r
                    </div>\r
                    <div class="card-body min-height">\r
                        <!--Start Common Grid-->\r
                        <div style="position:relative;">\r
                            <commongrid *ngIf="lst_TicketCount_ByType_Model?.length > 0" [records]="lst_TicketCount_ByType_Model" [gridfilter]="gridFilter"\r
                                        [pagesize]="10" [ShowSorting]="true" [PagingType]="'nextprevnumberadvanced'">\r
                            </commongrid>\r
                            <div *ngIf="!isLoading && lst_TicketCount_ByType_Model.length == 0">\r
                                <span>{{'lblNoData'| translate:service.CL}}</span>\r
                            </div>\r
                        </div>\r
                        <div *ngIf="isLoading" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="col-lg-6 grid-margin">\r
                <div class="card full-height">\r
                    <div class="card-title">\r
                        <div>{{'lblRequestSummary'| translate:service.CL}}</div>\r
                        <div class="table-filter summary">\r
                            <div class="dropdown mr-1">\r
                                <button type="button" class="btn btn-sm btn-secondary ml-1" title="Chart" id="export" data-toggle="dropdown" aria-expanded="false">\r
                                    <i class="fa fa-chart-bar"></i> <i class="fa fa-angle-down ml-1"></i>\r
                                </button>\r
                                <div class="dropdown-menu cursor font-13">\r
                                    <div class="dropdown-item" [class.active]="ddlChartSummary=='column2d'" (click)="ddlChartSummary='column2d';ddlChartSummary_Change()">{{'lblColumnChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartSummary=='stackedcolumn2d'" (click)="ddlChartSummary='stackedcolumn2d';ddlChartSummary_Change()">{{'lblStackedColumnChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartSummary=='bar2d'" (click)="ddlChartSummary='bar2d';ddlChartSummary_Change()">{{'lblBarChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartSummary=='stackedbar2d'" (click)="ddlChartSummary='stackedbar2d';ddlChartSummary_Change()">{{'lblStackedBarChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartSummary=='line'" (click)="ddlChartSummary='line';ddlChartSummary_Change()">{{'lblLineChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartSummary=='radar'" (click)="ddlChartSummary='radar';ddlChartSummary_Change()">{{'lblRadarChart'| translate:service.CL}}</div>\r
                                </div>\r
                            </div>\r
                            <select class="form-control custom-select" [(ngModel)]="ddlTicketSummary" (change)="ddlTicketSummary_Change()">\r
                                <option value="thisweek" selected>{{'lblThisWeek'| translate:service.CL}}</option>\r
                                <option value="lastweek">{{'lblLastWeek'| translate:service.CL}}</option>\r
                                <option value="thismonth">{{'lblThisMonth'| translate:service.CL}}</option>\r
                                <option value="lastmonth">{{'lblLastMonth'| translate:service.CL}}</option>\r
                                <option value="thisyear">{{'lblThisYear'| translate:service.CL}}</option>\r
                                <option value="lastyear">{{'lblLastYear'| translate:service.CL}}</option>\r
                            </select>\r
                        </div>\r
                    </div>\r
                    <div class="card-body overflow_chart min-height">\r
                        <div *ngIf="lst_TicketSummary_ByType_Model?.length > 0">\r
                            <canvas baseChart #columnChart="base-chart" height="350"\r
                                    [datasets]="ColumnChartData"\r
                                    [labels]="ColumnChartLabels"\r
                                    [options]="columnChartOptions"\r
                                    [chartType]="chartType"\r
                                    [colors]="fixBarColors"></canvas>\r
\r
                        </div>\r
                        <div *ngIf="isLoading_summary" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="row">\r
            <div class="col-lg-6 grid-margin">\r
                <div class="card full-height">\r
                    <div class="card-title">\r
                        <div>{{'lblTicketsReceivedInLast'| translate:service.CL}} {{ddlReceived_Days}} {{'lblDays'| translate:service.CL}}</div>\r
                        <div class="table-filter summary">\r
                            <div class="dropdown mr-1">\r
                                <button type="button" class="btn btn-sm btn-secondary ml-1" title="Chart" id="export" data-toggle="dropdown" aria-expanded="false">\r
                                    <i class="fa fa-chart-bar"></i> <i class="fa fa-angle-down ml-1"></i>\r
                                </button>\r
                                <div class="dropdown-menu cursor font-13">\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Received=='column2d'" (click)="ddlChartType_Received='column2d';ddlChartReceived_Days_Change()">{{'lblColumnChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Received=='stackedcolumn2d'" (click)="ddlChartType_Received='stackedcolumn2d';ddlChartReceived_Days_Change()">{{'lblStackedColumnChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Received=='bar2d'" (click)="ddlChartType_Received='bar2d';ddlChartReceived_Days_Change()">{{'lblBarChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Received=='stackedbar2d'" (click)="ddlChartType_Received='stackedbar2d';ddlChartReceived_Days_Change()">{{'lblStackedBarChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Received=='line'" (click)="ddlChartType_Received='line';ddlChartReceived_Days_Change()">{{'lblLineChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Received=='radar'" (click)="ddlChartType_Received='radar';ddlChartReceived_Days_Change()">{{'lblRadarChart'| translate:service.CL}}</div>\r
                                </div>\r
                            </div>\r
                            <select class="form-control custom-select" [(ngModel)]="ddlReceived_Days" (change)="ddlReceived_Days_Change()">\r
                                <option value="10" selected>{{'lblLast10Days'| translate:service.CL}}</option>\r
                                <option value="20">{{'lblLast20Days'| translate:service.CL}}</option>\r
                                <option value="30">{{'lblLast30Days'| translate:service.CL}}</option>\r
                            </select>\r
                        </div>\r
                    </div>\r
                    <div class="card-body overflow_chart min-height">\r
                        <div *ngIf="lst_TicketReceived_ByDays_Model?.length > 0">\r
                            <canvas baseChart #columnChart_Received="base-chart" height="350"\r
                                    [datasets]="TicketReceivedChartData"\r
                                    [labels]="ColumnChartLabels_Received"\r
                                    [options]="columnChartOptions_Received"\r
                                    [chartType]="chartType_Received"\r
                                    [colors]="fixBarColors"></canvas>\r
                        </div>\r
                        <div *ngIf="isLoading_Received" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="col-lg-6 grid-margin">\r
                <div class="card full-height">\r
                    <div class="card-title">\r
                        <div>{{'lblTicketsClosedInLast'| translate:service.CL}} {{ddlClosed_Days}} {{'lblDays'| translate:service.CL}}</div>\r
                        <div class="table-filter summary">\r
                            <div class="dropdown mr-1">\r
                                <button type="button" class="btn btn-sm btn-secondary ml-1" title="Chart" id="export" data-toggle="dropdown" aria-expanded="false">\r
                                    <i class="fa fa-chart-bar"></i> <i class="fa fa-angle-down ml-1"></i>\r
                                </button>\r
                                <div class="dropdown-menu cursor font-13">\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Closed=='column2d'" (click)="ddlChartType_Closed='column2d';ddlChartClosed_Days_Change()">{{'lblColumnChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Closed=='stackedcolumn2d'" (click)="ddlChartType_Closed='stackedcolumn2d';ddlChartClosed_Days_Change()">{{'lblStackedColumnChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Closed=='bar2d'" (click)="ddlChartType_Closed='bar2d';ddlChartClosed_Days_Change()">{{'lblBarChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Closed=='stackedbar2d'" (click)="ddlChartType_Closed='stackedbar2d';ddlChartClosed_Days_Change()">{{'lblStackedBarChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Closed=='line'" (click)="ddlChartType_Closed='line';ddlChartClosed_Days_Change()">{{'lblLineChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartType_Closed=='radar'" (click)="ddlChartType_Closed='radar';ddlChartClosed_Days_Change()">{{'lblRadarChart'| translate:service.CL}}</div>\r
                                </div>\r
                            </div>\r
                            <select class="form-control custom-select" [(ngModel)]="ddlClosed_Days" (change)="ddlClosed_Days_Change()">\r
                                <option value="10" selected>{{'lblLast10Days'| translate:service.CL}}</option>\r
                                <option value="20">{{'lblLast20Days'| translate:service.CL}}</option>\r
                                <option value="30">{{'lblLast30Days'| translate:service.CL}}</option>\r
                            </select>\r
                        </div>\r
                    </div>\r
                    <div class="card-body overflow_chart min-height">\r
                        <div *ngIf="lst_TicketClosed_ByDays_Model?.length > 0">\r
                            <canvas baseChart #columnChart_Closed="base-chart" height="350"\r
                                    [datasets]="TicketClosedChartData"\r
                                    [labels]="ColumnChartLabels_Closed"\r
                                    [options]="columnChartOptions_Closed"\r
                                    [chartType]="chartType_Closed"\r
                                    [colors]="fixBarColors"></canvas>\r
\r
                        </div>\r
                        <div *ngIf="isLoading_Closed" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </div>\r
\r
        <div class="row">\r
            <div class="col-lg-6 grid-margin">\r
                <div class="card full-height">\r
                    <div class="card-title">\r
                        <div>{{'lblOpenTicketBy'| translate:service.CL}} {{'lbl' + ddlOpenTicketType | translate:service.CL}}</div>\r
                        <div class="table-filter summary">\r
                            <div class="input-group datepicker mr-2 ml-1">\r
                                <ng2-flatpickr #stDate_OpT [config]="dtStart_OpT_Config" altInputClass="form-control"></ng2-flatpickr>\r
                            </div>\r
                            <span class="font-13">{{'lblTo'| translate:service.CL}}</span>\r
                            <div class="input-group datepicker ml-2 mr-1">\r
                                <ng2-flatpickr #edDate_OpT [config]="dtStart_OpT_Config" altInputClass="form-control"></ng2-flatpickr>\r
                            </div>\r
\r
                            <div class="dropdown mr-1">\r
                                <button type="button" class="btn btn-sm btn-secondary ml-1" title="Chart" id="export" data-toggle="dropdown" aria-expanded="false">\r
                                    <i class="fa fa-chart-bar"></i> <i class="fa fa-angle-down ml-1"></i>\r
                                </button>\r
                                <div class="dropdown-menu cursor font-13">\r
                                    <div class="dropdown-item" [class.active]="ddlChartOpenTicket=='pie'" (click)="ddlChartOpenTicket='pie';ddlChartOpenTicket_Change()">{{'lblPieChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartOpenTicket=='donut'" (click)="ddlChartOpenTicket='donut';ddlChartOpenTicket_Change()">{{'lblDonutChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartOpenTicket=='column2d'" (click)="ddlChartOpenTicket='column2d';ddlChartOpenTicket_Change()">{{'lblColumnChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartOpenTicket=='bar2d'" (click)="ddlChartOpenTicket='bar2d';ddlChartOpenTicket_Change()">{{'lblBarChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartOpenTicket=='line'" (click)="ddlChartOpenTicket='line';ddlChartOpenTicket_Change()">{{'lblLineChart'| translate:service.CL}}</div>\r
                                    <div class="dropdown-item" [class.active]="ddlChartOpenTicket=='radar'" (click)="ddlChartOpenTicket='radar';ddlChartOpenTicket_Change()">{{'lblRadarChart'| translate:service.CL}}</div>\r
                                </div>\r
                            </div>\r
                            <select class="form-control custom-select" [(ngModel)]="ddlOpenTicketType" (change)="ddlOpenTicketType_Change()">\r
                                <option value="Status">{{'lblStatus'| translate:service.CL}}</option>\r
                                <option value="Category">{{'lblCategory'| translate:service.CL}}</option>\r
                                <option value="Priority">{{'lblPriority'| translate:service.CL}}</option>\r
                                <option value="Level">{{'lblLevel'| translate:service.CL}}</option>\r
                                <option value="Mode">{{'lblMode'| translate:service.CL}}</option>\r
                                <option value="Department">{{'lblDepartment'| translate:service.CL}}</option>\r
                                <option value="Location">{{'lblLocation'| translate:service.CL}}</option>\r
                            </select>\r
                        </div>\r
                    </div>\r
                    <div class="card-body overflow_chart min-height">\r
                        <div *ngIf="lst_OpenTicket_ByType_Model?.length > 1">\r
                            <canvas baseChart #OpenTicketChart="base-chart" height="350"\r
                                    [datasets]="OpenTicketChartData"\r
                                    [labels]="OpenTicketChartLabels"\r
                                    [options]="OpenTicketChartOptions"\r
                                    [chartType]="chartType_OpenTicket"></canvas>\r
                        </div>\r
                        <div class="nodata border-0" *ngIf="!isLoading_OpTicket && lst_OpenTicket_ByType_Model?.length <= 1">\r
                            <span>{{'lblNoData'| translate:service.CL}}</span>\r
                        </div>\r
                        <div *ngIf="isLoading_OpTicket" class="overlay-inner">\r
                            <i class="fa fa-circle-notch fa-spin"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`;

// src/app/summary/summary.ts
var summaryComponent = class summaryComponent2 {
  constructor(service) {
    this.service = service;
    this.isLoading = false;
    this.fixBarColors = this.service.Get_FixBarColors();
    this.account = this.service.Account;
    this.dtStart_Req_By_Config = this.service.CommonDateConfig();
    this.dtEnd_Req_By_Config = this.service.CommonDateConfig();
    this.lst_TicketCount_ByType_Model = [];
    this.ddlRequestType = "Agent";
    this.gridFilter = [];
    this.isLoading_summary = false;
    this.lst_TicketSummary_ByType_Model = [];
    this.ddlTicketSummary = "thisweek";
    this.ddlChartSummary = "column2d";
    this.chartType = "ColumnChart";
    this.isStacked = false;
    this.is3D = false;
    this.ColumnChartLabels = [];
    this.columnChartOptions = {};
    this.columnChartLegend = true;
    this.isLoading_Received = false;
    this.ddlReceived_Days = 10;
    this.lst_TicketReceived_ByDays_Model = [];
    this.isStacked_Received = false;
    this.chartType_Received = "ColumnChart";
    this.ddlChartType_Received = "column2d";
    this.ColumnChartLabels_Received = [];
    this.columnChartOptions_Received = {};
    this.columnChartLegend_Received = true;
    this.isLoading_Closed = false;
    this.ddlClosed_Days = 10;
    this.lst_TicketClosed_ByDays_Model = [];
    this.isStacked_Closed = false;
    this.chartType_Closed = "ColumnChart";
    this.ddlChartType_Closed = "column2d";
    this.ColumnChartLabels_Closed = [];
    this.columnChartOptions_Closed = {};
    this.columnChartLegend_Closed = true;
    this.dtStart_OpT_Config = this.service.CommonDateConfig();
    this.dtEnd_OpT_Config = this.service.CommonDateConfig();
    this.isLoading_OpTicket = false;
    this.lst_OpenTicket_ByType_Model = [];
    this.ddlOpenTicketType = "Status";
    this.ddlChartOpenTicket = "pie";
    this.isStacked_OpenTicket = false;
    this.OpenTicketChartLabels = [];
    this.OpenTicketChartOptions = {};
    this.OpenTicketChartLegend = true;
    this.gridFilter.push({ DisplayText: "lblName", ColumnName: "Name", Type: "string", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblOpen", ColumnName: "OpenTickets", Type: "number", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblCompleted", ColumnName: "ClosedTickets", Type: "number", Is_Visible: true });
    this.gridFilter.push({ DisplayText: "lblOverDue", ColumnName: "OverDueTickets", Type: "number", Is_Visible: true });
    var cdt = /* @__PURE__ */ new Date();
    cdt.setMonth(cdt.getMonth() - 1);
    this.fromDt_type = this.fromDt_OpT_type = this.service.Date_Format(cdt, "yyyy-MM-dd");
    this.toDt_type = this.toDt_OpT_type = this.service.Date_Format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  }
  ngOnInit() {
    this.bindTicketCount_ByType();
    this.bindTicketSummary_ByType();
    this.bindTicketReceived_ByDays();
    this.bindTicketClosed_ByDays();
    this.bindOpenTicket_ByType();
    window.setTimeout(() => {
      this.SetDateOptions();
    }, 10);
    this.account = this.service.Account;
  }
  SetDateOptions() {
    this.stDate_Req_By.flatpickr.setDate(this.fromDt_type);
    this.stDate_Req_By.flatpickr.set("onChange", (dtarr, dt, instance) => {
      this.fromDt_type = dt;
      this.bindTicketCount_ByType(true);
    });
    this.edDate_Req_By.flatpickr.setDate(this.toDt_type);
    this.edDate_Req_By.flatpickr.set("onChange", (dtarr, dt, instance) => {
      this.toDt_type = dt;
      this.bindTicketCount_ByType(true);
    });
    this.stDate_OpT.flatpickr.setDate(this.fromDt_OpT_type);
    this.stDate_OpT.flatpickr.set("onChange", (dtarr, dt, instance) => {
      this.fromDt_OpT_type = dt;
      this.bindOpenTicket_ByType();
    });
    this.edDate_OpT.flatpickr.setDate(this.toDt_OpT_type);
    this.edDate_OpT.flatpickr.set("onChange", (dtarr, dt, instance) => {
      this.toDt_OpT_type = dt;
      this.bindOpenTicket_ByType();
    });
  }
  bindTicketCount_ByType(isRefresh = false) {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        this.lst_TicketCount_ByType_Model = yield this.service.Data.ExecuteAPI_Post("Summary/Get_TicketCount_ByType", {
          Is_Agent: this.account.Is_Agent,
          Is_Client: this.account.Is_Client,
          Type: this.ddlRequestType,
          FromDate: this.fromDt_type,
          ToDate: this.toDt_type
        });
        if (isRefresh) {
          this.service.App.refreshGrid.emit();
        }
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
      }
    });
  }
  ddlRequestType_Change() {
    this.bindTicketCount_ByType(true);
  }
  bindTicketSummary_ByType() {
    return __async(this, null, function* () {
      try {
        this.isLoading_summary = true;
        this.lst_TicketSummary_ByType_Model = yield this.service.Data.ExecuteAPI_Post("Summary/Get_TicketSummary_ByType", {
          Is_Agent: this.account.Is_Agent,
          Is_Client: this.account.Is_Client,
          Type: this.ddlTicketSummary
        });
        this.DrawChart(this.ddlChartSummary);
        this.isLoading_summary = false;
      } catch (e) {
        this.isLoading_summary = false;
      }
    });
  }
  ddlTicketSummary_Change() {
    this.bindTicketSummary_ByType();
  }
  ddlChartSummary_Change() {
    this.DrawChart(this.ddlChartSummary);
  }
  DrawChart(ddltype) {
    this.isStacked = false;
    if (ddltype == "column2d") {
      this.chartType = "bar";
    } else if (ddltype == "stackedcolumn2d") {
      this.chartType = "bar";
      this.isStacked = true;
    } else if (ddltype == "bar2d") {
      this.chartType = "horizontalBar";
    } else if (ddltype == "stackedbar2d") {
      this.chartType = "horizontalBar";
      this.isStacked = true;
    } else if (ddltype == "line") {
      this.chartType = "line";
    } else if (ddltype == "radar") {
      this.chartType = "radar";
    }
    this.ColumnChartLabels = this.lst_TicketSummary_ByType_Model.map((d) => d.Name);
    if (this.chartType == "radar") {
      this.columnChartOptions = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: "bottom", labels: { fontSize: 14 } },
        tooltips: { mode: "index", intersect: true }
      };
    } else {
      this.columnChartOptions = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: "bottom", labels: { fontSize: 14 } },
        scales: {
          xAxes: [{ ticks: { beginAtZero: true }, stacked: this.isStacked }],
          yAxes: [{ ticks: { beginAtZero: true }, stacked: this.isStacked }]
        },
        tooltips: { mode: "index", intersect: true }
      };
    }
    this.ColumnChartData = [
      { data: this.lst_TicketSummary_ByType_Model.map((d) => d.ReceivedTickets), fill: false, label: this.service.Translator.instant("lblReceived") },
      { data: this.lst_TicketSummary_ByType_Model.map((d) => d.ClosedTickets), fill: false, label: this.service.Translator.instant("lblClosed") },
      { data: this.lst_TicketSummary_ByType_Model.map((d) => d.OverDueTickets), fill: false, label: this.service.Translator.instant("lblOverDue") }
    ];
    if (this.columnChart && this.columnChart.chart) {
      this.columnChart.ngOnDestroy();
      this.columnChart.chartType = this.chartType;
      this.columnChart.labels = this.ColumnChartLabels;
      this.columnChart.options = this.columnChartOptions;
      this.columnChart.chart = this.columnChart.getChartBuilder(this.columnChart.ctx);
    }
  }
  bindTicketReceived_ByDays() {
    return __async(this, null, function* () {
      try {
        this.isLoading_Received = true;
        this.lst_TicketReceived_ByDays_Model = yield this.service.Data.ExecuteAPI_Post("Summary/Get_TicketReceived_ByDays", {
          Is_Agent: this.account.Is_Agent,
          Is_Client: this.account.Is_Client,
          Type: "open",
          Days: this.ddlReceived_Days
        });
        this.DrawChartReceived_ByDays(this.ddlChartType_Received);
        this.isLoading_Received = false;
      } catch (e) {
        this.isLoading_Received = false;
      }
    });
  }
  ddlReceived_Days_Change() {
    this.bindTicketReceived_ByDays();
  }
  ddlChartReceived_Days_Change() {
    this.DrawChartReceived_ByDays(this.ddlChartType_Received);
  }
  DrawChartReceived_ByDays(ddltype) {
    this.isStacked_Received = false;
    if (ddltype == "column2d") {
      this.chartType_Received = "bar";
    } else if (ddltype == "stackedcolumn2d") {
      this.chartType_Received = "bar";
      this.isStacked_Received = true;
    } else if (ddltype == "bar2d") {
      this.chartType_Received = "horizontalBar";
    } else if (ddltype == "stackedbar2d") {
      this.chartType_Received = "horizontalBar";
      this.isStacked_Received = true;
    } else if (ddltype == "line") {
      this.chartType_Received = "line";
    } else if (ddltype == "radar") {
      this.chartType_Received = "radar";
    }
    this.ColumnChartLabels_Received = this.lst_TicketReceived_ByDays_Model.map((d) => d.DayNo.toString());
    this.TicketReceivedChartData = [
      { data: this.lst_TicketReceived_ByDays_Model.map((d) => d.ViolatedTickets), fill: false, label: this.service.Translator.instant("lblViolated") },
      { data: this.lst_TicketReceived_ByDays_Model.map((d) => d.NonViolatedTickets), fill: false, label: this.service.Translator.instant("lblNonViolated") }
    ];
    if (this.chartType_Received == "radar") {
      this.columnChartOptions_Received = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: "bottom", labels: { fontSize: 14 } },
        tooltips: { mode: "index", intersect: true }
      };
    } else {
      this.columnChartOptions_Received = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: "bottom", labels: { fontSize: 14 } },
        scales: {
          xAxes: [{ ticks: { beginAtZero: true }, stacked: this.isStacked_Received }],
          yAxes: [{ ticks: { beginAtZero: true }, stacked: this.isStacked_Received }]
        },
        tooltips: { mode: "index", intersect: true }
      };
    }
    if (this.columnChart_Received && this.columnChart_Received.chart) {
      this.columnChart_Received.ngOnDestroy();
      this.columnChart_Received.chartType = this.chartType_Received;
      this.columnChart_Received.labels = this.ColumnChartLabels_Received;
      this.columnChart_Received.options = this.columnChartOptions_Received;
      this.columnChart_Received.chart = this.columnChart_Received.getChartBuilder(this.columnChart_Received.ctx);
    }
  }
  bindTicketClosed_ByDays() {
    return __async(this, null, function* () {
      try {
        this.isLoading_Closed = true;
        this.lst_TicketClosed_ByDays_Model = yield this.service.Data.ExecuteAPI_Post("Summary/Get_TicketClosed_ByDays", {
          Is_Agent: this.account.Is_Agent,
          Is_Client: this.account.Is_Client,
          Type: "closed",
          Days: this.ddlClosed_Days
        });
        this.DrawChartClosed_ByDays(this.ddlChartType_Closed);
        this.isLoading_Closed = false;
      } catch (e) {
        this.isLoading_Closed = false;
      }
    });
  }
  ddlClosed_Days_Change() {
    this.bindTicketClosed_ByDays();
  }
  ddlChartClosed_Days_Change() {
    this.DrawChartClosed_ByDays(this.ddlChartType_Closed);
  }
  DrawChartClosed_ByDays(ddltype) {
    this.isStacked_Closed = false;
    if (ddltype == "column2d") {
      this.chartType_Closed = "bar";
    } else if (ddltype == "stackedcolumn2d") {
      this.chartType_Closed = "bar";
      this.isStacked_Closed = true;
    } else if (ddltype == "bar2d") {
      this.chartType_Closed = "horizontalBar";
    } else if (ddltype == "stackedbar2d") {
      this.chartType_Closed = "horizontalBar";
      this.isStacked_Closed = true;
    } else if (ddltype == "line") {
      this.chartType_Closed = "line";
    } else if (ddltype == "radar") {
      this.chartType_Closed = "radar";
    }
    this.ColumnChartLabels_Closed = this.lst_TicketClosed_ByDays_Model.map((d) => d.DayNo.toString());
    this.TicketClosedChartData = [
      { data: this.lst_TicketClosed_ByDays_Model.map((d) => d.ViolatedTickets), fill: false, label: this.service.Translator.instant("lblViolated") },
      { data: this.lst_TicketClosed_ByDays_Model.map((d) => d.NonViolatedTickets), fill: false, label: this.service.Translator.instant("lblNonViolated") }
    ];
    if (this.chartType_Closed == "radar") {
      this.columnChartOptions_Closed = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: "bottom", labels: { fontSize: 14 } },
        tooltips: { mode: "index", intersect: true }
      };
    } else {
      this.columnChartOptions_Closed = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: "bottom", labels: { fontSize: 14 } },
        scales: {
          xAxes: [{ ticks: { beginAtZero: true }, stacked: this.isStacked_Closed }],
          yAxes: [{ ticks: { beginAtZero: true }, stacked: this.isStacked_Closed }]
        },
        tooltips: { mode: "index", intersect: true }
      };
    }
    if (this.columnChart_Closed && this.columnChart_Closed.chart) {
      this.columnChart_Closed.ngOnDestroy();
      this.columnChart_Closed.chartType = this.chartType_Closed;
      this.columnChart_Closed.labels = this.ColumnChartLabels_Closed;
      this.columnChart_Closed.options = this.columnChartOptions_Closed;
      this.columnChart_Closed.chart = this.columnChart_Closed.getChartBuilder(this.columnChart_Closed.ctx);
    }
  }
  bindOpenTicket_ByType() {
    return __async(this, null, function* () {
      try {
        this.isLoading_OpTicket = true;
        this.lst_OpenTicket_ByType_Model = yield this.service.Data.ExecuteAPI_Post("Summary/Get_OpenTicket_ByType", {
          Is_Agent: this.account.Is_Agent,
          Is_Client: this.account.Is_Client,
          Type: this.ddlOpenTicketType,
          FromDate: this.fromDt_OpT_type,
          ToDate: this.toDt_OpT_type
        });
        if (this.lst_OpenTicket_ByType_Model.length > 1) {
          this.DrawChartOpenTicket_ByType(this.ddlChartOpenTicket);
        }
        this.isLoading_OpTicket = false;
      } catch (e) {
        this.isLoading_OpTicket = false;
      }
    });
  }
  ddlOpenTicketType_Change() {
    this.bindOpenTicket_ByType();
  }
  ddlChartOpenTicket_Change() {
    this.DrawChartOpenTicket_ByType(this.ddlChartOpenTicket);
  }
  DrawChartOpenTicket_ByType(ddltype) {
    if (ddltype == "pie") {
      this.chartType_OpenTicket = "pie";
    }
    if (ddltype == "pie3d") {
      this.chartType_OpenTicket = "pie";
    } else if (ddltype == "donut") {
      this.chartType_OpenTicket = "doughnut";
    } else if (ddltype == "column2d") {
      this.chartType_OpenTicket = "bar";
    } else if (ddltype == "bar2d") {
      this.chartType_OpenTicket = "horizontalBar";
    } else if (ddltype == "line") {
      this.chartType_OpenTicket = "line";
    } else if (ddltype == "radar") {
      this.chartType_OpenTicket = "radar";
    }
    this.OpenTicketChartLabels = this.lst_OpenTicket_ByType_Model.map((d) => d.Name);
    this.OpenTicketChartData = [{ data: this.lst_OpenTicket_ByType_Model.map((d) => d.Count), fill: false, label: this.service.Translator.instant("lblCount") }];
    if (this.chartType_OpenTicket == "radar" || this.chartType_OpenTicket == "pie" || this.chartType_OpenTicket == "doughnut") {
      this.OpenTicketChartOptions = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: this.service.Is_RTL() ? "left" : "right", labels: { fontSize: 14 } },
        pieceLabel: { render: "value", fontColor: "#fff", fontSize: 13 }
      };
    } else {
      this.OpenTicketChartData[0]["barThickness"] = 20;
      this.OpenTicketChartOptions = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: "bottom", labels: { fontSize: 14 } },
        scales: {
          xAxes: [{ ticks: { beginAtZero: true }, stacked: this.isStacked_OpenTicket }],
          yAxes: [{ ticks: { beginAtZero: true }, stacked: this.isStacked_OpenTicket }]
        },
        pieceLabel: { render: "value", fontColor: "#fff", fontSize: 13 }
      };
    }
    if (this.OpenTicketChart && this.OpenTicketChart.chart) {
      this.OpenTicketChart.ngOnDestroy();
      this.OpenTicketChart.chartType = this.chartType_OpenTicket;
      this.OpenTicketChart.labels = this.OpenTicketChartLabels;
      this.OpenTicketChart.options = this.OpenTicketChartOptions;
      this.OpenTicketChart.chart = this.OpenTicketChart.getChartBuilder(this.OpenTicketChart.ctx);
    }
  }
  static {
    this.ctorParameters = () => [
      { type: SystemService }
    ];
  }
  static {
    this.propDecorators = {
      stDate_Req_By: [{ type: ViewChild, args: ["stDate_Req_By"] }],
      edDate_Req_By: [{ type: ViewChild, args: ["edDate_Req_By"] }],
      columnChart: [{ type: ViewChild, args: ["columnChart"] }],
      columnChart_Received: [{ type: ViewChild, args: ["columnChart_Received"] }],
      columnChart_Closed: [{ type: ViewChild, args: ["columnChart_Closed"] }],
      stDate_OpT: [{ type: ViewChild, args: ["stDate_OpT"] }],
      edDate_OpT: [{ type: ViewChild, args: ["edDate_OpT"] }],
      OpenTicketChart: [{ type: ViewChild, args: ["OpenTicketChart"] }]
    };
  }
};
summaryComponent = __decorate([
  Component({
    template: summary_default
  })
], summaryComponent);

// src/app/summary/summary.module.ts
var routes = [
  { path: "", component: summaryComponent }
];
var SummaryModule = class SummaryModule2 {
};
SummaryModule = __decorate([
  NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
    declarations: [summaryComponent]
  })
], SummaryModule);
export {
  SummaryModule
};
//# sourceMappingURL=summary.module-JY5UMZRR.js.map
