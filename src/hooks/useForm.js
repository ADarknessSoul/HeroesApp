import { useState } from "react"; // Import the useState hook from the React library

export const useForm = (initialForm = {}) => { // Define a custom hook named "useForm" that takes an initial form object, with a default value of an empty object
    const [formState, setformState] = useState(initialForm); // Use the useState hook to set the initial form state and provide a function to update the form state
    
    const onInputChange = ({target}) => { // Define a method named "onInputChange" to handle input changes in the form
    
        const {name, value} = target; // Destructure the name and value properties from the input's target object
        setformState({
    
          ...formState, // Keep the existing form state
          [ name ]  : value // Use computed property name syntax to update the value of the input with the provided name
    
        });
    
      }

      const onResetForm = () => { // Define a method named "onResetForm" to handle form reset

        setformState(initialForm); // Use the setformState function to set the form state back to its initial state

      }

    return {

        ...formState, // Return the form state
        formState,
        onInputChange, // Return the onInputChange method
        onResetForm // Return the onResetForm method

    }

}