import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';
import { useNavigation } from '@react-navigation/native';

function MealsList({ displayedMeals }) {
    const navigation = useNavigation();
    
    function renderMealItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealDetails', {
                mealId: itemData.item.id
            })
        }

        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: pressHandler
        };

        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})