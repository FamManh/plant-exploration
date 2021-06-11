import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, SIZES, images } from '../constants'


const RequirementBar = ({ icon, barPercentage }) => {
  return (
    <View style={{ height: 60, alignItems: 'center' }}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.gray
        }}
      >
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: "100%",
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray
        }}
      ></View>
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary
        }}
      ></View>
    </View>
  )
}

const RequirementDetail = ({ icon, label, detail }) => {
  return (
    <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={icon} resizeMode="cover" style={{ tintColor: COLORS.secondary, width: 30, height: 30 }} />
        <Text style={{ marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h3 }}>{label}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h3 }}>{detail}</Text>
      </View>
    </View>
  )
}

const PlantDetail = ({navigation}) => {

  function renderRequirementsBar() {
    return (
      <View style={{
        flexDirection: 'row',
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        justifyContent: 'space-between'
      }}>
        <RequirementBar icon={icons.sun} barPercentage="50%" />
        <RequirementBar icon={icons.drop} barPercentage="25%" />
        <RequirementBar icon={icons.temperature} barPercentage="80%" />
        <RequirementBar icon={icons.garden} barPercentage="30%" />
        <RequirementBar icon={icons.seed} barPercentage="50%" />
      </View>
    )
  }

  function renderRequirements() {
    return (
      <View style={{ flex: 3, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding, justifyContent: 'flex-start' }}>
        <RequirementDetail icon={icons.sun} label="Sunlight" detail="15°C" />
        <RequirementDetail icon={icons.drop} label="Water" detail="250 ML Daily" />
        <RequirementDetail icon={icons.temperature} label="Room Temp" detail="25°C" />
        <RequirementDetail icon={icons.garden} label="Soil" detail="3 Kg" />
        <RequirementDetail icon={icons.seed} label="Fertilizer" detail="150 Mg" />
      </View>
    )
  }

  function renderFooter() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            width: "50%",
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Take Action</Text>
          <Image source={icons.chevron} resizeMode="cover" style={{ width: 15, height: 15, marginLeft: SIZES.padding }} />
        </TouchableOpacity>

        <View style={{ flex: 1, height: "100%", flexDirection: 'row', alignItems: "center", justifyContent: "center", paddingHorizontal: SIZES.padding }}>
          <Text style={{ color: COLORS.secondary, ...FONTS.h3, textAlign: 'center' }}>Almost 2 week of growing time</Text>
          <Image source={icons.downArrow} resizeMode="cover" style={{ width: 15, height: 15, marginLeft: 5 }} />
        </View>

      </View>
    )
  }

  function renderHeader() {
    return (
      <View style={{ position: 'absolute', top: 15, left: 18, right: 18 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              backgroundColor: 'rgba(255,255,255,0.5)'
            }}
            onPress={()=>navigation.navigate("Home")}
          >
            <Image source={icons.back} style={{ height: 20, width: 20 }} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>alert("Focus on pressed")}
          >
            <Image source={icons.focus} style={{ height: 20, width: 20 }} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: "5%" }}>
          <View style={{flex: 1}}>
            <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>
              Glory Mantas
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Banner photo */}
      <View style={{ height: "35%" }}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </View>
      {/* Requirements  */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding
        }}
      >
        <Text style={{ paddingHorizontal: SIZES.padding, color: COLORS.secondary, ...FONTS.h2 }} >Requirements</Text>
        {renderRequirementsBar()}
        {renderRequirements()}
        {renderFooter()}
      </View>
      {renderHeader()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})

export default PlantDetail
