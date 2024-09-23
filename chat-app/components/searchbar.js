import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{
      zIndex: 1,
      paddingLeft:30,
    }}>
      <TextInput
        style={{
          backgroundColor: '#FFFFFF',
          borderColor:"#008080",
          height: 40,
          textDecorationColor:"#333333",
          width:"90%",
          borderWidth: 2,
          borderRadius: 8,
          paddingLeft: 10,
        }}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

export default SearchBar;
