import { atom } from "recoil";

export const userNameAtom = atom({
    key: 'userName',
    default: '김태진',
});

export const emailAtom = atom({
    key: 'email',
    default: 'ktj503@naver.com',
});

export const isSubmitedAtom = atom({
    key: 'isSubmited',
    default: false,
});

export const genderAtom = atom({
    key: 'gender',
    default: '선택하지 않음',
})

export const modalAtom = atom({
    key: 'modal',
    default: false,
})