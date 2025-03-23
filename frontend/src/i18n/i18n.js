import {createI18n} from "vue-i18n";

export const i18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'zh',
    messages: {
        zh: {
            common: {
                add: "添加",
                save: "保存",
                delete: "删除",
                saveOK: "保存成功！",
                operation: "操作",
                type: "类型"
            },
            app: {
                menu: {
                    setting: "设置",
                    index: "主页",
                    middleware: "中间件",
                    types: "全局类型",
                    methods: "路由",
                    config: "配置",
                    database: "数据库"
                },
                initProject: "初始化项目",
                init: "初始化",
                projectName: "项目名",
                author: "作者",
                fieldMust: "字段不能为空！",
                initOK: "初始化成功！",
            },
            setting: {
                languageSetting: "语言设置",
                language: "语言",
                languageTip: "请选择语言",
                save: "保存",
                saveOk: "保存成功！",
                about: "关于",
                aboutText: "查看详情",
                version: "版本号",
                developEnvironment: "开发环境",
                goInstall: "请先安装Go语言！",
            },
            index: {
                openProject: '打开项目',
                openProjectTitle: '请选择一个文件夹',
                closeProject: '关闭项目',
                project: '项目',
                save: '保存项目',
                saveIntroduce: "所有更改均在保存项目中保存后才成功保存！",
                generate: "生成代码",
                generatorTip: "请选择要生成的框架",
                generatorUn: "该框架的代码生成器正在开发中...",
                generateNone: "请先选择一个框架！",
                generateOK: "生成成功！"
            },
            middleware: {
                introduce: {
                    i: "此处可以添加或者删除中间件，中间价可以作用于全局或者某个路由组，需要在此提前定义"
                },
                add: "添加中间件",
                input: "请输入中间件名",
                name: "中间件名"
            },
            types: {
                introduce: {
                    i: "全局类型中定义的类型，可以在接口中组合使用"
                },
                add: "添加类型",
                input: "请输入类型名",
                addField: "添加字段",
                field: {
                    delete: "删除字段",
                    name: "字段名",
                    type: "类型",
                    optional: "可选",
                    omitempty: "可不生成"
                },
                tips: {
                    optional: "将它设置为请求参数时，可以为空",
                    omitempty: "生成json时，若该字段为空，则不生成"
                }
            },
            methods: {
                introduce: {
                    i: "定义路由"
                },
                req: "请求体",
                resp: "响应体",
                addMethod: "添加路由",
                addGroup: "添加路由组",
                selectMiddleware: "请选择中间件"
            },
            configs: {
                introduce: {
                    i: "配置会在程序启动时加载一组json，您可以在此定义字段"
                },
                add: "添加配置",
                name: "配置名",
                type: "配置类型"
            },
            database: {
                introduce: {
                    i: "数据库用于生成数据库的orm代码，与其他内容不同的是，数据库部分单独生成代码，作为一个单独的板块"
                },
                chooseFramework: "请选择要生成的框架",
                addTable: "添加表",
                inputTable: "请输入表名",
                tableName: "表名",
                columnName: "字段名",
                addColumn: "添加字段"
            }
        },
        ja: {
            common: {
                add: "追加",
                save: "保存",
                delete: "削除",
                saveOK: "保存に成功しました！",
                operation: "操作"
            },
            app: {
                menu: {
                    setting: "設定",
                    index: "ホーム",
                    middleware: "ミドルウェア",
                    types: "グローバルタイプ",
                    methods: "ルート",
                    config: "設定"
                },
                initProject: "プロジェクトの初期化",
                init: "初期化",
                projectName: "プロジェクト名",
                author: "作者",
                fieldMust: "フィールドは空にできません！",
                initOK: "初期化に成功しました！",
            },
            setting: {
                languageSetting: "言語設定",
                language: "言語",
                languageTip: "言語を選択してください",
                save: "保存",
                saveOk: "保存に成功しました！",
                about: "について",
                aboutText: "詳細を見る",
                version: "バージョン番号",
                developEnvironment: "開発環境",
                goInstall: "まずGo言語をインストールしてください！",
            },
            index: {
                openProject: 'プロジェクトを開く',
                openProjectTitle: 'フォルダを選択してください',
                closeProject: 'プロジェクトを閉じる',
                project: 'プロジェクト',
                save: 'プロジェクトを保存',
                saveIntroduce: "すべての変更は、プロジェクトを保存した後に成功裏に保存されます！",
                generate: "コードを生成",
                generatorTip: "生成するフレームワークを選択してください",
                generatorUn: "このフレームワークのコード生成器は開発中です...",
                generateNone: "まずフレームワークを選択してください！",
                generateOK: "生成に成功しました！"
            },
            middleware: {
                introduce: {
                    i: "ここではミドルウェアを追加または削除できます。ミドルウェアはグローバルまたは特定のルートグループに適用され、事前にここで定義する必要があります。"
                },
                add: "ミドルウェアを追加",
                input: "ミドルウェア名を入力してください",
                name: "ミドルウェア名"
            },
            types: {
                introduce: {
                    i: "グローバルタイプで定義されたタイプは、インターフェースで組み合わせて使用できます。"
                },
                add: "タイプを追加",
                input: "タイプ名を入力してください",
                addField: "フィールドを追加",
                field: {
                    delete: "フィールドを削除",
                    name: "フィールド名",
                    type: "タイプ",
                    optional: "オプション",
                    omitempty: "生成しない"
                },
                tips: {
                    optional: "これをリクエストパラメータとして設定すると、空にできます。",
                    omitempty: "JSONを生成する際に、このフィールドが空の場合は生成されません。"
                }
            },
            methods: {
                introduce: {
                    i: "ルートを定義する"
                },
                req: "リクエストボディ",
                resp: "レスポンスボディ",
                addMethod: "ルートを追加",
                addGroup: "ルートグループを追加",
                selectMiddleware: "ミドルウェアを選択してください"
            },
            configs: {
                introduce: {
                    i: "設定はプログラムの起動時にJSONのセットを読み込みます。ここでフィールドを定義できます。"
                },
                add: "設定を追加",
                name: "設定名",
                type: "設定タイプ"
            }
        },
        en: {
            common: {
                add: "Add",
                save: "Save",
                delete: "Delete",
                saveOK: "Saved successfully!",
                operation: "Operation"
            },
            app: {
                menu: {
                    setting: "Settings",
                    index: "Home",
                    middleware: "Middleware",
                    types: "Global Types",
                    methods: "Routes",
                    config: "Config"
                },
                initProject: "Initialize Project",
                init: "Initialize",
                projectName: "Project Name",
                author: "Author",
                fieldMust: "Field cannot be empty!",
                initOK: "Initialization successful!",
            },
            setting: {
                languageSetting: "Language Settings",
                language: "Language",
                languageTip: "Please select a language",
                save: "Save",
                saveOk: "Saved successfully!",
                about: "About",
                aboutText: "View Details",
                version: "Version Number",
                developEnvironment: "Development Environment",
                goInstall: "Please install Go language first!",
            },
            index: {
                openProject: 'Open Project',
                openProjectTitle: 'Please select a folder',
                closeProject: 'Close Project',
                project: 'Project',
                save: 'Save Project',
                saveIntroduce: "All changes will only be successfully saved after saving the project!",
                generate: "Generate Code",
                generatorTip: "Please select a framework to generate",
                generatorUn: "The code generator for this framework is under development...",
                generateNone: "Please select a framework first!",
                generateOK: "Generated successfully!"
            },
            middleware: {
                introduce: {
                    i: "Here you can add or remove middleware. Middleware can be applied globally or to a specific route group, and needs to be defined here in advance."
                },
                add: "Add Middleware",
                input: "Please enter the middleware name",
                name: "Middleware Name"
            },
            types: {
                introduce: {
                    i: "Types defined in global types can be combined and used in interfaces."
                },
                add: "Add Type",
                input: "Please enter the type name",
                addField: "Add Field",
                field: {
                    delete: "Delete Field",
                    name: "Field Name",
                    type: "Type",
                    optional: "Optional",
                    omitempty: "Omit if empty"
                },
                tips: {
                    optional: "When set as a request parameter, it can be empty.",
                    omitempty: "When generating JSON, if this field is empty, it will not be generated."
                }
            },
            methods: {
                introduce: {
                    i: "Define routes"
                },
                req: "Request Body",
                resp: "Response Body",
                addMethod: "Add Route",
                addGroup: "Add Route Group",
                selectMiddleware: "Please select middleware"
            },
            configs: {
                introduce: {
                    i: "Configurations will load a set of JSON when the program starts. You can define fields here."
                },
                add: "Add Config",
                name: "Config Name",
                type: "Config Type"
            }
        },
    }
})