<template>
    <main class="min-h-screen py-32 dark:bg-primary-dark text-primary-dark dark:text-white">
        <h1 class="text-2xl text-center font-extrabold uppercase tracking-wider">JADWAL BOOKING</h1>
        <div class="w-9/12 max-w-sm mx-auto mt-12 mb-9 flex justify-between gap-12">
            <span class="tracking-[0.3em] font-bold uppercase border-b-2 border-b-primary-dark dark:border-b-white pb-1 hover:cursor-pointer">Lapangan A</span>
            <span class="text-slate-400 dark:text-slate-600 tracking-[0.3em] font-bold uppercase hover:cursor-pointer">Lapangan B</span>
        </div>
        <div class="w-9/12 max-w-lg mx-auto">
            <!-- Item Jadwal -->
            <div class="relative mb-6">
                    <!-- Judul -->
                    <input class="peer w-full h-[3.25rem] absolute top-0 left-0 z-10 rounded-2xl hover:cursor-pointer appearance-none" type="checkbox">
                    <svg class="peer-checked:rotate-180 rotate-0 transition-transform duration-300 absolute top-4 right-7 fill-primary-dark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
                    <div class="w-full mb-4 px-7 py-3 rounded-2xl text-xl font-semibold bg-accent-lightpurple hover:cursor-pointer">
                        <span class="text-primary-dark">Senin, 24 Juli 2023</span>
                    </div>
                    <!-- Isi -->
                    <div class="peer-checked:block hidden w-full px-8 pt-2 pb-4 rounded-2xl text-xl border-2 border-accent-lightpurple">
                        <div class="px-4 sm:px-14 py-3.5 border-b-2 border-primary-dark/30 dark:border-white/50 flex justify-between items-center">
                            <span>08:00 - 09:00</span>
                            <span class="px-10 py-1 text-lg text-center bg-accent-darkgrey rounded-full">Booked</span>
                        </div>
                        <div class="px-4 sm:px-14 py-3.5 border-b-2 border-primary-dark/30 dark:border-white/50 flex justify-between items-center">
                            <span>08:00 - 09:00</span>
                            <span class="px-10 py-1 text-lg text-center bg-accent-darkgrey rounded-full">Booked</span>
                        </div>
                    </div>
            </div>
            <div class="relative mb-6">
                    <!-- Judul -->
                    <input class="peer w-full h-[3.25rem] absolute top-0 left-0 z-10 rounded-2xl hover:cursor-pointer appearance-none" type="checkbox">
                    <svg class="peer-checked:rotate-180 rotate-0 transition-transform duration-300 absolute top-4 right-7 fill-primary-dark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
                    <div class="w-full mb-4 px-7 py-3 rounded-2xl text-xl font-semibold bg-accent-lightpurple hover:cursor-pointer">
                        <span class="text-primary-dark">Selasa, 25 Juli 2023</span>
                    </div>
                    <!-- Isi -->
                    <div class="peer-checked:block hidden w-full px-8 pt-2 pb-4 rounded-2xl text-xl border-2 border-accent-lightpurple">
                        <div class="px-4 sm:px-14 py-3.5 border-b-2 border-primary-dark/30 dark:border-white/50 flex justify-between items-center">
                            <span>08:00 - 09:00</span>
                            <span class="px-10 py-1 text-lg text-center bg-accent-darkgrey rounded-full">Booked</span>
                        </div>
                        <div class="px-4 sm:px-14 py-3.5 border-b-2 border-primary-dark/30 dark:border-white/50 flex justify-between items-center">
                            <span>08:00 - 09:00</span>
                            <span class="px-10 py-1 text-lg text-center bg-accent-darkgrey rounded-full">Booked</span>
                        </div>
                    </div>
            </div>    
        </div>
    </main>

    <!-- Item Jadwal -->
<div class="mb-7">
    <!-- Judul -->
    <div class="relative mb-4 px-7 py-3 flex justify-between items-center rounded-2xl text-xl font-semibold bg-accent-lightpurple hover:bg-accent-darkerpurple hover:cursor-pointer">
        <input class="peer w-full h-full absolute top-0 left-0 rounded-2xl hover:cursor-pointer appearance-none" type="checkbox">
        <span class="text-primary-dark">Senin, 24 Juli 2023</span>
        <svg class="peer-checked:rotate-180 rotate-0 transition-transform duration-300 fill-primary-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
    </div>
    <!-- Isi -->
    <div class="peer-checked:hidden px-8 pt-2 pb-4 rounded-2xl text-xl border-2 border-accent-lightpurple">
        <div class="px-4 sm:px-14 py-3.5 border-b-2 border-primary-dark/30 dark:border-white/50 flex justify-between items-center">
            <span>08:00 - 09:00</span>
            <span class="px-10 py-1 text-lg text-center bg-accent-darkgrey rounded-full">Booked</span>
        </div>
        <div class="px-4 sm:px-14 py-3.5 border-b-2 border-primary-dark/30 dark:border-white/50 flex justify-between items-center">
            <span>08:00 - 09:00</span>
            <span class="px-10 py-1 text-lg text-center bg-accent-darkgrey rounded-full">Booked</span>
        </div>
    </div>
</div>   
</template>


