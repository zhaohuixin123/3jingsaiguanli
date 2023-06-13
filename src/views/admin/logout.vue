<template>
  <div class="aaa">
  <div class="bt" >
    <el-button type="primary" @click="centerDialogVisible = true" style="font-size:20px;height:80px;width: 180px;">
      登出此账号
    </el-button>
  </div>
</div>

  <el-dialog v-model="centerDialogVisible" title="登出提示" width="30%" center>
    <span>
      您是否确定登出此账号？
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false, out()">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  data(){
    return{
      centerDialogVisible:false,
    }
  },
  methods:{
    out(){
      this.$router.replace('/login')
    }
  },
});
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.aaa {
  background: url(../../assets/logout.png);
  background-repeat: no-repeat;
  height: 670px;
  background-size: 100%;
  border:1px solid #ccc;

}
.bt {
  margin-top: 22%;
  margin-left: 45%;
}
</style>