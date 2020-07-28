const initState = {
  posts: [
    { id: 1, title: "Squirtle laid an Egg", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo animi ut consequuntur, excepturi quidem culpa repudiandae distinctio. Itaque omnis iusto recusandae asperiores. Aut quibusdam quas, saepe adipisci officiis quia hic." },
    { id: 2, title: "Charmander laid an Egg", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo animi ut consequuntur, excepturi quidem culpa repudiandae distinctio. Itaque omnis iusto recusandae asperiores. Aut quibusdam quas, saepe adipisci officiis quia hic." },
    { id: 3, title: "a Helix Fossil was Found", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo animi ut consequuntur, excepturi quidem culpa repudiandae distinctio. Itaque omnis iusto recusandae asperiores. Aut quibusdam quas, saepe adipisci officiis quia hic." }
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id !== action.id)
    return { ...state, posts: newPosts }
  }
  return state;
}

export default rootReducer;