<script setup>
    const { nama, tanggal, jam, lapangan } = defineProps(['nama', 'tanggal', 'jam', 'lapangan'])
    
</script>

<template>
    <div class="max-w-[22rem] px-5 pt-3 pb-2 mx-auto mb-6 relative rounded-lg bg-accent-lightpurple shadow-lg shadow-primary-dark/25 dark:shadow-white/25">
        <div class="flex items-center justify-between gap-2 border-b-2 border-primary-dark/20">
            <h4 class="text-lg text-primary-dark font-bold">{{tanggal}}</h4>
            <svg class="bi bi-clock-fill fill-accent-darkgrey/80" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            </svg>
            <h4 class="text-lg text-primary-dark font-bold">{{jam}}</h4>
        </div>
        <div class="flex items-center gap-3">
            <p class="text-3xl text-accent-darkerpurple font-bold uppercase">{{ lapangan }}</p>
            <p class="text-primary-dark">Dibooking oleh: {{nama}}</p>
            <svg class=" ml-auto fill-red-900 hover:cursor-pointer hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
        </div>
    </div>
</template>