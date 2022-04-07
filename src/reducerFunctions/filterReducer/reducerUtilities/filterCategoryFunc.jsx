export const filterDataByCategory = (dataList, showBike, showScooter) => {
    let filteredData = [];
    if (showBike === false && showScooter === false) {
        return dataList;
    }
    if (showBike && showScooter) {
        return dataList;
    }
    if (showBike) {
        const newdataList = dataList.filter(item => item.category.toLowerCase() === "bike");
        return filteredData = [...newdataList];
    }
    if (showScooter) {
        const newdataList = dataList.filter(item => item.category.toLowerCase() === "scooter");
        return filteredData = [...newdataList];
    }
    return dataList;
}