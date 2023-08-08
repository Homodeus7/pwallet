export const formatDate = (timestamp: number) => {
  return (
    Intl.DateTimeFormat('en-GB').format(timestamp * 1000) +
    '  ' +
    Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      hour12: false,
      minute: 'numeric'
    }).format(timestamp * 1000)
  )
}

export const formatObjectDate = (date: Date) => {
  return (
    Intl.DateTimeFormat('en-GB').format(date) +
    '  ' +
    Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      hour12: false,
      minute: 'numeric'
    }).format(date)
  )
}

export const formatTime = (date: string) => {
  return Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric'
  }).format(new Date(date))
}

export const formatBigNums = (number: number) => {
  const num = number.toString()

  const floorNum = num.toString().split('.')[0]

  let wholePath = floorNum.length % 3
  let stringPath = (floorNum.length - wholePath) / 3

  if (wholePath === 0 && stringPath > 1) {
    wholePath = 3
    stringPath -= 1
  }
  if (wholePath === 0 && stringPath === 1) stringPath = 0

  switch (stringPath) {
    case 0: {
      return num
    }
    case 1: {
      return num.slice(0, wholePath) + ' ' + 'k'
    }
    case 2: {
      return num.slice(0, wholePath) + ' ' + 'M'
    }
    case 3: {
      return num.slice(0, wholePath) + ' ' + 'B'
    }
    case 4: {
      return num.slice(0, wholePath) + ' ' + 'T'
    }
    case 5: {
      return num.slice(0, wholePath) + ' ' + 'qd'
    }
    case 6: {
      return num.slice(0, wholePath) + ' ' + 'Qn'
    }
    case 7: {
      return num.slice(0, wholePath) + ' ' + 'sx'
    }
    case 8: {
      return num.slice(0, wholePath) + ' ' + 'Sp'
    }
    case 9: {
      return num.slice(0, wholePath) + ' ' + 'O'
    }
    case 10: {
      return num.slice(0, wholePath) + ' ' + 'N'
    }
  }
  return 0
}

export const shortAddress = (str: string, start = 6, end = start - 2) => {
  return str.slice(0, start) + '...' + str.slice(-end)
}

export const nowInSeconds = () => Math.floor(Date.now() / 1000)