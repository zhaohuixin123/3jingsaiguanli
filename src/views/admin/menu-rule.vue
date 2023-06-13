<template>
  <div class="">
    <el-button type="success" size="small" @click="toAdd">添加</el-button>
    <el-input
      v-model="serch.roleName"
      placeholder="请输入角色名称"
      clearable
      style="width: 120px"
    ></el-input>
    <el-input
      v-model="serch.description"
      placeholder="请输入描述"
      clearable
      style="width: 120px"
    ></el-input>
    
    <el-button type="primary" @click="selectById">搜索</el-button>
    <el-button type="info" @click="reset">重置</el-button>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          fixed
          prop="id"
          label="编号"
          width="150"
          align="center"
        />
        <el-table-column
          prop="roleName"
          label="角色名称"
          width="210"
          align="center"
        />
        <el-table-column
          prop="description"
          label="描述"
          width="120"
          align="center"
        />
        <el-table-column
          prop="status"
          label="状态"
          width="120"
          align="center"
        />
       
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="250"
          align="center"
        />
        <el-table-column
          prop="updateTime"
          label="更新时间"
          width="250"
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

    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :total="total"
      :page-size="limit"
      :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
      style="padding: 30px 0; text-align: center"
      layout="sizes, prev, pager, next, jumper, ->, total, slot"
      @current-change="fetchData"
      @size-change="changeSize"
    />

    <!-- 表单 -->
    <el-dialog v-model="dialogFormVisible" title="添加/编辑">
      <el-form :model="menurule">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="menurule.roleName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="menurule.description" autocomplete="off" />
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-input v-model="menurule.status" autocomplete="off" />
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
import menurule from "../../http/menu-rule";
import { defineComponent } from "vue";
import dayjs from "dayjs";

export default defineComponent({
  data() {
    return {
      tableData: [],
      page: 1,
      serch: {
        departId: "",
        departName: "",
        schoolId: "",
      },
      total: 0,
      limit: 10,
      menurule: {},
      dialogFormVisible: false,
    };
  },
  methods: {
    
    fetchData(page) {
      console.log(page);
      this.page = page;
      
      const vo = { current: page, size: this.limit };
      menurule.getmenuruleByPage(vo).then((res) => {
        
        console.log(res);
        const pageInfo = res.data.page;
        this.tableData = pageInfo.records;
        this.tableData.forEach((item) => {
          
          item.createTime = dayjs(item.createTime).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          item.updateTime = dayjs(item.createTime).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          console.log(item.createTime);
        });
        this.total = pageInfo.total;
      });
    },
    //删除业务 id作参
    handleDelete(id) {
      //封装数据对象
      const data = { id };
      ElMessageBox.confirm("你确定删除该行数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          menurule.deleteById(data).then((res) => {
            console.log(res);
            if (res.success) {
              ElMessage({
                type: "success",
                message: "删除成功",
              });
              //刷新页面
              this.fetchData(1);
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
    //编辑-数据回显
    handleEdit(id) {
      //唤出编辑表单
      this.dialogFormVisible = true;
      //根据id查询 完成数据回显
      const data = { id };
      menurule.queryById(data).then((res) => {
        this.menurule = res.data.role;
      });
    },
    toAdd() {
      this.menurule = {};
      this.dialogFormVisible = true;
    },
    //执行编辑业务
    excute() {
      if (this.menurule.id != undefined) {
        //编辑逻辑
        menurule.updateById(this.menurule).then((res) => {
          if (res.success) {
            ElMessage({
              type: "success",
              message: "编辑成功",
            });
            //刷新页面
            this.fetchData(1);
          } else {
            ElMessage({
              type: "error",
              message: "编辑失败",
            });
          }
        });
        //关闭弹窗
        this.dialogFormVisible = false;
      } else {
        //添加逻辑
        menurule.addOne(this.menurule).then((res) => {
          if (res.success) {
            ElMessage({
              type: "success",
              message: "添加成功",
            });
            //刷新页面
            this.fetchData(1);
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
      this.fetchData(this.page);
    },
    //条件搜索
    selectById() {
     
      if (this.serch.departId) {
        const data = { departId: this.serch.departId };
        menurule.getmenuruleForSelectByDepartld(data).then((res) => {
          this.tableData = res.data.menurules;
        });
        
      } else if (this.serch.roleName) {
        const data = { depart: this.serch.roleName };
        
        menurule.getmenurulesForSelectByDepart(data).then((res) => {
          //console.log(res);
          console.log(res.data.menurules)
          this.tableData = res.data.menurules;
          
        });
        
      } else if (this.serch.schoolId) {
        const data = { schoolId: this.serch.schoolId };
        menurule.getmenurulesForSelectBySchoolId(data).then((res) => {
          console.log(res);
          this.tableData = res.data.menurules;
        });
      }
    },
    //重置
    reset() {
      this.serch = {};
      this.fetchData(1);
    },
    //
  },
  mounted() {
    this.fetchData(1);
  },
});
</script>
  
  <style lang="scss" scoped>
.table {
  margin-top: 10px;
}
</style>
  