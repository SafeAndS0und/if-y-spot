export default uglyTime => {
   // uglyTimes is something like "231.322343" which Audio.duration returns
   // we're going for "03:32"
   const rounded = Math.round(uglyTime)
   const minutes = parseInt((rounded / 60))
   const seconds = rounded - minutes * 60

   const prettyString = `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds }`
   return prettyString
}