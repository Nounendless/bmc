<template>
    <div class="">
     <el-table
       :data="tabledata5"
       style="width: 100%"
       row-key="id"
       :expand-row-keys="expands"
       @row-click="rowclick">
       <el-table-column type="expand">
       <template #default="props">

        <el-form label-position="right" inline class="demo-table-expand">
         <!-- <el-form-item label="名称">
           <span>{{ props.row.name }}</span>
         </el-form-item>
         <el-form-item label="序列号">
           <span>{{ props.row.pcsId }}</span>
         </el-form-item>  
         <el-form-item label="制造商">
           <span>{{ props.row.manufacturer }}</span>
         </el-form-item>
         <el-form-item label="型号">
           <span>{{ props.row.model }}</span>
         </el-form-item>
         <el-form-item label="丝印">
           <span>{{ props.row.deviceLocator }}</span>
         </el-form-item>
         <el-form-item label="容器">
           <span>{{ props.row.position }}</span>
         </el-form-item>
         <el-form-item label="状态">
           <span>{{ props.row.status }}</span> 
         </el-form-item> -->
         <el-form-item label="标识寄存器">
           <span>{{ props.row.identificationRegisters }}</span>
         </el-form-item>
         <el-form-item label="有效系列">
           <span>{{ props.row.effectiveFamily }}</span>
         </el-form-item>
         <el-form-item label="有效型号">
           <span>{{ props.row.effectiveModel }}</span>
         </el-form-item>
         <el-form-item label="步进">
           <span>{{ props.row.step }}</span>
         </el-form-item>
         <el-form-item label="最大主频">
           <span>{{ props.row.maxSpeedMHz }}</span>
         </el-form-item>
         <el-form-item label="总核数">
           <span>{{ props.row.totalCores }}</span>
         </el-form-item>
         <el-form-item label="总线程数">
           <span>{{ props.row.totalThreads }}</span>
         </el-form-item>
         <el-form-item label="插槽号">
           <span>{{ props.row.socket }}</span>
         </el-form-item>
         <el-form-item label="温度">
           <span>{{ props.row.temperature }}</span>
         </el-form-item>
         <el-form-item label="主频">
           <span>{{ props.row.frequencyMHz }}</span>
         </el-form-item>
         <el-form-item label="一级缓存">
           <span>{{ props.row.l1CacheKiB }}</span>
         </el-form-item>
         <el-form-item label="二级缓存">
           <span>{{ props.row.l2CacheKiB }}</span>
         </el-form-item>
         <el-form-item label="三级缓存">
           <span>{{ props.row.l3CacheKiB }}</span>
         </el-form-item>
         <el-form-item label="启用使能">
           <span>{{ props.row.enabledSetting }}</span>
         </el-form-item>
         <el-form-item label="部件号">
           <span>{{ props.row.partNumber }}</span>
         </el-form-item>

        </el-form>
    </template>
    </el-table-column>
        <el-table-column width="50px"
         label="ID"
         prop="id">
        </el-table-column>
        <el-table-column
         label="名称"
         prop="name">
        </el-table-column>
        <el-table-column
         label="序列号"
         prop="pcsId">
        </el-table-column>
        <el-table-column
         label="制造商"
         prop="manufacturer">
        </el-table-column>
        <el-table-column
         label="型号"
         prop="model">
        </el-table-column>
        <el-table-column
         label="丝印"
         prop="deviceLocator">
        </el-table-column>
        <el-table-column
         label="容器"
         prop="position">
        </el-table-column>
        <el-table-column
         label="状态"
         prop="status">
        </el-table-column>
    </el-table>
</div>
    </template>
    <style>
     .demo-table-expand {
      font-size: 0;
     }
     .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
     }
     .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33%;
     }
    </style>

    <script>
     export default {
      data() {
       return {
        tabledata5: [
            {
         id: '1',
         //名称
         name: '2',
         //序列号
         pcsId: 'huawei',
         //制造商
         manufacturer: '',
         //型号
         model: '',
         //丝印
         deviceLocator: '',
         //容器
         position: '',
         //状态
         status: '',
         //标识寄存器
         identificationRegisters: 'xxx',
         //有效系列
         effectiveFamily: '',
         //有效型号
         effectiveModel: '',
         //步进
         step: '',
         //最大主频
         maxSpeedMHz: '',
         //总核数
         totalCores: '',
         //总线程数
         totalThreads: '',
         //插槽号
         socket: '',
         //温度
         temperature: '',
         //主频
         frequencyMHz: '',
         //一级缓存
         l1CacheKiB: '',
         //二级缓存
         l2CacheKiB: '',
         //三级缓存
         l3CacheKiB: '',
         //启用使能
         enabledSetting: '',
         //部件号
         partNumber: '',
}, 
{
         id: '2',
         //名称
         name: '2',
         //序列号
         pcsId: 'huawei',
         //制造商
         manufacturer: '',
         //型号
         model: '',
         //丝印
         deviceLocator: '',
         //容器
         position: '',
         //状态
         status: '',
         //标识寄存器
         identificationRegisters: '',
         //有效系列
         effectiveFamily: '',
         //有效型号
         effectiveModel: '',
         //步进
         step: '',
         //最大主频
         maxSpeedMHz: '',
         //总核数
         totalCores: '',
         //总线程数
         totalThreads: '',
         //插槽号
         socket: '',
         //温度
         temperature: '',
         //主频
         frequencyMHz: '',
         //一级缓存
         l1CacheKiB: '',
         //二级缓存
         l2CacheKiB: '',
         //三级缓存
         l3CacheKiB: '',
         //启用使能
         enabledSetting: '',
         //部件号
         partNumber: '',
}
],
 // 要展开的行，数值的元素是row的key值
 expands: []
}

      },
      methods:{
       //在<table>里，我们已经设置row的key值设置为每行数据id：row-key="id"
       rowclick(row, event, column) {
        array.prototype.remove = function (val) {
         let index = this.indexof(val);
         if (index > -1) {
          this.splice(index, 1);
         }

        };
        if (this.expands.indexof(row.id) < 0) {
            //同时只能展开一行
        this.expands = [];
         this.expands.push(row.id);
        } else {
         this.expands.remove(row.id);
        }
      
       }
      }
     }
    </script>
    