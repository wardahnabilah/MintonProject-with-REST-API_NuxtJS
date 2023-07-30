<script setup>
    const { nama, tanggal, jam, lapangan } = defineProps(['nama', 'tanggal', 'jam', 'lapangan'])
    
</script>

<template>
    <div class="max-w-[22rem] px-5 py-3 mx-auto mb-6 relative rounded-lg bg-accent-lightpurple shadow-lg shadow-primary-dark/25 dark:shadow-white/25">
        <div class="flex items-center justify-between gap-2 border-b-2 border-primary-dark/20">
            <h4 class="text-lg text-primary-dark font-bold">{{tanggal}}</h4>
            <svg class="bi bi-clock-fill fill-accent-darkgrey/80" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            </svg>
            <h4 class="text-lg text-primary-dark font-bold">{{jam}}</h4>
        </div>
        <p class="text-primary-dark">Dibooking oleh: {{nama}}</p>
        <p class="absolute right-3 bottom-0 text-3xl text-primary-red-dark font-bold uppercase">{{ lapangan }}</p>

    </div>
</template>