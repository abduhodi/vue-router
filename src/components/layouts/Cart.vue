<template>
  <div
    class="card position-relative d-flex flex-column justify-content-between h-100 gap-2"
  >
    <div class="reaction position-absolute" @click="likeIt">
      <icon :name="heart"></icon>
    </div>
    <div class="card-img">
      <img
        class="card-img-top"
        :src="props?.data?.url[0]"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <p class="card-title">
        {{ props?.data?.title }}
      </p>
      <span class="card-rate">
        <icon name="star"></icon>
        <span>{{ props?.data?.rate?.value }}</span>
        <span>({{ props?.data?.rate?.count }} baho)</span>
      </span>
      <span class="card-sale">1 680 so'm/oyiga</span>
      <p class="cart-footer d-flex justify-content-between align-items-center">
        <span class="card-price d-flex flex-column">
          <span class="price-old">21 000 so'm</span>
          <span class="price-new">{{ props?.data?.price }} so'm</span>
        </span>
        <span class="add-to-cart"
          ><icon name="add-to-cart" class="add-cart"></icon
        ></span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  data: {
    url: String,
    title: String,
    price: Number,
    rate: {
      value: Number,
      count: Number,
    },
  },
});
const liked = ref(false);
const heart = ref("heart_regular");

const likeIt = () => {
  liked.value = !liked.value;
  if (liked.value) {
    heart.value = "heart_full";
  } else {
    heart.value = "heart_regular";
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.card {
  height: fit-content;
  border: none;
  user-select: none;
  transition: all 0.2s linear;
  &:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    .card-img-top {
      transform: scale(1.03);
    }
  }
}
.card-img {
  border-radius: 8px;
  overflow: hidden;
  .card-img-top {
    transition: all 0.2s linear;
  }
}
.reaction {
  right: 10px;
  top: 5px;
  z-index: 10;
  cursor: pointer;
}
.card-body {
  padding: 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16px;
}

.card-rate {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  span {
    color: #7777808f;
  }
}
.card-sale {
  background-color: yellow;
  width: fit-content;
  border-radius: 5px;
  padding: 0px 3px;
  font-size: 12px;
}
.cart-footer {
  width: 100%;
  margin-bottom: 5px;
}
.price-old {
  font-size: 12px;
  text-decoration: line-through;
}
.price-new {
  font-size: 15px;
  font-weight: 500;
}
.add-to-cart {
  border: 1px solid #7777808f;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: #8383832a;
  }
}
.add-cart {
  height: 28px;
  margin: 2px;
}
</style>
