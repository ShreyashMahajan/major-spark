export const filterDataByCategory = (dataList, showBike, showScooter) => {
    const filteredData = [];
    if (showBike === false && showScooter === false) {
        return dataList;
    }
    if (showBike) {
        const newdataList = dataList.filter(item => item.category.toLowerCase() === "bike");
        filteredData.push(...newdataList);
    }
    if (showScooter) {
        const newdataList = dataList.filter(item => item.category.toLowerCase() === "scooter");
        filteredData.push(...newdataList);
    }
    return filteredData;
}