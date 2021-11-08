## virtual document 虚拟DOM

虚拟DOM就是用很多个VNode组成的VNode Tree。

## VNode 虚拟结点

virtual node 虚拟结点，也就是JavaScript的一个对象。

如一个元素 div
```html
<div id="app" style="color:red;width:1em;height:1em;" >文本</div>
```
对应的VNode对象:
```js
let vnode = {
    type: 'div',
    props: {
        id: 'app',
        style: {
            width: '1em',
            height: '1em',
            color: 'red'
        }
    },
    children: '文本'
}
```