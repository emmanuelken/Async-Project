//Iterating with Async/await

async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  // Check
  const values = ['A', 'B', 'C', 'D', 'E'];
  
  iterateWithAsyncAwait(values);




  // Awaiting a call
async function awaitCall() {
    const fetchData = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ data: 'This is the fetched data from the API' });
        }, 2000); 
      });
    };
  // Wait for the API response
    const response = await fetchData();

    console.log(response.data);
  }


  

  //Handling the errrors
  async function awaitCall() {
    const fetchData = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ data: 'This is the fetched data from the API' });
        }, 2000); 
      });
    };
  
    try {
      // Wait for the API response
      const response = await fetchData();
      
      console.log(response.data);
    } catch (error) {
      // Handle errors if any
      console.error('Error fetching data:', error);
    }
  }
  
  
  
  
