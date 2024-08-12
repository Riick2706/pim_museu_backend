function autoIncrement(table) {

    if (!!table[0] == false) {
        return 1
    }
    else{
        return Number(table[0].id) + 1 
    }

}
module.exports = autoIncrement