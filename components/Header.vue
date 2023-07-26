<script setup>
    const isOpen = ref(false)

    // Toggle navbar
    function toggleNav() {
        isOpen.value = !isOpen.value
    }

</script>

<template>
    <header class="py-4 fixed inset-x-0 bg-primary-light dark:bg-header-dark text-primary-dark dark:text-white">
            <div class="w-11/12 mx-auto flex justify-between items-center">
                <a href="">
                    <img class="w-28" src="/assets/images/minton-logo.png" alt="Minton Logo">
                </a>
                <svg @click="toggleNav" class="md:hidden w-7 mb-1 fill-white hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                <nav :class="isOpen  ? 'max-md:top-16' : 'max-md:top-[-400%]'" class="absolute md:static top-[-50%] left-0 duration-500 max-md:w-full bg-gradient-to-b from-primary-light from-50% to-white dark:from-header-dark dark:to-header-dark max-md:shadow-lg max-md:shadow-white/40">
                    <ul class="md:flex">
                        <li class="max-md:py-4 pl-12 max-md:border-b">
                            <a href="" class="hover:text-accent-yellow">Beranda</a>
                        </li>
                        <li class="max-md:py-4 pl-12 max-md:border-b">
                            <a href="" class="hover:text-accent-yellow">Jadwal Booking</a>
                        </li>
                        <li class="flex gap-1 items-center max-md:py-4 pl-12 max-md:border-b">
                            <svg class="w-5 mr-1 fill-primary-dark dark:fill-white hover:fill-accent-yellow hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
                            <span class="hover:text-accent-yellow hover:cursor-pointer">
                                Dark Mode
                            </span>
                        </li>
                        <li class="max-md:py-6 pl-8 max-md:border-b">
                            <a href="" class="px-4 py-2 rounded-full bg-primary-red shadow-lg hover:bg-primary-red/60 shadow-primary-red/40 text-white">Booking Sekarang</a>
                        </li>
                    </ul>
                </nav>
            </div>    
        </header>
</template>