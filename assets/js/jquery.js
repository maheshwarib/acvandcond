(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,function(){return""+o});return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);
// $(function() {
//   var wines = $(".wines"),
//     wines_sect1 = $(".wines-section").eq(0),
//    wines_sect2= $(".wines-section").eq(1),
//   wines_sect3 = $(".wines-section").eq(2),
//    wines_sect4 = $(".wines-section").eq(3),
//   wines_sect5 = $(".wines-section").eq(4),
//     d = $(".ethos-acv"),
//   down_arrow = $(".acv-arrow"),
//     h = $(".overflow-container"),
//     p = $(".header-logo");

//   function f() {
//     wines_sect1.find(".bg").removeClass("down down-s"), wines_sect1.find(".content").removeClass("down down-s"),
//      $(".home-acv-main").addClass("animate"), down_arrow.addClass("animate"),
//      wines_sect1.find(".can").addClass("animate"),wines_sect1.find(".headline").addClass('animate'), wines_sect1.find(".overflow-container").addClass("animate"),
//      wines_sect1.find(".content").addClass("animate"), wines_sect1.css({
//       "z-index": "1"
//     }), $(".home-acv-main").find(h).removeClass("animate"), p.addClass("animate")
//   }

//   function m() {
//     wines_sect1.find(".bg").addClass("up"), wines_sect1.find(".content").addClass("down"),
//      wines_sect2.find(".bg").removeClass("up"), wines_sect2.find(".content").removeClass("down"), wines_sect1.find(".content").addClass("up-s"),
//      wines_sect1.find(".bg").addClass("up-s"), wines_sect2.find(".content").removeClass("down-s"), wines_sect2.find(".bg").removeClass("down-s"),
//       wines_sect1.find(".can").removeClass("animate"), wines_sect2.find(".can").addClass("animate"), wines_sect1.find(".overflow-container").removeClass("animate"),
//       wines_sect2.find(".overflow-container").addClass("animate"), wines_sect1.find(".content").removeClass("animate"), wines_sect2.find(".content").addClass("animate"),
//       wines_sect2.css({
//       "z-index": "1"
//     })
//   }

//   function v() {
//     wines_sect2.find(".bg").addClass("down"), wines_sect2.find(".content").addClass("up"),
//      wines_sect3.find(".bg").removeClass("down"),
//       wines_sect3.find(".content").removeClass("up"),
//       wines_sect2.find(".content").addClass("up-s"),
//        wines_sect2.find(".bg").addClass("up-s"),
//        wines_sect3.find(".content").removeClass("down-s"),
//        wines_sect3.find(".bg").removeClass("down-s"),
//         wines_sect2.find(".can").removeClass("animate"),
//         wines_sect3.find(".can").addClass("animate"),
//         wines_sect2.find(".overflow-container").removeClass("animate"),
//          wines_sect3.find(".overflow-container").addClass("animate"),
//           wines_sect2.find(".content").removeClass("animate"),
//           wines_sect3.find(".content").addClass("animate"), wines_sect3.css({
//       "z-index": "1"
//     })
//   }

