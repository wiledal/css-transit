<h1 style="text-align: center; font-size: 40px;">css-transit 🎉</h1>

`npm install wiledal/css-transit`

A tiny modern library for fast, smooth, and controllable CSS transitions.

### Why
Libraries like `GSAP` or `Popmotion` are not needed when dealing with basic CSS transitions, and can significantly reduce performance.  

`css-transit` uses a common method of _triggering layout_ to allow _inline css transitions_ on demand, keeping DOM changes to a minimum which allows the browser to animate smoothly.
It has been used in multiples of large client production applications over several years.

### Features:
- Transition one or multiple elements between css props
- `gsap`-like usage with `from`, `to`, `ease`, `stagger`, and `delay`
- Returns a `Promise` which resolves when the transition is finished (through the `ontransitionend` event)
- Standard `easing` curves included 🎁

### Usage:

#### Methods
`css-transit` uses a single method for all transitions based on context.  
```js
// Element transition to end state
cssTransition(
  element: HTMLElement,
  ms: Number, 
  endProps: Object
)

// Element transition from starting state, to end state
cssTransition(
  element: HTMLElement,
  ms: Number, 
  fromProps: Object,
  endProps: Object
)

// Multiple element transition to end state
cssTransition(
  elements: Array,
  ms: Number,
  endProps: Object
)

// Multiple element transition from starting state, to end state
cssTransition(
  elements: Array,
  ms: Number,
  fromProps: Object,
  endProps: Object
)

// Multiple element staggered transition from starting state, to end state
cssTransition(
  elements: Array,
  ms: Number,
  fromProps: Object,
  endProps: Object,
  interval: Number
)
```

#### Extras
`css-transit` includes a few special props to ease development.  

- `ease: "<value>"`  
can be used to provide common easing functions and self-defined `cubic-bezier()`
- `display: "<value>"`  
transitions will be applied at the end of transition
- `delay: 500`  
delays the start of the transition using standard `transition-delay`
- `clearStyles: true`  
clears all styles after transition finished.

#### Usage examples:

<table>
<tr>
<td>
<h5>Basic usage</h5>
<img src="../assets/single.gif">
</td>
<td>

```js
import { cssTransition, ease } from 'css-transit'

const element = document.querySelector('.element')

cssTransition(element, 500, {
  transform: 'translate(0, 0) scale(1.5)',
}, {
  transform: 'translate(200px, 200px) scale(1)',
})
```

</td>
</tr>

<tr>
<td>
<h5>Easing</h5>
<img src="../assets/ease.gif">
</td>
<td>

```js
cssTransition(element, 500, {
  transform: 'translate(0, 0) scale(1.5)',
}, {
  transform: 'translate(200px, 200px) scale(1)',
  ease: ease.inOutQuint
})
```
`css-transit` comes with the standard easing functions.

You can also supply your own `cubic-bezier`:
```js
cssTransition(element, 500, {
  opacity: 1,
  ease: 'cubic-bezier(0.540, 0.745, 0.230, 0.765)'
}
```

</td>
</tr>

<tr>
<td>
<h5>Showing / Hiding</h5>
<img src="../assets/showhide.gif">
</td>
<td>

```js
cssTransition(thing, 500, {
  opacity: 0,
  transform: 'translate(80px, 100px) scale(1.3) rotate(40deg)',
  display: 'none'
})
```

`display` props will be applied after the transition finishes, to allow easy hiding of elements.

</td>
</tr>

<tr>
<td>
<h5>Staggering</h5>
<img src="../assets/stagger.gif">
</td>
<td>

```js
// first convert the NodeList to an Array
const elements = [...document.querySelectorAll('.thing')]

cssTransition(elements, 500, {
  transform: 'translate(0, 0)',
}, {
  transform: 'translate(0, 200px)',
  ease: ease.inOutQuart
}, 50)
```

When transitioning multiple items, the last argument can be used to stagger the animations (this adds a `transition-delay`).

</td>
</tr>

<tr>
<td>
<h5>Callbacks / Promises</h5>
<img src="../assets/callbacks.gif">
</td>
<td>

```js
function loop() {
  cssTransition(elements, 500, {
    transform: 'translate(0, 200px) scaleY(.4) scaleX(.2) rotate(180deg)',
    ease: ease.inOutQuart
  }, 100)
  .then(() => {
    return cssTransition(elements, 500, {
      transform: 'rotate(360deg)',
      ease: ease.inOutQuart,
      clearStyle: true
    }, 100)
  })
  .then(loop)
}

loop()
```

`cssTransition` returns a `Promise` that is resolved when the animation has finished.  
When transitioning multiple elements, the `Promise` is resolved when the transition of the _last_ element finishes.

</td>
</tr>
</table>