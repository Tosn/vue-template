import { PAGE_TITLE } from '../settings'
export const getPageTitle = (matched, separator = '|') => {
  if (matched.length > 0) {
    const childTitle = []
    matched.forEach(item => {
      if (item.meta.title) {
        childTitle.push(item.meta.title)
      }
    })
    if (childTitle.length > 0) {
      const childTitleSep = childTitle.join(`${separator}`)
      if (PAGE_TITLE) {
        return `${PAGE_TITLE}${separator}${childTitleSep}`
      } else {
        return `${childTitleSep}`
      }
    }
  }
  return `${PAGE_TITLE}`
}
