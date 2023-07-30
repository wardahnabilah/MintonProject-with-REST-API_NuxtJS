<script setup>
    import { useBookingStore } from '~/store/booking'

    const { currentBooking, addBooking } = useBookingStore()

    const formData = reactive({
        id: Math.round(Math.random() * 100000) + 1000000,
        namaPemesan: "",
        nomorWA: "",
        tanggalDipilih: "",
        jamDipilih: "",
        lapangan: ""
    })

    // Add a new booking
    function addNewBooking() {
        if(formData.namaPemesan != "" && formData.nomorWA != "" && formData.tanggalDipilih != "" && formData.jamDipilih != ""  && formData.lapangan != "" ) {
            addBooking(formData)
            currentBooking.value = formData
            
            navigateTo("/booking-berhasil")
        }
    }

</script>

<template>
    <main class="min-h-screen py-32 dark:bg-primary-dark">
        <h1 class="text-2xl text-center dark:text-white font-extrabold uppercase tracking-wider">Formulir Booking</h1>
        <form @submit.prevent="addNewBooking" class="w-9/12 max-w-sm mx-auto mt-10 text-lg grid gap-6">
            <input required pattern="[a-zA-Z\s]{3,15}" v-model="formData.namaPemesan" class="w-full rounded-2xl px-7 py-2 text-primary-dark bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow placeholder:text-primary-dark" type="text" placeholder="Nama Pemesan">
            <input required pattern="[0-9]{8,12}" v-model="formData.nomorWA" class="w-full rounded-2xl px-7 py-2 text-primary-dark bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow placeholder:text-primary-dark" type="text" placeholder="Nomor WA">
            <div class="relative">
                <select required v-model="formData.tanggalDipilih" class="w-full rounded-2xl px-7 py-2 text-primary-dark  bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow appearance-none">
                    <option value="">Pilih Tanggal</option>
                    <option value="Minggu, 6 Agustus 2023">Minggu, 6 Agustus 2023</option>
                    <option value="Senin, 7 Agustus 2023">Senin, 7 Agustus 2023</option>
                    <option value="Selasa, 8 Agustus 2023">Selasa, 8 Agustus 2023</option>
                    <option value="Rabu, 9 Agustus 2023">Rabu, 9 Agustus 2023</option>
                </select>
                <svg class="absolute inset-y-0 right-6 -z-6 my-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>    
            </div>
            <div class="relative">
                <select required v-model="formData.jamDipilih" class="w-full rounded-2xl px-7 py-2 text-primary-dark  bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow appearance-none">
                    <option value="">Pilih Jam</option>
                    <option value="08:00 - 09:00">08:00 - 09:00</option>
                    <option value="16:00 - 17:00">16:00 - 17:00</option>
                    <option value="18:00 - 19:00">18:00 - 19:00</option>
                </select>
                <svg class="absolute inset-y-0 right-6 -z-6 my-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>    
            </div>
            <label class="text-xl text-primary-dark dark:text-white">Pilih Lapangan:</label>
            <div class="text-primary-dark dark:text-white flex justify-between">
                <div class="px-2 xsm:px-6 flex gap-4">
                    <input required v-model="formData.lapangan" value="a" type="radio" id="lapangan-a" name="lapangan">
                    <label for="lapangan-a">Lapangan A</label>
                </div>
                <div class="px-6 flex gap-4">
                    <input required v-model="formData.lapangan" value="b" type="radio" id="lapangan-b" name="lapangan">
                    <label for="lapangan-a">Lapangan B</label>
                </div>
            </div>
            <button class="text-white mt-6 px-4 py-2 text-lg rounded-full bg-primary-red shadow-lg hover:cursor-pointer hover:bg-primary-red-dark shadow-primary-red/40">Booking Sekarang</button>
        </form>
    </main>
</template>