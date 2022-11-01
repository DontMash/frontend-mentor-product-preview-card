<script lang="ts">
  import Footer from './lib/Footer.svelte';
  import IconCart from './lib/icons/IconCart.svelte';
</script>

<main>
  <section class="px-4 py-2 md:pt-32">
    <h1 class="sr-only">Product Preview</h1>
    <div class="w-full md:max-w-2xl mx-auto">
      <article
        class="flex flex-col md:grid md:grid-cols-2 rounded-lg md:rounded-xl bg-white overflow-hidden"
      >
        <picture class="group block overflow-hidden">
          <source srcset="/images/image-product-desktop.jpg" media="(min-width: 768px)" />
          <source srcset="/images/image-product-mobile.jpg" />
          <img
            class="w-full group-hover:scale-105 transition-transform duration-700"
            src="/images/image-product-desktop.jpg"
            alt="Product Shot"
            width="600"
            height="900"
          />
        </picture>
        <div class="flex flex-col justify-between p-6 md:p-8 text-dark-grayish-blue space-y-6">
          <div class="flex flex-col">
            <small class="mb-2.5 md:mb-6 tracking-[0.5em] uppercase">Perfume</small>
            <h2 class="mb-4 md:mb-8 text-4xl md:text-[40px] text-dark-dark-blue font-fraunces leading-none"
              >Gabrielle Essence Eau De Parfum</h2
            >
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div class="flex flex-col space-y-4 md:space-y-6">
            <div class="flex items-center space-x-5">
              <span class="text-3xl text-dark-cyan font-fraunces">$149.99</span>
              <del class="text-sm">$169.99</del>
            </div>
            <button
              class="flex justify-center items-center w-full p-4 rounded-md bg-dark-cyan text-sm text-white space-x-3 hover:bg-dark-dark-blue hover:scale-105 transition-all"
            >
              <IconCart />
              <span class="leading-none">Add to Cart</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
</main>

<Footer />
