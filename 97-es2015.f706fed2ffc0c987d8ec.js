(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{zDS7:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class u{}var o=e("pMnS"),a=e("MKJQ"),i=e("sZkV"),d=e("TSSN"),r=e("s7LF"),s=e("SVse"),g=e("mrSG"),c=e("6nr9"),f=e("itXk"),h=e("pGeR");class m{constructor(n,l,e,t,u){this.settingsService=n,this.alertController=l,this.storage=e,this.router=t,this.translateService=u,this.availableLangs=h.a}ngOnInit(){this.darkMode=this.settingsService.getDarkMode(),this.language=this.settingsService.getLanguage()}handleDarkModeChange(n){this.settingsService.setDarkMode(n.detail.checked)}handleLanguageChange(n){this.settingsService.setLanguage(n.detail.value)}clearData(){return g.__awaiter(this,void 0,void 0,(function*(){yield Object(f.b)([this.translateService.get("settings.delete_data_confirmation.title"),this.translateService.get("settings.delete_data_confirmation.text"),this.translateService.get("settings.delete_data_confirmation.cancel"),this.translateService.get("settings.delete_data_confirmation.confirm")]).subscribe(([n,l,e,t])=>g.__awaiter(this,void 0,void 0,(function*(){const u=yield this.alertController.create({header:n,message:l,buttons:[{text:e,role:"cancel",cssClass:"alert-medium",handler:()=>{}},{text:t,cssClass:"alert-danger",handler:()=>{this.storage.clear().then(()=>{this.router.navigateByUrl("/").then(()=>{window.location.reload()})})}}]});yield u.present()})))}))}}var v=e("xgBC"),C=e("iInd"),p=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-select-option",[],null,null,null,a.Q,a.s)),t["\u0275did"](1,49152,null,0,i.kb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["\u0275ted"](2,0,["",""])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef])],(function(n,l){n(l,1,0,l.context.$implicit)}),(function(n,l){n(l,2,0,t["\u0275unv"](l,2,0,t["\u0275nov"](l,3).transform("settings.languages."+l.context.$implicit)))}))}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,a.G,a.h)),t["\u0275did"](1,49152,null,0,i.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{translucent:[0,"translucent"]},null),(n()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[],null,null,null,a.X,a.y)),t["\u0275did"](3,49152,null,0,i.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.B,a.c)),t["\u0275did"](5,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"ion-menu-button",[],null,null,null,a.N,a.p)),t["\u0275did"](7,49152,null,0,i.Q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,3,"ion-title",[],null,null,null,a.V,a.w)),t["\u0275did"](9,49152,null,0,i.wb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](10,0,["",""])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](12,0,null,null,61,"ion-content",[],null,null,null,a.D,a.e)),t["\u0275did"](13,49152,null,0,i.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{fullscreen:[0,"fullscreen"]},null),(n()(),t["\u0275eld"](14,0,null,0,7,"ion-header",[["collapse","condense"]],null,null,null,a.G,a.h)),t["\u0275did"](15,49152,null,0,i.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{collapse:[0,"collapse"]},null),(n()(),t["\u0275eld"](16,0,null,0,5,"ion-toolbar",[],null,null,null,a.X,a.y)),t["\u0275did"](17,49152,null,0,i.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](18,0,null,0,3,"ion-title",[["size","large"]],null,null,null,a.V,a.w)),t["\u0275did"](19,49152,null,0,i.wb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275ted"](20,0,["",""])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](22,0,null,0,51,"ion-list",[],null,null,null,a.M,a.m)),t["\u0275did"](23,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](24,0,null,0,15,"ion-item",[],null,null,null,a.J,a.k)),t["\u0275did"](25,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](26,0,null,0,1,"ion-icon",[["name","moon"],["slot","start"]],null,null,null,a.H,a.i)),t["\u0275did"](27,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](28,0,null,0,3,"ion-label",[],null,null,null,a.K,a.l)),t["\u0275did"](29,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](30,0,["",""])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](32,0,null,0,7,"ion-toggle",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,33)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,33)._handleIonChange(e.target)&&u),"ionChange"===l&&(u=!1!==o.handleDarkModeChange(e)&&u),u}),a.W,a.x)),t["\u0275did"](33,16384,null,0,i.c,[t.ElementRef],null,null),t["\u0275prd"](1024,null,r.b,(function(n){return[n]}),[i.c]),t["\u0275did"](35,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},null),t["\u0275pid"](131072,s.b,[t.ChangeDetectorRef]),t["\u0275prd"](2048,null,r.c,null,[r.e]),t["\u0275did"](38,16384,null,0,r.d,[[4,r.c]],null,null),t["\u0275did"](39,49152,null,0,i.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](40,0,null,0,21,"ion-item",[],null,null,null,a.J,a.k)),t["\u0275did"](41,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](42,0,null,0,1,"ion-icon",[["name","language"],["slot","start"]],null,null,null,a.H,a.i)),t["\u0275did"](43,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](44,0,null,0,3,"ion-label",[],null,null,null,a.K,a.l)),t["\u0275did"](45,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](46,0,["",""])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](48,0,null,0,13,"ion-select",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t["\u0275nov"](n,49)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t["\u0275nov"](n,49)._handleChangeEvent(e.target)&&u),"ionChange"===l&&(u=!1!==o.handleLanguageChange(e)&&u),u}),a.R,a.r)),t["\u0275did"](49,16384,null,0,i.Hb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,r.b,(function(n){return[n]}),[i.Hb]),t["\u0275did"](51,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},null),t["\u0275pid"](131072,s.b,[t.ChangeDetectorRef]),t["\u0275prd"](2048,null,r.c,null,[r.e]),t["\u0275did"](54,16384,null,0,r.d,[[4,r.c]],null,null),t["\u0275did"](55,49152,null,0,i.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelText:[0,"cancelText"],interfaceOptions:[1,"interfaceOptions"],okText:[2,"okText"]},null),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),t["\u0275pod"](58,{header:0}),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](61,278528,null,0,s.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](62,0,null,0,11,"ion-item",[],null,null,null,a.J,a.k)),t["\u0275did"](63,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](64,0,null,0,1,"ion-icon",[["name","trash-outline"],["slot","start"]],null,null,null,a.H,a.i)),t["\u0275did"](65,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](66,0,null,0,3,"ion-label",[],null,null,null,a.K,a.l)),t["\u0275did"](67,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](68,0,["",""])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](70,0,null,0,3,"ion-button",[["color","danger"],["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.clearData()&&t),t}),a.A,a.b)),t["\u0275did"](71,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),t["\u0275ted"](72,0,[" "," "])),t["\u0275pid"](131072,d.j,[d.k,t.ChangeDetectorRef])],(function(n,l){var e=l.component;n(l,1,0,!0),n(l,13,0,!0),n(l,15,0,"condense"),n(l,19,0,"large"),n(l,27,0,"moon"),n(l,35,0,t["\u0275unv"](l,35,0,t["\u0275nov"](l,36).transform(e.darkMode))),n(l,43,0,"language"),n(l,51,0,t["\u0275unv"](l,51,0,t["\u0275nov"](l,52).transform(e.language)));var u=t["\u0275unv"](l,55,0,t["\u0275nov"](l,56).transform("settings.cancel")),o=n(l,58,0,t["\u0275unv"](l,55,1,t["\u0275nov"](l,57).transform("settings.language")));n(l,55,0,u,o,t["\u0275unv"](l,55,2,t["\u0275nov"](l,59).transform("settings.ok"))),n(l,61,0,e.availableLangs),n(l,65,0,"trash-outline"),n(l,71,0,"danger","outline")}),(function(n,l){n(l,10,0,t["\u0275unv"](l,10,0,t["\u0275nov"](l,11).transform("settings.title"))),n(l,20,0,t["\u0275unv"](l,20,0,t["\u0275nov"](l,21).transform("settings.title"))),n(l,30,0,t["\u0275unv"](l,30,0,t["\u0275nov"](l,31).transform("settings.dark_mode"))),n(l,32,0,t["\u0275nov"](l,38).ngClassUntouched,t["\u0275nov"](l,38).ngClassTouched,t["\u0275nov"](l,38).ngClassPristine,t["\u0275nov"](l,38).ngClassDirty,t["\u0275nov"](l,38).ngClassValid,t["\u0275nov"](l,38).ngClassInvalid,t["\u0275nov"](l,38).ngClassPending),n(l,46,0,t["\u0275unv"](l,46,0,t["\u0275nov"](l,47).transform("settings.language"))),n(l,48,0,t["\u0275nov"](l,54).ngClassUntouched,t["\u0275nov"](l,54).ngClassTouched,t["\u0275nov"](l,54).ngClassPristine,t["\u0275nov"](l,54).ngClassDirty,t["\u0275nov"](l,54).ngClassValid,t["\u0275nov"](l,54).ngClassInvalid,t["\u0275nov"](l,54).ngClassPending),n(l,68,0,t["\u0275unv"](l,68,0,t["\u0275nov"](l,69).transform("settings.delete_data"))),n(l,72,0,t["\u0275unv"](l,72,0,t["\u0275nov"](l,73).transform("settings.delete_all_data")))}))}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-settings",[],null,null,null,D,p)),t["\u0275did"](1,114688,null,0,m,[c.a,i.a,v.Storage,C.m,d.k],null,null)],(function(n,l){n(l,1,0)}),null)}var k=t["\u0275ccf"]("app-settings",m,b,{},{},[]),E=e("d2mR");class N{}e.d(l,"SettingsPageModuleNgFactory",(function(){return Z}));var Z=t["\u0275cmf"](u,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,k]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.k,s.j,[t.LOCALE_ID,[2,s.q]]),t["\u0275mpd"](4608,r.g,r.g,[]),t["\u0275mpd"](4608,i.b,i.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Cb,i.Cb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.Fb,i.Fb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,s.c,s.c,[]),t["\u0275mpd"](1073742336,r.f,r.f,[]),t["\u0275mpd"](1073742336,r.a,r.a,[]),t["\u0275mpd"](1073742336,d.h,d.h,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,i.Ab,i.Ab,[]),t["\u0275mpd"](1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),t["\u0275mpd"](1073742336,N,N,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,C.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);