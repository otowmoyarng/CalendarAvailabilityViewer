type Setting = {
    DisplayDateRange:number,
    BeginDate: Date,
    EndDate: Date,
}

class Sheet {
    
    Sheet:GoogleAppsScript.Spreadsheet.Spreadsheet;

    constructor() {
        this.Sheet = SpreadsheetApp.getActiveSpreadsheet();
    }

    GetSetting(): Setting {
        
        let result: Setting = {
            DisplayDateRange: this.Sheet.getRange('B2').getValue(),
            BeginDate:  this.Sheet.getRange('B3').getValue(),
            EndDate:  this.Sheet.getRange('B4').getValue(),
        };
        return result;
    }
}