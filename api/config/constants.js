module.exports = {
    success: 200,
    er_failure: 700,
    er_not_found: 704,
    er_authentication_failed: 701,
    er_authorization_failed: 703,
    
    Admin: "admin",
    Employee: "employee",
    
    saltRound: 10,
    // constants used in rotateLogs.js
    fifteenDaysInMiliseconds: 1296000000, // 15 days in miliseconds,
    oneDayInMilisecond: 86400000, // 1 day in milisecon
    fileSizeInMB: 1,
    logFile: "hrms.log"
    
}