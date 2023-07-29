<script setup>
    
</script>

<template>
    <main class="min-h-screen py-32 dark:bg-primary-dark">
        <h1 class="text-2xl text-center dark:text-white font-extrabold uppercase tracking-wider">Formulir Booking</h1>
        <form action="" class="w-9/12 max-w-sm mx-auto mt-10 text-lg grid gap-6">
            <input class="w-full rounded-2xl px-7 py-2 text-primary-dark bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow placeholder:text-primary-dark" type="text" placeholder="Nama Pemesan">
            <input class="w-full rounded-2xl px-7 py-2 text-primary-dark bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow placeholder:text-primary-dark" type="text" placeholder="Nomor WA">
            <div class="relative">
                <select class="w-full rounded-2xl px-7 py-2 text-primary-dark  bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow appearance-none">
                    <option value="">Pilih Tanggal</option>
                    <option value="">2 Juli 2023</option>
                    <option value="">3 Juli 2023</option>
                </select>
                <svg class="absolute inset-y-0 right-6 -z-6 my-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>    
            </div>
            <div class="relative">
                <select class="w-full rounded-2xl px-7 py-2 text-primary-dark  bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow appearance-none">
                    <option value="">Pilih Jam</option>
                    <option value="">08:00 - 09:00</option>
                    <option value="">09:00 - 10:00</option>
                </select>
                <svg class="absolute inset-y-0 right-6 -z-6 my-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>    
            </div>
            <label class="text-xl text-primary-dark dark:text-white">Pilih Lapangan:</label>
            <div class="text-primary-dark dark:text-white flex justify-between">
                <div class="px-2 xsm:px-6 flex gap-4">
                    <input type="radio" id="lapangan-a" name="lapangan">
                    <label for="lapangan-a">Lapangan A</label>
                </div>
                <div class="px-6 flex gap-4">
                    <input type="radio" id="lapangan-b" name="lapangan">
                    <label for="lapangan-a">Lapangan B</label>
                </div>
            </div>
            <button class="text-white mt-6 px-4 py-2 text-lg rounded-full bg-primary-red shadow-lg hover:cursor-pointer hover:bg-primary-red-dark shadow-primary-red/40">Booking Sekarang</button>
        </form>
    </main>
</template>