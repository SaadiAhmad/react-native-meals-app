import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/redux/store';
import Subtitle from '../components/mealDetails/Subtitle';
import List from '../components/mealDetails/List';

function MealDetailsScreen({ route, navigation }) {
    // const favMealsContext = useContext(FavouritesContext);
    const favMealIds = useSelector(state => state.favouriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    const isFavourite = favMealIds.includes(mealId);

    function headerButtonHandler() {
        if (!isFavourite) {
            // favMealsContext.addFavourite(mealId)
            dispatch(addFavourite({ id: mealId }))
        } else {
            // favMealsContext.removeFavourite(mealId)
            dispatch(removeFavourite({ id: mealId }))
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={isFavourite ? 'star' : 'star-outline'}
                    color='white'
                    onPress={headerButtonHandler}
                />
            }
        })
    }, [navigation, headerButtonHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                textStyle={{ color: 'white' }}
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})