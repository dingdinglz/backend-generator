import {createI18n} from "vue-i18n";

export const i18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'zh',
    messages: {
        zh: {
            app: {
                menu: {
                    setting: "设置",
                    index: "主页"
                },
            },
            setting: {
                languageSetting: "语言设置",
                language: "语言",
                languageTip: "请选择语言",
                save: "保存",
                saveOk: "保存成功!",
                about: "关于",
                aboutText: "查看详情"
            }
        },
        en: {
            app: {menu: {setting: "Settings", index: "Home"},},
            setting: {
                languageSetting: "Language Settings",
                language: "Language",
                languageTip: "Please select a language",
                save: "Save",
                saveOk: "Saved successfully!",
                about: "About",
                aboutText: "View Details"
            }
        },
        ja: {
            app: {menu: {setting: "設定", index: "ホーム"},},
            setting: {
                languageSetting: "言語設定",
                language: "言語",
                languageTip: "言語を選択してください",
                save: "保存",
                saveOk: "保存に成功しました！",
                about: "について",
                aboutText: "詳細を見る"
            }
        }
    }
})