import x from './x.js'
import png from './assets/lm.png'

const div = document.getElementById('app')
div.innerHTML = `
<img src="${png}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default //模块的默认值
        fn()
    },()=>{})
}
div.appendChild(button)