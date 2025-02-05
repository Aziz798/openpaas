import {
  createResource,
  createSignal,
  Match,
  Suspense,
  Switch,
} from "solid-js";
import { ModeToggle } from "./components/theme/mode-toggle";

const fetchUser = async (id: number) => {
  return (await fetch(`https://swapi.dev/api/people/${id}/`)).json();
};

export default function App() {
  const [userId, setUserId] = createSignal<number>();
  const [user] = createResource(userId, fetchUser);

  return (
    <div>
      <ModeToggle/>gzfzef
      
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(Number(e.currentTarget.value))}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Match when={user.error}>
            <span>Error: {user.error.message}</span>
          </Match>
          <Match when={user()}>
            <div>{JSON.stringify(user())}</div>
          </Match>
        </Switch>
      </Suspense>
    </div>
  );
}
