export function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((resturant) =>
      resturant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
};