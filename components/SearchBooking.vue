<script setup>
    const { closeSearch } = defineProps(['closeSearch'])

    const searchInput = ref('')


    function searchBooking() {
        searchInput.value = searchInput.value.replace('#','').trim()

        closeSearch()

        return navigateTo(`/detail-booking/${searchInput.value}`)
    }
</script>

<template>
    <section class="h-screen fixed inset-x-0 top-0 z-50">
        <div class="pt-16 pb-6 md:pb-16 bg-primary-light dark:bg-header-dark text-primary-dark dark:text-white max-md:shadow-white/40">
            <svg @click="closeSearch" class="absolute top-[1rem] md:top-[1.75rem] right-[1.5rem] md:right-[3rem] fill-primary-dark dark:fill-white hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
            <form @submit.prevent="searchBooking" class="w-6/12 md:w-4/12 mx-auto flex gap-3">
                <input v-model="searchInput" class="w-full rounded-2xl px-5 py-2 text-primary-dark bg-white/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow placeholder:text-primary-dark/60" type="text" placeholder="Masukkan id booking">
                <button class="px-6 py-2 rounded-full bg-primary-red shadow-lg hover:bg-primary-red-dark shadow-primary-red/40 text-white">Cari</button>
            </form>
        </div>
        <div class="min-h-screen absolute inset-x-0 top-0 bottom-0 -z-10 backdrop-blur-lg bg-primary-light/40 dark:bg-primary-dark/40"></div>
    </section>
</template>