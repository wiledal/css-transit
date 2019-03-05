function setStyles(el, styles) {
  for (var prop in styles) {
    el.style[prop] = styles[prop]
  }
}

function cssTransition(target, time, arg1, arg2, arg3) {
  var els = Array.isArray(target) ? target : [target]
  var from = typeof arg2 === 'object' ? arg1 : null
  var to = from ? arg2 : arg1
  var staggerDelay = (from ? arg3 : arg2) || 0

  els.forEach((el) => {
    el.style.transition = 'none'
    el.removeEventListener('transitionend', el.__onTransitionEnd)

    if (from) {
      setStyles(el, from)
    }
  })

  els[0].offsetWidth = els[0].offsetWidth // trigger layout

  els.forEach((el, i) => {
    el.style.transition = 'all'
    el.style.transitionDuration = time + 'ms'
    el.style.transitionTimingFunction = to.ease ? to.ease : 'ease'
    el.style.transitionDelay = ((to.delay ? to.delay : 0) + (staggerDelay * i)) + 'ms'
    setStyles(el, to)
  })

  return new Promise((resolve) => {
    var transitionTarget = els[els.length - 1]
    transitionTarget.__onTransitionEnd = function(event) {
      if (event.target === transitionTarget) {
        event.target.removeEventListener('transitionend', event.target.__onTransitionEnd)
        resolve()
      }
    }
    transitionTarget.addEventListener('transitionend', transitionTarget.__onTransitionEnd)
  })
}

export {
  cssTransition
}