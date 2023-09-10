import { Text,Heading,View } from 'native-base'
import React from 'react'
import NoSearchFound from '../../../components/svg/noSearchFound'
import SearchMasjid from '../../../components/svg/searchMasjid'

const SearchPlaceholder = ({searchResult,masjidFoundOrNot,typeOrNot}) => {

  return (
    <>
    {searchResult.length===0 ? <>
        {!typeOrNot ? <>
            <SearchMasjid/>
            {/* this is the background of serach page  */}
    <Text color={'#AEAEAE'} fontSize={16} mx={12} mt={10} mb={250} textAlign="center" fontWeight={500} >
    Follow your nearest masjid to get live adhan and updates.
    </Text>
        </>:null}
       
  
        
    {masjidFoundOrNot  ? <>
        <NoSearchFound/>
    <Heading color={'#AEAEAE'}>
            No Result Found
    </Heading>
    <Text color={'#AEAEAE'} fontSize={18}textAlign="center" fontWeight={500} mx={12} mt={10} >
    we couldn't find any masjids with that name. Please check the spelling or try searching again with a different name
    </Text>
    </>:null }
    
    
    </> :null}
  
 
    </>
  )
}

export default SearchPlaceholder