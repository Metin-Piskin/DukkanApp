import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import Config from 'react-native-config';
import { useDispatch } from "react-redux";

import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Products = ({ navigation }) => {
    const dispatch = useDispatch();

    //const { loading, data, error } = useFetch(Config.API_PRODUCTS_URL);
    const { loading, data, error } = useFetch("https://fakestoreapi.com/products");

    const handleProductSelect = id => {
        navigation.navigate("DetailPage", { id });
    };

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;




    if (loading) {
        return <Loading />;
    };

    if (error) {
        return (
            <View style={{ flex: 1 }}>
                <Error />
                <Text>{error}</Text>
            </View>
        );
    }


    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </View>
    );

}
export default Products;