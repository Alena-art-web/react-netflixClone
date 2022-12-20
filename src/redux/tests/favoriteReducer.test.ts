import favoritesReducer, { setItems, removeItem, clearItems} from "../slices/favoritesReducer"


const state = { items: {} }
const favorites = {
    items: [
        {
            adult: false,
            backdrop_path: '/jhdhf',
            genre_ids: [1, 2, 3],
            id: 12369,
            original_language: 'en',
            original_title: 'Movie',
            overview: 'jdhfj',
            popularity: 3,
            poster_path: 'kjkjsfdkj',
            release_date: '1236577',
            title: 'kjkdsj',
            video: false,
            vote_average: 4558,
            vote_count: 8
        }
    ]
}

describe('favoritesSlice', () => {
    it('should return default state when passed an empty action', () => {
        const result = favoritesReducer(undefined, { type: '' })

        expect(result).toEqual(state)
    })
    it('should add new item with "setItems" action', () => {
        const action = { type: setItems.type, payload: favorites }

        const result = favoritesReducer(favorites, action)
        expect(result.items[0].adult).toBe(false)
        expect(result.items[0].popularity).toBe(3)
    })
    it('should remove new item with "removeItems" action', () => {
        const item = {
            adult: false,
            backdrop_path: '/jhdhf',
            genre_ids: [1, 2, 3],
            id: 12369,
            original_language: 'en',
            original_title: 'Movie',
            overview: 'jdhfj',
            popularity: 3,
            poster_path: 'kjkjsfdkj',
            release_date: '1236577',
            title: 'kjkdsj',
            video: false,
            vote_average: 4558,
            vote_count: 8
        }

        const action = { type: removeItem.type, payload: item }

        const result = favoritesReducer(favorites, action)

        expect(result.items.length).toBe(0)
    })
    it('should clear all items with "clearItems" action', () => {
        const action = { type: clearItems.type, payload: favorites }

        const result = favoritesReducer(favorites, action)
        expect(result.items).toEqual([])
    })
})