import { defineStore } from "pinia";

export const useBookingStore = defineStore('booking', ()=>{
    // state
    const bookingList = reactive([]) 
    const currentBooking = ref({})

    //  actions
    function addBooking(newBooking) {
        bookingList.push(newBooking)
    }

    return { bookingList, currentBooking, addBooking }
})