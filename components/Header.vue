<script setup>
    import { useThemeStore } from '~/store/theme';

    const isOpen = ref(false)
    const theme = useThemeStore()

    // Toggle navbar
    function toggleNav() {
        isOpen.value = !isOpen.value
    }

</script>

<template>
    <header class="py-4 fixed inset-x-0 bg-primary-light dark:bg-header-dark text-primary-dark dark:text-white">
            <div class="w-11/12 mx-auto flex justify-between items-center">
                <NuxtLink to="">
                    <img class="w-28" src="/assets/images/minton-logo.png" alt="Minton Logo">
                </NuxtLink>
                <svg @click="toggleNav" class="md:hidden w-7 mb-1 fill-white hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                <nav :class="isOpen  ? 'max-md:top-16' : 'max-md:top-[-400%]'" class="absolute z-50 md:static left-0 duration-500 max-md:w-full bg-gradient-to-b from-primary-light from-50% to-white md:to-primary-light dark:from-header-dark dark:to-header-dark max-md:shadow-lg max-md:shadow-white/40">
                    <ul class="md:flex">
                        <li class="max-md:py-4 pl-12 max-md:border-b">
                            <NuxtLink to="" class="hover:text-accent-yellow hover:cursor-pointer">Beranda</NuxtLink>
                        </li>
                        <li class="max-md:py-4 pl-12 max-md:border-b">
                            <NuxtLink to="" class="hover:text-accent-yellow hover:cursor-pointer">Jadwal Booking</NuxtLink>
                        </li>
                        <li @click="theme.toggleTheme" class="flex gap-1 items-center max-md:py-4 pl-12 max-md:border-b">
                            <svg v-if="theme.isDark" class="w-5 mr-1 fill-primary-dark dark:fill-white hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
                            <svg v-else class="w-6 mr-1 fill-primary-dark dark:fill-white hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                            <span class="hover:text-accent-yellow hover:cursor-pointer">
                                {{ theme.isDark ? 'Dark Mode' : 'Light Mode' }}
                            </span>
                        </li>
                        <li class="md:hidden max-md:py-6 pl-8 max-md:border-b">
                            <NuxtLink to="" class="px-4 py-2 rounded-full bg-primary-red shadow-lg hover:bg-primary-red-dark shadow-primary-red/40 text-white">Booking Sekarang</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>    
        </header>
</template>