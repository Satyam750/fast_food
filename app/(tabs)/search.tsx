import CartButton from "@/components/CartButton";
import MenuCard from "@/components/MenuCard";
import SearchBar from "@/components/SearchBar";
import dummyData from "@/lib/data";
import { MenuItem } from "@/type";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={dummyData.menu}
        renderItem={({ item, index }) => {
          const isFirstRIghtColItem = index%2 ===0;
          return(
            <View className={`flex-1 max-w-[48%] ${!isFirstRIghtColItem ? 'mt-10':'mt-0'}`}>
             <MenuCard item={item as MenuItem}/>
            </View>
          )
        }}
        numColumns={2}
        columnWrapperClassName="gap-7"
        contentContainerClassName="gap-7 px-5 pb-32"
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View className="my-5 gap-5">
            <View className="flex-between flex-row w-full">
              <View className="flex-start">
              <Text className="small-bold uppercase text-primary">Search</Text>
                                <View className="flex-start flex-row gap-x-1 mt-0.5">
                                    <Text className="paragraph-semibold text-dark-100">Find your favorite food</Text>
                                </View>
              </View>
              <CartButton/>
            </View>
            <SearchBar/>

            {/* <Filter categories={dummyData.categories} /> */}
          </View>
        )}
        ListEmptyComponent={() =><Text>No results</Text>}
      />
    </SafeAreaView>
  );
};

export default Search;
