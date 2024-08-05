import { useState } from "react";

//Calls endpoint register and login api
const useSubmitForm = (url) => {
    const [error, setError] = useState(null);

    const submitForm = async (formData) => {
        setError(null);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if(!response.ok) {
                return alert(result.message);
            }
            return result;
        } catch (err) {
            setError(err.message);
            console.error("Error submitting form: ", err.message);
        }
    };

    return { error, submitForm };
};

export default useSubmitForm;
