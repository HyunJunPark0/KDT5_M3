// 투두 생성
export async function createTodo(newTodo) {
  await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
    {
      headers: {
        'content-type': 'application/json',
        apikey: 'KDT5_nREmPe9B', // KDT 5기 APIKEY 입니다!
        username: 'KDT5_JunSeunWon',
      },
      method: 'POST',
      body: JSON.stringify({ title: newTodo }),
    }
  );
}

// 투두 가져오기
export async function getTodos() {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
    {
      headers: {
        'content-type': 'application/json',
        apikey: 'KDT5_nREmPe9B', // KDT 5기 APIKEY 입니다!
        username: 'KDT5_JunSeunWon',
      },
      method: 'GET',
    }
  );
  const json = await res.json();

  return json;
}

// 투두 삭제
export async function deleteTodos(id) {
  await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
    {
      headers: {
        'content-type': 'application/json',
        apikey: 'KDT5_nREmPe9B', // KDT 5기 APIKEY 입니다!
        username: 'KDT5_JunSeunWon',
      },
      method: 'DELETE',
    }
  );
}

// 투두 수정
export async function updateDone(id, title, checked) {
  await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
    {
      headers: {
        'content-type': 'application/json',
        apikey: 'KDT5_nREmPe9B', // KDT 5기 APIKEY 입니다!
        username: 'KDT5_JunSeunWon',
      },
      method: 'PUT',
      body: JSON.stringify({ title, done: checked }),
    }
  );
}