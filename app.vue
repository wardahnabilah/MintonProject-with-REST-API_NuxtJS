<script setup>
    import { useThemeStore }  from '~/store/theme'

    const theme  = useThemeStore()

    // document title
    onMounted(()=>document.title = "Minton")
    
</script>
<template>
  <div :class="theme.isDark ? 'dark' : '' ">
    <NuxtLayout>
      <Header></Header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
