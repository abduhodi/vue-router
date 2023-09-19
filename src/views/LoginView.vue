<template>
  <div class="container d-flex justify-content-center align-items-center h-100">
    <div class="row w-100">
      <div class="col-6 offset-3">
        <form
          id="form"
          ref="btn"
          class="form form-control d-flex justify-content-center gap-3 flex-column w-100 p-5"
        >
          <h2 class="text-center mt-3">Login</h2>
          <input
            ref="email"
            type="email"
            placeholder="Your email"
            required
            class="form-control py-2"
          />
          <input
            ref="password"
            type="password"
            placeholder="Password"
            required
            class="form-control py-2"
          />
          <router-link to="/products" class="btn btn-primary py-2 mt-3 mb-3"
            >Login</router-link
          >
          <!-- <button type="button" class="btn btn-primary py-2 mt-3 mb-3">
            Login
          </button> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const btn = ref();
const email = ref();
const password = ref();
onMounted(() => {
  btn.value.addEventListener("onsubmit", (e) => {
    if (email.value.value !== "asaker@mail.ru" || password !== "123456") {
      console.log("error");
    }
    document.location.href = "/products";
  });
});
</script>

<style lang="scss" scoped></style>
