import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import Icon from 'react-native-remix-icon';

export default function Home() {
  const data = [
    {id: 1, name: 'Jay Kapoor', years: 32, time: 'Today , 10:00 am'},
    {id: 2, name: 'Rahsaan Howell', years: 27, time: 'Today , 11:00 am'},
    {id: 3, name: 'Tod Veum', years: 23, time: 'Today , 12:00 pm'},
    {id: 4, name: 'Melody ', years: 22, time: 'Today , 13:00 pm'},
    {id: 5, name: 'Donato Dooley', years: 22, time: 'Today , 13:00 pm'},
    {id: 6, name: 'Dock Schmeler', years: 22, time: 'Today , 13:00 pm'},
  ];

  console.log('Length of array is : ', data.length);

  const showUpcomingCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('Upcoming ===>', item.id, item.name);
        }}
        activeOpacity={0.6}
        style={styles.upcomingCardContainer}>
        <View style={styles.upcomingCardAvatar}></View>
        <Text style={styles.upcomingCardName}>{item.name}</Text>
        <Text style={styles.upcomingCardAge}>{item.years} yrs</Text>
        <Text style={styles.upcomingCardTime}>{item.time}</Text>
      </TouchableOpacity>
    );
  };

  const showMissedCard = ({item}) => {
    return (
      <View style={styles.missedCardContainer}>
        <View style={styles.missedCardAvatar} />
        <View style={{}}>
          <Text style={styles.missedCardName}>{item.name}</Text>
          <Text style={styles.missedCardAge}>{item.years} yrs</Text>
          <Text style={styles.missedCardTime}>{item.time}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'red',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFF',
              borderRadius: 100,
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="ri-check-double-line"
              size="24"
              color="#557DE5"
              style={{marginHorizontal: 16}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFF',
              borderRadius: 100,
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="ri-close-circle-line"
              size="24"
              color="#557DE5"
              style={{marginHorizontal: 16}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // const showMissedCardWithMap = (ele, ind) => {
  //   return (
  //     <View>
  //       {data.map((ele, ind) => {
  //         return (
  //           <View style={styles.missedCardContainer} key={ind}>
  //             <View style={styles.missedCardAvatar} />
  //             <View>
  //               <Text style={styles.missedCardName}>{ele.name}</Text>
  //               <Text style={styles.missedCardAge}>{ele.years} yrs</Text>
  //               <Text style={styles.missedCardTime}>{ele.time}</Text>
  //             </View>
  //             <View
  //               style={{
  //                 flexDirection: 'row',
  //                 justifyContent: 'space-between',
  //                 flex: 1,
  //                 marginLeft: responsiveWidth(3),
  //               }}>
  //               <TouchableOpacity
  //                 style={{
  //                   backgroundColor: '#FFE5B2',
  //                   borderRadius: 100,
  //                   height: 50,
  //                   width: 50,
  //                   alignItems: 'center',
  //                   justifyContent: 'center',
  //                 }}>
  //                 <Icon
  //                   name="ri-refresh-line"
  //                   size="32"
  //                   color="#FFC148"
  //                   style={{marginHorizontal: 16}}
  //                 />
  //               </TouchableOpacity>
  //               <TouchableOpacity
  //                 style={{
  //                   backgroundColor: '#FCD3D1',
  //                   borderRadius: 100,
  //                   height: 50,
  //                   width: 50,
  //                   alignItems: 'center',
  //                   justifyContent: 'center',
  //                 }}>
  //                 <Icon
  //                   name="ri-close-circle-line"
  //                   size="32"
  //                   color="#FF615A"
  //                   style={{marginHorizontal: 16}}
  //                 />
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         );
  //       })}
  //     </View>
  //   );
  // };

  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* headerBoxContainer */}
          <View style={styles.headerBoxContainer}>
            {/* headerBox */}
            <View style={styles.headerBox}>
              <Text style={styles.headerBoxTopText}>{data.length}/24</Text>
              <Text style={styles.headerBoxBottomText}>
                Today's {'\n'}Appointment
              </Text>
            </View>
            {/* headerBox */}
            <View style={styles.headerBox}>
              <Text style={styles.headerBoxTopText}>12</Text>
              <Text style={styles.headerBoxBottomText}>
                Missed {'\n'}Appointment
              </Text>
            </View>
          </View>
          {/* headerBoxContainer */}
          <View style={{marginHorizontal: responsiveWidth(4)}}>
            <View style={styles.upcomingContainer}>
              <Text style={styles.upcomingText}>Upcoming Appointments</Text>
              <TouchableOpacity>
                <Text style={styles.upcomingViewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={showUpcomingCard}
              />
            </View>
          </View>
          {/* ================================================ */}
          <View
            style={{
              marginHorizontal: responsiveWidth(4),
            }}>
            <View style={styles.upcomingContainer}>
              <Text style={styles.upcomingText}>Missed Appointments</Text>
              <TouchableOpacity>
                <Text style={styles.upcomingViewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View>
              {/* <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={showMissedCard}
              /> */}
              {data.map((ele, ind) => {
                return (
                  // <showMissedCardWithMap />
                  <View style={styles.missedCardContainer} key={ind}>
                    <View style={styles.missedCardAvatar} />
                    <View>
                      <Text style={styles.missedCardName}>{ele.name}</Text>
                      <Text style={styles.missedCardAge}>{ele.years} yrs</Text>
                      <Text style={styles.missedCardTime}>{ele.time}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                        marginLeft: responsiveWidth(3),
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          console.log('Reschedule ===>', ele.id, ele.name)
                        }
                        style={{
                          backgroundColor: '#FFE5B2',
                          borderRadius: 100,
                          height: 50,
                          width: 50,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Icon
                          name="ri-refresh-line"
                          size="32"
                          color="#FFC148"
                          style={{marginHorizontal: 16}}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          console.log('Cancel ===>', ele.id, ele.name)
                        }
                        style={{
                          backgroundColor: '#FCD3D1',
                          borderRadius: 100,
                          height: 50,
                          width: 50,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Icon
                          name="ri-close-circle-line"
                          size="32"
                          color="#FF615A"
                          style={{marginHorizontal: 16}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          {/* ============================================================= */}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerBoxContainer: {
    marginHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  headerBox: {
    backgroundColor: '#557DE5',
    width: responsiveWidth(44),
    height: responsiveHeight(20),
    borderRadius: responsiveWidth(2),
  },
  headerBoxTopText: {
    fontSize: responsiveFontSize(4),
    marginHorizontal: responsiveWidth(4),
    marginVertical: responsiveHeight(2),
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  headerBoxBottomText: {
    fontSize: responsiveFontSize(2.5),
    marginHorizontal: responsiveWidth(4),
    marginVertical: responsiveHeight(1),
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },
  upcomingContainer: {
    marginTop: responsiveHeight(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'orange',
  },
  upcomingText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: responsiveFontSize(2),
  },
  upcomingViewAllText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: responsiveFontSize(2),
    color: '#557DE5',
  },
  upcomingCardContainer: {
    marginTop: responsiveHeight(2),
    backgroundColor: '#E7F0FF',
    height: 180,
    width: 150,
    borderRadius: responsiveWidth(2),
    marginRight: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(3),
  },
  upcomingCardAvatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'pink',
  },
  upcomingCardName: {
    marginTop: responsiveHeight(2),
    fontFamily: 'Montserrat-Bold',
  },
  upcomingCardAge: {
    marginTop: 4,
    fontFamily: 'Montserrat-Regular',
  },
  upcomingCardTime: {
    marginTop: 16,
    fontFamily: 'Montserrat-Medium',
  },

  missedCardContainer: {
    marginTop: responsiveHeight(2),
    // marginBottom: responsiveHeight(2),
    backgroundColor: '#557DE5',
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  missedCardAvatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: 'pink',
    // marginRight: 8,
    marginRight: responsiveWidth(3),
  },
  missedCardName: {
    // marginTop: responsiveHeight(2),
    fontFamily: 'Montserrat-Bold',
  },
  missedCardAge: {
    marginTop: 4,
    fontFamily: 'Montserrat-Regular',
  },
  missedCardTime: {
    marginTop: 16,
    fontFamily: 'Montserrat-Medium',
  },
});
