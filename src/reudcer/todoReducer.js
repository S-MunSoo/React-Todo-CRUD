// 추가, 제거, 수정

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "REMOVE":
      return state.filter((item) => item.id !== action.data.id);
    case "CHECK":
      return state.map((item) =>
        item.id === action.data.id ? { ...item, cheked: !item.cheked } : item
      );
    default:
      return;
  }
}
