"use strict";(self.webpackChunkMssp_WebUI=self.webpackChunkMssp_WebUI||[]).push([[742],{742:(Z,c,i)=>{i.r(c),i.d(c,{JwtTokenModule:()=>w});var a=i(6379),r=i(4521),t=i(5e3),l=i(2551),u=i(7423),m=i(9808),d=i(5245);function p(o,n){1&o&&(t.TgZ(0,"span",24),t._uU(1,"Copied!"),t.qZA())}function f(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",16)(1,"div",17)(2,"div",18),t._uU(3,"Token"),t.qZA(),t.TgZ(4,"div",19),t._uU(5),t.qZA()(),t.TgZ(6,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().copyToClipboard()}),t._UZ(7,"mat-icon",21),t.TgZ(8,"span",22),t._uU(9,"Copy"),t.qZA(),t.YNc(10,p,2,0,"span",23),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(5),t.Oqu(e.token),t.xp6(1),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:save"),t.xp6(3),t.Q6J("ngIf",e.isCopied)}}function g(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1,"Copied!"),t.qZA())}function x(o,n){if(1&o&&(t.TgZ(0,"div",16)(1,"div",17)(2,"div",18),t._uU(3,"Error getting JWT"),t.qZA(),t.TgZ(4,"div",19),t._uU(5,"Something went wrong getting your access token from the auth service. Please try again."),t.qZA()(),t.YNc(6,g,2,0,"span",25),t.qZA()),2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngIf",e.isCopied)}}const v=function(){return["/"]},T=[{path:"",component:(()=>{class o{constructor(e){this.authorizeService=e}ngOnInit(){this.isCopied=!1,this.authorizeService.getAccessToken().subscribe(e=>{this.token="Bearer "+e,this.isError=!1},e=>{this.isError=!0})}copyToClipboard(){const e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=this.token,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.isCopied=!0}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l._))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-jwt-token-component"]],decls:22,vars:4,consts:[[1,"p-6","max-w-screen"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"flex","items-center"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-green-600","font-medium","text-sm"],["href","https://jwt.io/","target","_blank",2,"color","blue !important"],[1,"ml-auto","-mt-2"],["aria-haspopup","true","mat-icon-button","","ng-reflect-menu","[object Object]",1,"mat-focus-indicator","mat-menu-trigger","mat-icon-button","mat-button-base"],[1,"mat-button-wrapper"],["matripple","","ng-reflect-disabled","false","ng-reflect-centered","true","ng-reflect-trigger","[object HTMLButtonElement]",1,"mat-ripple","mat-button-ripple","mat-button-ripple-round"],[1,"mat-button-focus-overlay"],["class","flex flex-row flex-wrap mt-4 -mx-6",4,"ngIf"],[1,"mt-6","text-center"],[1,"font-medium","underline","text-primary-500",3,"routerLink"],[1,"flex","flex-row","flex-wrap","mt-4","-mx-6"],[1,"flex","flex-col","mx-6","my-3"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"mt-2","font-medium","text-3xl","leading-none"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["class","ml-2","style","margin-left: 5px;",4,"ngIf"],[1,"ml-2",2,"margin-left","5px"],[4,"ngIf"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6,"JWT"),t.qZA(),t.TgZ(7,"div",6),t._uU(8," This component demonstrates interacting with the authorization service to retrieve your "),t.TgZ(9,"a",7),t._uU(10,"JSON web token (JWT)"),t.qZA(),t._uU(11,". "),t.qZA()(),t.TgZ(12,"div",8)(13,"button",9),t._UZ(14,"span",10)(15,"span",11)(16,"span",12),t.qZA()()(),t.YNc(17,f,11,4,"div",13),t.YNc(18,x,7,1,"div",13),t.qZA(),t.TgZ(19,"div",14)(20,"a",15),t._uU(21,"Back to Dashboard"),t.qZA()()()),2&e&&(t.xp6(17),t.Q6J("ngIf",!s.isError),t.xp6(1),t.Q6J("ngIf",s.isError),t.xp6(2),t.Q6J("routerLink",t.DdM(3,v)))},directives:[u.lW,m.O5,d.Hw,r.yS],encapsulation:2}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(T)],r.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h,a.m]]}),o})()}}]);