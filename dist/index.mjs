function i(i,e){for(var n in e)i.style[n]=e[n]}function e(e,n,t,r,c){var u=Array.isArray(e)?e:[e],b="object"==typeof r?t:null,o=b?r:t,a=(b?c:r)||0;return u.forEach(function(e){e.style.transition="none",e.removeEventListener("transitionend",e.__onTransitionEnd),b&&i(e,b)}),u.forEach(function(e,t){e.style.transition="all",e.style.transitionDuration=n+"ms",e.style.transitionTimingFunction=o.ease?o.ease:"ease",e.style.transitionDelay=(o.delay?o.delay:0)+a*t+"ms",i(e,o)}),new Promise(function(i){var e=u[u.length-1];e.__onTransitionEnd=function(n){n.target===e&&(n.target.removeEventListener("transitionend",n.target.__onTransitionEnd),i())},e.addEventListener("transitionend",e.__onTransitionEnd)})}var n={inQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",inCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",inQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",inQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",inSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",inExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",inCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",inBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",outQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",outCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",outQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",outQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",outSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",outExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",outCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",outBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",inOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",inOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",inOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",inOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",inOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",inOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",inOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",inOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",linear:"linear"};export{e as cssTransition,n as ease};
//# sourceMappingURL=index.mjs.map
