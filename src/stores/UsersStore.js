import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useUsersStore = defineStore('UsersStore', {
    state: () => {
        return {
            users: sourceData.users,
            authId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
        }
    },
    getters: {
        authUser: state => {
            const user = state.users.find(user => user.id === state.authId)
            return {
                ...user,
                get posts() {
                    return sourceData.posts.filter((post) => post.userId === state.authId)
                },
                // authUser.postsCount
                get postsCount() {
                    return this.posts.length
                },
                get threads() {
                    return sourceData.threads.filter((post) => post.userId === state.authId)
                },
                get threadsCount() {
                    return this.threads.length
                }
            }
        }
    },
    actions: {
        
    }
})