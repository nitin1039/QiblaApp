import { View, Text, VStack, Box, Center, Heading } from 'native-base'
import { SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import NoSearchFound from '../../components/svg/noSearchFound'
import SearchMasjid from '../../components/svg/searchMasjid'
import SearchBar from './components/searchBar'
import ShowSearchCard from './components/showSearchCard'
import axios from 'axios'
import { BASE_URL, DETAILS, SEARCH_URL } from '../../constants'
import SearchPlaceholder from './components/searchPlaceholder'
import {getData} from '../../utils/store'

const SearchScreen = ({navigation}) => {
  const [masjidFoundOrNot,setMasjidFoundOrNot] = useState(false)
  const [typeOrNot,setTypeOrNot] = useState(false)
  const [results,setResults] = useState([])
  const [search,setSearch] = useState('')
  const [deleteOrNot,setDeleteOrNot] = useState(false)
  const [masjidinLocalDB,setMasjidinLocalDB] = useState(0)
  console.log("🚀 ~ file: SearchScreen.jsx:20 ~ SearchScreen ~ deleteOrNot:", masjidinLocalDB)
  

  const getMasjid =  async (searchText) =>{
    
    if(searchText.length !==0) {
      setTypeOrNot(true)
      // console.log(searchText)
      const response = await  axios.post(BASE_URL+SEARCH_URL, {
        "latitude": 28.7041,
        "longitude":77.1025,
        "keyword": searchText,
        "device_token":Math.random()+"test"+Math.random()
    })

  
      if(response.data.count===0) setMasjidFoundOrNot(true)
      else {
        setMasjidFoundOrNot(true)   
        // console.log(response.data.results[0])
          setResults(response.data.results.map(result => 'name' in result || 'masjid_name' in result ? result : null ))
     
      }
  
    }else{
      setTypeOrNot(false)
      setResults([])
      setMasjidFoundOrNot(false)
    }
  }
  async function fetchDataFromLocalDB(){
    const res =     await getData()   
    setMasjidinLocalDB(res.length)
    const getMasjidDetails = async (id) =>{

      try {
        const response = await axios.get(BASE_URL+DETAILS+id)
        return response            
      } catch (error) {
          console.log("ERROR",error)
      } 
  }
  console.log("RESPONSE",(res?.length!==0))

const recentSearchResult = []
if(res!==null && res?.length!==0){
  for await (const result of res){


    if(result!==null){
      recentSearchResult.push(await getMasjidDetails(result))
    }

    console.log("TRY!!!")
  }
  const result = recentSearchResult.map(t => (t.data))

  setResults(result)
}else{
  console.log("TRY")
}

}

  useEffect(()=>{
    try {
      getMasjid(search)     
    } catch (error) {
      console.log("searchScreen",error)
    }
 
  },[search])

    useEffect(()=>{
    try {
      fetchDataFromLocalDB()  
    } catch (error) {
        console.log("errorofRecent SEarch",error)
    }

    },[deleteOrNot])


  return (
        <View style={styles.container}>
      
       
            <SearchBar setSearch={setSearch} setTypeOrNot={setTypeOrNot} />
        <ScrollView maxH={Dimensions.get('screen').height/10} >
           {!typeOrNot ? <Text mx={4} my={2} style={styles.heading}>{masjidinLocalDB!==0 ? 'Recent searches' : null}</Text> :null} 
           {masjidFoundOrNot ? results.map((result,idx) =><ShowSearchCard navigation={navigation} data={result} key={idx} recent={false} setDeleteOrNot={setDeleteOrNot}/>) : results.map((result,idx) => <ShowSearchCard navigation={navigation} data={result} key={idx} recent={true} setDeleteOrNot={setDeleteOrNot}/>)} 
            </ScrollView>

            <View justifyContent={'center'} alignItems={'center'} mb={20}>
              <SearchPlaceholder searchResult={results} masjidFoundOrNot={masjidFoundOrNot} typeOrNot={typeOrNot}/>    
              </View> 
  
        </View>

        

 




  )
}

export default SearchScreen


const styles = StyleSheet.create({
  container:{
    backgroundColor:"#FFFFFF",
    flex:1
  },
  heading:{
    fontStyle:'normal',
    fontWeight:'500',
  
    
  }
})
