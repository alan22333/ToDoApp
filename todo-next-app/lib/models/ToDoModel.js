// 从mongoose库中导入mongoose对象
const { default: mongoose } = require("mongoose");

// 定义一个新的Schema（模式）来描述集合（collection）中的文档（document）的结构
const Schema = new mongoose.Schema({
    // 定义一个名为title的字段
    title: {
        // 指定字段类型为String（字符串类型）
        type: String,
        // 该字段为必填项，如果没有提供值将会引发验证错误
        required: true
    },
    // 定义一个名为description的字段
    description: {
        // 指定字段类型为String（字符串类型）
        type: String,
        // 该字段为必填项，如果没有提供值将会引发验证错误
        required: true
    },
    // 定义一个名为isCompleted的字段
    isCommpleted: {
        // 指定字段类型为Boolean（布尔类型）
        type: Boolean,
        // 指定字段的默认值为false
        default: false
    }
}, {
    // 配置选项，启用时间戳。
    // 当你创建或更新文档时，Mongoose将自动添加createdAt和updatedAt字段
    timestamps: true
});

// 创建一个模型（model），表示数据库中的集合（collection）
// 如果mongoose.model.todo已存在，则使用它，否则创建一个新的模型
const TodoModel = mongoose.model.todo || mongoose.model('todo', Schema);

// 导出TodoModel，使其可以在其他文件中被导入和使用
export default TodoModel;