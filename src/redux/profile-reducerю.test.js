import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
import React from "react";
import state from "./state";
let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Hi, how are you?',
            img: 'https://img.freepik.com/premium-vector/avatar-of-a-woman-with-blond-hair-blue-eyes-and-bob-haircut_427567-4265.jpg'
        },
        {
            id: 2,
            message: 'Hey! My name is Andy',
            img: 'https://img.freepik.com/premium-vector/avatar-of-a-woman-with-black-hair-short-hair-face_427567-610.jpg?w=2000'
        },
    ]
}
test('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')
    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation

    expect(newState.postsData.length).toBe(3)
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra')
    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation

    expect(newState.postsData[2].message).toBe('it-kamasutra')
});

test('length after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation

    expect(newState.postsData.length).toBe(1)
});


test('length after deleting should be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(10000)
    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation

    expect(newState.postsData.length).toBe(2)
});