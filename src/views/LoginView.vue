<template>
  <div class="container d-flex justify-content-center align-items-center h-100">
    <div class="row w-100">
      <div class="col-6 offset-3">
        <form
          @submit="go"
          id="form"
          class="form form-control d-flex justify-content-center gap-3 flex-column w-100 p-5"
        >
          <h2 class="text-center mt-3">Login</h2>
          <input
            type="email"
            placeholder="example@mail.ru"
            required
            class="form-control py-2"
          />
          <input
            type="password"
            placeholder="123456"
            required
            class="form-control py-2"
          />
          <button type="submit" class="btn btn-primary py-2 mt-3 mb-3">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const go = () => {
  router.push({ name: "products" });
};
</script>

<style lang="scss" scoped></style>
