export const sortDataByRange = (dataList, type) => {
    const newdataList = [...dataList];
    if (newdataList.length !== 0) {
        switch (type) {
            case "LOW_TO_HIGH":
                return newdataList.sort((item1, item2) => item1.price - item2.price);
            case "HIGH_TO_LOW":
                return newdataList.sort((item1, item2) => item2.price - item1.price);
            default:
                return newdataList;
        }
    } else {
        return newdataList;
    }
}











