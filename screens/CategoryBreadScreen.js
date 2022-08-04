import { BREADS } from '../data/breads';
import BreadItem from "../components/BreadItem";
import { FlatList } from "react-native";

const CategoryBreadScreen = ({ navigation, route }) => {

    const Breads = BREADS.filter(bread => bread.category === route.params.categoryID)

    const handleSelected = (item) => {
        navigation.navigate('Detail', {
            productID: item.id,
            name: item.name
        });
    }

    const renderItemBread = ({ item }) => {
        <BreadItem item={item} onSelected={handleSelected} />
    }
    const { title } = route.params
    return (
        <FlatList
            data={Breads}
            renderItem={renderItemBread}
            keyExtractor={item => item.id}
        />
    );
}


export default CategoryBreadScreen