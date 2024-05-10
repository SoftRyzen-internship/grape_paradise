import { title } from "process"


export const pageStructure = (S: any) => {

    return S.list()
        .title("Секції сайту")
        .items([
            S.listItem()
                .title("Відгуки")
                .child(
                    S.documentTypeList('review')
                    .title('Створені відгуки')
                    .child(S.document().schemaType('review')))
                    
            // S.listItem()
            //     .title("Товари"),
            // S.listItem()
            //     .title("Відгуки")
            //     .child(S.document().schemaType('review').documentId('review')),
            // ...S.documentTypeListItems(),
            // S.listItem()
            //     .title("Політика конфіденційності")

        ])



}