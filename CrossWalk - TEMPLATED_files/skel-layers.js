/* skel-layers.js vx.x | (c) n33 | n33.co | MIT licensed */
skel.registerPlugin("layers",function(e){function dn(e,r,i){var o,u;this.id=e,this.index=i,this[n]={breakpoints:T,states:T,position:T,side:T,animation:yt,orientation:yt,width:0,height:0,zIndex:this.index,html:"",hidden:H,exclusive:Mt,resetScroll:Mt,resetForms:Mt,swipeToClose:Mt,clickToClose:H},t._.extend(this[n],r),this[W]=t._.newDiv(this[n][Ft]),this[W].id=e,this[W]._layer=this,this[s]=T,this[rt]=T,this[xt]=T,this[Qt]=H,u=t._.cacheElement(this.id,this[W],ut,1),u.onAttach=function(){var e=this.object._layer;e[nt]()||e.init(),e.resume()},u.onDetach=function(){var e=this.object._layer;e.suspend()},this[n].states?(o=t._[fn](this[n].states),t._[Wt](o,function(e){t._.addCachedElementToState(t._.sd+o[e],u)})):(this[n].breakpoints?o=t._[fn](this[n].breakpoints):o=t._.breakpointList,t._[Wt](o,function(e){t._.addCachedElementToBreakpoint(o[e],u)}))}var t,n="config",r="_skel_layers_translateOrigin",i="cache",s="$element",o="_skel_layers_translate",u="_skel_layers_resetForms",f="_skel_layers_resume",l="activeWrapper",c="exclusiveLayer",h="_skel_layers_promote",p="moveToInactiveWrapper",d="_skel_layers_demote",v="moveToActiveWrapper",m="setTimeout",g="right",y="bottom",b="useActive",w="deactivate",E="width",S="css",x="scrollTop",T=null,N="center",C="_skel_layers_suspend",k="position",L="prototype",A="left",O="wrapper",M="skel-layers-layer-z-index",_="_skel_layers_init",D="children",P="skel-layers-moved",H=!1,B="inactiveWrapper",j=".skel-layers-fixed:not(.skel-layers-moved)",F="transform",I="top",q="height",R="deviceType",U="length",z="touchstart.lock click.lock scroll.lock",W="element",X='<div id="skel-layers-placeholder-',V="stopPropagation",$="resetForms",J="preventDefault",K="window",Q="overflow-x",G="recalcW",Y="-webkit-",Z="padding-bottom",et="animation",tt="-webkit-tap-highlight-color",nt="isInitialized",rt="touchPosX",it="hidden",st="skel-layers-exclusiveActive",ot="originalEvent",ut="skel_layers_inactiveWrapper",at="skel-layers-layer-index",ft="z-index",lt="skel-layers-layer-position",ct="animations",ht="unlockView",pt="#skel-layers-placeholder-",dt="_skel_layers_initializeCell",vt="resize.lock scroll.lock",mt="registerLocation",gt="activate",yt="none",bt="undefined",wt="orientationchange.lock",Et="positions",St="find",xt="touchPosY",Tt="speed",Nt="-moz-",Ct="_skel_layers_expandCell",kt="attr",Lt="_skel_layers_hasParent",At="layers",Ot="append",Mt=!0,_t="DOMReady",Dt="-ms-",Pt="lockView",Ht="addClass",Bt="isTouch",jt="_skel_layers_scrollPos",Ft="html",It="auto",qt="_skel_layers_xcss",Rt="transformBreakpoints",Ut="-o-",zt="visible",Wt="iterate",Xt="removeClass",Vt="rgba(0,0,0,0)",$t="vars",Jt="cell-size",Kt="appendTo",Qt="active",Gt="px",Yt="body",Zt="-",en="click",tn="side",nn="overflow-",rn="touches",sn="isVisible",on="recalcH",un="relative",an="transformTest",fn="getArray",ln="#",cn="android",hn="htmlbody",pn="*";return typeof e==bt?H:(e.fn[Lt]=function(){return e(this).parents()[U]>0},e.fn[h]=function(r){var i,s,o;if(this[U]>1){for(i=0;i<this[U];i++)e(this[i])[h](r);return e(this)}return s=e(this),isNaN(o=parseInt(s.data(at)))&&(o=0),s.data(M,s[S](ft))[S](ft,t[n].baseZIndex+o+(r?r:1)),s},e.fn[d]=function(){var t,n;if(this[U]>1){for(t=0;t<this[U];t++)e(this[t])[d]();return e(this)}return n=e(this),n[S](ft,n.data(M)).data(M,""),n},e.fn._skel_layers_xcssValue=function(t,n){return e(this)[S](t,n)[S](t,Nt+n)[S](t,Y+n)[S](t,Ut+n)[S](t,Dt+n)},e.fn._skel_layers_xcssProperty=function(t,n){return e(this)[S](t,n)[S](Nt+t,n)[S](Y+t,n)[S](Ut+t,n)[S](Dt+t,n)},e.fn[qt]=function(t,n){return e(this)[S](t,n)[S](Nt+t,Nt+n)[S](Y+t,Y+n)[S](Ut+t,Ut+n)[S](Dt+t,Dt+n)},e.fn[u]=function(){var t=e(this);return e(this)[St]("form").each(function(){this.reset()}),t},e.fn[dt]=function(){var t=e(this);t[kt]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/)&&t.data(Jt,parseInt(RegExp.$2))},e.fn[Ct]=function(){var t=e(this),n=t.parent(),r=12;n[D]().each(function(){var t=e(this),n=t[kt]("class");n&&n.match(/(\s+|^)([0-9]+)u(\s+|$)/)&&(r-=parseInt(RegExp.$2))}),r>0&&(t[dt](),t[S](E,(t.data(Jt)+r)/12*100+"%"))},dn[L][Et]={"top-left":{v:I,h:A,side:A},"top-right":{v:I,h:g,side:g},top:{v:I,h:N,side:I},"top-center":{v:I,h:N,side:I},"bottom-left":{v:y,h:A,side:A},"bottom-right":{v:y,h:g,side:g},bottom:{v:y,h:N,side:y},"bottom-center":{v:y,h:N,side:y},left:{v:N,h:A,side:A},"center-left":{v:N,h:A,side:A},right:{v:N,h:g,side:g},"center-right":{v:N,h:g,side:g}},dn[L][ct]={none:{activate:function(e){var t=e[n],r=e[s];r[x](0)[h](t.zIndex).show(),t[$]&&r[u](),e[v]()},deactivate:function(e){var t=e[n],r=e[s];r.hide()[d](),e[p]()}},overlayX:{activate:function(e){var r=e[n],i=e[s];i[x](0)[h](r.zIndex)[S](r[tn],Zt+t[G](t._[b](r[E]))+Gt).show(),r[$]&&i[u](),t[Pt]("x"),e[v](),window[m](function(){i[o]((r[tn]==g?Zt:"")+t[G](t._[b](r[E])),0)},50)},deactivate:function(e){var i=e[n],o=e[s];o[St](pn).blur(),o[r](),window[m](function(){t[ht]("x"),e[p](),o[d]().hide()},t[n][Tt]+50)}},overlayY:{activate:function(e){var r=e[n],i=e[s];i[x](0)[h](r.zIndex)[S](r[tn],Zt+t[G](t._[b](r[q]))+Gt).show(),r[$]&&i[u](),t[Pt]("y"),e[v](),window[m](function(){i[o](0,(r[tn]==y?Zt:"")+t[G](t._[b](r[q])))},50)},deactivate:function(e){var i=e[n],o=e[s];o[St](pn).blur(),o[r](),window[m](function(){t[ht]("y"),e[p](),o[d]().hide()},t[n][Tt]+50)}},pushX:{activate:function(e){var r=e[n],a=e[s],f=t[i][O].add(t[i][l][D]());a[x](0)[S](r[tn],Zt+t[G](t._[b](r[E]))+Gt).show(),r[$]&&a[u](),f[h](),t[Pt]("x"),e[v](),window[m](function(){a.add(f)[o]((r[tn]==g?Zt:"")+t[G](t._[b](r[E])),0)},50)},deactivate:function(e){var o=e[n],u=e[s],a=t[i][O].add(t[i][l][D]());u[St](pn).blur(),u.add(a)[r](),window[m](function(){t[ht]("x"),u.hide(),e[p](),a[d]()},t[n][Tt]+50)}},pushY:{activate:function(e){var r=e[n],a=e[s],f=t[i][O].add(t[i][l][D]());a[x](0)[S](r[tn],Zt+t[on](t._[b](r[q]))+Gt).show(),r[$]&&a[u](),t[Pt]("y"),e[v](),window[m](function(){a.add(f)[o](0,(r[tn]==y?Zt:"")+t[on](t._[b](r[q])))},50)},deactivate:function(e){var o=e[n],u=e[s],a=t[i][O].add(t[i][l][D]());u[St](pn).blur(),u.add(a)[r](),window[m](function(){t[ht]("y"),u.hide(),e[p]()},t[n][Tt]+50)}},revealX:{activate:function(e){var r=e[n],a=e[s],f=t[i][O].add(t[i][l][D]());a[x](0).show(),r[$]&&a[u](),f[h](),t[Pt]("x"),e[v](),window[m](function(){f[o]((r[tn]==g?Zt:"")+t[G](t._[b](r[E])),0)},50)},deactivate:function(e){var o=e[n],u=e[s],a=t[i][O].add(t[i][l][D]());u[St](pn).blur(),a[r](),window[m](function(){t[ht]("x"),u.hide(),a[d](),e[p]()},t[n][Tt]+50)}}},dn[L][v]=function(){t[i][l][Ot](this[s])},dn[L][p]=function(){if(!this[s][Lt]())return;t[i][B][Ot](this[s])},dn[L][w]=function(){var e,r;if(!this[Qt]){t[i][B][Ot](this[W]);return}e=this[n],r=t._[b](e[et]),r in this[ct]||(r=yt),this[ct][r][w](this),e[it]&&e.exclusive&&t[i][c]===this&&(t[i][Yt][Xt](st),t[i][c]=T),this[Qt]=H},dn[L][gt]=function(){var e,r,o,u;if(this[Qt]){t[i][l][Ot](this[W]);return}e=this[n],r=t._[b](e[et]),o=this[s],o[S](E,t._[b](e[E]))[S](q,t._[b](e[q])),t._[$t][R]=="ios"&&e[q]=="100%"&&!e[it]&&o[S](q,"-webkit-calc("+t._[b](e[q])+" + 70px)"),u=this[Et][e[k]],o[Ht]("skel-layer-"+e[k]).data(lt,e[k]);switch(u.v){case I:o[S](I,0);break;case y:o[S](y,0);break;case N:o[S](I,"50%")[S]("margin-top",Zt+t.getHalf(e[q]))}switch(u.h){case A:o[S](A,0);break;case g:o[S](g,0);break;case N:o[S](A,"50%")[S]("margin-left",Zt+t.getHalf(e[E]))}this[ct][r][gt](this),e[it]&&e.exclusive&&(t[i][Yt][Ht](st),t[i][c]=this),this[Qt]=Mt},dn[L][nt]=function(){return this[s]!==T},dn[L][sn]=function(){return this[s].is(":visible")},dn[L].resume=function(r){if(!this[nt]())return;this[s][St](pn).each(function(){t.parseResume(e(this))}),this[n][it]||this[gt](r)},dn[L].suspend=function(){if(!this[nt]())return;this[s][r](),this[s][St](pn).each(function(){t.parseSuspend(e(this))}),this[Qt]&&this[w]()},dn[L].init=function(){var r=this[n],o=e(this[W]),u=this;o[_](),o[St](pn).each(function(){t.parseInit(e(this))}),o[Ht]("skel-layer").data(at,this.index)[S](ft,t[n].baseZIndex)[S](k,"fixed")[S]("-ms-overflow-style","-ms-autohiding-scrollbar")[S]("-webkit-overflow-scrolling","touch").hide();switch(r.orientation){case"vertical":o[S]("overflow-y",It);break;case"horizontal":o[S](Q,It);break;case yt:default:}if(!r[k]||!(r[k]in this[Et]))r[k]="top-left";r[tn]||(r[tn]=this[Et][r[k]][tn]);if(!r[et]||typeof r[et]!="object"&&!(r[et]in this[ct]))r[et]=yt;r.clickToClose&&o[St]("a")[S](tt,Vt).on("click.skel-layers",function(r){var i,s,o=e(this);if(o.hasClass("skel-layers-ignore"))return;r[J](),r[V](),u[w]();if(o.hasClass("skel-layers-ignoreHref"))return;i=o[kt]("href"),s=o[kt]("target"),typeof i!==bt&&i!=""&&window[m](function(){s=="_blank"&&t._[$t][R]!="wp"?window.open(i):window.location.href=i},t[n][Tt]+10)}),t._[$t][R]=="ios"&&o[St]("input,select,textarea").on("focus",function(n){var r=e(this);n[J](),n[V](),window[m](function(){var e=t[i][K][jt],n=t[i][K][x]()-e;t[i][K][x](e),o[x](o[x]()+n),r.hide(),window[m](function(){r.show()},0)},100)}),t._[$t][Bt]&&o.on("touchstart",function(e){u[rt]=e[ot][rn][0].pageX,u[xt]=e[ot][rn][0].pageY}).on("touchmove",function(e){var t,n,i,s,a,f,l;if(u[rt]===T||u[xt]===T)return;t=u[rt]-e[ot][rn][0].pageX,n=u[xt]-e[ot][rn][0].pageY,i=o.outerHeight(),s=o.get(0).scrollHeight-o[x]();if(r[it]&&r.swipeToClose){a=H,f=20,l=50;switch(r[tn]){case A:a=n<f&&n>-1*f&&t>l;break;case g:a=n<f&&n>-1*f&&t<-1*l;break;case I:a=t<f&&t>-1*f&&n>l;break;case y:a=t<f&&t>-1*f&&n<-1*l}if(a)return u[rt]=T,u[xt]=T,u[w](),H}if(o[x]()==0&&n<0||s>i-2&&s<i+2&&n>0)return H}),this[s]=o},t={config:{baseZIndex:1e4,transform:Mt,transformBreakpoints:T,transformTest:T,speed:250,layers:{}},cache:{layers:{},html:T,body:T,htmlbody:T,window:T,wrapper:T,inactiveWrapper:T,activeWrapper:T,exclusiveLayer:T},eventType:en,getBaseFontSize:function(){return t._[$t].IEVersion<9?16.5:parseFloat(getComputedStyle(t[i][Yt].get(0)).fontSize)},recalc:function(e,n){var r=t._.parseMeasurement(e),i;switch(r[1]){case"%":i=Math.floor(n*(r[0]/100));break;case"em":i=t.getBaseFontSize()*r[0];break;default:case Gt:i=r[0]}return i},recalcW:function(n){return t.recalc(n,e(window)[E]())},recalcH:function(n){return t.recalc(n,e(window)[q]())},getHalf:function(e){var t=parseInt(e);return typeof e=="string"&&e.charAt(e[U]-1)=="%"?Math.floor(t/2)+"%":Math.floor(t/2)+Gt},parseSuspend:function(e){var t=e.get(0);t[C]&&t[C]()},parseResume:function(e){var t=e.get(0);t[f]&&t[f]()},parseInit:function(n){var r,s,o=n.get(0),u=n[kt]("data-action"),a=n[kt]("data-args"),l,h;u&&a&&(a=a.split(","));switch(u){case"toggleLayer":case"layerToggle":n[S](tt,Vt)[S]("cursor","pointer"),r=function(n){n[J](),n[V]();if(t[i][c])return t[i][c][w](),H;var r=e(this),s=t[i][At][a[0]];s[sn]()?s[w]():s[gt]()},t._[$t][R]==cn||t._[$t][R]=="wp"?n.on(en,r):n.on(t.eventType,r);break;case"navList":l=e(ln+a[0]),r=l[St]("a"),s=[],r.each(function(){var t=e(this),n,r;n=Math.max(0,t.parents("li")[U]-1),r=t[kt]("href"),s.push('<a class="link depth-'+n+'"'+(typeof r!==bt&&r!=""?' href="'+r+'"':"")+'><span class="indent-'+n+'"></span>'+t.text()+"</a>")}),s[U]>0&&n[Ft]("<nav>"+s.join("")+"</nav>");break;case"copyText":l=e(ln+a[0]),n[Ft](l.text());break;case"copyHTML":l=e(ln+a[0]),n[Ft](l[Ft]());break;case"moveElementContents":l=e(ln+a[0]),o[f]=function(){l[D]().each(function(){var t=e(this);n[Ot](t),t[Ht](P)})},o[C]=function(){n[D]().each(function(){var n=e(this);l[Ot](n),n[Xt](P),t.refresh(n)})},o[f]();break;case"moveElement":l=e(ln+a[0]),o[f]=function(){e(X+l[kt]("id")+'" />').insertBefore(l),n[Ot](l),l[Ht](P)},o[C]=function(){e(pt+l[kt]("id")).replaceWith(l),l[Xt](P),t.refresh(l)},o[f]();break;case"moveCell":l=e(ln+a[0]),h=e(ln+a[1]),o[f]=function(){e(X+l[kt]("id")+'" />').insertBefore(l),n[Ot](l),l[S](E,It),h&&h[Ct]()},o[C]=function(){e(pt+l[kt]("id")).replaceWith(l),l[S](E,""),h&&h[S](E,"")},o[f]();break;default:}},lockView:function(e){t[i][K][jt]=t[i][K][x](),t._[$t][Bt]&&t[i][hn][S](nn+e,it),t[i][O].on(z,function(e){e[J](),e[V](),t[i][c]&&t[i][c][w]()}),t[i][K].on(wt,function(e){t[i][c]&&t[i][c][w]()}),t._[$t][Bt]||t[i][K].on(vt,function(e){t[i][c]&&t[i][c][w]()})},unlockView:function(e){t._[$t][Bt]&&t[i][hn][S](nn+e,zt),t[i][O].off(z),t[i][K].off(wt),t._[$t][Bt]||t[i][K].off(vt)},initLayers:function(){var r,s,o,u=1;t._[Wt](t[n][At],function(r){var s;if(!t[n][At][r][Ft]&&(s=e(ln+r))[U]==0)return;o=new dn(r,t[n][At][r],u++),t[i][At][r]=o,s&&(s[D]()[Kt](o[W]),s.remove())})},initTransforms:function(){if(t[n][F])e.fn[r]=function(){return e(this)[o](0,0)},e.fn[o]=function(t,n){return e(this)[S](F,"translate("+t+"px, "+n+"px)")},e.fn[_]=function(){return e(this)[S]("backface-visibility",it)[S]("perspective","500")[qt]("transition","transform "+t[n][Tt]/1e3+"s ease-in-out")};else{var s,u=[];t[i][K].resize(function(){if(t[n][Tt]!=0){var e=t[n][Tt];t[n][Tt]=0,window[m](function(){t[n][Tt]=e,u=[]},e)}}),e.fn[r]=function(){for(var r=0;r<this[U];r++){var s=this[r],o=e(s);u[s.id]&&o.animate(u[s.id],t[n][Tt],"swing",function(){t._[Wt](u[s.id],function(e){o[S](e,u[s.id][e])}),t[i][Yt][S](Q,zt),t[i][O][S](E,It)[S](Z,0)})}return e(this)},e.fn[o]=function(r,s){var o,f,l,c;r=parseInt(r),s=parseInt(s),r!=0?(t[i][Yt][S](Q,it),t[i][O][S](E,t[i][K][E]())):l=function(){t[i][Yt][S](Q,zt),t[i][O][S](E,It)},s<0?t[i][O][S](Z,Math.abs(s)):c=function(){t[i][O][S](Z,0)};for(o=0;o<this[U];o++){var h=this[o],p=e(h),d;if(!u[h.id])if(d=dn[L][Et][p.data(lt)]){u[h.id]={};switch(d.v){case N:case I:u[h.id][I]=parseInt(p[S](I));break;case y:u[h.id][y]=parseInt(p[S](y))}switch(d.h){case N:case A:u[h.id][A]=parseInt(p[S](A));break;case g:u[h.id][g]=parseInt(p[S](g))}}else d=p[k](),u[h.id]={top:d[I],left:d[A]};a={},t._[Wt](u[h.id],function(e){var n;switch(e){case I:n=t[on](u[h.id][e])+s;break;case y:n=t[on](u[h.id][e])-s;break;case A:n=t[G](u[h.id][e])+r;break;case g:n=t[G](u[h.id][e])-r}a[e]=n}),p.animate(a,t[n][Tt],"swing",function(){l&&l(),c&&c()})}return e(this)},e.fn[_]=function(){return e(this)[S](k,"absolute")}}},initObjects:function(){t[i][K]=e(window),t._[_t](function(){t[i][Ft]=e(Ft),t[i][Yt]=e(Yt),t[i][hn]=e("html,body"),t[i][Yt].wrapInner('<div id="skel-layers-wrapper" />'),t[i][O]=e("#skel-layers-wrapper"),t[i][O][S](k,un)[S](A,"0")[S](g,"0")[S](I,"0")[_](),t[i][B]=e('<div id="skel-layers-inactiveWrapper" />')[Kt](t[i][Yt]),t[i][B][S](q,"100%"),t[i][l]=e('<div id="skel-layers-activeWrapper" />')[Kt](t[i][Yt]),t[i][l][S](k,un),t._[mt](ut,t[i][B][0]),t._[mt]("skel_layers_activeWrapper",t[i][l][0]),t._[mt]("skel_layers_wrapper",t[i][O][0]),e("[autofocus]").focus()})},initIncludes:function(){e(".skel-layers-include").each(function(){t.parseInit(e(this))})},init:function(){t[n][an]&&(t[n][F]=t[n][an]());if(t[n][F]){if(t._[$t][R]==cn&&t._[$t].deviceVersion<4||t._[$t][R]=="wp")t[n][F]=H;t._[$t].IEVersion<10&&(t[n][F]=H),t[n][Rt]&&!t._.hasActive(t._[fn](t[n][Rt]))&&(t[n][F]=H)}t.eventType=t._[$t][Bt]?"touchend":en,t.initObjects(),t.initTransforms(),t._[_t](function(){t.initLayers(),t.initIncludes(),t._.updateState(),t.refresh()})},refresh:function(r){var s;t[n][F]&&(r?s=r.filter(j):s=e(j),s[_]()[Kt](t[i][l]))},activate:function(e){t._[_t](function(){t[i][At][e][gt]()})},deactivate:function(e){t._[_t](function(){t[i][At][e][w]()})},toggle:function(e){t._[_t](function(){var n=t[i][At][e];n[sn]()?n[w]():n[gt]()})}},t)}(jQuery));