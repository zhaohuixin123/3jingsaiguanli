<template>
  <div class="">
    <div style="margin-left: 30px;margin-top: 30px;font-size: 20px;">用户角色管理</div>
    <el-button type="success" @click="toAdd" style="margin-left:86%;width: 80px;">添加</el-button>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%;margin-left:20px;">
        <el-table-column fixed prop="id" label="id" width="80" align="center" />
        <el-table-column prop="userName" label="用户名称" width="200" align="center" />
        <el-table-column prop="userType" label="用户类型" width="100" align="center" />
        <!-- <el-table-column prop="state" label="状态" width="80" align="center" /> -->
        <el-table-column prop="binding" label="绑定" width="100" align="center" />
        <el-table-column prop="createTime" label="创建时间" width="210" align="center" />
        <el-table-column prop="updateTime" label="更新时间" width="210" align="center" />
        <el-table-column fixed="right" label="操作" width="220" align="center">
          <template #default="scope">
            <el-button type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination :current-page="page" :total="total" :page-size="limit" :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
      style="padding: 30px 0; text-align: center" layout="sizes, prev, pager, next, jumper, ->, total, slot"
      @current-change="fetchData" @size-change="changeSize" />
    <el-dialog v-model="dialogFormVisible" title="编辑">
      <el-form :model="userinfos">
        <el-form-item label="用户账户" :label-width="formLabelWidth">
          <el-input v-model="userinfos.userName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth">
          <el-input v-model="userinfos.password" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="excute()"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog v-model="dialogFormVisiblezz" title="添加">
      <el-form :model="userinfos">
        <el-form-item label="用户名称" :label-width="formLabelWidth">
          <el-input v-model="userinfos.userName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="用户类型描述" :label-width="formLabelWidth">
          <el-input v-model="userinfos.userType" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisiblezz = false">取消</el-button>
          <el-button type="primary" @click="exzzcute()"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
    
<script>
//模块引入
import useinfo from "../../http/userinfo";
import { defineComponent } from "vue";
import dayjs from "dayjs";

export default defineComponent({
  data() {
    return {
      tableData: [],
      page: 1,
      idd:0,
      serche: {
        schoolId: "",
        userType: "",
        id: "",
        banji: {
          "createTime": "",
          "id": 0,
          "roleIds": "",
          "updateTime": "",
          "userId": 0
        }
      },
      total: 0,
      limit: 10,
      userinfos: {},
      dialogFormVisible: false,
      dialogFormVisiblezz: false,
    };
  },
  methods: {
    fetchData(page) {
      this.page = page;
      const vo = { current: page, size: this.limit };
      useinfo.getUserinfosPage(vo).then((res) => {
        console.log(res);
        const pageInfo = res.data.page;
        this.tableData = pageInfo.records;
        this.tableData.forEach((item) => {
          item.createTime = dayjs(item.createTime).format(
            "YYYY年MM月DD日 HH:mm:ss"
          );
          item.updateTime = dayjs(item.updateTime).format(
            "YYYY年MM月DD日 HH:mm:ss"
          );
          if (item.binding == 0) {
            item.binding = "未绑定"
          } else {
            item.binding = "绑定"
          }

        });
        this.total = pageInfo.total;
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
          useinfo.deleteById(data).then((res) => {
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

    handleEdit(id) {
      // this.usezinfo ={

      // }
      console.log(id)
      this.idd = id
      const params =
        { id: id }
      useinfo.queryById(params).then(res => {
        if (res.success) {
          console.log(res.data.userinfo)
          this.userinfos.userName = res.data.userinfo.userName
          this.userinfos.userType = res.data.userinfo.userType
        } else {
          console.log(res)
          return false
        }
        // this.useinfo = res.data.useinfo;
        console.log(res)
      }).catch(
        err => {

        });
      this.dialogFormVisiblezz = true;
    },
    toAdd() {
      this.userinfos = {
        userNmae: "",
        password: ""
      };
      this.dialogFormVisible = true;
    },

    exzzcute() {
      const params = {
        binding: 1,
        id: this.idd,
        password: "12345678",
        state: 1,
        updateTime:  new Date(),
        userName: this.userinfos.userName,
        userType: this.userinfos.userType
      }
      useinfo.edit(params).then((res)=>{
        if(res.success){
          ElMessage({
            type: "success",
            message: "编辑成功",
          });

          this.fetchData(1);
        }else {
          ElMessage({
            type: "error",
            message: "编辑失败",
          });
        }
      })
      this.dialogFormVisiblezz = false;
      // useinfo.updateById(this.userinfos).then((res) => {
      //     if (res.success) {
      //       ElMessage({
      //         type: "success",
      //         message: "编辑成功",
      //       });

      //       this.fetchData(1);
      //     } else {
      //       ElMessage({
      //         type: "error",
      //         message: "编辑失败",
      //       });
      //     }
      //   });
    },
    excute() {
      // if (this.tableData.id != undefined) {
      //   useinfo.updateById(this.useinfo).then((res) => {
      //     if (res.success) {
      //       ElMessage({
      //         type: "success",
      //         message: "编辑成功",
      //       });

      //       this.fetchData(1);
      //     } else {
      //       ElMessage({
      //         type: "error",
      //         message: "编辑失败",
      //       });
      //     }
      //   });

      //   this.dialogFormVisible = false;
      // } else {
      console.log(this.userinfos)
      const useinfos = this.userinfos
      useinfo.addOne(useinfos).then((res) => {
        if (res.success) {
          ElMessage({
            type: "success",
            message: "添加成功",
          });

          this.fetchData(1);
        } else {
          ElMessage({
            type: "error",
            message: "添加失败",
          });
        }
        this.dialogFormVisible = false;
      });
      // }
    },

    changeSize(size) {
      this.limit = size;
      this.fetchData(this.page);
    },

    select() {

      if (this.serche.userType) {
        const data = { userType: this.userType };
        console.log(this.userType)
        useinfo.getAssitentFoSelectByUserTypeBySchoolId(data).then((res) => {
          console.log(res.data);
          this.tableData = res.data;
        });
      }
      else if (this.serche.schoolId) {
        const data = { schoolId: this.schoolId };
        useinfo.getAssitentFoSelectByUserTypeBySchoolId(data).then((res) => {
          console.log(res.data)

        })

      }
      else if (this.serche.id) {
        const data = { id: this.id }
        useinfo.getAssitentFoSelectByUserTypeBySchoolId(data).then((res) => {
          console.log(res.data)


        })

      }
    },


    reset() {
      this.serche = {};
      this.fetchData(1);
    },
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
    