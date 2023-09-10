import AsyncStorage from '@react-native-async-storage/async-storage' 


module.exports = {
    addData: async (value) =>{

        try {
            if(value.id===undefined || value.id === null){
                console.log("operation not perform")
            }
            let searches = new Set()
            if(await AsyncStorage.getItem('items') === null){
                searches.add(value.id)
            }else{
   
                let result = JSON.parse(await AsyncStorage.getItem('items'))
                searches = new Set()
                result.forEach(item => searches.add(item));
                    searches.add(value.id)
            }             
            await AsyncStorage.setItem('items', JSON.stringify([...searches]));                   
        } catch (error) {
            console.log("ADDERROR",error)
        }

    },
    getData:async () =>{

        const values = await AsyncStorage.getItem('items')
        

        return JSON.parse(values);
    },
    clearAll :async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
        }
      
        console.log('Done.')
      },
      removeItem: async (id) =>{
        try {
            let usersIds = await AsyncStorage.getItem('items')
            let usersArray = JSON.parse(usersIds)
            let alteredUser = usersArray.filter(userId => userId !==id)
            await AsyncStorage.setItem('items', JSON.stringify([...alteredUser])); 

        } catch (error) {
            
        }
      }
}