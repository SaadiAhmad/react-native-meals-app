import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/mealsList/MealsList';
import { MEALS } from '../data/dummy-data';

function FavouritesScreen() {
    // const favMealsContext = useContext(FavouritesContext);
    const favMealIds = useSelector(state => state.favouriteMeals.ids)
    const favMeals = MEALS.filter(meal => favMealIds.includes(meal.id))
    
    if (favMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favourite meals yet</Text>
        </View>
    }
    return <MealsList displayedMeals={favMeals}/>
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})