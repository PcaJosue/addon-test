export interface AddonModel {
    author?: string
    characteristics: AddonCharacteristics[]
    id: string
    name: string
}

export interface AddonCharacteristics {
    label: string
    maxLabel?: string
    medLabel?: string
    minLabel?: string
    icon: string
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
    name: string
}

export interface DeleteAddonInput {
    id: string
}

export interface UpdateAddonInput {
    author?: string
    characteristics?: AddonCharacteristicsInput[]
    id: string
    name?: string
}

export interface AddonCharacteristicsInput {
    icon?: string
    label?: String
    maxLabel?: String
    medLabel?: String
    minLabel?: String
    value: AddonCharacteristicsValueInput
}

