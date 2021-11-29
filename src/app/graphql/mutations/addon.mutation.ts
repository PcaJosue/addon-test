
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
icon
value {
max
min
}
}
name
}
}
`;


export const updateAddon = `mutation UpdateAddon($addon:UpdateAddonInput!){
    updateAddon(input: $addon) {
        id
        author
        name
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
    }
}

`