import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe(false)
    })
    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic'/>);
        const root = component.root;
        expect(() => {let input = root.findByType('input')} ).toThrow()
    })
    test('after creation input should not be displayed with correct status', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic'/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    // test('after creation span should be displayed with correct status', () => {
    //     const component = create(<ProfileStatus status='Subscribe To Basic'/>);
    //     const root = component.root;
    //     let span = root.findByType('span')
    //     expect(span.innerText).toBe('Subscribe To Basic')
    // })
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='Subscribe To Basic'/>);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input).not.toBeNull()
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='Subscribe To Basic' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})