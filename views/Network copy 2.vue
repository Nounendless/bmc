<template>
    <div class="list-box">
      <div class="work-table-list">
        <p class="table-name flex-row-between-space"
            :class="{'active': item.tb_id === activeDataSet.tb_id}"
            v-for="(item, index) in dataSetList"
            :key="item.tb_id"
            @click="selectDataSet(item)">
          <span style="cursor: pointer" v-show="!item.isShowInput" class="single-row">{{ item.name }}</span>
          <el-input
            size="mini"
            :ref="'set-name-input-' + index"
            @keyup.enter="dataSetChangeName(item, index)"
            @change="dataSetChangeName(item, index)"
            @blur="dataSetNameBlur(item, index)"
            v-model="item.name"
            v-show="item.isShowInput"
            placeholder="">
          </el-input>
          <i class="el-icon-edit item-icon" @click="dataSetRename(item, index)"></i>
        </p>
        <p v-if="dataSetList.length === 0" class="custom-tips-info">请拖入工作表</p>
      </div>
    </div>
  </template>
   
  <script>
   
  export default {
    name: 'list',
    data () {
      return {
        // 列表
        dataSetList: [{
          tb_id: 'id_test_001',
          name: '测试01',
          isShowInput: false
        },{
          tb_id: 'id_test_002',
          name: '测试02',
          isShowInput: false
        },{
          tb_id: 'id_test_003',
          name: '测试03',
          isShowInput: false
        }],
        activeDataSet: {
          tb_id: 'id_test_001',
          name: '测试01',
          isShowInput: false
        },
      }
    },
    methods: {
      // 选中
      selectDataSet(item) {
        if (this.activeDataSet.tb_id !== item.tb_id) {
          this.activeDataSet = item;
        }
      },
      dataSetChangeName(item, index) {
        item.isShowInput = false;
        // 名字有修改时才触发保存
        if (this.activeDataSet.name !== item.name) {
          this.$emit('dataSetChangeName', item);
        }
        this.$set(this.dataSetList, index, item);
        this.$nextTick(() => {
          this.$refs['set-name-input-' + index][0].blur();
        });
      },
      // 失去焦点是触发
      dataSetNameBlur(item, index) {
        item.isShowInput = false;
        this.$set(this.dataSetList, index, item);
      },
      // 重命名
      dataSetRename(item, index) {
        this.setDataSetList();
        item.isShowInput = true;
        this.$set(this.dataSetList, index, item);
        this.$nextTick(() => {
          this.$refs['set-name-input-' + index][0].focus();
        });
      },
      setDataSetList(index = -1) {
        this.dataSetList.forEach(item => {
          item.isShowInput = false;
        });
      }
    }
  }
  </script>
   
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>

    .work-table-list {
      width: 320px;
      background: #dddbdb3b;
      margin-top: 16px;
    }
      .custom-tips-info {
        color: rgba(21, 22, 24, 0.36);
      }
      .table-name {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        padding-left: 16px;
        height: 32px;
        line-height: 32px;
        align-items: center;
        margin: 0;
      }
        .item-icon {
          display: none;
          margin: 0 8px;
        }
        .hover {
          background: #e9e7e7;
        }
          .item-icon {
            display: block;
          }
        
       .el-input__inner {
          background: rgba(15,34,67,0.03);
          box-shadow: inset 0px -1px 0px rgba(95, 97, 102, 0.24);
          border-radius: 4px 4px 0px 0px;
          border: none;
          color: rgba(15,34,67,0.72);
          font-size: 14px;
          height: 28px;
        }
      
      .active {
        background: #eef0f4;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25), 0 10px 12px 0 rgba(170, 182, 206, 0.36);
      }
      .single-row {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    
  
  </style>
  
  