module.exports = {
  getTodayDate : ()=>{
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const formattedToday = dd + '-' + mm + '-' + yyyy;
      return formattedToday
    },
    formatTime : (timeString)=>{
      if(timeString===null) return "";
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
    },
  getIsalmicMonth:(month)=>{
    const isalmicMonth = [{monthName:1,date:"Muharram"},
    {monthName:2,date:"Safar"},
    {monthName:3,date:"Rabi-ul-awwal"},
    {monthName:4,date:"Rabi-ul-saani"},
    {monthName:5,date:"Jama-dil-ula"},
    {monthName:6,date:"Jamad-us-saani"},
    {monthName:7,date:"Rajjab"},
    {monthName:8,date:"Shabaan"},
    {monthName:9,date:"Ramadan"},
    {monthName:10,date:"Shawwal"},
    {monthName:11,date:"Zulqaidah"},
    {monthName:12,date:"Zulhujjah"}  
  ]
  return  month!==undefined ? isalmicMonth.find(mon => mon.monthName === parseInt(month)).date:null
  },
getMonthName: monthNumber =>{
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    // Using the browser's default locale.
    return date.toLocaleString([], { month: 'long' });
  },
compareTwoTime:(currenttime,prayerTime) => +currenttime?.split(":")[0]>=+prayerTime?.split(":")[0] ?  true:false,
calculateDiffInTwoTime:(currenttime,nextTime) =>{

  const hoursDiff = nextTime?.split(":")[0]-currenttime?.split(":")[0]
  const minDiff = (nextTime?.split(":")[1]-currenttime?.split(":")[1] * -1)
  return {hoursDiff,minDiff}
}
    
  
}