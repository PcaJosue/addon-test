
export const createAddon = `
mutation CreateAddon($addon:CreateAddonInput!) {
createAddon(input: $addon) {
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
`;


export const updateAddon = `
    mutation updateAddon($addon:UpdateAddonInput!){
        updateAddon(input: $addon) {
            author
            icon
            id
            name
            characteristics {
                value {
                    max
                    min
            }
        }
    }
}

`