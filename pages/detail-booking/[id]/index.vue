<script setup>
    const route = useRoute()
</script>

<template>
    <main class="min-h-screen py-28 dark:bg-primary-dark text-primary-dark dark:text-white">
        <h1 class="mb-8 text-2xl text-center font-extrabold uppercase tracking-wider">DETAIL BOOKING #{{route.params.id}}</h1>
        <div class="w-10/12 max-w-[34rem] mx-auto rounded-3xl p-12 border-4 border-primary-light/40 dark:border-white/25 text-lg">
            <table>
                <tr>
                    <td class="pb-2 pr-2">Kode Booking</td>
                    <td><span class="pr-2">:</span> #{{route.params.id}}</td>
                </tr>
                <tr>
                    <td class="pb-2 pr-2">Nama Pemesan</td>
                    <td><span class="pr-2">:</span>User</td>
                </tr>
                <tr>
                    <td class="pb-2 pr-2">Nomor WA</td>
                    <td><span class="pr-2">:</span>081234567</td>
                </tr>
                <tr>
                    <td class="pb-2 pr-2">Tanggal</td>
                    <td><span class="pr-2">:</span>Senin, 6 Agustus 2023</td>
                </tr>
                <tr>
                    <td class="pb-2 pr-2">Jam</td>
                    <td><span class="pr-2">:</span>08:00 - 09:00</td>
                </tr>
                <tr>
                    <td class="pb-2 pr-2">Lapangan</td>
                    <td class="uppercase"><span class="pr-2">:</span>a</td>
                </tr>
            </table>
            <NuxtLink :to="`/detail-booking/${route.params.id}/edit`" class="block w-full mt-12 px-4 py-2 text-white text-lg text-center rounded-full bg-primary-light hover:cursor-pointer hover:bg-cyan-900">Edit</NuxtLink>
        </div>
    </main>
</template>