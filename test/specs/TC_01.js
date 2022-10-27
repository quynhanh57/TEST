//const { Browser } = require("puppeteer-core");
//const { default: $ } = require("webdriverio/build/commands/browser/$");

//import LoginPage from '../pageobjects/login'
//import LogoutPage from '../pageobjects/logout'
//import SchedulerPage from '../pageobjects/scheduler'

LoginPage = require('../pageobjects/login.page')
LogoutPage = require('../pageobjects/logout.page')
SchedulerPage = require ('../pageobjects/scheduler.page')

const timeOutMsg = {
    timeout: 5000,
    timeoutMsg: 'Time out 5s'
}

describe('Create a new appointment', () => {

    before( async () => {
        //Open
        await LoginPage.open()

        //Fill username and password
        await LoginPage.username.setValue("anh-tran")
        await LoginPage.password.setValue("cybozu")

        //Click login button
        await LoginPage.clickLoginBt()

        //Click Garoon button
        await SchedulerPage.clickGaroonBt()

        //Click Scheduler button
        await SchedulerPage.clickSchedulerBt()

        //Click create new appointment
        await SchedulerPage.clickNewAppointmentBt()
    });

    after( async () => {
        //Log out
        await LogoutPage.clickUsernameBt()
        await LogoutPage.clickUsernameBt()
    })

    it('Create a regular appointment successfully ', async () => {
        // Date and time
        await SchedulerPage.setStartmonth()
        await SchedulerPage.setStartday()
        await SchedulerPage.setStarthour(10)
        await SchedulerPage.setStartminute()

        await SchedulerPage.setEndmonth()
        await SchedulerPage.setEndday()
        await SchedulerPage.setEndhour(11)
        await SchedulerPage.setEndminute()
        
        //Fill title
        await SchedulerPage.setTitle()

        //Add attendee
        await SchedulerPage.addAttendee()

        //Add share with
        await SchedulerPage.addSharewith()

        //Add facilities
        await SchedulerPage.addFacility()

        //Add note
        await SchedulerPage.addNote()

        //Set private appointment
        await SchedulerPage.setPrivate()

        //Add appointment
        await SchedulerPage.clickAddBt()

        //Verify
        await SchedulerPage.verifyAppointment()

        //Click delete button
        await SchedulerPage.clickDeleteBt()

        //All attendee's schuduler
        await SchedulerPage.clickAllBt()

        //Click Yes button
        await SchedulerPage.clickYesBt()
        await LoginPage.open()

        //Fill username and password
        await LoginPage.username.setValue("anh-tran")
        await LoginPage.password.setValue("cybozu")

        //Click login button
        await LoginPage.clickLoginBt()

        //Click Garoon button
        await SchedulerPage.clickGaroonBt()

        //Click Scheduler button
        await SchedulerPage.clickSchedulerBt()

        //Click create new appointment
        await SchedulerPage.clickNewAppointmentBt()
    })

    it('Create a all day appointment unsuccessfully ', async () => {
        //Click All day button
        await SchedulerPage.clickAllBt()

        //Fill title
        await SchedulerPage.setTitle()

        //Add attendee
        await SchedulerPage.addAttendee()

        //Add share with
        await SchedulerPage.addSharewith()

        //Add facilities
        await SchedulerPage.addFacility()

        //Add note
        await SchedulerPage.addNote()

        //Set private appointment
        await SchedulerPage.setPrivate()

        //Add appointment
        await SchedulerPage.clickAddBt()

        //Verify
        await SchedulerPage.verifyAppointment()

        //Click delete button
        await SchedulerPage.clickDeleteBt()

        //All attendee's schuduler
        await SchedulerPage.clickAllBt()

        //Click Yes button
        await SchedulerPage.clickYesBt()
    })
});
