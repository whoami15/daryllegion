<template>
    <div class="antialiased flex h-screen justify-center items-center bg-gray-100">
        <div class="text-center">
            <img class="w-16 md:w-28 lg:w-32 mx-auto mb-2" src="/logo.png" @click="conf">
            <h1 class="font-mono font-semibold lg:text-5xl sm:text-3xl text-3xl tracking-wide uppercase text-gray-800">{{ msg }}</h1>
            <p class="font-mono text-gray-500 font-semibold tracking-wide">&copy; 2021</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['msg'],

    created() {
        confetti()
    },

    methods: {
        conf() {
            confetti({
                particleCount: 50,
                spread: 70,
                origin: { y: 0.6 }
            })
        }
    },
}
</script>
