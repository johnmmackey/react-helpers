import { create } from 'zustand';

const nullUser = {
    username: null,
    firstName: "",
    commonName: "",
    lastName: "",
    groups: [],
    attributes: {}
}

const pick = (object, template) => {
    if(typeof object !== 'object')
        return {};

    return Object.keys(template).reduce((obj, key) => {
        if (object && object.hasOwnProperty(key)) {
            obj[key] = object[key];
        }
        return obj;
    }, {});
}

const useUserStore = create(set => ({
    isValid: false,
    ...nullUser,
    setUser: (user) => {
         set(pick(user, nullUser));
         set({isValid: true});
    },
    clearUser: () => set({...nullUser, isValid: true})
}))

export { useUserStore }