export const getAddonByID = `
    query getAddon($id:ID!){
        getAddon(id:$id){
            id
            author
            characteristics {
                label
                maxLabel
                medLabel
                minLabel
                icon
                value {
                    max
                    min
                }
            }
            name
        }
    }
`