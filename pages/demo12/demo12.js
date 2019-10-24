// pages/demo12/demo12.js
Page({
  data: {
    // html: ''
    // 2 对象数组
    html:[
      {
      //1 div标签 name属性指定
      name:"div",
      //2 标签上有哪些属性
      attrs:{
        // 标签上的属性 class style
        class:"my_div",
        style:"color:red;"
      },
      //3 子节点 children 要接受的数据类型和nodes第二种渲染方式的数据类型一致
      children:[
        {
        name:"p",
        attrs: {},
        //放文本
        children:[
          {
          type:"text",
          text:"hello"
          }
        ]
      }]
    }]
  }
})