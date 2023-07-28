import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme', () => {
    // state
    const isDark = ref(true)
    // actions
    function toggleTheme() {
        isDark.value = !isDark.value
    }

    return {isDark, toggleTheme}

})