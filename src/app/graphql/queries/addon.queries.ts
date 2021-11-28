export const getAddonByID = `
    query getAddon{
        getAddon(id:"f9abf63a-3dcc-400a-a445-7be24fa723be"){
            id
            author
            characteristics {
                label
                maxLabel
                medLabel
                minLabel
                value {
                    max
                    min
                }
            }
            name
            icon
        }
    }
`