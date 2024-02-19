import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ListOfPatients from '../components/therapist/listOfPatients';
import AddPatient from '../components/therapist/addPatient';
import TherapistService from '../services/backendServices/therapistService';

// const TherapistScreen = () => {
//     const [patients, setPatients] = useState([]);
  
//     const handleGetPatients = async () => {
//       try {
//         const patientData = await TherapistService.getPatients();
//         console.log(patientData)
//         setPatients(patientData);
//       } catch (error) {
//         console.error('Error getting patients:', error.message);
//       }
//     };
  
//     return (
//       <View>
//         <Button title="Get Patients" onPress={handleGetPatients} />
//         <FlatList
//           data={patients}
//           keyExtractor={(item) => item._id.toString()}
//           renderItem={({ item }) => (
//             <View>
//               <Text>{item.name}</Text>
//             </View>
//           )}
//         />
//       </View>
//     );
//   };
  
//   export default TherapistScreen;
  
export default function TherapistScreen() {
    const [therapistDetails, setTherapistDetails] = useState(null);
    useEffect(() => {
        const getTherapistDetails = async () => {
            try {
                const data = await TherapistService.getTherapistDetails("shani@gmail.com");
                alert(listOfPatients)
                console.log(data)
                setTherapistDetails(data);
            } catch (error) {
                console.error('Error getting details:', error.message);
                // Log additional details if available
                if (error.response) {
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                }
            }
        };
    
        getTherapistDetails();
    }, []);
    
    // useEffect(() => {
    //     const getTherapistDetails = async () => {
    //         try {
    //             const data = await TherapistService.getTherapistDetails("shani@gmail.com");
    //             alert(listOfPatients)
    //             console.log(data)
    //             setTherapistDetails(data);
    //         } catch (error) {
    //             console.error('Error getting details:', error.message);
    //         }
    //     };

    //     getTherapistDetails(); // Invoke the function
    // }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <View>
            <ListOfPatients listOfPatients={therapistDetails?.listOfPatients} />
            <AddPatient/>
        </View>
    );

}
