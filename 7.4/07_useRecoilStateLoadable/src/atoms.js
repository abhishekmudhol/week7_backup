import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      console.log('a'); 
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});

// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: (id) => {
//     return TODOS.find(x => x.id === id)
//   }
// });