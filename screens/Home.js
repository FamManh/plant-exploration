import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { COLORS, FONTS, icons, SIZES, images } from '../constants'

const Home = ({navigation}) => {
  const [newPlants, setNewPlants] = useState([
    {
      id: 0,
      name: "Plant 1",
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: "Plant 2",
      img: images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: "Plant 3",
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: "Plant 4",
      img: images.plant4,
      favourite: false,
    },
  ]);

  const [friendList, setFriendList] = useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
    },
  ]);

  function renderNewPlants(item, index) {

    const onFavourite = () => {
      const newPlantsData = [...newPlants]
      newPlantsData[index].favourite = !newPlantsData[index].favourite
      setNewPlants(newPlantsData)
    }

    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.base
      }}>
        <Image
          source={item.img} resizeMode="cover" style={{
            width: SIZES.width * 0.23,
            height: "83%",
            borderRadius: 15
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body4
            }}
          >{item.name}</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: "15%",
            left: 7
          }}
        >
          <TouchableOpacity
            onPress={onFavourite}

          >
            <Image
              source={item.favourite ? icons.heartRed : icons.heartGreenOutline} resizeMode="contain" style={{
                width: 15,
                height: 15
              }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderFriendsComponent() {
    if (friendList.length === 0) {
      return null
    } else if (friendList.length <= 3) {
      return (
        friendList.map((item, index) => (
          <View
            key={`friend-${index}`}
            style={index === 0 ? {} : { marginLeft: -20 }}
          >
            <Image source={item.img} resizeMode="cover" style={{ height: 45, width: 45, borderRadius: 25, borderColor: COLORS.primary, borderWidth: 3 }} />
          </View>
        ))
      )
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {friendList.map((item, index) => {
          if (index <= 2) {
            return (
              <View key={`friend-${index}`} style={index === 0 ? {} : { marginLeft: -20 }}>
                <Image source={item.img} resizeMode="cover" style={{ width: 45, height: 45, borderRadius: 25,  borderWidth: 3, borderColor: COLORS.primary }} />
              </View>
            )
          }
          return null
        })}
        <Text style={{marginLeft: 5, color: COLORS.secondary, ...FONTS.body3}}>+{friendList.length - 3} More</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* New Plants  */}
      <View
        style={{
          height: "30%",
          backgroundColor: COLORS.white
        }}
      >
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary
          }}
        >
          <View
            style={{
              marginTop: SIZES.padding - 10, marginHorizontal: SIZES.padding
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  color: COLORS.white, ...FONTS.h2
                }}
              >New Plants</Text>
              <TouchableOpacity
                onPress={() => alert("focus on password")}
              >
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{
              marginTop: 2
            }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => renderNewPlants(item, index)}
              />

            </View>
          </View>
        </View>
      </View>

      {/* Today's Share  */}
      <View
        style={{
          height: "45%",
          backgroundColor: COLORS.lightGray
        }}
      >
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white
          }}
        >
          <View
            style={{
              marginTop: SIZES.font,
              marginHorizontal: SIZES.padding
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Today's Share</Text>
              <TouchableOpacity
                onPress={() => alert('See all on pressed')}
              >
                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }} >See All</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: "80%",
                marginTop: SIZES.base
              }}
            >
              <View
                style={{ flex: 1 }}
              >
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => navigation.navigate("PlantDetail")}
                >
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, marginTop: SIZES.font }}
                  onPress={() => navigation.navigate("PlantDetail")}
                >
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{ flex: 1 }}

              >
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: SIZES.font }}
                  onPress={() => navigation.navigate("PlantDetail")}
                >
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      </View>

      {/* Add Friend  */}
      <View
        style={{
          height: "25%",
          backgroundColor: COLORS.lightGray
        }}
      >
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
          <View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
            <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Added Friends</Text>
            <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>5 Total</Text>

            <View style={{
              flexDirection: 'row',
              height: '60%'
            }}>
              {/* Friends  */}
              <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>
                {renderFriendsComponent()}
              </View>

              {/* Add Friend  */}
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }} >
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>Add new</Text>
                <TouchableOpacity style={{
                  height: 40,
                  width: 40,
                  backgroundColor: COLORS.gray,
                  borderRadius: 10, 
                  marginLeft: 5,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={()=>alert("On add new pressed")}
                >
                  <Image source={icons.plus} resizeMode="cover" style={{width: 18, height: 18}} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home
