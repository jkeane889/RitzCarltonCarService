import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';

class FromLocationItem extends PureComponent {

    // handlePress = async () => {
    //     const res = await this.props.fetchDetails(this.props.place_id);
    //     console.log("This is the result", res);
    // }

    render() {
        return (
            <GoogleAutoComplete apiKey="AIzaSyBpktIvH-LC6Pwrp0ShC7NbjH5AqoySf8s" debounce={300} components="country:usa">
                {({ fetchDetails, clearSearch }) => (
                    <TouchableOpacity 
                        style={styles.root} 
                        onPress={() => {
                            handlePress = async () => {
                                const res = await fetchDetails(this.props.place_id);
                                console.log("This is the result: ", res);
                            };
                            this.props.updateFromState(this.props.description);
                            handlePress();
                            clearSearch();
                        }}> 
                        <Text>{this.props.description}</Text>
                    </TouchableOpacity>
                )}
            </GoogleAutoComplete>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})

export default FromLocationItem;