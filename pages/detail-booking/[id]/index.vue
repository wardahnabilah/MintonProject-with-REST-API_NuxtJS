<script setup>
    import axios from 'axios'

    const route = useRoute()
    const config = useRuntimeConfig()
    const detailBooking = ref({})
    
    // Fetch the booking from API
    async function getABooking(id) {
        try {
            const response = await axios.get(`${config.public.BOOKINGS_API}/${id}`)
            detailBooking.value = response.data
        } catch(err) {
            console.log(err);
        }
    }

    onMounted(()=> {
        getABooking(route.params.id)
    })
</script>

<template>
    <main class="min-h-screen py-28 dark:bg-primary-dark text-primary-dark dark:text-white">
        <h1 class="mb-2 text-2xl text-center font-extrabold uppercase tracking-wider">DETAIL BOOKING</h1>
        <h1 class="mb-8 text-2xl text-center font-extrabold tracking-wider">#{{detailBooking._id}}</h1>
        <div class="w-10/12 max-w-[34rem] mx-auto rounded-3xl p-12 border-4 border-primary-light/40 dark:border-white/25 text-lg">
            <client-only>
                <table>
                    <tr class="pb-2">
                        <td class="pb-2 pr-2">Kode Booking</td>
                        <td class="pb-2 pr-2">:</td>
                        <td class="break-all pb-2 pr-2 "> #{{detailBooking._id}}</td>
                    </tr>
                    <tr>
                        <td class="pb-2 pr-2">Nama Pemesan</td>
                        <td class="pb-2 pr-2">:</td>
                        <td class="pb-2 pr-2">{{detailBooking.namaPemesan}}</td>
                    </tr>
                    <tr>
                        <td class="pb-2 pr-2">Nomor WA</td>
                        <td class="pb-2 pr-2">:</td>
                        <td class="pb-2 pr-2">{{detailBooking.nomorWA}}</td>
                    </tr>
                    <tr>
                        <td class="pb-2 pr-2">Tanggal</td>
                        <td class="pb-2 pr-2">:</td>
                        <td class="pb-2 pr-2">{{detailBooking.tanggalBooking}}</td>
                    </tr>
                    <tr>
                        <td class="pb-2 pr-2">Jam</td>
                        <td class="pb-2 pr-2">:</td>
                        <td class="pb-2 pr-2">{{detailBooking.jamBooking}}</td>
                    </tr>
                    <tr>
                        <td class="pb-2 pr-2">Lapangan</td>
                        <td class="pb-2 pr-2">:</td>
                        <td class="uppercase pb-2 pr-2">{{ detailBooking.lapangan }}</td>
                    </tr>
                </table>
            </client-only>
            <NuxtLink :to="`/detail-booking/${route.params.id}/edit`" class="block w-full mt-12 px-4 py-2 text-white text-lg text-center rounded-full bg-primary-light hover:cursor-pointer hover:bg-cyan-900">Edit</NuxtLink>
        </div>
    </main>
</template>