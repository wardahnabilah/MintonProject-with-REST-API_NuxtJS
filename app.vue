<script setup>
    import { useThemeStore }  from '~/store/theme'

    const theme  = useThemeStore()
    
</script>
<template>
  <div :class="theme.isDark ? 'dark' : '' ">
    <NuxtLayout>
      <Header></Header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
