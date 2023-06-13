<template>
  <div class="">
    <el-button type="success" size="small" @click="toAdd">添加</el-button>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="id" label="编号" width="150" align="center" />
        <el-table-column prop="name" label="社团名称" width="120" align="center" />
        <el-table-column prop="type" label="类型" width="120" align="center" />
        <el-table-column prop="teachers" label="指导老师" width="120" align="center" />
        <el-table-column prop="depart" label="学院编号" width="120" align="center" />
        <el-table-column prop="logo" label="团社logo" width="120" align="center" />
        <el-table-column prop="charger" label="团社会长" width="120" align="center" />
        <el-table-column prop="description" label="团社介绍" width="120" align="center" />
        <el-table-column prop="status" label="状态" width="120" align="center" />
        <el-table-column prop="address" label="团社地址" width="120" align="center" />
        <el-table-column prop="mobile" label="团社电话" width="120" align="center" />
        <el-table-column prop="email" label="团社邮箱" width="120" align="center" />
        <el-table-column prop="weixin" label="团社公众号" width="120" align="center" />
        <el-table-column prop="school_id" label="学校" width="120" align="center" />
        <el-table-column prop="create_time" label="创建时间" width="120" align="center" />
        <el-table-column prop="update_time" label="更新时间" width="120" align="center" />
        <el-table-column fixed="right" label="操作" width="180" align="center">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <el-pagination :current-page="page" :total="total" :page-size="limit" :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
      style="padding: 30px 0; text-align: center" layout="sizes, prev, pager, next, jumper, ->, total, slot"
      @current-change="fetchData" @size-change="changeSize" />

    <!-- 表单 -->
    <el-dialog v-model="dialogFormVisible" title="添加/编辑">
      <el-form :model="community">
        <el-form-item label="社团名称" :label-width="formLabelWidth">
          <el-input v-model="community.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="社团类型" :label-width="formLabelWidth">
          <el-input v-model="community.type" autocomplete="off" />
        </el-form-item>
        <el-form-item label="指导老师" :label-width="formLabelWidth">
          <el-input v-model="community.teachers" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学院编号" :label-width="formLabelWidth">
          <el-input v-model="community.depart" autocomplete="off" />
        </el-form-item>
        <el-form-item label="团社logo" :label-width="formLabelWidth">
          <el-input v-model="community.logo" autocomplete="off" />
        </el-form-item>
        <el-form-item label="团社会长" :label-width="formLabelWidth">
          <el-input v-model="community.charger" autocomplete="off" />
        </el-form-item>
        <el-form-item label="团社介绍" :label-width="formLabelWidth">
          <el-input v-model="community.description" autocomplete="off" />
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-input v-model="community.status" autocomplete="off" />
        </el-form-item>
        <el-form-item label="团社地址" :label-width="formLabelWidth">
          <el-input v-model="community.address" autocomplete="off" />
        </el-form-item>
        <el-form-item label="团社电话" :label-width="formLabelWidth">
          <el-input v-model="community.mobile" autocomplete="off" />
        </el-form-item>
        <el-form-item label="团社邮箱" :label-width="formLabelWidth">
          <el-input v-model="community.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="团社公众号" :label-width="formLabelWidth">
          <el-input v-model="community.weixin" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学校" :label-width="formLabelWidth">
          <el-input v-model="community.schoolId" autocomplete="off" />
        </el-form-item>
        <el-form-item label="版本" :label-width="formLabelWidth">
          <el-input v-model="community.version" autocomplete="off" />
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
import community from "../../http/community";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tableData: [],
      page: 1,
      total: 0,
      limit: 10,
      community: {},
      dialogFormVisible: false,
    };
  },
  methods: {
    //分页查询
    fetchData() {
      const vo = { current: this.page, size: this.limit };
      community.getcommunityByPage(vo).then((res) => {
        const pageInfo = res.data.page;
        this.tableData = pageInfo.records;
        this.total = pageInfo.total;
      });
    },

    //编辑-数据回显
    handleEdit(id) {
      this.dialogFormVisible = true;
      const data = { id };
      community.queryById(data).then((res) => {
        this.community = res.data.community;
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
          community.deleteById(data).then((res) => {
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
    toAdd() {
      this.dialogFormVisible = true;
    },
    excute() {
      if (this.community.id == undefined) {
        //编辑
        console.log(this.community);
        community.addOne(this.community).then(res => {
          console.log(res);
          if (res.success) {
            ElMessage({
              type: "success",
              message: "添加成功",
            });
            //刷新
            this.fetchData();
          } else {
            ElMessage({
              type: "error",
              message: "添加失败",
            });
          }
          this.dialogFormVisible = false;
        })
      } else {
        community.updateById(this.community).then((res) => {
          if (res.success) {
            ElMessage({
              type: "success",
              message: "编辑成功",
            });
            //刷新
            this.fetchData();
          } else {
            ElMessage({
              type: "error",
              message: "编辑失败",
            });
          }
        });
        this.dialogFormVisible = false;

      }
    },
    //更新
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
  