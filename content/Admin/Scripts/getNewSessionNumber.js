function getNewSessionNumber (tp) {
    const dv = app.plugins.plugins.dataview.api
    const thisPatientSessionFolderPath = tp.file.folder(true)
    console.log("folder: ", thisPatientSessionFolderPath)
    
      const sessionNum = dv.pages(`"${ thisPatientSessionFolderPath }"`)
                .where(p => p.type == "session" && p.sessionNum)
                .sort(p => p.sessionNum, "desc")
                .map(p => p.sessionNum)
                // .limit(5)[0]
    const newsessionNum = sessionNum.length
    console.log("session: ",newsessionNum)
    return newsessionNum
  }
  
  module.exports = getNewSessionNumber;