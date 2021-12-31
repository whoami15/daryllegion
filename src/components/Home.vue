<template>
    <div class="flex justify-center items-center">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <img class="w-16 md:w-28 lg:w-32 mx-auto mb-2" src="/logo.png" @click="conf">
          <h1 class="font-mono font-semibold lg:text-5xl sm:text-3xl text-3xl tracking-wide uppercase text-gray-800">{{ msg }}</h1>
          <blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">Great submission <a href="https://twitter.com/Annevigoss?ref_src=twsrc%5Etfw">@Annevigoss</a>! 😺<br><br>🎨 Create your own Christmas card at <a href="https://t.co/EG4JMXauVG">https://t.co/EG4JMXauVG</a><br><br>It&#39;s great to see all those lovely digital postcards from all over the world 💌 <a href="https://t.co/w81DUeXd4H">pic.twitter.com/w81DUeXd4H</a></p>&mdash; Spatie (@spatie_be) <a href="https://twitter.com/spatie_be/status/1473677144639389709?ref_src=twsrc%5Etfw">December 22, 2021</a></blockquote>
        <p class="font-mono text-gray-500 font-semibold tracking-wide">&copy; 2021</p>

        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['msg'],

    created() {
        this.conf()
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
