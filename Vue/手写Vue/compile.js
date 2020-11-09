class Compile {
  constructor(el, vm) {
    // 获取宿主节点
    this.$el = document.querySelector(el);
    this.$vm = vm;
    // 编译
    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el);
      // 执行编译
      this.compile(this.$fragment);
      // console.log(this.$el);
      // console.log(this.$fragment);
      // 编译完的html追加至$el
      this.$el.appendChild(this.$fragment);
    }
  }
  // 将宿主的元素拿出来遍历 效率较高
  node2Fragment(el) {
    const frag = document.createDocumentFragment(el);
    // 将el中所有元素 移动到frag中
    let child;
    while ((child = el.firstChild)) {
      frag.appendChild(child);
    }
    return frag;
  }
  // 编译
  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      // 元素节点
      if (this.isElement(node)) {
        // console.log("编译元素" + node.nodeName);
        // 文本
      } else if (this.isInterplolation(node)) {
        // console.log("编译文本" + node.textContent);
        this.compileText(node);
      }
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }
  //   文本编译
  compileText(node) {
    // console.log(RegExp.$1);
    // const regValue = RegExp.$1;
    // node.textContent = this.$vm.$data[regValue];
    this.update(node, this.$vm, RegExp.$1, "text");
  }
  update(node, vm, exp, dir) {
    const updaterFn = this[dir + "Updater"];
    //    初始化
    updaterFn && updaterFn(node, vm[exp]);
    // 依赖收集
    new Watcher(vm, exp, function (value) {
      updaterFn && updaterFn(node, value);
    });
  }
  textUpdater(node, value) {
    node.textContent = value;
  }
  // 判断是否是节点
  isElement(node) {
    return node.nodeType === 1;
  }
  // 判断是否是文本
  isInterplolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }
}
