<script setup>
    
</script>

<template>
    <main class="absolute -z-10">
        <div class="w-screen overflow-clip">
            <div class="max-lg:w-[65rem] h-screen">
                <img class="object-right object-cover" src="~/assets/images/bg-hero.png" alt="">
            </div>
        </div>
        <div class="absolute top-40 md:top-48 inset-x-0 mx-auto text-center text-white">
            <h1 class="w-8/12 mx-auto leading-normal tracking-wide font-bold text-3xl md:text-4xl uppercase">Unleash Your Badminton Passion</h1>
            <h1 class="mt-5 tracking-wide font-bold text-3xl md:text-4xl uppercase">Play, Rally, Soar!</h1>  
            <NuxtLink to="/buat-booking" class="inline-block mt-20 px-4 py-2 text-lg rounded-full bg-primary-red shadow-lg hover:cursor-pointer hover:bg-primary-red-dark shadow-primary-red/40">Booking Sekarang</NuxtLink>
        </div>  
    </main>
</template>

