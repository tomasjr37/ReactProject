import React,{useEffect,useState} from "react";

const Apidata = () => {






    const [data, setData] = useState([]);
    const authToken = '8ccf87472bb7162b1a94abd593426d89a902bd6bd2d55a7a8449e1be5d4922f7bbb8cbf1313a51087356829aa593b4d7bf35611b1a117d1fec2d8b411494e8ea6bb87b69184e0fa695e4d0ee94764d934271b6481c1c69660c7f20c6f208e727de22a07fa715d054ddf107829b8c98c90898f1c2dd53facc9d5d384f71ef67e5'; // Replace with your actual token
    const apiUrl = 'http://localhost:1337/api/tenderpages'; // Replace with your API endpoint
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
          }
  
          const responseData = await response.json();
          console.log(responseData.data[0].attributes.title);
          console.log(responseData.data[0].attributes.description);
         setData(responseData.data[0].attributes);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);









  return (
    <div>
    <h1>Test </h1>
     


    
    
   
            <h2>the data is  {data.title}</h2>
            <p>{data.description}</p>
         
   



    </div>
  )
}

export default Apidata
