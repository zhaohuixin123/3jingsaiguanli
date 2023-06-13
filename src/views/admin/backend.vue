<template>
  <div class="">
    <el-button type="success" size="small" @click="toAdd">添加</el-button>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="apiName"
          label="api名称"
          width="120"
          align="center"
        />
        <el-table-column
          prop="apiUrl"
          label="api请求地址"
          width="120"
          align="center"
        />
        <el-table-column
          prop="apiMethod"
          label="api请求方式：GET、POST、PUT、DELETE"
          width="120"
          align="center"
        />
        <el-table-column
          prop="apiName"
          label="api名称"
          width="120"
          align="center"
        />

        <el-table-column prop="pid" label="父ID" width="120" align="center" />

        <el-table-column
          prop="description"
          label="描述"
          width="120"
          align="center"
        />

        <el-table-column fixed="right" label="操作" width="180" align="center">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row.id)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>


    <el-dialog v-model="dialogFormVisible" title="api表单">
      <el-form :model="backend">
        <el-form-item label="api名称" :label-width="formLabelWidth">
          <el-input v-model="backend.apiName" autocomplete="off" />
        </el-form-item>

        <el-form-item label="api请求地址" :label-width="formLabelWidth">
          <el-input v-model="backend.apiUrl" autocomplete="off" />
        </el-form-item>

        <el-form-item
          label="api请求方式：GET、POST、PUT、DELETE"
          :label-width="formLabelWidth">
          <el-input v-model="backend.apiMethod" autocomplete="off" />
        </el-form-item>

        <el-form-item label="父ID" :label-width="formLabelWidth">
          <el-input v-model="backend.pid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="排序" :label-width="formLabelWidth">
          <el-input v-model="backend.apiSort" autocomplete="off" />
        </el-form-item>

        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="backend.description" autocomplete="off" />
        </el-form-item>
        <el-form-item label="是否有子路径" :label-width="formLabelWidth">
          <el-input v-model="backend.hasChildren" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="excute()"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
  
  <script>
//模块引入
import backend from "../../http/backend";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tableData: [],
      backend: {},
      dialogFormVisible: false,
    };
  },
  methods: {
    fetchData() {
      backend.all().then((res) => {
        console.log(res);
        this.tableData = res.data.backendApis;
      });
    },
    handleDelete(id) {
      const data = { id };
      ElMessageBox.confirm("你确定删除该行数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          backend.delete1(data).then((res) => {
            if (res.success) {
              ElMessage({
                type: "success",
                message: "删除成功",
              });
              //刷新页面
              this.fetchData();
            } else {
              ElMessage({
                type: "error",
                message: "删除失败",
              });
            }
          });
        })
        .catch(() => {
          ElMessage({
            type: "warning",
            message: "取消删除",
          });
        });
    },
    handleEdit(id) {
      this.dialogFormVisible = true;
      const data = { id };
      backend.one(data).then((res) => {
        this.backend = res.data.backendApi;
      });
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.backend = {};
    },
    excute() {
      if (this.backend.id != undefined) {
        backend.edit(this.backend).then((res) => {
          if (res.success) {
            ElMessage({
              type: "success",
              message: "编辑成功",
            });
            this.fetchData();
          } else {
            ElMessage({
              type: "error",
              message: "编辑失败",
            });
          }
        });
        this.dialogFormVisible = false;
      } else {
        console.log(this.backend);
        backend.add(this.backend).then((res) => {
          if (res.success) {
            ElMessage({
              type: "success",
              message: "编辑成功",
            });
            //刷新页面
            this.fetchData();
          } else {
            ElMessage({
              type: "error",
              message: "添加失败",
            });
          }
          this.dialogFormVisible = false;
        });
      }
    },
    //更新每页显示数
    changeSize(size) {
      this.limit = size;
      this.fetchData();
    },
  },
  created() {
    this.fetchData(1);
  },
});
</script>
  
  <style lang="scss" scoped>
.table {
  margin-top: 10px;
}
</style>
  