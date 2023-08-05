<script setup>
    import axios from 'axios'
    
    const config = useRuntimeConfig()
    const bookingList = ref([])
    const pilihanLapangan = ref('a')

    // Fetch all bookings from API
    async function getAllBookings() {
        try {
            const response = await axios.get(config.public.BOOKINGS_API)
            bookingList.value = response.data
        } catch(err) {
            console.log(err)
        }
    }

    onMounted(getAllBookings)

    const filteredBookingList = computed(()=>{
        return bookingList.value.filter(booking => booking.lapangan == pilihanLapangan.value)
    })

</script>

<template>
    <main class="min-h-screen py-32 dark:bg-primary-dark text-primary-dark dark:text-white">
        <h1 class="text-2xl text-center font-extrabold uppercase tracking-wider">JADWAL BOOKING</h1>
        <div class="w-9/12 max-w-sm mx-auto mt-12 mb-9 flex justify-between gap-12">
            <span @click="pilihanLapangan = 'a'" :class="pilihanLapangan == 'a' ? 'border-b-2 border-b-primary-dark dark:border-b-white pb-1' : 'text-slate-400 dark:text-slate-600'" class="tracking-[0.3em] font-bold uppercase hover:cursor-pointer">Lapangan A</span>
            <span @click="pilihanLapangan = 'b'" :class="pilihanLapangan == 'b' ? 'border-b-2 border-b-primary-dark dark:border-b-white pb-1' : 'text-slate-400 dark:text-slate-600'" class="tracking-[0.3em] font-bold uppercase hover:cursor-pointer">Lapangan B</span>
        </div>
        <h1 v-if="filteredBookingList.length == 0" class="w-9/12 max-w-lg mx-auto py-4 text-center">Belum ada jadwal booking</h1>
        
        <div v-for="booking in filteredBookingList" class="w-9/12 max-w-lg mx-auto">
            <BookingCard
                :nama="booking.namaPemesan"
                :tanggal="booking.tanggalBooking"
                :jam="booking.jamBooking"
                :lapangan="booking.lapangan" />
        </div>
    </main>  
</template>


