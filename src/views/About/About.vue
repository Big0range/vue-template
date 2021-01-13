<template>
  <div class="about_wrap">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { AxiosResponse } from "axios";
import request from "@/utils/request";
interface Obj {
  msg: string;
  changeMsg: (str: string) => void;
}
interface Res extends AxiosResponse {
  date: Date;
}
export default defineComponent({
  name: "About",
  setup() {
    const obj: Obj = reactive({
      msg: "about",
      changeMsg(str: string) {
        this.msg = str;
      }
    });
    return {
      ...toRefs(obj)
    };
  },
  mounted() {
    request({
      url: "demo"
    })
      .then((res: any) => {
        console.log(res.date);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
</script>
<style lang="scss" scoped>
.about_wrap {
  cursor: auto;
}
</style>
