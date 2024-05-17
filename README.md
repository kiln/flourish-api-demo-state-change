# Flourish state change API demo

This is a simple demonstration of how to change state with the API.

After building an API chart with an initial API options object

```
const visual = new Flourish.Live(options)
```

you can manipulate any state property of the options object

```
control_title.addEventListener('input', function(e) {
  options.state.layout.title = e.target.value;
  //...
```

before simply updating the API visual.

```
  // ...
  visual.update(options);
})
```

See a live demo [here](TODO: LINK)
