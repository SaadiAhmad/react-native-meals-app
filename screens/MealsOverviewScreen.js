import { useLayoutEffect } from 'react';
import MealsList from '../components/mealsList/MealsList';

import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter(meal => {
        return meal.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(cat => cat.id === catId).title
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    return <MealsList displayedMeals={displayedMeals} />
}

export default MealsOverviewScreen;