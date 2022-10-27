//import Page from './page'

const Page = require('./page');

class SchedulerPage extends Page {

    get GaroonBt () { return $('[title = "Garoon"]')}
    get SchedulerBt () { return $('[title = "Scheduler"]')}
    get create_new_appointmentBt() { return $('//*[@id="smart_main_menu_part"]/span[1]')}
    get startmonth () { return $('[name = "start_month"]')}
    get startday () { return $('[name = "start_day"]')}
    get starthour () { return  $('[name = "start_hour"]')}
    get startminute () { return $('[name = "start_minute"]')}
    get endmonth () {return $('[name = "end_month"]')}
    get endday () { return $('[name = "end_day"]')}
    get endhour () { return  $('[name = "end_hour"]')}
    get endminute () { return $('[name = "end_minute"]')}
    get title () { return $('[name = "title"]')}
    get attendee1 () { return $('//*[@id="selectlist_CID_member_user_5-1"]/span[2]')}
    get add_attendee_Bt () { return $('//*[@id="btn_add_sUID"]')}
    get sharewith () { return $('//*[@id="selectlist_p_CID_member_user_3"]/span[2]')}
    get add_share_with_Bt () { return $('//*[@id="btn_add_p_sUID"]/span[1]')}
    get facilities () { return $('//*[@id="selectlist_cITEM_member_facility_2"]/span[2]')}
    get add_facility_Bt () { return $('//*[@id="btn_add_cITEM"]/span[1]')}
    get note () { return $('[name = "memo"]')}
    get private_radio () { return $('//*[@id="2"]')}
    get add_appointment_Bt () { return $('//*[@id="schedule_submit_button"]/a')}
    get delete_bt () { return $('//*[@id="main_menu_part"]/div[1]/span[2]/span/a')}
    get all_bt () { return $('//*[@id="1"]')}
    get yes_bt () { return $('//*[@id="schedule_button_save"]/a')}
    get error () { return $('//*[@id="msgbox"]')}
    get okBt() { return $('//*[@id="msgbox_btn_ok"]/a')}
    get alldayBT() { return $('//*[@id="schedule/banner_add"]/div[2]')}
    get titleAppoitment() { return $('*[@id="event_list"]/h2')}
    get noteAppointment() { return $('//*[@id="notes_row_grn"]/td/pre')}
    
    
    async clickGaroonBt () {
        await this.GaroonBt.click()
    }

    async clickSchedulerBt () {
        await this.SchedulerBt.click()
    }

    async clickNewAppointmentBt(){
        await super.waitUntilElementDisplayed(this.create_new_appointmentBt)
        await this.create_new_appointmentBt.click()
    }

    //Click all day appointment
    async clickAlldayBt(){
        await super.waitUntilElementDisplayed(this.alldayBT)
        await this.alldayBT.click()
    }

    // Set date and time
    async setStartmonth () {
        await this.startmonth.selectByVisibleText('Nov')
    }

    async setStartday () {
        await this.startday.selectByVisibleText('5(Sat)')
    }

    async setStarthour (sh) {
        await this.starthour.selectByVisibleText(sh)
    }

    async setStartminute () {
        await this.startminute.selectByVisibleText('30')
    }

    async setEndmonth () {
        await this.endmonth.selectByVisibleText('Nov')
    }

    async setEndday () {
        await this.endday.selectByVisibleText('5(Sat)')
    }

    async setEndhour (eh) {
        await this.endhour.selectByVisibleText(eh)
    }

    async setEndminute () {
        await this.endminute.selectByVisibleText('45')
    }
    
    //Fill title
    async setTitle() {
        await this.title.setValue("Testing")
    }

    //Add attendee
    async addAttendee(){
        await this.attendee1.click()
        await this.add_attendee_Bt.click()
    } 

    //Add share with
    async addSharewith(){
        await this.sharewith.click()
        await this.add_share_with_Bt.click()
    }

    //Add facility
    async addFacility() {
        await this.facilities.click()
        await this.add_facility_Bt.click()
    }
    
    //Add note
    async addNote() {
        await this.note.setValue("Important appointment!")
    }

    //Set private appointment
    async setPrivate () {
        await this.private_radio.click()
    }

    //Add appointment
    async clickAddBt() {
        await this.add_appointment_Bt.click()
    }

    //Verify information of appoitment
    async verifyAppointment(){
        await super.waitUntilElementDisplayed(this.titleAppoitment)
        await expect(this.titleAppoitment).toHaveText('Testing')

        await super.waitUntilElementDisplayed(this.noteAppointment)
        await expect(this.noteAppointment).toHaveText('Important appointment!')
    }

    //Verify Error
    VerifyError
    async verifyError(){
        await super.waitUntilElementDisplayed(this.error)
    }

    //Click OK in Error message
    async clickOK(){
        await this.okBt.click()
    }

    //Click delete button
    async clickDeleteBt() {
        await super.waitUntilElementDisplayed(this.delete_bt)
        await this.delete_bt.click()
    }

    //All attendee's schuduler
    async clickAllBt() {
        await super.waitUntilElementDisplayed(this.all_bt)
        await this.all_bt.click()
    }

    //Click Yes when delete 
    async clickYesBt(){
        await super.waitUntilElementDisplayed(this.yes_bt)
        await this.yes_bt.click()
    }

}

//export default new SchedulerPage()
module.exports = SchedulerPage;