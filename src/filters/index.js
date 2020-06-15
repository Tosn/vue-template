import Vue from 'vue'

/**
 *
 * @param {*} value
 * @param {*} ft 空白填充的文本
 */
const blankFill = (value, ft = '——') => {
  try {
    return value || ft
  } catch {
    return ft
  }
}

/**
 *
 * @param {*} value
 * @param {*} isTake 是否脱敏
 * @param {*} max 脱敏的显示的长度，全部显示的时候 传递'all'
 * @param {*} start 脱敏开始位置
 * @param {*} end 脱敏结束位置
 */
const takeLive = (value, start = 0, end = value.length, isTake = true, max = 4, takeText = '*') => {
  if (!isTake || !value) return value
  const _start = +start || 0
  // 如果end为负数，则 = value.length + +end
  const _end = +end > 0 ? (+end || value.length) : (value.length + +end)
  let _max = +max || 4
  if (max === 'all') {
    _max = value.length
  }
  const len = _end - _start
  let _takeText = takeText.repeat(len)
  if (_takeText.length > _max) {
    _takeText = _takeText.substring(0, _max)
  }
  return `${value.substring(0, _start)}${_takeText}${value.substring(_end, value.length)}`
}

// 空白填充
Vue.filter('bl', blankFill)
// 文本脱敏
Vue.filter('tl', takeLive)
