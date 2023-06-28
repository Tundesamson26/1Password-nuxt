<template>
    <div class="authContainer">
      <passage-auth :app-id="appId"></passage-auth>
    </div>
    <section class="container">
      <div>
        <div
          class="card u-cross-center u-width-full-line u-max-width-400"
          style="margin: 50px auto"
        >
          <h1 class="u-font-size-32 u-text-center">Signup</h1>
          <form
            method="post"
            @submit.prevent=""
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
                <label class="label">Username</label>
                <div class="input-text-wrapper">
                  <input
                    type="password"
                    class="input-text"
                    placeholder="username"
                    v-model="username"
                  />
                </div>
              </li>
              <li class="form-item">
                <div class="u-flex u-main-end u-gap-12">
                  <button class="button" type="submit">Signup</button>
                </div>
              </li>
            </ul>
  
            <div class="form-footer">
              <div class="u-text-center" style="margin-bottom: -30px">
                <span>You already have an account?</span>
                <NuxtLink to="/signin" class="tag" style="margin-left: 5px"
                  >Signin</NuxtLink
                >
              </div>
              <div
                class="u-text-center"
                style="margin-top: 30px; padding-top: 10px"
              >
                <span>Powered by Passage</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <!-- <script>
  import { ref, onMounted } from "vue";
  import "@appwrite.io/pink"; // optionally, add icons
  import "@appwrite.io/pink-icons";
  
  import "@passageidentity/passage-elements/passage-auth";
  
  const email = ref("");
  const username = ref("");
  
  export default ({
    setup() {
      const appId = process.env.VUE_APP_PASSAGE_APP_ID
      return {
        appId,
      }
    },
  })
  </script> -->
  
  <script>
  import { defineComponent } from 'vue'
  import { ref, onMounted } from "vue";
  import "@appwrite.io/pink"; // optionally, add icons
  import "@appwrite.io/pink-icons";
  import '@passageidentity/passage-elements/passage-auth'
  
  const email = ref("");
  const username = ref("");
  co
  
  export default defineComponent({
    name: 'Signup',
    setup() {
      const runtimeConfig = useRuntimeConfig();
      const appId = process.env.NUXT_APP_PASSAGE_APP_ID
      return {
        appId,
      }
    },
  })
  </script>