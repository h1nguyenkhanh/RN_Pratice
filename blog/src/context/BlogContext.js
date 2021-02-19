import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost':
            return [...state, { title: `Blog number #${state.length + 1}` }]
        case 'deleteBlogPost':
            return [...state.filter((item, index)=>index!==action.index)]
    }
}

const addBlogPost = (dispatch) => {
    return ()=>dispatch({type: 'addBlogPost'})
}

const deleteBlogPost = (dispatch) => {
    return (index)=>dispatch({type: 'deleteBlogPost', index})
}

export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, []);