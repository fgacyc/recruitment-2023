export const validateName = (name, setField) => {
    if (name.trim() === "") {
        setField("Name is required");
        return false;
    }
    setField("");
    return true;
};

export const validatePhone = (phone, setField) => {
    const phoneRegex = /^\d{6,12}$/;

    if (phone.trim() === "") {
        setField("Phone number is required");
        return false;
    }

    if (!phone.match(phoneRegex)) {
        setField("Phone must not contain special characters");
        return false;
    }

    setField("");
    return true;
};

export const validateEmail = (email, setField) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        setField("Email is required");
        return false;
    }

    if (!email.match(emailRegex)) {
        setField("Email must be a valid email address");
        return false;
    }

    setField("");
    return true;
};

export const validateID = (id, setField) => {
    const mykadRegex = /^[0-9]{6}[0-9]{2}[0-9]{4}$/;
    const passportRegex = /^(?!^0+$)[a-zA-Z0-9]{3,20}$/;

    if (id.trim() === "") {
        setField("ID number is required");
        return false;
    }

    if (!mykadRegex.test(id) && !passportRegex.test(id)) {
        setField("Invalid ID number. (try without '-' or space)");
        return false;
    }

    setField("");
    return true;
};