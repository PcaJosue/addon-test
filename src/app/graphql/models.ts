export interface AddonModel {
    author?: string
    characteristics: AddonCharacteristics[]
    icon: string
    id: string
    name: string
}

export interface AddonCharacteristics {
    label: string
    maxLabel?: string
    medLabel?: string
    minLabel?: string
    value: CharacteristicsValue
}

export interface CharacteristicsValue {
    max: number
    min: number
}

export interface AddonCharacteristicsValueInput {
    max: number
    min: number
}

export interface CreateAddonInput {
    author?: string
    characteristics: AddonCharacteristicsInput[]
    icon: string
    name: string
}

export interface DeleteAddonInput {
    id: string
}

export interface UpdateAddonInput {
    author?: string
    characteristics?: AddonCharacteristicsInput[]
    icon?: string
    id: string
    name?: string
}

export interface AddonCharacteristicsInput {
    label?: string
    maxLabel?: string
    medLabel?: string
    minLabel?: string
    value: AddonCharacteristicsValueInput
}

