<template>
  <section class="container">
    <div
      class="card u-cross-center u-width-full-line u-max-width-400"
      style="margin: 50px auto"
    >
      <div class="u-flex u-main-space-between u-cross-center">
        <h6 class="heading-level-6">Welcome back!</h6>
        <button class="icon-x"></button>
      </div>

      <form
        method="post"
        @submit.prevent="signIn"
        class="form u-margin-block-start-24"
      >
        <ul class="form-list">
          <li class="form-item">
            <label class="label">Email address</label>
            <div class="input-text-wrapper">
              <input
                type="email"
                class="input-text u-padding-inline-end-56"
                placeholder="abc@email.com"
                name="email"
                v-model.lazy="email"
              />
            </div>
          </li>
          <li class="form-item">
            <div class="u-flex u-main-end u-gap-12">
              <button class="button" type="submit" @click="signIn">
                Login
              </button>
            </div>
          </li>
        </ul>

        <div class="form-footer">
          <div class="u-text-center" style="margin-bottom: -30px;">
            <span>You don't have an account?</span>
            <NuxtLink to="/signup" class="tag" style="margin-left: 5px"
              >Signup</NuxtLink
            >
          </div>
          <div class="u-text-center" style="margin-top: 30px; padding-top: 10px">
            <span>Powered by Passage</span>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";
import { ref } from "vue";
import { useRouter } from "vue-router";

const $router = useRouter();

const email = ref("");
const password = ref("");
</script>