//   function g() {
//     wines_sect3.find(".bg").addClass("up"), wines_sect3.find(".content").addClass("down"), wines_sect4.find(".bg").removeClass("up"),
//      wines_sect4.find(".content").removeClass("down"), wines_sect3.find(".content").addClass("up-s"), wines_sect3.find(".bg").addClass("up-s"),
//       wines_sect4.find(".content").removeClass("down-s"), wines_sect4.find(".bg").removeClass("down-s"), wines_sect3.find(".can").removeClass("animate"),
//       wines_sect4.find(".can").addClass("animate"), wines_sect3.find(".overflow-container").removeClass("animate"),
//       wines_sect4.find(".overflow-container").addClass("animate"), wines_sect3.find(".content").removeClass("animate"),
//       wines_sect4.find(".content").addClass("animate"), wines_sect4.css({
//       "z-index": "1"
//     })
//   }
//   wines_sect1.css({
//     "z-index": "4"
//   });
//   var e = {
//     scrollingSpeed: 1100,
//     onLeave: function(e, t, i) {
//       $(this), $(this).height();
//       var n = t - 2;
//       $(".acv-arrow-small").addClass("hide"), $(".wines-section").css({
//         "z-index": "0"
//       }), "down" === i && (0 === n && f(), 1 === n && m(), 2 === n && v(), 3 === n && g(), 4 === n && (wines_sect4.find(".bg").addClass("down"), wines_sect4.find(".content").addClass("up"),
//         wines_sect5.find(".bg").removeClass("down"), wines_sect5.find(".content").removeClass("up"), wines_sect4.find(".content").addClass("up-s"), wines_sect4.find(".bg").addClass("up-s"), wines_sect5.find(".content").removeClass("down-s"), wines_sect5.find(".bg").removeClass("down-s"),
//         wines_sect4.find(".can").removeClass("animate"), wines_sect5.find(".can").addClass("animate"), wines_sect4.find(".overflow-container").removeClass("animate"), wines_sect5.find(".overflow-container").addClass("animate"), wines_sect4.find(".content").removeClass("animate"), wines_sect5.find(".content").addClass("animate"), wines_sect5.css({
//           "z-index": "1"
//         }), wines.addClass("animate-up-easing")), 5 === n && ($("#wines").addClass("show"), $(".wines").addClass("animate-up"), wines_sect5.find(".can").removeClass("animate"), wines_sect5.find(".overflow-container").removeClass("animate"), wines_sect5.find(".content").removeClass("animate"),
//         wines_sect5.find(".content").addClass("last-down"), d.find(".ethos-acv-items").addClass("animate-in"), d.find(h).addClass("animate")), 6 === n && (d.find(".ethos-acv-items").addClass("animate-out"), d.find(h).removeClass("animate"))), "up" === i && (-1 === n && (wines_sect1.find(".bg").addClass("down down-s"), wines_sect1.find(".content").addClass("down down-s"), $(".wines").removeClass("animate"), $(".home-acv-main").removeClass("animate"), wines_sect1.find(".can").removeClass("animate"), wines_sect1.find(".content").removeClass("animate"), wines_sect1.find(".overflow-container").removeClass("animate"), down_arrow.removeClass("animate"), $(".home-acv-main").find(h).addClass("animate"), p.removeClass("animate"), wines_sect1.css({
//           "z-index": "1"
//         })), 0 === n && (wines_sect1.find(".bg").removeClass("up"), wines_sect1.find(".content").removeClass("down"), wines_sect2.find(".bg").addClass("up"), wines_sect2.find(".content").addClass("down"), wines_sect1.find(".content").removeClass("up-s"), wines_sect1.find(".bg").removeClass("up-s"), wines_sect2.find(".content").addClass("down-s"), wines_sect2.find(".bg").addClass("down-s"), wines_sect1.find(".can").addClass("animate"), wines_sect2.find(".can").removeClass("animate"), wines_sect1.find(".overflow-container").addClass("animate"), wines_sect2.find(".overflow-container").removeClass("animate"), wines_sect1.find(".content").addClass("animate"), wines_sect2.find(".content").removeClass("animate"), wines_sect1.css({
//           "z-index": "1"
//         })), 1 === n && (wines_sect2.find(".bg").removeClass("down"), wines_sect2.find(".content").removeClass("up"), wines_sect3.find(".bg").addClass("down"), wines_sect3.find(".content").addClass("up"), wines_sect2.find(".content").removeClass("up-s"), wines_sect2.find(".bg").removeClass("up-s"), wines_sect3.find(".content").addClass("down-s"), wines_sect3.find(".bg").addClass("down-s"), wines_sect2.find(".can").addClass("animate"), wines_sect3.find(".can").removeClass("animate"), wines_sect2.find(".overflow-container").addClass("animate"), wines_sect3.find(".overflow-container").removeClass("animate"), wines_sect2.find(".content").addClass("animate"), wines_sect3.find(".content").removeClass("animate"), wines_sect2.css({
//           "z-index": "1"
//         })), 2 === n && (wines_sect3.find(".bg").removeClass("up"), wines_sect3.find(".content").removeClass("down"), wines_sect4.find(".bg").addClass("up"), wines_sect4.find(".content").addClass("down"), wines_sect3.find(".content").removeClass("up-s"), wines_sect3.find(".bg").removeClass("up-s"), wines_sect4.find(".content").addClass("down-s"), wines_sect4.find(".bg").addClass("down-s"), wines_sect3.find(".can").addClass("animate"), wines_sect4.find(".can").removeClass("animate"), wines_sect3.find(".overflow-container").addClass("animate"), wines_sect4.find(".overflow-container").removeClass("animate"), wines_sect3.find(".content").addClass("animate"), wines_sect4.find(".content").removeClass("animate"), wines_sect3.css({
//           "z-index": "1"
//         })),
//         3 === n && (wines_sect4.find(".bg").removeClass("down"), wines_sect4.find(".content").removeClass("up"), wines_sect5.find(".bg").addClass("down"), wines_sect5.find(".content").addClass("up"), wines_sect4.find(".content").removeClass("up-s"), wines_sect4.find(".bg").removeClass("up-s"), wines_sect5.find(".content").addClass("down-s"), wines_sect5.find(".bg").addClass("down-s"), wines_sect4.find(".can").addClass("animate"), wines_sect5.find(".can").removeClass("animate"), wines_sect4.find(".overflow-container").addClass("animate"), wines_sect5.find(".overflow-container").removeClass("animate"), wines_sect4.find(".content").addClass("animate"), wines_sect5.find(".content").removeClass("animate"), wines_sect4.css({
//           "z-index": "1"
//         }), wines.removeClass("animate-up-easing")),
//         4 === n && ($(".wines").removeClass("animate-up"), wines_sect5.find(".can").addClass("animate"), wines_sect5.find(".overflow-container").addClass("animate"), wines_sect5.find(".content").addClass("animate"), wines_sect5.find(".content").removeClass("last-down"), d.find(".ethos-acv-items").removeClass("animate-in"), d.find(h).removeClass("animate"), setTimeout(function() {
//           $("#wines").removeClass("show")
//         }, 999)),
//         5 === n && (d.find(".ethos-acv-items").removeClass("animate-out"), d.find(h).addClass("animate")))
//     },
//     afterRender: function(e, t) {
//       $(".home-acv-main").find(h).addClass("animate");
//       var i = $(".section").height();
//       wines.height(i)
//     },
//     afterResize: function() {
//       var e = $(".section").height();
//       wines.height(e)
//     },
//     afterLoad: function(e, t) {
//       $(this).find(".acv-arrow-small").removeClass("hide"), $(".wines-section:eq(" + (t - 2) + ")").find(".acv-arrow-small").removeClass("hide")
//     }
//   };
//   $("#wines").length && ($("#wines").fullpage(e), -1 !== navigator.userAgent.indexOf("FBAV") || -1 !== navigator.userAgent.indexOf("Instagram") ? ($.fn.fullpage.setResponsive(!0), $(".acv.parallax").addClass("no-parallax"), $(".wines").addClass("static"), $(".acv-arrow").remove()) : ($(".acv-arrow-small").addClass("hide"), $(".home-acv-main, .wines").swipe({
//     swipe: function(e, t, i, n, o, s) {
//       "up" === t && $.fn.fullpage.moveSectionDown(), "down" === t && $.fn.fullpage.moveSectionUp()
//     }
//   })));
//   var t = window.location.hash;
//   $(document).ready(function() {
//     t && ("#chardonnay" === t && setTimeout(function() {
//       $.fn.fullpage.moveTo(2)
//     }, 1200), "#red-wine" === t && (wines_sect1.hide(), setTimeout(function() {
//       $.fn.fullpage.moveTo(3)
//     }, 1200), setTimeout(function() {
//       wines_sect1.show(), f()
//     }, 1200)), "#rose" === t && (wines_sect1.hide(), wines_sect2.hide(), setTimeout(function() {
//       $.fn.fullpage.moveTo(4)
//     }, 1200), setTimeout(function() {
//       wines_sect1.show(), wines_sect2.show(), f(), m()
//     }, 2e3)), "#sauvignon-blanc" === t && (wines_sect1.hide(), wines_sect2.hide(), wines_sect3.hide(), setTimeout(function() {
//       $.fn.fullpage.moveTo(5)
//     }, 1200), setTimeout(function() {
//       wines_sect1.show(), wines_sect2.show(), wines_sect3.show(), f(), m(), v()
//     }, 2e3)), "#bubbles" === t && (wines_sect1.hide(), wines_sect2.hide(), wines_sect3.hide(), wines_sect4.hide(), setTimeout(function() {
//       $.fn.fullpage.moveTo(6)
//     }, 1200), setTimeout(function() {
//       wines_sect1.show(), wines_sect2.show(), wines_sect3.show(), wines_sect4.show(), f(), m(), v(), g()
//     }, 2e3)))
//   })
// }),
