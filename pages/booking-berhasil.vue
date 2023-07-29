<template>
    <main class="min-h-screen py-28 dark:bg-primary-dark text-primary-dark dark:text-white">
        <div class="w-10/12 max-w-lg mx-auto rounded-xl p-12 bg-primary-light/60 dark:bg-white/25 text-lg shadow-2xl shadow-primary-dark dark:shadow-white/25">
            <h2 class="mb-10 text-2xl text-center font-extrabold tracking-widest uppercase">Booking Berhasil !</h2>
            <!-- Detail Booking -->
            <div class="mb-8">
                <p>Atas nama <span class="ml-12">: Daniel Smith</span></p>
                <div class="flex items-start gap-2.5">
                    <p class="inline-block">Jadwal Booking</p>
                    <div class="md:flex">
                        <p>: Senin, 24 Juli 2023</p>
                        <p class="ml-2 flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            </svg>
                            08:00 - 09:00
                        </p>
                    </div>
                </div>
            </div>
            <!-- Kode Booking -->
            <p class="mb-2">Kode booking Anda:</p>
            <div class="mb-10 py-3 text-2xl text-center border-2 border-primary-dark dark:border-white rounded-full">#12378</div>
            <p class=" w-[22rem] mx-auto text-center">Tunjukkan kode booking ini kepada petugas pada saat datang ke lapangan</p>
            <NuxtLink to="/new-booking" class="block mt-12 px-4 py-2 text-white text-lg text-center rounded-full bg-primary-red shadow-lg hover:cursor-pointer hover:bg-primary-red-dark shadow-primary-red/40">Oke</NuxtLink>
        </div>
    </main>
</template>