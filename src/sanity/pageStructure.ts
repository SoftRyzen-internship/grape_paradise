import { StructureBuilder } from "sanity/structure"

export const pageStructure = (S: StructureBuilder) => {

    return S.list()
        .title("Секції сайту")
        .items([
            S.listItem()
                .title("Відгуки")
                .child(
                    S.documentTypeList('review')
                        .title('Створені відгуки')
                        .child(S.document().schemaType('review'))),
            S.divider(),
            S.listItem()
                .title("Товари")
                .child(
                    S.documentTypeList('goods')
                        .title('Додані товари')
                        .child(S.document().schemaType('goods'))),
            S.divider(),
            S.listItem()
                .title("Послуги")
                .child(
                    S.documentTypeList('services')
                        .title('Додані послуги')
                        .child(S.document().schemaType('services'))),
            S.divider(),
            S.listItem()
                .title("Політика конфіденційності")
                .child(S.document().schemaType('privacyPolicy')),

        ])
}