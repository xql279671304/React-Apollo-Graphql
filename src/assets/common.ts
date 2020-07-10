/**
 * 
 * @param data 日期类型的对象（如：new Date()）
 * @param formatStr 要格式化的日期时间格式（如：“yyyy-MM-dd h:m:s”）
 */
const formatDate = (data: string | number | Date, formatStr?: string) => {
  let date: Date = new Date()
  formatStr = formatStr || 'yyyy-MM-dd'
  if (!data) return data
  if (data instanceof Date) {
    date = data
  } else if (typeof data === 'string' || typeof data === 'number'){
    date = new Date(Number(data))
  } else {
    return data
  }
  let str = formatStr;
  const Week = ['日', '一', '二', '三', '四', '五', '六'];
  const fullYear = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  str = str.replace(/yyyy|YYYY/, String(fullYear))
  str = str.replace(/MM/, month > 9 ? String(month) : '0' + month)
  str = str.replace(/M/g, String(month))
  str = str.replace(/w|W/g, Week[date.getDay()])
  str = str.replace(/dd|DD/, day > 9 ? String(day) : '0' + day)
  str = str.replace(/d|D/g, String(day))
  str = str.replace(/hh|HH/, h > 9 ? String(h) : '0' + h)
  str = str.replace(/h|H/g, String(h))
  str = str.replace(/mm/, m > 9 ? String(m) : '0' + m)
  str = str.replace(/m/g, String(m))
  str = str.replace(/ss|SS/, s> 9 ? String(s) : '0' + s)
  str = str.replace(/s|S/g, String(s))
  return str
}

export {
  formatDate
}
