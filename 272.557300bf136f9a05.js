"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[272],{272:(Z,l,u)=>{u.r(l),u.d(l,{MainLayoutModule:()=>C});var r=u(808),c=u(895),n=u(223);let p=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-not-found"]],decls:2,vars:0,consts:[[1,"error_pg"],["src","assets/imgs/SVG/404.svg"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"img",1),n.qZA())},styles:[""]}),o})();const m=function(o){return[o]};function d(o,t){if(1&o){const e=n.EpF();n.ynx(0),n.TgZ(1,"li",4),n.TgZ(2,"span",5),n.NdJ("click",function(){return n.CHM(e),n.oxw().closeMenu()}),n._UZ(3,"img",6),n.TgZ(4,"span",7),n._uU(5),n.qZA(),n.TgZ(6,"p"),n._uU(7),n.qZA(),n.qZA(),n.qZA(),n.BQk()}if(2&o){const e=t.$implicit;n.xp6(2),n.Q6J("routerLink",n.VKq(4,m,e.route)),n.xp6(1),n.Q6J("src",e.iconSrc,n.LSH),n.xp6(2),n.Oqu(e.toolTip),n.xp6(2),n.Oqu(e.toolTip)}}let M=(()=>{class o{constructor(){this.closeMenuFlag=new n.vpe,this.menuArr=[{iconSrc:"assets/imgs/SVG/home.svg",route:"/",toolTip:"Home"},{iconSrc:"assets/imgs/SVG/work-time.svg",route:"/work-experience",toolTip:"Work-Experance"}]}ngOnInit(){}closeMenu(){window.innerWidth<=1024&&this.closeMenuFlag.emit(!0)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-menu"]],outputs:{closeMenuFlag:"closeMenuFlag"},decls:4,vars:1,consts:[[1,"overlay",3,"click"],[1,"menu"],[1,"menu_list"],[4,"ngFor","ngForOf"],[1,"menu_list-icon"],["routerLinkActive","router-link-active",1,"menu_list-icon--item",3,"routerLink","click"],[3,"src"],[1,"menu_list-icon--item-tooltiptext"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n.NdJ("click",function(){return i.closeMenu()}),n.qZA(),n.TgZ(1,"div",1),n.TgZ(2,"ul",2),n.YNc(3,d,8,6,"ng-container",3),n.qZA(),n.qZA()),2&e&&(n.xp6(3),n.Q6J("ngForOf",i.menuArr))},directives:[r.sg,c.Od,c.rH],styles:[""]}),o})();function g(o,t){if(1&o){const e=n.EpF();n.TgZ(0,"div",6),n.TgZ(1,"img",7),n.NdJ("click",function(){n.CHM(e);const s=n.oxw();return s.showMenu=!s.showMenu}),n.qZA(),n.qZA()}}const f=[{path:"",component:(()=>{class o{constructor(){this.showMenu=!1}onResize(e){this.showMenu=window.innerWidth>1024}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-main-layout"]],hostBindings:function(e,i){1&e&&n.NdJ("resize",function(a){return i.onResize(a)},!1,n.Jf7)("load",function(a){return i.onResize(a)},!1,n.Jf7)("reload",function(a){return i.onResize(a)},!1,n.Jf7)("popstate",function(a){return i.onResize(a)},!1,n.Jf7)},decls:7,vars:2,consts:[[1,"main-layout_comp"],[1,"menu_sec"],["class","menu_btn",4,"ngIf"],[3,"ngClass"],[3,"closeMenuFlag"],[1,"pages_sec"],[1,"menu_btn"],["src","assets/imgs/menu.png","alt","info",3,"click"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.YNc(2,g,2,0,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"app-menu",4),n.NdJ("closeMenuFlag",function(){return i.showMenu=!i.showMenu}),n.qZA(),n.qZA(),n.qZA(),n.TgZ(5,"div",5),n._UZ(6,"router-outlet"),n.qZA(),n.qZA()),2&e&&(n.xp6(2),n.Q6J("ngIf",!i.showMenu),n.xp6(1),n.Q6J("ngClass",i.showMenu?"menu_content showMenu":"menu_content hiddenMenu"))},directives:[r.O5,r.mk,M,c.lC],styles:[""]}),o})(),children:[{path:"",loadChildren:()=>u.e(124).then(u.bind(u,124)).then(o=>o.PioModule)},{path:"work-experience",loadChildren:()=>u.e(483).then(u.bind(u,483)).then(o=>o.WorkExperModule)},{path:"not-found",component:p},{path:"**",redirectTo:"not-found"}]}];let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.Bz.forChild(f)],c.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[r.ez,c.Bz]]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[r.ez,y,h]]}),o})()}}]);