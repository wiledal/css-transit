<h1 style="text-align: center; font-size: 40px; font-weight: bold;">css-transit 🎉</h1>

A tiny modern library for fast, smooth, and controllable CSS transitions.

### Install
```bash
npm install css-transit
```

### Why
Libraries like `GSAP` or `Popmotion` are not needed when dealing with basic CSS transitions, and can significantly reduce performance.  

`css-transit` uses a common method of _triggering layout_ to allow _inline css transitions_ on demand, keeping DOM changes to a minimum which allows the browser to animate smoothly.
It has been used in multiples of large client production applications over several years.

### Features:
- Transition one or multiple elements between css props
- `gsap`-like usage with `from`, `to`, `ease`, `stagger`, and `delay`
- Returns a `Promise` which resolves when the transition is finished (through the `ontransitionend` event)
- Standard `easing` curves included 🎁
- Smaller than *1kb* gzipped 👌

### Usage:

#### Single method for everything
`css-transit` uses a single method,`cssTransition()`, which does different things based on the supplied arguments.

> See below examples for more detail.

#### Usage examples:

<table>
<tr>
<td>
<img src="../assets/single.gif">
</td>
<td>
<h5>Basic usage</h5>

```js
import { cssTransition, ease } from 'css-transit'

const element = document.querySelector('.element')

cssTransition(element, 500, {
  transform: 'translate(200px, 200px) scale(1)',
})
```

</td>
</tr>

<tr>
<td>
<img src="../assets/ease.gif">
</td>
<td>
<h5>Easing</h5>

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
<img src="../assets/showhide.gif">
</td>
<td>
<h5>Showing / Hiding</h5>

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
<img src="../assets/stagger.gif">
</td>
<td>
<h5>Staggering</h5>

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
<img src="../assets/callbacks.gif">
</td>
<td>
<h5>Callbacks / Promises</h5>

```js
function loop() {
  cssTransition(elements, 500, {
    transform: 'translate(0, 200px) scaleY(.4) scaleX(.2) rotate(180deg)',
    ease: ease.inOutQuart
  }, 100)
  .then(() =>
    cssTransition(elements, 500, {
      transform: 'rotate(360deg)',
      ease: ease.inOutQuart,
      clearStyle: true
    }, 100)
  )
  .then(loop)
}

loop()
```

`cssTransition` returns a `Promise` that is resolved when the animation has finished.  
When transitioning multiple elements, the `Promise` is resolved when the transition of the _last_ element finishes.

</td>
</tr>

<tr>
<td>
<img src="../assets/function-props.gif">
</td>
<td>
<h5>Function props</h5>

```js
cssTransition([...thing], 500, {
  transform: (el, i) => `translate(0, ${(i+1) * 40}px)`,
  ease: ease.inOutQuart
}, 100)
```

`cssTransition 1.2.0+` allows you to use functions that returns a value as props.  
The first argument is the `element` being changed.  
The second argument is the `number` of the element in a staggered array.

</td>
</tr>
</table>

#### Props
`css-transit` simply sets and unsets inline styles and support any standard css props that would go into the `HTMLElement.style` property. It also includes a few special props to ease development.  

- `ease: "<value>"`  
can be used to provide common easing functions and self-defined `cubic-bezier()`
- `display: "<value>"`  
transitions will be applied at the end of transition
- `delay: 500`  
delays the start of the transition using standard `transition-delay`
- `clearStyles: true`  
clears all styles after transition finished.


#### Methods
`css-transit` uses a single method for all transitions based on context.  
```js
// Element transition to end props
cssTransition(
  element: HTMLElement,
  ms: Number, 
  endProps: Object
)

// Element transition from starting props, to end props
cssTransition(
  element: HTMLElement,
  ms: Number, 
  fromProps: Object,
  endProps: Object
)

// Multiple element transition to end props
cssTransition(
  elements: Array,
  ms: Number,
  endProps: Object
)

// Multiple element transition from starting props, to end props
cssTransition(
  elements: Array,
  ms: Number,
  fromProps: Object,
  endProps: Object
)

// Multiple element staggered transition to end props
cssTransition(
  elements: Array,
  ms: Number,
  endProps: Object,
  staggerInterval: Number
)

// Multiple element staggered transition from starting props, to end props
cssTransition(
  elements: Array,
  ms: Number,
  fromProps: Object,
  endProps: Object,
  staggerInterval: Number
)
```