<template>
  <div class="container d-flex justify-content-center align-items-center h-100">
    <div class="row w-100">
      <div class="col-6 offset-3">
        <form
          id="form"
          class="form form-control d-flex justify-content-center gap-3 flex-column w-100 p-5"
        >
          <h2 class="text-center mt-3">Login</h2>
          <input
            @input="email"
            type="email"
            placeholder="example@mail.ru"
            required
            class="form-control py-2"
          />
          <input
            @input="password"
            type="password"
            placeholder="123456"
            required
            class="form-control py-2"
          />
          <router-link
            v-if="valid_email & valid_pass"
            to="/products"
            class="btn btn-primary py-2 mt-3 mb-3"
            >Login</router-link
          >
          <button
            v-else
            ref="btn"
            type="button"
            class="btn btn-primary py-2 mt-3 mb-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = (e) => {
  if (e.target.value == "example@mail.ru") {
    valid_email.value = true;
  }
};
const password = (e) => {
  if (e.target.value == "123456") {
    valid_pass.value = true;
  }
};
const valid_email = ref(false);
const valid_pass = ref(false);
</script>

<style lang="scss" scoped></style>
