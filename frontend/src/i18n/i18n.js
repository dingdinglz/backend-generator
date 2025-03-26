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
                type: "类型",
                generateOK: "生成成功！",
                close: "关闭"
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
                addColumn: "添加字段",
                unsupport: "不支持的框架！",
                chooseOne: "请最少选择一个框架！",
                code: "生成的代码使用说明",
                codeIntroduce: {
                    i: "与web框架生成的代码不同，生成的orm代码位于database包中，为每个表生成了一个struct，每个struct都对应一个New..Model的函数，每个struct默认携带了Create、Delete、Update、Get四个方法",
                    ii: "New以后，需要统一使用database.Open()进行初始化（不管New多少个，只需要open一次）",
                    iii: "下面是假设有个Test表的使用方法",
                    iiii: "所以，你可以把model放进servicecontext中，例如把sctx.go文件改成类似如下",
                    iiiii: "然后，你只需要在main.go中database.Open一下，就可以在sctx中使用Model啦"
                },
                showCode: "显示生成后代码使用说明"
            }
        },
        ja: {
            common: {
                add: "追加",
                save: "保存",
                delete: "削除",
                saveOK: "保存に成功しました！",
                operation: "操作",
                type: "タイプ",
                generateOK: "生成に成功しました！",
                close: "閉じる"
            },
            app: {
                menu: {
                    setting: "設定",
                    index: "ホーム",
                    middleware: "ミドルウェア",
                    types: "グローバルタイプ",
                    methods: "ルート",
                    config: "設定",
                    database: "データベース"
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
                goInstall: "Go言語をインストールしてください！",
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
                generatorUn: "このフレームワークのコード生成は開発中です...",
                generateNone: "フレームワークを選択してください！",
                generateOK: "生成に成功しました！"
            },
            middleware: {
                introduce: {
                    i: "ここではミドルウェアを追加または削除できます。ミドルウェアはグローバルまたは特定のルートグループに適用できます。事前にここで定義する必要があります。"
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
                    omitempty: "生成しない場合あり"
                },
                tips: {
                    optional: "リクエストパラメータとして設定する場合、空にできます。",
                    omitempty: "JSONを生成する際、このフィールドが空の場合、生成されません。"
                }
            },
            methods: {
                introduce: {
                    i: "ルートを定義"
                },
                req: "リクエストボディ",
                resp: "レスポンスボディ",
                addMethod: "ルートを追加",
                addGroup: "ルートグループを追加",
                selectMiddleware: "ミドルウェアを選択してください"
            },
            configs: {
                introduce: {
                    i: "設定はプログラムの起動時にJSONのセットが読み込まれます。ここでフィールドを定義できます。"
                },
                add: "設定を追加",
                name: "設定名",
                type: "設定タイプ"
            },
            database: {
                introduce: {
                    i: "データベースはデータベースのORMコードを生成するために使用されます。他の部分とは異なり、データベース部分はコードを別々に生成し、独立したモジュールとして扱われます。"
                },
                chooseFramework: "生成するフレームワークを選択してください",
                addTable: "テーブルを追加",
                inputTable: "テーブル名を入力してください",
                tableName: "テーブル名",
                columnName: "フィールド名",
                addColumn: "フィールドを追加",
                unsupport: "サポートされていないフレームワーク！",
                chooseOne: "最低でも1つのフレームワークを選択してください！",
                code: "生成されたコードの使用方法",
                codeIntroduce: {
                    i: "Webフレームワークで生成されたコードとは異なり、生成されたORMコードはdatabaseパッケージに配置され、各テーブルに対応するstructが生成されます。各structにはCreate、Delete、Update、Getの4つのメソッドがデフォルトで含まれています。",
                    ii: "Newした後、database.Open()を使用して初期化する必要があります（Newした数に関係なく、1回だけ初期化が必要です）。",
                    iii: "以下はTestテーブルを使用する例です。",
                    iiii: "したがって、modelをservicecontextに配置できます。例えば、sctx.goファイルを次のように変更します。",
                    iiiii: "その後、main.goでdatabase.Openを呼び出すだけで、sctxでModelを使用できます。"
                },
                showCode: "生成されたコードの使用方法を表示"
            }
        },
        en: {
            common: {
                add: "Add",
                save: "Save",
                delete: "Delete",
                saveOK: "Saved successfully!",
                operation: "Operation",
                type: "Type",
                generateOK: "Generated successfully!",
                close: "Close"
            },
            app: {
                menu: {
                    setting: "Setting",
                    index: "Home",
                    middleware: "Middleware",
                    types: "Global Types",
                    methods: "Routes",
                    config: "Configuration",
                    database: "Database"
                },
                initProject: "Initialize Project",
                init: "Initialize",
                projectName: "Project Name",
                author: "Author",
                fieldMust: "Field cannot be empty!",
                initOK: "Initialization successful!",
            },
            setting: {
                languageSetting: "Language Setting",
                language: "Language",
                languageTip: "Please select a language",
                save: "Save",
                saveOk: "Saved successfully!",
                about: "About",
                aboutText: "View details",
                version: "Version Number",
                developEnvironment: "Development Environment",
                goInstall: "Please install Go first!",
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
                    i: "Here you can add or remove middleware. Middleware can be applied globally or to a specific route group and needs to be defined here in advance."
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
                add: "Add Configuration",
                name: "Configuration Name",
                type: "Configuration Type"
            },
            database: {
                introduce: {
                    i: "The database is used to generate ORM code for the database. Unlike other parts, the database section generates code separately as an independent module."
                },
                chooseFramework: "Please select a framework to generate",
                addTable: "Add Table",
                inputTable: "Please enter the table name",
                tableName: "Table Name",
                columnName: "Column Name",
                addColumn: "Add Column",
                unsupport: "Unsupported framework!",
                chooseOne: "Please select at least one framework!",
                code: "Instructions for using the generated code",
                codeIntroduce: {
                    i: "Unlike the code generated by the web framework, the generated ORM code is located in the database package. A struct is generated for each table, and each struct comes with four default methods: Create, Delete, Update, and Get.",
                    ii: "After calling New, you need to initialize it using database.Open() (regardless of how many New instances you create, you only need to call Open once).",
                    iii: "Below is an example of using a Test table.",
                    iiii: "Therefore, you can put the model into the service context. For example, modify the sctx.go file as follows.",
                    iiiii: "Then, you only need to call database.Open in main.go, and you can use the Model in sctx."
                },
                showCode: "Show instructions for using the generated code"
            }
        },
    }
})