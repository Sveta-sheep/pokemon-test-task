export const getWordWithFirstCapitalLetter = (name) => {
    return name.replace(/./, name[0].toUpperCase())
}