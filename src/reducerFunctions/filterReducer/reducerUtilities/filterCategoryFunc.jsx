export const filterDataByCategory = (dataList, showBike, showScooter) => {
    let filteredData = [];
    if (showBike === false && showScooter === false) {
        return dataList;
    }
    if (showBike) {
        const newdataList = dataList.filter(item => item.category.toLowerCase() === "bike");
        filteredData = [...newdataList];
    }
    if (showScooter) {
        const newdataList = dataList.filter(item => item.category.toLowerCase() === "scooter");
        filteredData = [...newdataList];
    }
    return filteredData;
}