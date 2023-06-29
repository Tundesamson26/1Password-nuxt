<template>
  <section class="container">
    <div>
      <div
        class="card u-cross-center u-width-full-line u-max-width-400"
        style="margin: 50px auto"
      >
        <div class="authContainer">
          <passage-auth :app-id="appId"></passage-auth>
        </div>
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
import { defineComponent } from "vue";
import "@appwrite.io/pink"; // optionally, add icons
import "@appwrite.io/pink-icons";
import "@passageidentity/passage-elements/passage-auth";

export default defineComponent({
  name: "Signup",
  setup() {
    const runtimeConfig = useRuntimeConfig();
    const appId = runtimeConfig.public.PASSAGE_APP_ID;
    return {
      appId,
    };
  },
});
</script>
