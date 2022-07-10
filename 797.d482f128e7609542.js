"use strict";(self.webpackChunkMssp_WebUI=self.webpackChunkMssp_WebUI||[]).push([[797],{8797:(b,x,a)=>{a.r(x),a.d(x,{MerchantModule:()=>j});var p=a(6379),g=a(4521),t=a(5e3),f=a(9247),c=a(5188),m=a(9808),l=a(7423),v=a(5245),I=a(7238);const S=function(n,s,e){return{"text-xs py-0.5 px-3":n,"text-md py-1 px-3.5":s,"text-lg py-2 px-5":e}};let C=(()=>{class n{constructor(){this.description="",this.lightMode=!1,this.title="",this.bgColorCssClass="bg-black",this.txtColorCssClass="text-white"}ngOnInit(){switch(this.status){case 0:this.title="Active",this.bgColorCssClass=this.lightMode?"bg-green-200":"bg-green-600",this.txtColorCssClass=this.lightMode?"text-green-800":this.txtColorCssClass;break;case 1:this.title="Stopped/Suspected",this.bgColorCssClass=this.lightMode?"bg-orange-200":"bg-orange-400",this.txtColorCssClass=this.lightMode?"text-orange-800":this.txtColorCssClass;break;case 2:this.title="Blocked",this.bgColorCssClass=this.lightMode?"bg-red-200":"bg-red-800",this.txtColorCssClass=this.lightMode?"text-red-800":this.txtColorCssClass;break;case 3:this.title="Closed",this.bgColorCssClass=this.lightMode?"bg-pink-200":"bg-pink-800",this.txtColorCssClass=this.lightMode?"text-pink-800":this.txtColorCssClass;break;default:this.title="Infinity",this.bgColorCssClass=this.lightMode?"bg-gray-200":"bg-gray-400",this.txtColorCssClass=this.lightMode?"text-gray-700":this.txtColorCssClass}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["merchant-status"]],inputs:{status:"status",description:"description",size:"size",lightMode:"lightMode"},decls:3,vars:11,consts:[[3,"matTooltip","ngClass"]],template:function(e,i){1&e&&(t.TgZ(0,"span",0)(1,"span"),t._uU(2),t.qZA()()),2&e&&(t.Tol("inline-flex items-center rounded-full tracking-wide font-semibold "+i.bgColorCssClass),t.Q6J("matTooltip",i.description)("ngClass",t.kEZ(7,S,"sm"==i.size,"md"==i.size,"lg"==i.size)),t.xp6(1),t.Tol("leading-relaxed whitespace-nowrap "+i.txtColorCssClass),t.xp6(1),t.Oqu(i.title))},directives:[I.gM,m.mk],encapsulation:2}),n})();var M=a(773);function U(n,s){1&n&&(t.ynx(0),t.TgZ(1,"div",19)(2,"div",20)(3,"div",21),t._uU(4,"Teminal Information"),t.qZA(),t._UZ(5,"div",22),t.TgZ(6,"div",23),t._UZ(7,"mat-icon",24),t.TgZ(8,"div",25),t._uU(9),t.qZA()(),t.TgZ(10,"div",26),t._UZ(11,"mat-icon",24),t.TgZ(12,"div",25),t._uU(13),t.qZA()(),t.TgZ(14,"div",26),t._UZ(15,"mat-icon",24),t.TgZ(16,"div",25),t._uU(17),t.qZA()(),t.TgZ(18,"div",26),t._UZ(19,"mat-icon",24),t.TgZ(20,"div",25),t._uU(21),t.qZA()()()(),t.BQk()),2&n&&(t.xp6(7),t.Q6J("svgIcon","heroicons_outline:library"),t.xp6(2),t.hij("Terminal ID: ","-- Value --",""),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:user-circle"),t.xp6(2),t.hij("Profile: ","-- Value --",""),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:credit-card"),t.xp6(2),t.hij("Description: ","-- Value --",""),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:archive"),t.xp6(2),t.hij("Status: ","-- Value --",""))}const A=function(){return[0,1,2,3,4]};function L(n,s){1&n&&(t.TgZ(0,"div",16)(1,"div",17),t.YNc(2,U,22,8,"ng-container",18),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngForOf",t.DdM(1,A)))}function w(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div")(2,"div",4)(3,"button",5),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).backToMerchantsList()}),t._UZ(4,"mat-icon",6),t.qZA(),t.TgZ(5,"h2",7),t._uU(6),t.qZA(),t._UZ(7,"merchant-status",8),t.qZA()(),t.TgZ(8,"div",9)(9,"div",10)(10,"span",11),t._uU(11,"Merchant Details"),t.qZA()(),t.TgZ(12,"div")(13,"div",12)(14,"div",13),t._uU(15,"Merchant Name"),t.qZA(),t.TgZ(16,"div",14),t._uU(17),t.qZA()(),t.TgZ(18,"div",12)(19,"div",13),t._uU(20,"Merchant ID"),t.qZA(),t.TgZ(21,"div",14),t._uU(22),t.qZA()(),t.TgZ(23,"div",12)(24,"div",13),t._uU(25,"Terminal ID"),t.qZA(),t.TgZ(26,"div",14),t._uU(27),t.qZA()(),t.TgZ(28,"div",12)(29,"div",13),t._uU(30,"MCC"),t.qZA(),t.TgZ(31,"div",14),t._uU(32),t.qZA()(),t.TgZ(33,"div",12)(34,"div",13),t._uU(35,"Client Name"),t.qZA(),t.TgZ(36,"div",14),t._uU(37),t.qZA()(),t.TgZ(38,"div",12)(39,"div",13),t._uU(40,"Country"),t.qZA(),t.TgZ(41,"div",14),t._uU(42),t.qZA()(),t.TgZ(43,"div",12)(44,"div",13),t._uU(45,"Certificate Issuer"),t.qZA(),t.TgZ(46,"div",14),t._uU(47),t.qZA()()()(),t.YNc(48,L,3,2,"div",15),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(6),t.Oqu(e.merchant.netName),t.xp6(1),t.Q6J("description",e.merchant.statusCodeDesc)("status",e.merchant.statusCode),t.xp6(10),t.Oqu(e.merchant.netName),t.xp6(5),t.Oqu(e.merchant.merchantId),t.xp6(5),t.Oqu("-- Value --"),t.xp6(5),t.Oqu(e.merchant.mccDesc),t.xp6(5),t.Oqu(e.merchant.clientLegalName),t.xp6(5),t.Oqu(e.merchant.countryCodeDesc),t.xp6(5),t.Oqu("-- Value --"),t.xp6(1),t.Q6J("ngIf",!1)}}function F(n,s){if(1&n&&(t.ynx(0),t.YNc(1,w,49,11,"ng-container",1),t.BQk()),2&n){const e=t.oxw(),i=t.MAs(5);t.xp6(1),t.Q6J("ngIf",e.merchant)("ngIfElse",i)}}function D(n,s){1&n&&(t.TgZ(0,"div",27),t._UZ(1,"mat-spinner"),t.qZA())}function O(n,s){1&n&&(t.TgZ(0,"div",28),t._UZ(1,"mat-icon",29),t.TgZ(2,"div",30),t._uU(3,"There is no any data to show!"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:file_hide"))}let q=(()=>{class n{constructor(e,i,o,r){var d,u,_;this._merchantClient=e,this._uiService=i,this._route=o,this._router=r,this._uiService.changeTitle("Merchant Details"),this.merchantsListState=null===(_=null===(u=null===(d=this._router.getCurrentNavigation())||void 0===d?void 0:d.extras)||void 0===u?void 0:u.state)||void 0===_?void 0:_.merchantsListState}ngOnInit(){this.merchantId=Number(this._route.snapshot.paramMap.get("id")),this.getMerchant()}getMerchant(){this.getMerchantBusy=this._merchantClient.getMerchant(this.merchantId).subscribe(e=>{this.merchant=e})}backToMerchantsList(){this._router.navigate(["/merchant"],{state:{merchantsListState:this.merchantsListState}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f._o),t.Y36(c.F),t.Y36(g.gz),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["detail-merchant"]],decls:6,vars:2,consts:[[1,"flex","flex-col","min-w-full","min-h-full","p-4","lg:p-8"],[4,"ngIf","ngIfElse"],["merchantDetailLoading",""],["merchantDetailHasNoData",""],[1,"flex","items-center"],["type","button","mat-icon-button","",3,"click"],["svgIcon","mat_solid:west",1,"icon-size-8"],[1,"font-medium","text-2xl","ml-1","mr-3"],["size","md",3,"description","status"],[1,"rounded-2xl","overflow-hidden","mt-8","bg-white","shadow","border","border-gray-200","py-3","px-6"],[1,"py-5"],[1,"font-semibold","text-lg"],[1,"grid","grid-cols-8","py-2"],[1,"col-span-full","sm:col-span-3"],[1,"col-span-full","sm:col-span-5","mt-1","sm:mt-0","font-semibold"],["class","mx-4 sm:mx-10 my-10 max-w-480",4,"ngIf"],[1,"mx-4","sm:mx-10","my-10","max-w-480"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","xl:grid-cols-4","gap-y-10","gap-x-14","md:gap-x-22"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","min-h-80","shadow","rounded-2xl","overflow-hidden","bg-card"],[1,"flex","flex-col","p-6"],[1,"mt-4","text-lg","font-medium"],[1,"w-12","h-1","my-6","border-t-2"],[1,"flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"flex","items-center","leading-5","text-md","text-secondary","mt-4"],[1,"flex","flex-grow","items-center","justify-center","m-8","p-2","bg-blue-100","rounded-2xl"],[1,"flex","flex-col","flex-grow","items-center","justify-center","m-8","p-2","bg-yellow-50","rounded-2xl"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,F,2,2,"ng-container",1),t.YNc(2,D,2,0,"ng-template",null,2,t.W1O),t.YNc(4,O,4,1,"ng-template",null,3,t.W1O),t.qZA()),2&e){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",null==i.getMerchantBusy?null:i.getMerchantBusy.closed)("ngIfElse",o)}},directives:[m.O5,l.lW,v.Hw,C,m.sg,M.$g],encapsulation:2}),n})();var Z=a(3511),h=a(3075),T=a(6087),y=a(7322),z=a(7531);function N(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",15)(2,"div",16),t._UZ(3,"merchant-status",17),t.TgZ(4,"div",18),t._uU(5),t.qZA(),t.TgZ(6,"div",19),t._uU(7),t.qZA(),t._UZ(8,"div",20),t.TgZ(9,"div",21),t._UZ(10,"mat-icon",22),t.TgZ(11,"div",23),t._uU(12),t.qZA()(),t.TgZ(13,"div",24),t._UZ(14,"mat-icon",22),t.TgZ(15,"div",23),t._uU(16),t.qZA()(),t.TgZ(17,"div",24),t._UZ(18,"mat-icon",22),t.TgZ(19,"div",23),t._uU(20),t.qZA()()(),t.TgZ(21,"div",25),t._UZ(22,"div",26)(23,"div",27),t.qZA(),t.TgZ(24,"div",28)(25,"button",29),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(3).goToMerchantDetail(r)}),t.TgZ(26,"span",30)(27,"span"),t._uU(28,"Details"),t.qZA(),t._UZ(29,"mat-icon",31),t.qZA()()()(),t.BQk()}if(2&n){const e=s.$implicit;t.xp6(3),t.Q6J("description",e.statusCodeDesc)("status",e.statusCode),t.xp6(2),t.Oqu(e.netName),t.xp6(2),t.hij("Merchant ID: ",e.merchantId,""),t.xp6(3),t.Q6J("svgIcon","mat_outline:account_circle"),t.xp6(2),t.hij("Client Name: ",e.clientLegalName,""),t.xp6(2),t.Q6J("svgIcon","mat_solid:public"),t.xp6(2),t.Oqu(e.countryCodeDesc),t.xp6(2),t.Q6J("svgIcon","mat_solid:copyright"),t.xp6(2),t.hij("MCC: ",e.mccDesc,""),t.xp6(9),t.Q6J("svgIcon","heroicons_solid:arrow-sm-right")}}function J(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",11),t.YNc(2,N,30,11,"ng-container",12),t.qZA(),t.TgZ(3,"mat-paginator",13,14),t.NdJ("page",function(o){return t.CHM(e),t.oxw(2).pageChanged(o)}),t.qZA(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",null==e.paginatedListOfMerchants?null:e.paginatedListOfMerchants.items),t.xp6(1),t.Q6J("length",e.totalRows)("pageIndex",e.pageIndex)("pageSize",e.pageSize)("pageSizeOptions",e.pageSizeOptions)}}function Q(n,s){if(1&n&&(t.ynx(0),t.YNc(1,J,5,5,"ng-container",8),t.BQk()),2&n){const e=t.oxw(),i=t.MAs(14);t.xp6(1),t.Q6J("ngIf",null==e.paginatedListOfMerchants||null==e.paginatedListOfMerchants.items?null:e.paginatedListOfMerchants.items.length)("ngIfElse",i)}}function B(n,s){1&n&&(t.TgZ(0,"div",32),t._UZ(1,"mat-spinner"),t.qZA())}function E(n,s){1&n&&(t.TgZ(0,"div",33),t._UZ(1,"mat-icon",34),t.TgZ(2,"div",35),t._uU(3,"There is no any data to show!"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:file_hide"))}const Y=[{path:"",component:(()=>{class n{constructor(e,i,o){var r,d,u;this._merchantClient=e,this._uiService=i,this._router=o,this.currentMerchantFilter=[],this.pageSizeOptions=Z.mC,this.pageSize=Z.Je.defaultPageSize,this.totalRows=0,this.pageIndex=0,this.filterForm=new h.cw({search:new h.NI(null)}),this._uiService.changeTitle("Merchants List"),this.merchantsListState=null===(u=null===(d=null===(r=this._router.getCurrentNavigation())||void 0===r?void 0:r.extras)||void 0===d?void 0:d.state)||void 0===u?void 0:u.merchantsListState}ngOnInit(){this.merchantsListState&&(this.merchantsListState.currentMerchantFilter&&(this.currentMerchantFilter=this.merchantsListState.currentMerchantFilter),this.merchantsListState.pageIndex&&(this.pageIndex=this.merchantsListState.pageIndex),this.merchantsListState.pageSize&&(this.pageSize=this.merchantsListState.pageSize)),this.getMerchants(),this.getMerchantsFiltrationConfiguration()}getMerchants(){this.getMerchantsBusy=this._merchantClient.getMerchants({pageNumber:this.pageIndex+1,pageSize:this.pageSize,filters:this.currentMerchantFilter}).subscribe(i=>{this.paginatedListOfMerchants=i,this.totalRows=this.paginatedListOfMerchants.totalCount,this.pageIndex=this.paginatedListOfMerchants.pageIndex-1})}getMerchantsFiltrationConfiguration(){this.getMerchantsFiltrationConfigurationBusy=this._merchantClient.getMerchantsFiltrationConfiguration().subscribe(e=>{this.merchantsFiltrationConfiguration=e})}getCurrentMerchantFilters(){let e=[],i={search:this.filterForm.get("search").value};if(i.search){let o=this.merchantsFiltrationConfiguration.data.find(r=>r.column===f.h2.Merchantid);o.values=[i.search],e.push(o)}return e}goToMerchantDetail(e){this._router.navigate(["/merchant",e.id],{state:{merchantsListState:{currentMerchantFilter:this.currentMerchantFilter,pageIndex:this.pageIndex,pageSize:this.pageSize}}})}pageChanged(e){this.pageIndex=e.pageIndex,this.pageSize=e.pageSize,this.getMerchants()}search(){this.searchButtonDisabled||(this.pageIndex=0,this.currentMerchantFilter=this.getCurrentMerchantFilters(),this.getMerchants())}get searchButtonDisabled(){return this.filterForm.invalid||this.getMerchantsBusy&&!this.getMerchantsBusy.closed||this.getMerchantsFiltrationConfigurationBusy&&!this.getMerchantsFiltrationConfigurationBusy.closed}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f._o),t.Y36(c.F),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["list-merchant"]],viewQuery:function(e,i){if(1&e&&t.Gf(T.NW,5),2&e){let o;t.iGM(o=t.CRH())&&(i.paginator=o.first)}},decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","py-5","px-4","sm:py-6","sm:px-5"],[1,"flex","items-center","justify-between","flex-wrap"],[1,"text-xl","font-semibold"],[1,"flex-grow","ml-2","sm:flex-grow-0","sm:ml-0",3,"formGroup","ngSubmit"],[1,"fuse-mat-no-subscript","form-field-rounded","form-field-less-padding","w-full","sm:w-72","md:w-80","lg:w-90"],["type","text","matInput","","formControlName","search","placeholder","Search by Merchant ID"],["type","submit","mat-icon-button","","matSuffix","",3,"disabled"],["svgIcon","heroicons_solid:search"],[4,"ngIf","ngIfElse"],["mainTableLoading",""],["mainTableHasNoData",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","xl:grid-cols-4","gap-8","my-8","sm:my-10"],[4,"ngFor","ngForOf"],["showFirstLastButtons","true",1,"merchant-paginator",3,"length","pageIndex","pageSize","pageSizeOptions","page"],["paginator",""],[1,"flex","flex-col","min-h-80","shadow","rounded-2xl","overflow-hidden","bg-card"],[1,"flex","flex-col","flex-grow","p-6"],["size","sm","lightMode","true",3,"description","status"],[1,"mt-4","text-lg","font-medium"],[1,"mt-0.5","line-clamp-2","text-secondary"],[1,"w-14","h-0.5","bg-gray-100","mt-4","mb-9"],[1,"flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"flex","items-center","leading-5","text-md","text-secondary","mt-4"],[1,"relative","overflow-hidden"],[1,"bg-blue-200","h-0.5"],[1,"bg-blue-600","h-0.5","w-1/4","absolute","top-0","left-10"],[1,"px-6","py-4","text-right","bg-gray-50"],["mat-stroked-button","","type","button",3,"click"],[1,"inline-flex","items-center"],[1,"ml-1.5","icon-size-5",3,"svgIcon"],[1,"flex","flex-grow","items-center","justify-center","m-8","p-2","bg-blue-100","rounded-2xl"],[1,"flex","flex-col","flex-grow","items-center","justify-center","m-8","p-2","bg-yellow-50","rounded-2xl"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"span",2),t._uU(4,"Merchants"),t.qZA()(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return i.search()}),t.TgZ(6,"mat-form-field",4),t._UZ(7,"input",5),t.TgZ(8,"button",6),t._UZ(9,"mat-icon",7),t.qZA()()()(),t.YNc(10,Q,2,2,"ng-container",8),t.YNc(11,B,2,0,"ng-template",null,9,t.W1O),t.YNc(13,E,4,1,"ng-template",null,10,t.W1O),t.qZA()),2&e){const o=t.MAs(12);t.xp6(5),t.Q6J("formGroup",i.filterForm),t.xp6(3),t.Q6J("disabled",i.searchButtonDisabled),t.xp6(2),t.Q6J("ngIf",null==i.getMerchantsBusy?null:i.getMerchantsBusy.closed)("ngIfElse",o)}},directives:[h._Y,h.JL,h.sg,y.KE,z.Nt,h.Fj,h.JJ,h.u,l.lW,y.R9,v.Hw,m.O5,m.sg,C,T.NW,M.$g],encapsulation:2}),n})()},{path:":id",component:q}];let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(Y)],g.Bz]}),n})(),j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[k,p.m]]}),n})()},5188:(b,x,a)=>{a.d(x,{F:()=>f});var p=a(5e3),g=a(3511),t=a(2313);let f=(()=>{class c{constructor(l){this.titleService=l,this.titleChange=new p.vpe,this.titleState={sectionTitle:"",pageTitle:g.iG},this.updateTitleState()}changeTitle(l){this.titleState={sectionTitle:l,pageTitle:`${l} - ${g.iG}`},this.updateTitleState()}updateTitleState(){this.titleService.setTitle(this.titleState.pageTitle),this.titleChange.emit(this.titleState)}}return c.\u0275fac=function(l){return new(l||c)(p.LFG(t.Dx))},c.\u0275prov=p.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);