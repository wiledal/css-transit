<h1 style="text-align: center; font-size: 40px;">css-transit 🎉</h1>

`npm install wiledal/css-transit`

A tiny modern library for fast, smooth, and controllable CSS transitions.

### Why
Libraries like GSAP or Popmotion are not needed when dealing with basic CSS transitions, and can significantly reduce performance.  

`css-transit` uses a common method of _forcing reflow_ to allow css transitions to happen on demand, keeping DOM changes to a minimum which allows the browser to animate smoothly.

### Features:
- Animate elements _to_
- Animate elements _from to_
- Animate elements _staggered to_
- Animate elements _staggered from to_
- Returns a `Promise` which resolves when the transition is finished (through the `ontransitionend` event)
- Common `easing` curves included 🎁

### Usage:

#### Methods
`css-transit` uses a single method for all transitions based on context.  
```js
// Element transition to end state
cssTransition(element: HTMLElement, ms: Number, end: Object)

// Element transition from starting state, to end state
cssTransition(element: HTMLElement, ms: Number, from: Object, end: Object)

// Multiple element transition to end state
cssTransition(elements: Array, ms: Number, to: Object)

// Multiple element transition from starting state, to end state
cssTransition(elements: Array, ms: Number, from: Object, to: Object)

// Multiple element staggered transition from starting state, to end state
cssTransition(elements: Array, ms: Number, from: Object, to: Object, interval: Number)
```

#### Extras
`css-transit` includes a few tricks to ease development.  

- `ease: "<value>"` can be used to provide common easing functions and self-
- `display: "<value>"` transitions will be applied at the end of transition
- set `clearStyles: true` to clear all styles after transition finished.

#### Usage examples:
```js
import { cssTransition, ease } from 'css-transit'

// Animate single element for 800ms
var el = document.querySelector('.thing')
cssTransition(el, 800, {
  transform: 'translate(200px, 100px)',
  ease: ease.inOutQuad
})

// Stagger animation of multiple elements for 800ms each, starting 50ms apart
var els = [].slice.call(document.querySelector('.thing'))
cssTransition(els, 800, {
  transform: 'translate(200px, 100px)',
  ease: ease.inOutQuad
}, 50)

cssTransition(element, 500, {
  display: 'block',
  opacity: 0,
  transform: 'translate3d(0, -50px, 0) scale(.5)'
}, {
  opacity: 1,
  transform: 'translate3d(0, 0, 0) scale(0)',
  ease: ease.inOutQuart
})
```
