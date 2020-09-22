export default function sorting(characters) {
    return characters.sort((a, b) => {
        if (a.health < b.health) {
            return 1;
        } else if (a.health > b.health) {
            return -1;
        } else {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        }
    })
}