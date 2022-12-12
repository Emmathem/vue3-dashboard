import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Login from '../components/Login.vue'

describe('Login Page', () => {
    it ('should return objeect', async () => {
        const wrapper = mount(<Login />);

        await wrapper.get("button").trigger("submit");
        expect(wrapper.vm.email).toEqual("");
    })
})