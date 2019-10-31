export function filterList(list1, list2) {
    return list1.filter(x => -1 != list2.indexOf(x.id));
}

export function isIdInArray(arr, id) {
    return !!(0 < arr.length && -1 != arr.indexOf(id))
}

export function getItemById(list, id) {
    return list.find(x => x.id == id);
}


export function cantAfford(item, player, exclude, rate = 1) {
    for (let d = 0; d < item.cost.length; d++) {
        let c = getItemById(player.lists.resources, item.cost[d].target);
        if (exclude != c.id)
            return !0;
        if (c.value < (item.cost[d].value * rate))
            return !0;
    }
    return !1
}

export function addValue(item, player, rate = 1, ) {
    for (let c, d = 0; d < item.get.length; d++) {
        c = getItemById(player.lists.resources, item.get[d].target);
        c.value + (item.get[d].value * rate) > c.max
            ? c.value = c.max
            : c.value += (item.get[d].value * rate);
        c.procent = 100 * (c.value / c.max)
    }
}

export function removeValue(item, player, exclude, rate = 1) {
    for (let c, d = 0; d < item.cost.length; d++) {
        c = getItemById(player.lists.resources, item.cost[d].target);
        if (exclude != c.id) {
            c.value -= (item.cost[d].value * rate);
            c.procent = 100 * (c.value / c.max)
        }
    }
}
