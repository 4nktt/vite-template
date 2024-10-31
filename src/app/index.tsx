import { RouterProvider } from "react-router-dom";

import Provider from "./provider";
import router from "./router";

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
