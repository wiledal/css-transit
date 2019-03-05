# css-transit

A tiny library for fast, smooth, and controllable CSS transitions.

`npm install css-transit`

### Features:
- Animate elements _to_
- Animate elements _from to_
- Animate elements _staggered to_
- Animate elements _staggered from to_
- Returns a `Promise` which resolves when the transition is finished

### Usage:
```js
import { cssTransition, ease } from 'css-transit'

// Animate single element for 800ms with nice easing
var el = document.querySelector('.some-thing')
cssTransition(el, 800, {
  transform: 'translate(200px, 100px)',
  ease: ease.inOutQuad
}).then(() => {
  alert('I was animated!')
})

// Animate multiple elements for 800ms each, starting 50ms apart
// [].slice.call to turn DOMElementList to Array
var els = [].slice.call(document.querySelector('.some-things'))
cssTransition(els, 800, {
  transform: 'translate(200px, 100px)',
  ease: ease.inOutQuad
}, 50).then(() => {
  alert('Last thing was animated!')
})
```

Check out the `/examples` for in-depth code examples.
