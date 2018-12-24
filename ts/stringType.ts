// 字符串字面量类型
type EventType = 'click' | 'scroll' | 'mousemove'

function handleEvent(ele: Element, eve:EventType) {
  ele.addEventListener(eve, (e) => {
    console.log(e)
  })
}

handleEvent(document.getElementById('test'), 'click')
// handleEvent(document.getElementById('test'), 'dbclick')