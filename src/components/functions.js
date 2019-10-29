export function filterList(list1, list2) {
    return list1.filter(x =>
        list2.indexOf(x.id) != -1
    );
}

export function isIdInArray(arr, id) {
    if (arr.length > 0) {
        if (-1 != arr.indexOf(id)) {
            return true;
        }
    }
    return false;
}

export function getItemById(list, id) {
    return list.find(x => x.id == id);
}