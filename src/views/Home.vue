<script>
export default {
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

<template>
    <div class="flex justify-center items-center">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <img class="w-16 md:w-28 lg:w-32 mx-auto mb-2" src="/logo.png" style="cursor:pointer" @click="conf">
          <h1 class="font-mono font-semibold lg:text-5xl sm:text-3xl text-3xl tracking-wide uppercase text-gray-800">Daryl Ferrer Legion</h1>
          <blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">Great submission <a href="https://twitter.com/Annevigoss?ref_src=twsrc%5Etfw">@Annevigoss</a>! 😺<br><br>🎨 Create your own Christmas card at <a href="https://t.co/EG4JMXauVG">https://t.co/EG4JMXauVG</a><br><br>It&#39;s great to see all those lovely digital postcards from all over the world 💌 <a href="https://t.co/w81DUeXd4H">pic.twitter.com/w81DUeXd4H</a></p>&mdash; Spatie (@spatie_be) <a href="https://twitter.com/spatie_be/status/1473677144639389709?ref_src=twsrc%5Etfw">December 22, 2021</a></blockquote>
          <p class="font-mono text-blue-500 font-semibold tracking-wide mt-5"><a href="https://phpc.social/@daryl1509" rel="me noopener" target="_blank">Mastodon</a> &middot; <a href="https://github.com/whoami15" rel="noopener" target="_blank">GitHub</a></p>
          <p>If you need to message me securely, you can <a href="https://www.gnupg.org/gph/en/manual/x110.html" class="font-mono text-blue-500 font-semibold tracking-wide">encrypt your message</a> <br>using my PGP key: <a href="https://keybase.io/daryllegion/pgp_keys.asc?fingerprint=28ca11ea51c4beb85079ee9f4ccfa044872b31e4"><code>28CA 11EA 51C4 BEB8 5079 EE9F 4CCF A044 872B 31E4</code></a></p>
          <p class="font-mono text-gray-500 font-semibold tracking-wide">&copy; 2021</p>
        </div>
      </div>
    </div>
</template>
