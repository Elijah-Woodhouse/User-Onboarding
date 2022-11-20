import * as yup from "yup";


const formSchema = yup.object().shape({
    firstName: yup
    .string()
    .trim()
    .required("First name is required!")
    .min(3, "i don't believe you."),
    lastName: yup
    .string()
    .trim()
    .required("Last name is required!")
    .min(3, "what kind of last name is that?"),
    password: yup
    .string()
    .trim()
    .required("Password is required!")
    .min(3, "Password must be worth as much as a new born child"),
    email: yup
    .string()
    .email("Your email sucks bruh. Be Beter.")
    .required("@mail.com"),
    role: yup
    .string()
    .oneOf(["Bears", "Beats", "BattleStar Galactica", "Apples", "Bananas"], "Pick one, homeboy"),
    happy: yup.boolean(),
    educated: yup.boolean(),
    mentallystable: yup.boolean()
})

export default formSchema;