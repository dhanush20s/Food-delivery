import { fetchUser } from "../utils/fetchLogalStorageData"

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
    foodItems:null,
}