import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import MealDetails from '../MealDetails';

function MealItem({ title, imageUrl, duration, complexity, affordability, onPress }) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image}/>
                        <Text style={styles.title}>{ title }</Text>
                    </View>
                    <MealDetails duration={duration}
                        complexity={complexity}
                        affordability = {affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 8, height: 8},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    innerContainer: {
        overflow: 'hidden',
        borderRadius: 8
    },
    buttonPressed: {
        opacity: 0.5
    }
})

export default MealItem;